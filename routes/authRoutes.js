const express = require('express');
const { register, login, getProfile } = require('../controllers/authController.js');
const authenticateToken = require('../middleware/authenticateToken.js');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticateToken, getProfile);

module.exports = router;
