const db = require("../models");
const Workout = require("../models/workout.js")

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


    //Index 
    //Get route
    function getAllWorkouts (req, res) {
       Workout.find({}, function(err, workout) {
        res.render('/getAllWorkouts', { workouts: allWorkouts});
       });
       
    
    }
    // getAllWorkouts: function(req, res) {
    //     db.Workout
    //     .find(req.query)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    //N 
    //localhost:3000/api/workouts/new
    function newWorkout (req, res) {
        res.render("new.ejs")
    }
    
    


    function deleteWorkout(req, res) {
        db.Workout
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    workoutsRouter.delete("/:id", async(req, res) => {
        //     await Workout.findByIdAndDelete(req.params.id)
        //     res.redirect("/workouts");
        // })
    }
    
    
    
    
    //C
    //post route to create a new workout
    function createWorkout (req,res) {
        Workout.findById(req.params.id, function (err, workout) {
            workout.push(req.body);
            workout.save(function (err) {
              res.redirect(`/workouts/${workouts._id}`);
            });
        });
    }
    // const createdWorkout = new Workout(req.body)
    console.log(req.body)
      console.log("attempting create workout in db")
      new db.Workout
      .create(req.body)
      .then(dbWorkout => {
        console.log(dbWorkout)
        console.log("attempting to add workout to the account holder")
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
    



    function deleteWorkout(req, res) {
        Workout.findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    function updateWorkout (req, res) {
        Workout.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    function editWorkout (req, res) {
        Workout.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    //S show 
    async function showWorkout(req, res) {
        await Workout.findById(req.params.id, function (err, workout) {
        res.render("show.ejs", {
            workout: foundWorkout
            })
          
        });
    }
    // showWorkout: function(req, res) {
    //     db.Workout
    //     .findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // editWorkout: function (req, res) {
    // workoutRouter.get("/:id/edit", async(req, res) => {
    //     //     const editWorkout = await Workout.findById(req.params.id)
    //     //     res.render("edit.ejs", {
    //     //         workout: editWorkout
    //     //     })
    // })

module.exports = {

    getAllWorkouts
    newWorkout
    createWorkout
    showWorkout
}













