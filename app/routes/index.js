module.exports = function(app, db) {


  app.post('/hunts', (iOSreq, resForiOSApp) => {
    console.log(iOSreq.body);
    db.collection('hunts').insert(iOSreq.body, (err, databaseResponse) => {
      if (err) {
        resForiOSApp.send({ 'error': 'An error has occurred' });
      } else {
        resForiOSApp.send(databaseResponse);
      }
    });
  });

  app.get('/hunts', (iOSreq, resForiOSApp) => {
    db.collection('hunts').find({}).toArray((err, item) => {
      if (err) {
        resForiOSApp.send({'error':'An error has occurred'});
      } else {
        resForiOSApp.send(item);
      }
    });
  });


};
