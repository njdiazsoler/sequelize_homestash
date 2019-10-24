const Sequelize = require('sequelize');

const sequelize = new Sequelize('home_stash', 'home_stash', '0303456', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;