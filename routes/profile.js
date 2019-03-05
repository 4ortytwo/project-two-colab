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
            debugger
        })
        .catch(err => {
            res.status(500).send('User not found')
        })
    }
});

module.exports = router;