const db = require("../models");

// const express = require('express');
// const mongoose = require('mongoose')
// const workoutRouter = express.Router();
// const Workout = require('../models/workout.js');

// const workoutArr = require('../workoutArr')

//pathing to the seed route workout array
// router.get('../workoutArr.js/', async (req, res) => {
//     await Workout.deleteMany({}) //this means delete all when we pass it an empty object
// 	await Workout.insertMany(workoutArr)
//     res.redirect('/workouts')
// })

module.exports = {
    findAll: function(req, res) {
    db.Workout
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // findByToday: function(req, res) {
    //     db.Workout
    //       .find({ date: req.body.date })
    //       .sort({ date: -1 })
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },

    findById: function(req, res) {
        console.log(req.params.id)
        db.Show
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        console.log(req.body)
        console.log("attempting create workout in db")
        db.Workout
        .create(req.body)
        .then(dbWorkout => {
          console.log(dbWorkout)
          console.log("attempting to add workout to the account holder")
            db.User.findOneAndUpdate({ email: req.user.email}, {$push:  {workouts: dbWorkout._id }}, { new: true })
            .then(dbModel => {
              console.log(dbModel)
              console.log("=================")
  
              res.json(dbModel)
            })
            
        })
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Workout
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Workout
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

}











// //I 
// //localhost:3000/workouts/
// workoutRouter.get("/", async(req, res) => {
//     const allWorkouts = await Workout.find({})
//     console.log(allWorkouts)
//     res.render("index.ejs", {
//         workouts: allWorkouts
//     })
// })


// //N
// //localhost:3000/workouts/new
// workoutRouter.get("/new", (req, res) => {
//     res.render("new.ejs")
// })


// //D
// workoutRouter.delete("/:id", async(req, res) => {
//     await Workout.findByIdAndDelete(req.params.id)
//     res.redirect("/workouts");
// })


// //U
// workoutRouter.put("/:id", async(req, res) => {
//     await Workout.findByIdAndUpdate(
//         req.params.id,
//         req.body
//     )
//     res.redirect('/workouts');
// })


// //C
// //localhost:3000/workouts/
// workoutRouter.post("/", (req, res) => {
//     const createdWorkout = new Workout(req.body)
//     createdWorkout.save().then(res.redirect("/workouts"))
// })


// //E
// //localhost:3000/workouts/id/edit
// workoutRouter.get("/:id/edit", async(req, res) => {
//     const editWorkout = await Workout.findById(req.params.id)
//     res.render("edit.ejs", {
//         workout: editWorkout
//     })
// })


// //S
// //localhost:3000/workouts/:id
// workoutRouter.get("/:id", async(req, res) => {
//     const foundWorkout = await Workout.findById(req.params.id).exec()
//     res.render("show.ejs", {
//         workout: foundWorkout
//     })
// })


// module.exports = workoutRouter;