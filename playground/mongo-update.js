//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
      return  console.log('Unable to connect MongoDB server');
    }
    console.log('Connect to MongoDb');

    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5bcafcd777203b1f98b8bc30')
    }, {
      $unset: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result)=> {
      console.log(result)
    })
    //db.close();
});