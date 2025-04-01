const express = require('express');
const { addDevice, getDevices, controlDevice, deleteDevice } = require('../controllers/deviceController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.post('/', authenticateToken, addDevice);
router.get('/', authenticateToken, getDevices);
router.put('/:id', authenticateToken, controlDevice);
router.delete('/:id', authenticateToken, deleteDevice);

module.exports = router;
