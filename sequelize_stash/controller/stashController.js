const stashService = require('../service/stashService');
const itemService = require('../service/itemService');

const createItem = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    const { name, quantityAmount, quantityType, estimatedDurability, purchaseDate, stashId } = req.body
    if (!name || !quantityAmount || !quantityType || !estimatedDurability || !purchaseDate || !stashId) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    const newItemCreated = await itemService.createItem(req.body);
    return res.status(200).json(newItemCreated);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const getStashData = async (req, res) => {
  try {
    const { stashId } = req.params;
    if (!stashId) {
      return res.status(400).json({ message: 'Invalid request' });
    }
    const stashData = await stashService.getStashData(stashId);
    if (!stashData) {
      return res.status(404).json({ message: 'No results found' })
    }
    return res.status(200).json({ stashData });
  } catch ({ status, message }) {
    return res.status(status).json({ message });
  }
}

const getItemsData = async (req, res) => {
  try {
    if (!req.params.stashId) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    const itemsData = await itemService.getItemsData(req.params.stashId);
    return res.status(200).json(itemsData);
  } catch (error) {
    return res.status(status).json({ message });
  }
}

const getOneItem = async (req, res) => {
  try {
    if(!req.params.id){
      return res.status(400).json({ error: 'Bad request' });
    }
    const itemData = await itemService.getOneItem(req.params.id);
    return res.status(200).json(itemData);
  } catch(error) {
    return res.status(400).json({ message: 'Bad Request' });
  }
}

const updateItem = async (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(404).json({ message: 'Item not found!' })
    }
    const updateData = await itemService.updateItem(req.body);
    return res.status(200).json(updateData);
  } catch (error) {
    return res.status(400).json({ message: 'Bad Request' });
  }
}

module.exports = {
  createItem,
  getStashData,
  getItemsData,
  getOneItem,
  updateItem
}