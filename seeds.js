const mongoose = require("mongoose")
const Workout = require('./models/workout.js')
const workoutArr = require('./workoutArr')
require('dotenv').config();

mongoose.connect(process.env.MONGOGO)

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

const seedWorkoutDB = async () => {
        await Workout.deleteMany({})
    	await Workout.insertMany(workoutArr)
    }

seedWorkoutDB().then( () => {
   mongoose.connection.close()
})