# HomeStash Backend
Sequelize and Express server backend for HomeStash app, developed in Node.JS using ExpressJS and Sequelize.

## Available Scripts

In the project directory, you can run:

#### `node index.js`

Runs the server in the 3002 port.<br>
You could use any HTTP request manager such as Postman to query the server.
Any edits in the code will not reload the server, you should install a package such as `nodemon` to update changes when saving.

#### `npm install nodemon`


## Technologies

HomeStash Backend uses a number of open source projects to work properly:

* NodeJs
* ExpressJS
* Sequelize

You should also connect Sequelize to a MySQL instance. 
For this project, I used XAMPP to create a MySQL and an Apache instance to manage the database.

## Installation

HomeStash Backend requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

#### `cd sequelize_homestash`
#### `npm install -d`

## To run the project

HomeStash Backend will listen on port 3002, but you can change it with a "PORT" environment variable.

### API

Get stash data:

`GET /home`

Response:
{
  "stashData": [
    {
      "id": "090877ac-5ebb-427d-85bf-391636c352b0",
      "name": "bathroom",
      "createdById": "1",
      "createdAt": "2019-02-06T19:53:20.000Z",
      "updatedAt": "2019-02-06T19:53:20.000Z",
      "items": [
        {
          "id": "d4c15959-45d1-4176-80be-fe4a4588b534",
          "name": "Toilet cleaner",
          "quantityAmount": 2,
          "quantityType": "units",
          "estimatedDurability": "2019-03-14T00:00:00.000Z",
          "purchaseDate": "2019-02-14T00:00:00.000Z",
          "createdAt": "2019-02-14T17:43:00.000Z",
          "updatedAt": "2019-02-14T17:43:00.000Z",
          "stashId": "090877ac-5ebb-427d-85bf-391636c352b0"
        }
      ]
    },
  ]
}

`GET /:stashId`

Response:

{
  "stashData": {
    "id": "090877ac-5ebb-427d-85bf-391636c352b0",
    "name": "bathroom",
    "createdById": "1",
    "createdAt": "2019-02-06T19:53:20.000Z",
    "updatedAt": "2019-02-06T19:53:20.000Z"
  }
}

`GET /:stashId/items`

Response:

{
  "itemsData": [
    {
      "id": "d4c15959-45d1-4176-80be-fe4a4588b534",
      "name": "Toilet cleaner",
      "quantityAmount": 2,
      "quantityType": "units",
      "estimatedDurability": "2019-03-14T00:00:00.000Z",
      "purchaseDate": "2019-02-14T00:00:00.000Z",
      "createdAt": "2019-02-14T17:43:00.000Z",
      "updatedAt": "2019-02-14T17:43:00.000Z",
      "stashId": "090877ac-5ebb-427d-85bf-391636c352b0"
    }
  ]
}

`POST /:stashId/items`

Required: name, quantityAmount, quantityType, estimatedDurability, purchaseDate.





