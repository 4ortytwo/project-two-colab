const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const projectSchema = new Schema({
    projectname: String, 
    description: String, 
    pictureUrl: String
});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;