// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if (err) {
           return console.log('Unale to connect ot MongoDB server');
        }
        console.log('connected to mongoDB server');

        
        // db.collection('Todos').find({
        //     '_id': new ObjectID('5bf2b1e253ead31b088eb2a5')
        // }).toArray().then((docs) => {
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) =>{
        //   console.log('Unable to fetch todos', err)
        // });

        
        db.collection('Users').find({name: "Rajneesh"})
        .count().then((count) => {
            console.log(`Todos count: ${count}`);
           
        }, (err) =>{
          console.log('Unable to fetch todos', err);
        });

        // db.close;
});