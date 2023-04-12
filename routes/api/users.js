// const User = require("../../models/user.js")
const usersRouter = require("express").Router();
const usersControllers = require("../../controllers/usersController.js");
// const workoutsControllers = require("../../controllers/workoutsController.js");
const db = require("../../models");


//localhost:3000/signup
usersRouter.post('/signup', usersControllers.createAcct)
    // const newUser = new User(req.body)

    // newUser.save()
    // .then(user => res.json(user))
    // .catch(err =>res.status(400).json("Error!"))

// })
//localhost:3000/login
usersRouter.post('/login', usersControllers.login)
//     .get(userController.findById)
//     .post(userController.login);

// })



module.exports = usersRouter