const bcrypt = require('bcrypt');
const express = require('express');
// const userRouter = express.Router();
// const User = require('../models/user.js');
const db = require('../models')


module.exports = {

    createAcct: function(req, res) {
        console.log("===========================")
        console.log(req.body)
        User.create(req.body);
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    login: function(req, res){
        // console.log(req.body.email)
        db.User.findOne({email: req.body.email})
        .then(async newUser => {
            // console.log(newUser.password)
            // console.log(req.body.password)
            const confirm= await newUser.validatePassword(req.body.password)
            // console.log("++++++++++++++++++")
            // console.log(confirm)
            if (confirm) {
            console.log("Correct Password!")
            res.status(200).send("Password Correct");

            }else{
            console.log("Incorrect Password")
            res.status(401).send("Incorrect Password");
        }

        })
        .catch(err => {
            res.status(422).json(err);
        });
    
    },
    getAllWorkouts: function(req, res) {
        db.User
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },


    createWorkout: function(req,res) {
    const createdWorkout = new Workout(req.body)
    //     createdWorkout.save().then(res.redirect("/workouts"))
    }



    removeWorkout: function(req, res) {
        db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

    updateWorkout: function(req, res) {
        db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    editWorkout: function (req, res) {
    workoutRouter.get("/:id/edit", async(req, res) => {
        //     const editWorkout = await Workout.findById(req.params.id)
        //     res.render("edit.ejs", {
        //         workout: editWorkout
        //     })
    })
        


}