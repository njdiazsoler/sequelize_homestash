const StashRepository = require('../repository/stashRepository');

const getStashData = async id => {
  try {
    const stash = await StashRepository.findStash(id);
    return stash;
  } catch (error) {
    throw { status: error.status, message: error.message || error };
  }
}

module.exports = {
  getStashData,
}