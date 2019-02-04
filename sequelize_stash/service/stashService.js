const StashRepository = require('../repository/stashRepository');

const getAllStashes = async () => {
  try {
    const stashData = await StashRepository.getAllStashes();
    return stashData;
  } catch(error) {
    throw { status: error.status, message: error.message || error };
  }
}

const getStashData = async id => {
  try {
    const stash = await StashRepository.findStash(id);
    return stash;
  } catch (error) {
    throw { status: error.status, message: error.message || error };
  }
}

module.exports = {
  getAllStashes,
  getStashData,
}