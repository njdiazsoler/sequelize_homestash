const Item = require('../models/Item');

const createItem = async item => {
  try {
    let newItem = await Item.create(item);
    newItem = newItem.dataValues;
    return newItem;
  } catch (error) {
    console.log(error);
    throw { status: 500, message: 'Internal Server Error' };
  }
}

const findAllItems = async stashId => {
  try {
    const itemsData = await Item.findAll({ where: { stashId: stashId } })
    return itemsData
  } catch (error) {
    console.log('this is a repo error', error);
    throw { status: 500, message: 'Internal Server Error' };
  }
}

const updateItem = async item => {
  try {
    console.log('repository');
    // const currentItem = await Item.findByPk(item.id);
    console.log(item);
    const updatedItem = await Item.update({ values: item }, {where: {id: item.id}})
    console.log('updatedItem');
    return updatedItem;
  } catch(error) {
    throw { status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  createItem,
  findAllItems,
  updateItem
}