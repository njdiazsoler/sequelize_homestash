const stashService = require('../service/stashService')

const getStashData = async (req, res) => {
  try {
    const id = req.params.stashId;
    if (!id) {
      return res.status(400).json({ message: 'Invalid request' });
    }
    const stashData = await stashService.getStashData(id);
    return res.status(200).json({ stashData });
  } catch ({ status, message }) {
    return res.status(status).json({ message });
  }
}

const getAllStashes = async (req, res) => {
  try {
    const stashData = await stashService.getAllStashes();
    return res.status(200).json({ stashData });
  } catch ({ status, message }) {
    return res.status(status).json({ message });
  }
}

module.exports = {
  getAllStashes,
  getStashData,
}