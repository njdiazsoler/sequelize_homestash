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
    console.log('request error')
    return res.status(500).json({ message: error.message })
  }
}

const getItemsData = async (req, res) => {
  try {
    if (!req.params.stashId) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    const itemsData = await itemService.getItemsData(req.params.stashId);
    return res.status(200).json({ itemsData });
  } catch (error) {
    return res.status(status).json({ message });
  }
}

module.exports = {
  createItem,
  getItemsData,
};