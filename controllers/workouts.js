const express = require('express');
// const mongoose = require('mongoose')
const router = express.Router();
const Workout = require('../models/workout.js');

// const workoutArr = require('../workoutArr')

//pathing to the seed route workout array
// router.get('../workoutArr.js/', async (req, res) => {
//     await Workout.deleteMany({}) //this means delete all when we pass it an empty object
// 	await Workout.insertMany(workoutArr)
//     res.redirect('/workouts')
// })


//I 
//localhost:3000/workouts/
router.get("/", async(req, res) => {
    const allWorkouts = await Workout.find({})
    console.log(allWorkouts)
    res.render("index.ejs", {
        workouts: allWorkouts
    })
})


//N
//localhost:3000/workouts/new
router.get("/new", (req, res) => {
    res.render("new.ejs")
})


//D
router.delete("/:id", async(req, res) => {
    await Workout.findByIdAndDelete(req.params.id)
    res.redirect("/workouts");
})


//U



//C
//localhost:3000/workouts/
router.post("/", (req, res) => {
    const createdWorkout = new Workout(req.body)
    createdWorkout.save().then(res.redirect("/workouts"))
})


//E
router.get("/:id/edit", async(req, res) => {
    const editWorkout = await Workout.findById(req.params.id)
    res.render("workouts/edit.ejs", {
        workout: editWorkout
    })
})


//S
//localhost:3000/workouts/:id
router.get("/:id", async(req, res) => {
    const foundWorkout = await Workout.findById(req.params.id).exec()
    res.render("show.ejs", {
        workout: foundWorkout
    })
})


module.exports = router;
