module.exports = function(app, db) {


  app.post('/hunts', (iOSreq, resForiOSApp) => {
    console.log(iOSreq.body);
    let parsedDataForDatabase = { title: iOSreq.body.title, description: iOSreq.body.description,
                                  destinations: iOSreq.body.destinations };
    db.collection('hunts').insert(parsedDataForDatabase, (err, databaseResponse) => {
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
