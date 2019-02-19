const Sequelize = require('sequelize');
const db = require('../config/db');
const uuid = require('uuid/v4');
const Stash = require('./Stash')


const Item = db.define('item', {
  id: {
    allowNull: false,
    defaultValue: function(){
      let newDate = uuid(); return newDate
    },
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
},{
  timestamps: true
})

// Item.associate = (models) => {
//   Item.belongsTo(models.Stash, { foreignKey: 'stashId', targetKey: 'id' });
// }

Item.belongsTo(Stash, { foreignKey: 'stashId', sourceKey: 'id' });
Stash.hasMany(Item);
// { as: 'stash', foreignKey: 'stashId' }

Item.sync();

module.exports = Item;