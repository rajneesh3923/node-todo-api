// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
        if (err) {
           return console.log('Unale to connect ot MongoDB server');
        }
        console.log('connected to mongoDB server');

        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     complete: false
        // }, (err, result) => {
        //     if (err) {
        //         return console.log('Unable to insert Todo', err);
        //     }

        //     console.log(JSON.stringify(result.ops, 2));
        // });
        // db.collection('Users').insertOne({
        //     name:'Rajneesh',
        //     age: 23,
        //     Gender: 'Male'
        // }, (err, res) => {
        //     if(err) {
        //         return console.log('Unable to insert data to users Collection')
        //     } 
        //     console.log(res.ops[0]._id.getTimestamp());
        // });  
        db.close;
});