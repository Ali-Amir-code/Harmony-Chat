import asyncHandler from '../utils/asyncHandler.js';
import User from '../models/User.js';

/**
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
});

/**
 * @desc    Update user profile
 * @route   PUT /api/users/profile
 * @access  Private
 */
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.avatar = req.body.avatar || user.avatar;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      avatar: updatedUser.avatar,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

/**
 * @desc    Search users
 * @route   GET /api/users/search
 * @access  Private
 */
export const searchUsers = asyncHandler(async (req, res) => {
  const { query } = req.query;

  if (!query || query.length < 3) {
    res.status(400);
    throw new Error('Search query must be at least 3 characters');
  }

  const users = await User.find({
    $or: [
      { username: { $regex: query, $options: 'i' } },
      { email: { $regex: query, $options: 'i' } },
    ],
    _id: { $ne: req.user._id }, // Exclude current user
  }).select('username email avatar');

  res.json(users);
});

/**
 * @desc    Update user online status
 * @route   PUT /api/users/status
 * @access  Private
 */
export const updateUserStatus = asyncHandler(async (req, res) => {
  const { online } = req.body;
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  user.status.online = online;
  user.status.lastActive = new Date();
  await user.save();

  res.json({ message: 'Status updated' });
});