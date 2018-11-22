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

    //DELETE MANY QUERY
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).
    // then((re) => {
    //     console.log(re);
    // });
    //DELETE ONE QUERY
    // db.collection('Todos').deleteOne({text: 'Eat lunch'})
    // .then((res) => {
    //     console.log(res);
    // });

    //FINDONE AND DELETE
    db.collection('Todos').findOneAndDelete({
            completed: false
        })
        .then((doc) => {
            console.log(doc);
        })



    // db.close;

});




