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



//D



//U



//C



//E



//S
router.get("/:id", async(req, res) => {
    const foundWorkout = await Workout.findById(req.params.id).exec()
    res.render("workouts/show.ejs", {
        workout: foundWorkout
    })
})


module.exports = router;
