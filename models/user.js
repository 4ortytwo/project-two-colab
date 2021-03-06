const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    fullName: String,
    role: String,
    dateOfBirth: Date, //FIXME: trim the date
    pictureUrl: String,
    projects: [{

        type: Schema.Types.ObjectId,
        ref: 'projects'

    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
    //TODO: add timestamps ? display updated date on user's profile page
});

const User = mongoose.model('users', userSchema);

module.exports = User;