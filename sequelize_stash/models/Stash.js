const Sequelize = require('sequelize')
const db = require('../config/db')
const uuid = require('uuid/v4')
const Item = require('./Item')

const Stash = db.define('stash', {
  id: {
    allowNull: false,
    defaultValue: uuid(),
    type: Sequelize.UUID,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  createdById: {
    allowNull: false,
    type: Sequelize.STRING,
  },
})

Stash.sync();

module.exports = Stash;