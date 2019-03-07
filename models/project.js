const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: String,
    description: String,
    //pictureUrl: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    deadline: Date,
    skills: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
    //TODO: add timestamps display updated date on the project card
});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;