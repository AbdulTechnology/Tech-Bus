const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Route = require('./Route');

const Bus = sequelize.define('Bus', {
  name: DataTypes.STRING,
  routeId: DataTypes.INTEGER,
  departureTime: DataTypes.STRING,
});

// Define relation
Route.hasMany(Bus, { foreignKey: 'routeId' });
Bus.belongsTo(Route, { foreignKey: 'routeId' });

module.exports = Bus;
