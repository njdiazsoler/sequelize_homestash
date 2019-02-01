const express = require('express');
// const itemController = require('../controller/itemController')
const stashController = require('../controller/stashController');
const StashRouter = express.Router();

StashRouter.route('/:stashId')
  .get(stashController.getStashData)
// .post(stashController.createStash)

StashRouter.route('/:stashId/items')
  .get(stashController.getItemsData)
  .post(stashController.createItem)
  .put(stashController.updateItem)

StashRouter.route('/:stashId/items/:id')
  .get(stashController.getOneItem);

module.exports = StashRouter;