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
    getAllWorkouts: function(req, res) {
        db.Workout
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },


    createWorkout: function(req,res) {
    // const createdWorkout = new Workout(req.body)
    console.log(req.body)
      console.log("attempting create show in db")
      db.Workout
      .create(req.body)
      .then(dbWorkout => {
        console.log(dbWorkout)
        console.log("attempting to add show to the account holder")
          db.User.findOneAndUpdate({ email: req.user.email}, {$push:  {dbWorkout: dbWorkout._id }}, { new: true })
          .then(dbModel => {
            console.log(dbModel)
            console.log("=================")

            res.json(dbModel)
          })
          
        })
        .catch(err => res.status(422).json(err));
    },
    //     createdWorkout.save().then(res.redirect("/workouts"))
    



    deleteWorkout: function(req, res) {
        db.Workout
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    updateWorkout: function(req, res) {
        db.Workout
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    editWorkout: function(req, res) {
        db.Workout
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    showWorkout: function(req, res) {
        db.Workout
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // editWorkout: function (req, res) {
    // workoutRouter.get("/:id/edit", async(req, res) => {
    //     //     const editWorkout = await Workout.findById(req.params.id)
    //     //     res.render("edit.ejs", {
    //     //         workout: editWorkout
    //     //     })
    // })

}












