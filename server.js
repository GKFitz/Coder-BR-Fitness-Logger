const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const methodOverride= require('method-override')
require('dotenv').config()
const User = require("./models/user.js")
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const routes = require('./routes')


//seeds
const workoutArr = require('./workoutArr')



mongoose.connect(process.env.MONGOGO)



const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//MiddleWares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);

// Routes / Controllers
app.get('/any', (req, res) => {
    req.session.anyProperty = 'any value';
    res.send('This is the route that sets the value of req.session.anyProperty');
});
//MiddleWare Controllers for workouts
// const workoutsController = require('./controllers/workoutsController.js')
// app.use('/workouts', workoutsController)
// controller for users
// const usersController = require('./controllers/usersController.js')
// app.use('/users', usersController)

//routes
// app.use(router)
app.use('/', routes);






const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})