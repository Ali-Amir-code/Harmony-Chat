import asyncHandler from '../utils/asyncHandler.js';
import Conversation from '../models/Conversation.js';
import User from '../models/User.js';
import Message from '../models/Message.js';

/**
 * @desc    Create new conversation (DM or group)
 * @route   POST /api/conversations
 * @access  Private
 */
export const createConversation = asyncHandler(async (req, res) => {
  const { participants, type, groupName, admin } = req.body;
  const userId = req.user._id;

  // Validate participants
  if (!participants || participants.length === 0) {
    res.status(400);
    throw new Error('Participants are required');
  }

  // Add current user to participants if not included
  if (!participants.includes(userId.toString())) {
    participants.push(userId);
  }

  // For DM, check if conversation already exists
  if (type === 'dm' && participants.length === 2) {
    const existingConversation = await Conversation.findOne({
      type: 'dm',
      participants: { $all: participants, $size: 2 },
    });

    if (existingConversation) {
      return res.status(200).json(existingConversation);
    }
  }

  const newConversation = new Conversation({
    type,
    participants,
    lastActivity: new Date(),
  });

  if (type === 'group') {
    if (!groupName) {
      res.status(400);
      throw new Error('Group name is required');
    }
    newConversation.groupInfo = {
      name: groupName,
      admin: admin || userId,
    };
  }

  const savedConversation = await newConversation.save();
  res.status(201).json(savedConversation);
});

/**
 * @desc    Get user conversations
 * @route   GET /api/conversations
 * @access  Private
 */
export const getUserConversations = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  
  const conversations = await Conversation.find({ participants: userId })
    .populate('participants', 'username avatar status')
    .populate({
      path: 'lastMessage',
      select: 'content sender createdAt',
      populate: {
        path: 'sender',
        select: 'username',
      },
    })
    .sort({ lastActivity: -1 });
  
  res.json(conversations);
});

/**
 * @desc    Get conversation by ID
 * @route   GET /api/conversations/:id
 * @access  Private
 */
export const getConversationById = asyncHandler(async (req, res) => {
  const conversation = await Conversation.findById(req.params.id)
    .populate('participants', 'username avatar status')
    .populate('groupInfo.admin', 'username');

  if (!conversation) {
    res.status(404);
    throw new Error('Conversation not found');
  }

  // Check if user is participant
  if (!conversation.participants.some(p => p._id.equals(req.user._id))) {
    res.status(403);
    throw new Error('Not authorized to access this conversation');
  }

  res.json(conversation);
});

/**
 * @desc    Update group information
 * @route   PUT /api/conversations/:id/group
 * @access  Private (Group Admin)
 */
export const updateGroupInfo = asyncHandler(async (req, res) => {
  const { name, icon } = req.body;
  const conversation = await Conversation.findById(req.params.id);

  if (!conversation || conversation.type !== 'group') {
    res.status(404);
    throw new Error('Group conversation not found');
  }

  // Check if user is admin
  if (!conversation.groupInfo.admin.equals(req.user._id)) {
    res.status(403);
    throw new Error('Not authorized to update group info');
  }

  if (name) conversation.groupInfo.name = name;
  if (icon) conversation.groupInfo.icon = icon;

  const updatedConversation = await conversation.save();
  res.json(updatedConversation);
});

/**
 * @desc    Add participants to group
 * @route   POST /api/conversations/:id/participants
 * @access  Private (Group Admin)
 */
export const addParticipants = asyncHandler(async (req, res) => {
  const { userIds } = req.body;
  const conversation = await Conversation.findById(req.params.id);

  if (!conversation || conversation.type !== 'group') {
    res.status(404);
    throw new Error('Group conversation not found');
  }

  // Check if user is admin
  if (!conversation.groupInfo.admin.equals(req.user._id)) {
    res.status(403);
    throw new Error('Not authorized to add participants');
  }

  // Add new participants
  userIds.forEach(userId => {
    if (!conversation.participants.includes(userId)) {
      conversation.participants.push(userId);
    }
  });

  await conversation.save();
  res.json({ message: 'Participants added successfully' });
});

/**
 * @desc    Remove participant from group
 * @route   DELETE /api/conversations/:id/participants/:userId
 * @access  Private (Group Admin)
 */
export const removeParticipant = asyncHandler(async (req, res) => {
  const conversation = await Conversation.findById(req.params.id);

  if (!conversation || conversation.type !== 'group') {
    res.status(404);
    throw new Error('Group conversation not found');
  }

  // Check if user is admin
  if (!conversation.groupInfo.admin.equals(req.user._id)) {
    res.status(403);
    throw new Error('Not authorized to remove participants');
  }

  // Remove participant
  conversation.participants = conversation.participants.filter(
    p => !p.equals(req.params.userId)
  );

  await conversation.save();
  res.json({ message: 'Participant removed successfully' });
});