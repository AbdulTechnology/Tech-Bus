const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bus_db', 'bus_user', 'CMBkalam@123', {
  host: 'localhost',
  dialect: 'mysql',
  
});

module.exports = sequelize;
