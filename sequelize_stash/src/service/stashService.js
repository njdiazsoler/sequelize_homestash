const moment = require('moment');
const StashRepository = require('../repository/stashRepository');

const createStash = async (name, id) => {
  try{
    const newStash = await StashRepository.createStash(name, id);
    return newStash;
  } catch(error){
    throw { status: error.status, message: error.message || error };
  }
}

const getAllStashes = async () => {
  try {
    const stashData = await StashRepository.getAllStashes();  
    let newStashData = JSON.parse(JSON.stringify(stashData));
    newStashData.forEach(data => {
      let rearrangedItems = data.items.slice()
      rearrangedItems.forEach(item => {
        let estimatedDate = moment(item.estimatedDurability).startOf('day');
        let curDate = moment().startOf('day');
        let durabilityInDays = moment(estimatedDate - curDate).format('D[ day(s)]');
        item.durability = durabilityInDays;
        console.log('item processed: ', item);
      })
    })
    return newStashData;
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
  createStash,
  getAllStashes,
  getStashData,
}