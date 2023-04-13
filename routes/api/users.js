const express = require('express')
const usersRouter = require("express").Router();
const usersControllers = require("../../controllers/usersControllers");
//const workoutsControllers = require("../../controllers/workoutsController.js");
// const db = require("../../models");


//Renders the sign-up/login page
usersRouter.get("/", usersControllers.sessionPage)


// New (registration and Login page)
//localhost:3000/users/newSession
usersRouter.get('/', usersControllers.signUp)

// New (login page)
usersRouter.get('/login', usersControllers.loginPage)

//localhost:3000/users/signup
usersRouter.post('/signup', usersControllers.createAcct)
    
//localhost:3000/users/login
usersRouter.post('/login', usersControllers.login)


//localhost:3000/users/
usersRouter.delete("/", usersControllers.logout)

// Routes / Controllers
// app.get('/', (req, res) => {
// 	res.render('index.ejs', {
//         currentUser: req.session.currentUser
//     });
// });


module.exports = usersRouter