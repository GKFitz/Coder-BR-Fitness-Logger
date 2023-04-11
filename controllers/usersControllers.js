const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');
const db = require('../models')

// New (registration page)
module.exports = {
    signup: function(req, res) {
    console.log("===========================")
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },

    // login: function(req, res){
    //     console.log(req.body.email)
    //     db.User.findOne({email: req.body.email})
    //     .then(async newUser => {
    //         // console.log(newUser.password)
    //         // console.log(req.body.password)
    //         var confirm= await newUser.validatePassword(req.body.password)
    //         // console.log("++++++++++++++++++")
    //         // console.log(confirm)
    //         if (confirm) {
    //         console.log("Correct Password!")
    //         res.status(200).send("Password Correct");

    //         }else{
    //         console.log("Incorrect Password")
    //         res.status(401).send("Incorrect Password");
    //     }

    //     })
    //     .catch(err => {
    //         res.status(422).json(err);
    //     });
    
    // },
    // findAll: function(req, res) {
    //     db.User
    //     .find(req.query)
    //     .sort({ date: -1 })
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },




}