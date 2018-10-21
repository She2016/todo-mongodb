//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://todo-app:todo-app123@ds137643.mlab.com:37643/todo-app'||'mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
      return  console.log('Unable to connect MongoDB server');
    }
    console.log('Connect to MongoDb');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     complete: false

    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    db.collection('Users').insertOne({
        name:'Sheyar',
        age: 30,
        location: 'France'

    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        //result.ops => array of all documents inserted
    });

    db.close();
});