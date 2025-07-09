import express from 'express'
const router = express.Router();

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // 👇 Normally you'd check this from a database
  if (username === 'admin' && password === '1234') {
    return res.status(200).json({ token: 'fake-jwt-token', user: { username } });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

export default router;
