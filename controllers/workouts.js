const express = require('express');
const Workout = require('../models/workout');
const router = express.Router();

//I
router.get("/", async(req, res) => {
    const allWorkouts = await Workout.find({})
    res.render("workouts/index.ejs", {
        workout: allWorkouts
    })
})


//N
router.get("/new", (req, res) => {
    res.render("workouts/new.ejs")
})


//D



//U



//C
router.post("/", (req, res) => {
    const createdWorkout = new Workout(req.body)
    createdWorkout.save().then(res.redirect("/workouts"))
})


//E



//S
router.get("/:id", async(req, res) => {
    const foundWorkout = await Workout.findById(req.params.id).exec()
    res.render("workouts/show.ejs", {
        workout: foundWorkout
    })
})


module.exports = router;
