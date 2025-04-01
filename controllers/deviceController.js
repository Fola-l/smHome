const Device = require('../models/Device');

const addDevice = async (req, res) => {
    const { name, type } = req.body;
    
    try {
        const validTypes = ['light', 'plug', 'thermostat', 'lock'];
        if (!validTypes.includes(type)) {
            return res.status(400).json({ message: "Invalid device type." });
        }

        const device = await Device.create({
            name,
            type,
            userId: req.user.id  
        });

        res.status(201).json(device);
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
};

const getDevices = async (req, res) => {
    try {
        const user = req.user; 
        
        if (user.role === 'parent') {
            const devices = await Device.findAll();
            return res.status(200).json(devices);
        }

        
        const devices = await Device.findAll({ where: { userId: user.id } });
        res.status(200).json(devices);
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
};

const controlDevice = async (req, res) => {
    const { id } = req.params;
    const { status, settings } = req.body;

    try {
        const device = await Device.findOne({ where: { id, userId: req.user.id } });
        if (!device) return res.status(404).json({ message: 'Device not found.' });

        if (status) device.status = status;
        if (settings) device.settings = settings;

        await device.save();
        res.status(200).json(device);
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
};

const deleteDevice = async (req, res) => {
    const { id } = req.params;

    try {
        const device = await Device.findOne({ where: { id, userId: req.user.id } });
        if (!device) return res.status(404).json({ message: 'Device not found.' });

        await device.destroy();
        res.status(200).json({ message: 'Device deleted.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error.', error: err.message });
    }
};

module.exports = { addDevice, getDevices, controlDevice, deleteDevice };
