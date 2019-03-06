const express = require('express');
const app = express();
const Project = require('../models/project');
const User = require('../models/user');
const mongoose = require('mongoose');


app.get('/', (req, res, next) => {
    Project.find({}).populate('createdBy', User).then(projects => {
        debugger
        for (let i = 0; i < projects.length; i += 1) {
            if (projects[i].deadline) {
                projects[i].deadlineFormatted = moment(projects[i].deadline).toNow()
            }
        }
        res.render('projects', {
            projects
        });
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/:id', (req, res, next) => {
    Project.findById({
        '_id': req.params.id
    }).populate('createdBy', User).then(queryResults => {

        res.render('project', {
            project: queryResults
        });
    }).catch(err => {
        res.status(500).send(err);
    });
});

module.exports = app;