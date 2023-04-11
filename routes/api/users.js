const User = require("../../models/user.js")
const usersRouter = require("express").Router();
const usersControllers = require("../../controllers/usersController.js");



usersRouter.route('/new').post((req, res) =>{
    const newUser = new User(req.body)

    newUser.save()
    .then(user => res.json(user))
    .catch(err =>res.status(400).json("Error!"))

})


usersRouter.route('/').get((req, res) => {
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