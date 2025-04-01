const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Device = require('./Device');

const UserDevice = sequelize.define('UserDevice', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { 
        type: DataTypes.INTEGER, 
        references: { model: User, key: 'id' }, 
        onDelete: 'CASCADE' 
    },
    deviceId: { 
        type: DataTypes.INTEGER, 
        references: { model: Device, key: 'id' }, 
        onDelete: 'CASCADE' 
    },
}, { timestamps: true });

module.exports = UserDevice;
