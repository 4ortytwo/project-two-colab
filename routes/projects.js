const express = require('express');
const app = express();
const Project = require('../models/project');
const User = require('../models/user');
const mongoose = require('mongoose');
const moment = require('moment');


app.get('/', (req, res, next) => {
    Project.find({}).populate('createdBy', User).then(projects => {
        debugger
        for (let i = 0; i < projects.length; i += 1) {
            if (projects[i].deadline) {
                projects[i].deadlineFormatted = moment(projects[i].deadline).fromNow()
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
    }).populate('createdBy', User).then(project => {
        project.deadlineFormatted = moment(project.deadline).fromNow();
        res.render('project', {
            project
        });
    }).catch(err => {
        res.status(500).send(err);
    });
});

module.exports = app;