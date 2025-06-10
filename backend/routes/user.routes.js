const express = require('express');
const { registerUser,loginUser } = require('../controllers/user.controller');
const authenticateToken = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/dashboard', authenticateToken, async (req, res) => {
  
  res.json({ message: `Welcome, user ID: ${req.user.id}` });
});

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
