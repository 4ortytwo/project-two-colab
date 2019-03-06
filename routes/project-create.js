const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const User = require('../models/user');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.render('project-create');
});

router.post('/', (req, res, next) => {
    // let newProject = {
    //     projectName: req.body.projectName,
    //     description: req.body.description,
    //     createdBy: mongoose.Types.ObjectId(req.signedCookies.id),
    // };

    const newProject = Project({
        projectName: req.body.projectName,
        description: req.body.description,
        createdBy: mongoose.Types.ObjectId(req.signedCookies.id),
        deadline: req.body.deadline
    }).save().then(newProject => {

        User.findByIdAndUpdate(
            req.signedCookies.id, {
                $push: {
                    projects: newProject._id
                }
            }).then(updatedUser => {
            res.status(200).redirect('projects');
        });


    }).catch(err => {
        res.status(500).send(err);
    })


    // Project.create(newProject, (err) => {
    //     err ? res.status(500).send('Project not created') :
    //         res.status(200).render('projects');
    // })

    // User.findOne({
    //     '_id': req.signedCookies.id
    // }).populate('projects', Project).then
})
module.exports = router;