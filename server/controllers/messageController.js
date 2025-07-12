import asyncHandler from '../utils/asyncHandler.js';
import Message from '../models/Message.js';
import Conversation from '../models/Conversation.js';
import MessageStatus from '../models/MessageStatus.js';

/**
 * @desc    Send a new message
 * @route   POST /api/messages
 * @access  Private
 */
export const sendMessage = asyncHandler(async (req, res) => {
  const { conversationId, content, type } = req.body;
  const senderId = req.user._id;

  // Validate conversation
  const conversation = await Conversation.findById(conversationId);
  if (!conversation) {
    res.status(404);
    throw new Error('Conversation not found');
  }

  // Check if user is participant
  if (!conversation.participants.some(p => p.equals(senderId))) {
    res.status(403);
    throw new Error('Not authorized to send message in this conversation');
  }

  // Create message
  const newMessage = new Message({
    conversation: conversationId,
    sender: senderId,
    content,
    type: type || { primary: 'text' },
  });

  const savedMessage = await newMessage.save();

  // Update conversation's last message and activity
  conversation.lastMessage = savedMessage._id;
  conversation.lastActivity = new Date();
  await conversation.save();

  // Create message status entries for all participants
  const statuses = conversation.participants.map(userId => ({
    message: savedMessage._id,
    user: userId,
    status: userId.equals(senderId) ? 'read' : 'sent',
  }));

  await MessageStatus.insertMany(statuses);

  // Populate sender info
  const populatedMessage = await Message.populate(savedMessage, {
    path: 'sender',
    select: 'username avatar',
  });

  res.status(201).json(populatedMessage);
});

/**
 * @desc    Get messages for a conversation
 * @route   GET /api/messages/:conversationId
 * @access  Private
 */
export const getMessages = asyncHandler(async (req, res) => {
  const { conversationId } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 50;
  const skip = (page - 1) * limit;

  // Validate conversation
  const conversation = await Conversation.findById(conversationId);
  if (!conversation) {
    res.status(404);
    throw new Error('Conversation not found');
  }

  // Check if user is participant
  if (!conversation.participants.some(p => p.equals(req.user._id))) {
    res.status(403);
    throw new Error('Not authorized to view messages in this conversation');
  }

  const messages = await Message.find({ conversation: conversationId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate('sender', 'username avatar')
    .lean();

  // Add message status
  const messageIds = messages.map(m => m._id);
  const statuses = await MessageStatus.find({
    message: { $in: messageIds },
    user: req.user._id,
  });

  const messagesWithStatus = messages.map(message => {
    const status = statuses.find(s => s.message.equals(message._id));
    return {
      ...message,
      status: status ? status.status : 'sent',
    };
  });

  res.json({
    messages: messagesWithStatus.reverse(), // Oldest first
    page,
    totalPages: Math.ceil(conversation.messageCount / limit),
  });
});

/**
 * @desc    Update message status
 * @route   PUT /api/messages/:id/status
 * @access  Private
 */
export const updateMessageStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const messageId = req.params.id;
  const userId = req.user._id;

  // Validate message
  const message = await Message.findById(messageId);
  if (!message) {
    res.status(404);
    throw new Error('Message not found');
  }

  // Update status
  const updatedStatus = await MessageStatus.findOneAndUpdate(
    { message: messageId, user: userId },
    { status },
    { new: true }
  );

  if (!updatedStatus) {
    res.status(404);
    throw new Error('Message status not found');
  }

  res.json(updatedStatus);
});

/**
 * @desc    Delete a message
 * @route   DELETE /api/messages/:id
 * @access  Private (Message owner)
 */
export const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(404);
    throw new Error('Message not found');
  }

  // Check if user is sender
  if (!message.sender.equals(req.user._id)) {
    res.status(403);
    throw new Error('Not authorized to delete this message');
  }

  await message.remove();
  res.json({ message: 'Message removed' });
});