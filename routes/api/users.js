const User = require("../../models/user.js")
const usersRouter = require("express").Router();
const usersControllers = require("../../controllers/usersController.js");
const workoutsControllers = require("../../controllers/workoutsController.js");

//localhost:3000/signup
usersRouter.route('/signup').post((req, res) =>{
    const newUser = new User(req.body)

    newUser.save()
    .then(user => res.json(user))
    .catch(err =>res.status(400).json("Error!"))

})
//localhost:3000/login
usersRouter.route('/login').post((req, res) =>{
    .get(userController.findById)
    .post(userController.login);

})

//localhost: 3000/my-workouts
// usersRouter.route("/my-workouts")


usersRouter.route('/').get((req, res, next) => {
    User.find(
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json("Error!" + err))
    )
})

usersRouter.route('/delete/:id').delete((req, res) => {
    User.deleteOne({_id: req.params.id})
    .then(success => res.json('Success! Iser deleted.'))
    .catch(err => res.status(400).json('Error!' + err))
})


usersRouter.route('/update/:id').put((req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(success => res.json('Success! Iser deleted.'))
    .catch(err => res.status(400).json('Error!' + err))
    
})


module.exports = usersRouter