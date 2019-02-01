const Sequelize = require('sequelize');
const db = require('../config/db');
const uuid = require('uuid/v4');
const Stash = require('./Stash')

const Item = db.define('item', {
  id: {
    allowNull: false,
    defaultValue: uuid(),
    primaryKey: true,
    type: Sequelize.UUID,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  quantityAmount: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  quantityType: {
    allowNull: false,
    type: Sequelize.ENUM,
    values: ['units', 'kgs'],
  },
  estimatedDurability: {
    allowNull: true,
    type: Sequelize.DATEONLY,
  },
  purchaseDate: {
    allowNull: false,
    type: Sequelize.DATEONLY,
  },
  // stashId : {
  //   type: Sequelize.INTEGER,
  // },
})

// Item.belongsTo(Stash);

Item.sync();

module.exports = Item;