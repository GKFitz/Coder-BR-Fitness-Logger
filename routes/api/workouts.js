const workoutsRouter = require('express').Router()
const workoutsController = require("../../controllers/workoutsController");



//I 
//localhost:3000/workouts/
//localhost:3000/api/workouts
workoutsRouter.get("/", async(req, res) => {
    const allWorkouts = await Workout.find({})
    console.log(allWorkouts)
    res.render("index.ejs", {
        workouts: allWorkouts
    })
})


//N
//localhost:3000/workouts/new
//localhost:3000/api/workouts/new
workoutsRouter.get("/new", (req, res) => {
    res.render("new.ejs")
})


//D
//localhost:3000/api/workouts/id
workoutsRouter.delete("/:id", async(req, res) => {
    await Workout.findByIdAndDelete(req.params.id)
    res.redirect("/workouts");
})


//U
//localhost:3000/api/workouts/id
workoutsRouter.put("/:id", async(req, res) => {
    await Workout.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    res.redirect('/workouts');
})


//C
//localhost:3000/workouts/
//localhost:3000/api/workouts
workoutsRouter.post("/", (req, res) => {
    const createdWorkout = new Workout(req.body)
    createdWorkout.save().then(res.redirect("/workouts"))
})


//E
//localhost:3000/workouts/id/edit
//localhost:3000/api/workouts/id/edit
workoutsRouter.get("/:id/edit", async(req, res) => {
    const editWorkout = await Workout.findById(req.params.id)
    res.render("edit.ejs", {
        workout: editWorkout
    })
})


//S
//localhost:3000/workouts/:id
//localhost:3000/api/wokouts/:id
workoutsRouter.get("/:id", async(req, res) => {
    const foundWorkout = await Workout.findById(req.params.id).exec()
    res.render("show.ejs", {
        workout: foundWorkout
    })
})


module.exports = workoutsRouter;





