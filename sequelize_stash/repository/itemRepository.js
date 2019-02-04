const Item = require('../models/Item');

const createItem = async item => {
  try {
    let newItem = await Item.create(item);
    newItem = newItem.dataValues;
    return newItem;
  } catch (error) {
    console.log('this is a repo error', error);
    throw { status: 500, message: 'Internal Server Error' };
  }
}

const deleteItem = async id => {
  try {
    let deletedItem = await Item.destroy({ where: { id: id } });
    return deletedItem;
  } catch (error) {
    console.log('this is a repo error', error);
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

const findItem = async id => {
  try {
    console.log('fetching item...');
    const currentItem = await Item.findByPk(id);
    return currentItem.dataValues;
  } catch (error) {
    console.log('this is a repo error', error);
    throw { status: 500, message: 'Internal Server Error' };
  }
}

const updateItem = async item => {
  try {
    console.log('repository', item);
    const updatedItem = await Item.update(item, { where: { id: item.id } })
    console.log('updatedItem');
    return updatedItem;
  } catch (error) {
    throw { status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  createItem,
  deleteItem,
  findAllItems,
  findItem,
  updateItem,
}