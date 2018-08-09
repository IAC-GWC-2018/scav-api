const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const dbInfo         = require('./config/db');
const app            = express();
require('dotenv').config();
const port           = process.env.PORT;


app.use(bodyParser.json());

MongoClient.connect(dbInfo.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database.db('scav-app'));
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
