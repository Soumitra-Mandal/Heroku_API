var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    name: String, // String is shorthand for {type: String}
    work: String,
    dialogue: String,
    superhero: Boolean
});

const User = mongoose.model('User', userSchema, "Users");


module.exports = User;