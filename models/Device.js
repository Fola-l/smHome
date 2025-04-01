const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Device = sequelize.define('Device', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.ENUM('light', 'plug', 'thermostat', 'lock'), allowNull: false },
    status: { type: DataTypes.ENUM('on', 'off'), defaultValue: 'off' },
    settings: { type: DataTypes.JSON, allowNull: true }
}, { timestamps: true });

module.exports = Device;
