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
    //Get all route
    function getAllWorkouts (req, res) {
       Workout.find({}, function(err, workout) {
        res.render('/getAllWorkouts', { workouts: allWorkouts});
       });
       
    
    }
    
    //N 
    //localhost:3000/api/workouts/new
    function newWorkout (req, res) {
        res.render("new.ejs")
    }
    //D
    async function deleteWorkout(req, res) {
        await Workout.findByIdAndDelete(req.params.id)
        res.redirect("/workouts");
       
    }

   //U
   async function updateWorkout (req, res) {
        await Workout.findByIdAndUpdate({_id: req.params.id},req.body)
        res.redirect('/workouts');
    }
    
    //C
    //post route to create a new workout
    function createWorkout (req,res) {
        new Workout.findById(req.params.id, function (err, workout) {
            workout.push(req.body);
            workout.save(function (err) {
              res.redirect(`/workouts/${workouts._id}`);
            });
        });
    }
    // const createdWorkout = new Workout(req.body)
    // console.log(req.body)
    //   console.log("attempting create workout in db")
    //   new db.Workout
    //   .create(req.body)
    //   .then(dbWorkout => {
    //     console.log(dbWorkout)
    //     console.log("attempting to add workout to the account holder")
    //       db.User.findOneAndUpdate({ email: req.user.email}, {$push:  {dbWorkout: dbWorkout._id }}, { new: true })
    //       .then(dbModel => {
    //         console.log(dbModel)
    //         console.log("=================")

    //         res.json(dbModel)
    //       })
          
    //     })
    //     .catch(err => res.status(422).json(err));
    // },
    //     createdWorkout.save().then(res.redirect("/workouts"))
    
    //E for edit
    async function editWorkout (req, res) {
        await Workout.findById(req.params.id)
        findById(req.params.id)
        res.render("edit.ejs", { workout: editWorkout})
        
    }

    //S show 
    async function showWorkout(req, res) {
        await Workout.findById(req.params.id, function (err, workout) {
        res.render("show.ejs", { workout: foundWorkout })
          
        });
    }
    

module.exports = {

    getAllWorkouts,
    newWorkout,
    deleteWorkout,
    updateWorkout,
    createWorkout,
    editWorkout,
    showWorkout,
}













