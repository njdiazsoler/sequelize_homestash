const Item = require('../models/Item');

const createItem = async item => {
  try {
    console.log('repository');
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
    throw { status: 500, message: 'Internal Server Error' }
  }
}

module.exports = {
  createItem,
  findAllItems,
}