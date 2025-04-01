const User = require('./User');
const Device = require('./Device');
const UserDevice = require('./UserDevice');

// Many-to-Many: Users ↔ Devices
User.belongsToMany(Device, { through: UserDevice, foreignKey: 'userId' });
Device.belongsToMany(User, { through: UserDevice, foreignKey: 'deviceId' });

module.exports = { User, Device, UserDevice };
