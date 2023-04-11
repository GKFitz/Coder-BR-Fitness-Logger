const User = require("../../models/user.js")
const usersRouter = require("express").Router();
const usersControllers = require("../../controllers/usersController.js");



usersRouter.route('/new').post((req, res) =>{
    const newUser = new User(req.body)

    newUser.save()
    .then(user => res.json(user))
    .catch(err =>res.status(400).json("Error!"))

})


usersRouter.route('/').get()

usersRouter.route('/delete/:id').delete()


usersRouter.route('/update/:id').put()


module.exports = usersRouter