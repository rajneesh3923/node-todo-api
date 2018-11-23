const {ObjectId} = require('mongodb');
const {mongoose} = require('./../Server/db/mongoose');
const {Todo} = require('./../Server/models/todo');
const {User} = require('./../Server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });



Todo.findByIdAndRemove('5bf7cf6815ac342c60deb729')
.then((todo) => {
    console.log(todo);
});