const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const userSchema = new Schema({
    username: String, 
    email: String, 
    password: String,
    firstName: String, 
    lastName: String, 
    fullName: String,
    specialty: String,
    dateOfBirth: Date,
    pictureUrl: String,
});

const User = mongoose.model('users', userSchema);

module.exports = User;