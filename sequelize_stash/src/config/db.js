const Sequelize = require('sequelize');

const sequelize = new Sequelize('home_stash', 'homestash', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '-03:00'
});

module.exports = sequelize;