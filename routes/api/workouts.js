const workoutsRouter = require('express').Router()
const workoutsController = require("../../controllers/workoutsController");

//I for INDEX
//localhost:3000/allWorkouts
workoutsRouter.get('/allWorkouts', workoutsControllers.getAllWorkouts)

//N for New
//localhost:3000/
// usersRouter.get('/myWorkouts', usersController.createWorkout)

//D for DELETE
//localhost:3000/myWorkout/:id
workoutsRouter.delete('/myWorkouts/:id', workoutsController.removeWorkout)
    


//U for UPDATE
//localhost:3000/update/:id
workoutsRouter.put('/update/:id', workoutsController.updateWorkout)
/

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
workoutsRouter.get('/:id', workoutsController )

// //I 
// //localhost:3000/workouts/
// //localhost:3000/api/workouts
// workoutsRouter.get("/", async(req, res) => {
//     const allWorkouts = await Workout.find({})
//     console.log(allWorkouts)
//     res.render("index.ejs", {
//         workouts: allWorkouts
//     })
// })


// //N
// //localhost:3000/workouts/new
// //localhost:3000/api/workouts/new
// workoutsRouter.get("/new", (req, res) => {
//     res.render("new.ejs")
// })


// //D
// //localhost:3000/api/workouts/id
// workoutsRouter.delete("/:id", async(req, res) => {
//     await Workout.findByIdAndDelete(req.params.id)
//     res.redirect("/workouts");
// })


// //U
// //localhost:3000/api/workouts/id
// workoutsRouter.put("/:id", async(req, res) => {
//     await Workout.findByIdAndUpdate(
//         req.params.id,
//         req.body
//     )
//     res.redirect('/workouts');
// })


// //C
// //localhost:3000/workouts/
// //localhost:3000/api/workouts
// workoutsRouter.post("/", (req, res) => {
//     const createdWorkout = new Workout(req.body)
//     createdWorkout.save().then(res.redirect("/workouts"))
// })


// //E
// //localhost:3000/workouts/id/edit
// //localhost:3000/api/workouts/id/edit
// workoutsRouter.get("/:id/edit", async(req, res) => {
//     const editWorkout = await Workout.findById(req.params.id)
//     res.render("edit.ejs", {
//         workout: editWorkout
//     })
// })


// //S
// //localhost:3000/workouts/:id
// //localhost:3000/api/wokouts/:id
// workoutsRouter.get("/:id", async(req, res) => {
//     const foundWorkout = await Workout.findById(req.params.id).exec()
//     res.render("show.ejs", {
//         workout: foundWorkout
//     })
// })


module.exports = workoutsRouter;





