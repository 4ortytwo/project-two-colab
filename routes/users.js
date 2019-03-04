const express       = require('express');
const app           = express();
// const Project       = require('../models/project');
const User          = require('../models/user');
const mongoose      = require('mongoose');


app.get('/', (req, res, next)=> {
    User.find({}).then(queryResults=> {
        res.render('users', {users: queryResults});
    }).catch(err => {
        res.status(500).send(err);
    });
});

module.exports = app;
