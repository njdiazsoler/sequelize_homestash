const express = require('express')
const bodyParser = require('body-parser')
const StashRouter = require('./router/stashRouter');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// API RESOURCES
app.use('/home', StashRouter);

app.listen(3002, () => {
  console.log(`Running on http://localhost:3002`)
});