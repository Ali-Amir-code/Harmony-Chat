import { Server } from 'socket.io';
import Conversation from '../models/Conversation.js';
import Message from '../models/Message.js';
import MessageStatus from '../models/MessageStatus.js';

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ['GET', 'POST'],
    },
  });

  // User socket mapping
  const userSockets = new Map();

  io.on('connection', (socket) => {
    console.log('New client connected');

    // User joins their own room
    const userId = socket.handshake.query.userId;
    if (userId) {
      socket.join(userId);
      userSockets.set(userId, socket.id);
    }

    // Join conversation room
    socket.on('join-conversation', (conversationId) => {
      socket.join(conversationId);
    });

    // Handle sending message
    socket.on('send-message', async (messageData) => {
      try {
        // Save to database
        const newMessage = new Message({
          conversation: messageData.conversationId,
          sender: messageData.senderId,
          content: messageData.content,
          type: messageData.type,
        });
        const savedMessage = await newMessage.save();

        // Update conversation last message
        await Conversation.findByIdAndUpdate(messageData.conversationId, {
          lastMessage: savedMessage._id,
          lastActivity: new Date(),
        });

        // Create message status entries
        const conversation = await Conversation.findById(messageData.conversationId);
        const statuses = conversation.participants.map(userId => ({
          message: savedMessage._id,
          user: userId,
          status: userId.toString() === messageData.senderId ? 'read' : 'sent',
        }));
        await MessageStatus.insertMany(statuses);

        // Populate sender info
        const populatedMessage = await Message.populate(savedMessage, {
          path: 'sender',
          select: 'username avatar',
        });

        // Broadcast to conversation room
        io.to(messageData.conversationId).emit('new-message', populatedMessage);

        // Notify participants (except sender) about new message
        conversation.participants.forEach(userId => {
          if (userId.toString() !== messageData.senderId) {
            io.to(userId.toString()).emit('new-message-notification', {
              conversationId: messageData.conversationId,
              senderId: messageData.senderId,
              messagePreview: messageData.content.text.substring(0, 30),
            });
          }
        });
      } catch (error) {
        console.error('Error sending message:', error);
      }
    });

    // Update message status
    socket.on('update-message-status', async ({ messageId, userId, status }) => {
      try {
        const updatedStatus = await MessageStatus.findOneAndUpdate(
          { message: messageId, user: userId },
          { status },
          { new: true }
        ).populate('message');
        
        if (updatedStatus) {
          // Broadcast to conversation
          io.to(updatedStatus.message.conversation.toString()).emit(
            'message-status-updated',
            {
              messageId,
              userId,
              status,
            }
          );
        }
      } catch (error) {
        console.error('Error updating message status:', error);
      }
    });

    // Typing indicator
    socket.on('typing', ({ conversationId, userId, isTyping }) => {
      socket.to(conversationId).emit('typing', { userId, isTyping });
    });

    // Disconnect
    socket.on('disconnect', () => {
      console.log('Client disconnected');
      if (userId) {
        userSockets.delete(userId);
      }
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
};