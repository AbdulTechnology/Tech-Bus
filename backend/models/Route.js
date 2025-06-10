const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Route = sequelize.define('Route', {
  from: DataTypes.STRING,
  to: DataTypes.STRING,
  type: DataTypes.STRING, // AC / Non-AC Sleeper
});

module.exports = Route;
