const express = require('express');
const itemController = require('../controller/itemController');
const itemRouter = express.Router();

itemRouter.route('/getItems')
  .get((req, res) => {
    itemController.getItemsData(req, res)
    //  res.status(200).send('cool response');
  });

module.exports = itemRouter;