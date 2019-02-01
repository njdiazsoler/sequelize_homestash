const express = require('express');
const itemController = require('../controller/itemController')
const stashController = require('../controller/stashController');
const StashRouter = express.Router();

StashRouter.route('/:stashId')
.get((req, res) => stashController.getStashData(req, res) );

StashRouter.route('/:stashId')
  .post((req, res) => stashController.createStash(req, res) )

StashRouter.route('/:stashId/items')
.get((req, res) => itemController.getItemsData(req, res))

StashRouter.route('/:stashId/items')
.post((req, res) => itemController.createItem(req, res)
)

module.exports = StashRouter;
  // StashController.getStashData