const stashService = require('../service/stashService');
const itemService = require('../service/itemService');

const createStash = async (req, res) => {
  try {
    const { name, createdById } = req.body;
    if (!name || !createdById) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    const newStashCreated = await stashService.createStash(name, createdById);
    return res.status(200).json({ newStashData: newStashCreated})
  } catch (error) { }
    return res.status(500).json({ message: error.message })
}

const createItem = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: 'No body in request' });
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

const deleteItem = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: 'Invalid request' });
    }
    console.log(req.params)
    const deletedItem = await itemService.deleteItem(req.body);
    console.log('deleteItem returned ', deletedItem);
    return res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

const getAllStashes = async (req, res) => {
  try {
    const stashData = await stashService.getAllStashes();
    return res.status(200).json({ stashData })
  } catch (error) {
    return res.status(status).json({ message });
  }
}

const getStashData = async (req, res) => {
  try {
    const { stashId } = req.body;
    if (!stashId) {
      return res.status(400).json({ message: 'Invalid request' });
    }
    console.log(req.body)
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
    if (!req.params.name) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    const itemsData = await itemService.getItemsData(req.params.name);
    return res.status(200).json(itemsData);
  } catch (error) {
    return res.status(status).json({ message });
  }
}

const getOneItem = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: 'Bad request' });
    }
    const itemData = await itemService.getOneItem(req.params.id);
    return res.status(200).json(itemData);
  } catch (error) {
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
  createStash,
  deleteItem,
  getAllStashes,
  getStashData,
  getItemsData,
  getOneItem,
  updateItem
}