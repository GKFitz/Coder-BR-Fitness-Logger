const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');

// New (registration page)
userRouter.post('/', (req, res) => {
    //overwrite the user password with the hashed password, then pass that in to our database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    res.send(req.body);
});
// Create (registration route)
// userRouter.post('/', (req, res) => {
//     //overwrite the user password with the hashed password, then pass that in to our database
//     req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
//     const createdUser = new User.create(req.body)
//     createdUser.save().then(res.redirect('/'))

// })
// Export User Router
module.exports = userRouter;