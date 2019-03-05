const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cookieParser = require('cookie-parser');

router.get('/', (req, res) => {
    if (!req.signedCookies.email) res.redirect('/login');
    else {
        User.findOne({
                '_id': req.signedCookies.id
            })
            .then(user => {
                res.render('profile', {
                    user
                });
            })
            .catch(err => {
                res.status(500).send('User not found')
            })
    }
});

router.get('/:id', (req, res) => {
    User.findById({
        '_id': req.params.id
    }).populate('createdBy', User).then(queryResults => {
        debugger
        res.render('profile', {
            user: queryResults
        });
    }).catch(err => {
        res.status(500).send(err);
    });
});

module.exports = router;