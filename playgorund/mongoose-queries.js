const {ObjectId} = require('mongodb');
const {mongoose} = require('./../Server/db/mongoose');
const {Todo} = require('./../Server/models/todo');
const {User} = require('./../Server/models/user');

var id = '5bf68711d2329144b0ce245a31';

if(!ObjectId.isValid(id)) {
    console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });


// Todo.findOne({
//     _id: id  
// }).then((todo) => {
//     console.log(todo);
// });

// Todo.findById(id)
// .then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log(todo);
// }).catch((e) => console.log(e));

User.find({
    _id: id
}).then((user) => {
    console.log(user);
});


User.findOne({
    _id: id
}).then((user) => {
    console.log(user);
});

User.findById(id).
then((user) => {
    console.log(user);
}).catch((e) => console.log(e));


