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
  .put(stashController.updateItem)

StashRouter.route('/:name/:itemId')
  .get(stashController.getOneItem)
  .delete(stashController.deleteItem);

module.exports = StashRouter;