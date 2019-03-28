const Stash = require('../models/Stash');

const createStash = async stash => {
  try {
    let newStash = await Stash.create(stash);
    newStash = newStash.dataValues;
    return newStash
  } catch (error) {
    console.log(error);
    throw { status: 500, message: 'Internal Server Error' }
  }
}

const findStash = async id => {
  try {
    if (!id) {
      console.log('va por acá')
      let stash = await Stash.findAndCountAll({raw:true});
      stash = stash.rows
      console.log(stash);
      return stash;
    }
    console.log('va por fuera del if del repo')
    let stash = await Stash.findByPk(id);
    if (stash && stash.dataValues)
      stash = stash.dataValues
    console.log(stash)
    return stash;
  } catch (error) {
    console.log('this is a repo error', error);
    throw { status: 500, message: 'Internal Server Error' }
  }
}

module.exports = {
  createStash,
  findStash,
}