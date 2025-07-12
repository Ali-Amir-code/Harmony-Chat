import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  searchUsers,
  updateUserStatus,
} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

/**
 * @route   GET /api/users/profile
 * @desc    Get user profile
 * @access  Private
 */
router.get('/profile', getUserProfile);

/**
 * @route   PUT /api/users/profile
 * @desc    Update user profile
 * @access  Private
 */
router.put('/profile', updateUserProfile);

/**
 * @route   GET /api/users/search
 * @desc    Search users
 * @access  Private
 */
router.get('/search', searchUsers);

/**
 * @route   PUT /api/users/status
 * @desc    Update user online status
 * @access  Private
 */
router.put('/status', updateUserStatus);

export default router;