const Sequelize = require('sequelize')
const db = require('../config/db')
const uuid = require('uuid/v4')
// const Item = require('./Item')

const Stash = db.define('stash', {
  id: {
    allowNull: false,
    defaultValue: function () {
      let newDate = uuid(); return newDate
    },
    // autoIncrement: true,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  createdById: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    // defaultValue: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
    // defaultValue: Sequelize.DATE,
  },
})

Stash.sync();

module.exports = Stash;