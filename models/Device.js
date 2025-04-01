const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');

const Device = sequelize.define('Device', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM('light', 'plug', 'thermostat', 'lock'), allowNull: false },
  status: { type: DataTypes.ENUM('on', 'off'), defaultValue: 'off' },
  settings: { type: DataTypes.JSON, allowNull: true }  
}, { timestamps: true });


Device.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Device, { foreignKey: 'userId' });

module.exports = Device;
