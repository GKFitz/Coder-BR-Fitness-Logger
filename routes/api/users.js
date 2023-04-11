// const User = require("../../models/user.js")
const usersRouter = require("express").Router();
const usersControllers = require("../../controllers/usersController.js");
const workoutsControllers = require("../../controllers/workoutsController.js");
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

//I for INDEX
//localhost:3000/allWorkouts
userRouter.get('/allWorkouts', usersControllers.getAllWorkouts)

//N for New
//localhost:3000/
usersRouter.get('/myWorkouts', usersController.createWorkout)

//D for DELETE
//localhost:3000/myWorkout/:id
usersRouter.delete('/myWorkouts/:id' usersController.removeWorkout)
    


//U for UPDATE
//localhost:3000/update/:id
usersRouter.put('/update/:id', usersController.updateWorkout)
/

//     User.deleteOne({_id: req.params.id})
//     .then(success => res.json('Success! User deleted.'))
//     .catch(err => res.status(400).json('Error!' + err))
// })

//C for CREATE new workout
//localhost:3000/
usersRouter.get('/', usersController.createWorkout)

//E for EDIT 
//localhost:3000/workouts/id/edit
userRouter.get("/:id/edit", userController.editWorkout) 
    

//S for show getOne
//localhost:3000/:id
userRouter.get('/:id', usersController )


module.exports = usersRouter