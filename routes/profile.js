const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cookieParser = require('cookie-parser');
var moment = require('moment');


router.get('/:id', (req, res) => {
    if (!req.signedCookies.email) res.redirect('/login')
    else {
        User.findById({
            '_id': req.params.id
        }).then(user => {
            //.populate('createdBy', User)
            // user.dateOfBirthFormatted = moment(user.dateOfBirth).format('Do MMM YYYY');
            user.age = moment().diff(user.dateOfBirth, 'years');
            res.render('profile', {
                user
            });
        }).catch(err => {
            res.status(500).send(err);
        });
    };
});

router.get('/', (req, res) => {
    if (!req.signedCookies.email) res.redirect('/login')
    else {
        User.findOne({
                '_id': req.signedCookies.id
            })
            .then(user => {
                // user.dateOfBirthFormatted = moment(user.dateOfBirth).format('Do MMM YYYY');
                user.age = moment().diff(user.dateOfBirth, 'years');
                res.render('my-profile', {
                    user
                });
            })
            .catch(err => {
                res.status(500).send('User not found')
            })
    }
});


module.exports = router;