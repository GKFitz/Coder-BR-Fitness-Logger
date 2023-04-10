const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const methodOverride= require('method-override')
require('dotenv').config()
const User = require("./models/user.js")
const app = express()


const workoutArr = require('./workoutArr')



mongoose.connect(process.env.MONGOGO)



const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//MiddleWares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//MiddleWare Controllers for workouts
const workoutController = require('./controllers/workouts.js')
app.use('/workouts', workoutController)


//I
// app.get("/", (req, res) => {
//     console.log('server up')
//     res.render('index.ejs')
// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})