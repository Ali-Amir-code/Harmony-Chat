import express from 'express';
import {
  sendMessage,
  getMessages,
  updateMessageStatus,
  deleteMessage,
} from '../controllers/messageController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

/**
 * @route   POST /api/messages
 * @desc    Send a new message
 * @access  Private
 */
router.post('/', sendMessage);

/**
 * @route   GET /api/messages/:conversationId
 * @desc    Get messages for a conversation
 * @access  Private
 */
router.get('/:conversationId', getMessages);

/**
 * @route   PUT /api/messages/:id/status
 * @desc    Update message status
 * @access  Private
 */
router.put('/:id/status', updateMessageStatus);

/**
 * @route   DELETE /api/messages/:id
 * @desc    Delete a message
 * @access  Private (Message owner)
 */
router.delete('/:id', deleteMessage);

export default router;