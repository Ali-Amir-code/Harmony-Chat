import express from 'express';
import {
  createConversation,
  getUserConversations,
  getConversationById,
  updateGroupInfo,
  addParticipants,
  removeParticipant,
} from '../controllers/conversationController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

/**
 * @route   POST /api/conversations
 * @desc    Create new conversation
 * @access  Private
 */
router.post('/', createConversation);

/**
 * @route   GET /api/conversations
 * @desc    Get user conversations
 * @access  Private
 */
router.get('/', getUserConversations);

/**
 * @route   GET /api/conversations/:id
 * @desc    Get conversation by ID
 * @access  Private
 */
router.get('/:id', getConversationById);

/**
 * @route   PUT /api/conversations/:id/group
 * @desc    Update group information
 * @access  Private (Group Admin)
 */
router.put('/:id/group', updateGroupInfo);

/**
 * @route   POST /api/conversations/:id/participants
 * @desc    Add participants to group
 * @access  Private (Group Admin)
 */
router.post('/:id/participants', addParticipants);

/**
 * @route   DELETE /api/conversations/:id/participants/:userId
 * @desc    Remove participant from group
 * @access  Private (Group Admin)
 */
router.delete('/:id/participants/:userId', removeParticipant);

export default router;