const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const projectSchema = new Schema({
    projectName: String, 
    description: String, 
    pictureUrl: String,
    createdBy: {type: Schema.Types.ObjectId, ref: 'users'},
    createdAt: Date,
    updatedAt: Date
});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;