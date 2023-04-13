const workoutsRouter = require('express').Router()
const workoutsController = require("../../controllers/workoutsController");
// const db = require("../../models");


//I for INDEX
//localhost:3000/workouts/allWorkouts
workoutsRouter.get('/', workoutsController.getAllWorkouts)



//N for New
//localhost:3000/workouts/new
workoutsRouter.get('/new', workoutsController.newWorkout)

//D for DELETE
//localhost:3000/workouts/myWorkout/:id
workoutsRouter.delete('/myWorkouts/:id', workoutsController.deleteWorkout)
    
//User.deleteOne({_id: req.params.id})
//     .then(success => res.json('Success! User deleted.'))
//     .catch(err => res.status(400).json('Error!' + err))
// })


//U for UPDATE
//localhost:3000/workouts/update/:id
workoutsRouter.put('/update/:id', workoutsController.updateWorkout)




//C for CREATE new workout
//localhost:3000/workouts
workoutsRouter.post('/', workoutsController.createWorkout)

//E for EDIT 
//localhost:3000/workouts/id/edit
workoutsRouter.get("/:id/edit", workoutsController.editWorkout) 
    

//S for show getOne
//localhost:3000/workouts/:id
workoutsRouter.get('/:id', workoutsController.showWorkout )




module.exports = workoutsRouter;





