const express       = require('express');
const router    = express.Router();
const Project       = require('../models/project');
const mongoose      = require('mongoose');

router.get('/', (req, res, next)=> {
    res.render('project-create');
});

router.post('/', (req, res, next)=> {
    let newProject = {
        projectName: req.body.projectName,
        description: req.body.description,
        createdBy: mongoose.Types.ObjectId(req.signedCookies.id),
    };

    Project.create(newProject, (err)=> {
        err ? res.status(500).send('Project not created') 
        : res.status(200).render('projects');
    })
})
module.exports = router;