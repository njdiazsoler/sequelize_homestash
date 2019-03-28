const express = require('express')
const bodyParser = require('body-parser')
const StashRouter = require('./router/stashRouter');
var cors = require('cors');

// const ItemRouter = require('./router/itemRouter')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// API ENDPOINTS

app.use('/home', StashRouter);
// app.use('/home/:stashId', ItemRouter);



app.listen(3002, () => {
  console.log(`Running on http://localhost:3002`)
});