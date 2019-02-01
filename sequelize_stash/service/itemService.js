const itemRepository = require('../repository/itemRepository');

const createItem = async item => {
  try {
    const newUser = await itemRepository.createItem(item);
    return newUser; 
  } catch(error) {
    throw { status: error.status, message: error.message || error }
  }
}

const getItemsData = async id => {
  try {
    const itemsData = await itemRepository.findAllItems(id);
    return itemsData;
  } catch(error) {
    throw { status: error.status, message: error.message || error }
  }
}

const updateItem = async item => {
  try {
    console.log('service')
    const updateData = await itemRepository.updateItem(item);
    return updateData;
  } catch(error) {
    throw { status: error.status, message: error.message || error }
  }
}

module.exports = {
  createItem,
  getItemsData,
  updateItem
};