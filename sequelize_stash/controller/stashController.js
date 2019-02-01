const stashService = require('../service/stashService');
const itemService = require('../service/itemService');

const getStashData = async (req, res) => {
  try {
    const { stashId } = req.params;
    console.log('controller', req.params)
    if (!stashId) {
      return res.status(400).json({ message: 'Invalid request' });
    }
    const stashData = await stashService.getStashData(stashId);
    if(!stashData){
      return res.status(404).json({ message: 'No results found' })
    }
    return res.status(200).json({ stashData });
  } catch ({ status, message }) {
    return res.status(status).json({ message });
  }
}

const createItem = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    const { name, quantityAmount, quantityType, estimatedDurability, purchaseDate, stashId } = req.body
    if (!name || !quantityAmount || !quantityType || !estimatedDurability || !purchaseDate || !stashId) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    console.log('controller')
    const newItemCreated = await itemService.createItem(req.body);
    console.log(newItemCreated);
    return res.status(200).json(newItemCreated);
  } catch (error) {
    console.log('request error')
    return res.status(500).json({ message: error.message })
  }
}

const getItemsData = async (req, res) => {
  try {
    if (!req.params.stashId) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    console.log('stashId is: ', req.params.stashId)
    const itemsData = await itemService.getItemsData(req.params.stashId);
    return res.status(200).json(itemsData);
  } catch (error) {
    return res.status(status).json({ message });
  }
}

const updateItem = async (req, res) => {
  try {
    console.log('updating item...');
    const updateData = await itemService.updateItem(req.body);
    return res.status(200).json(updateData);
  } catch(error) {
    return res.status(400).json({ message: 'Bad Request' });
  }
}

module.exports = {
  createItem,
  getStashData,
  getItemsData,
  updateItem
}