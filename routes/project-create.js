const express       = require('express');
const app           = express();
const Project       = require('../models/project');

app.get('/', (req, res, next)=> {
    Project.find({}, (err, queryResults)=> {
        (err) ? res.status(500).send(err) : res.render('project', {projects: queryResults});
    });
});

module.exports = app;