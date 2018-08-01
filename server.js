const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const dbInfo         = require('./config/db');
const app            = express();
const port = 8000;


app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbInfo.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database.db('scav-app'));
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
