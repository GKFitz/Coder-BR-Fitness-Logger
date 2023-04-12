const express = require('express')
const usersRouter = require("express").Router();
const usersControllers = require("../../controllers/usersControllers");
//const workoutsControllers = require("../../controllers/workoutsController.js");
const db = require("../../models");




// New (registration page)
userRouter.get('/new', usersControllers.signUp)
// New (login page)
usersRouter.get('/new', usersControllers.loginPage)

//localhost:3000/signup
usersRouter.post('/signup', usersControllers.createAcct)
    // const newUser = new User(req.body)

    // newUser.save()
    // .then(user => res.json(user))
    // .catch(err =>res.status(400).json("Error!"))


//localhost:3000/login
usersRouter.post('/login', usersControllers.login)

//conditional that determines whther a current user is signed in
// if (no user)
    //return no
//else(run controller function)
//     .get(userController.findById)
//     .post(userController.login);

// })



module.exports = usersRouter