// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unale to connect ot MongoDB server');
    }
    console.log('connected to mongoDB server');


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bf2b33cf1b166255c81c23a')
    }, {
        $set:{
            name: 'Rajneesh Chaurasia'
            },
        $inc:{
            age:1
        }
        
    }, {
        returnOriginal:false
    }).then((res) => {
        console.log(res);
    })



    // db.close;

});