const express = require('express');
const stashController = require('../controller/stashController');
const StashRouter = express.Router();

StashRouter.route('/')
  .get(stashController.getAllStashes)
  .post(stashController.createStash);

// StashRouter.route('/:stashId')
//   .get(stashController.getStashData);

StashRouter.route('/:name')
  .get(stashController.getItemsData)
  .post(stashController.createItem)
  
  StashRouter.route('/:name/:itemId')
  .delete(stashController.deleteItem)
  .get(stashController.getOneItem)
  .put(stashController.updateItem)

module.exports = StashRouter;