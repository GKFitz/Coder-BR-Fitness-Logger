const workoutsRouter = require('express').Router()
const workoutsController = require("../../controllers/workoutsController");

//I for INDEX
//localhost:3000/allWorkouts
workoutsRouter.get('/allWorkouts', workoutsController.getAllWorkouts)

//N for New
//localhost:3000/
workoutsRouter.get('/myWorkouts', workoutsController.createWorkout)

//D for DELETE
//localhost:3000/myWorkout/:id
workoutsRouter.delete('/myWorkouts/:id', workoutsController.deleteWorkout)
    


//U for UPDATE
//localhost:3000/update/:id
workoutsRouter.put('/update/:id', workoutsController.updateWorkout)


//     User.deleteOne({_id: req.params.id})
//     .then(success => res.json('Success! User deleted.'))
//     .catch(err => res.status(400).json('Error!' + err))
// })

//C for CREATE new workout
//localhost:3000/
workoutsRouter.post('/', workoutsController.createWorkout)

//E for EDIT 
//localhost:3000/workouts/id/edit
workoutsRouter.get("/:id/edit", workoutsController.editWorkout) 
    

//S for show getOne
//localhost:3000/:id
workoutsRouter.get('/:id', workoutsController.showWorkout )




module.exports = workoutsRouter;





