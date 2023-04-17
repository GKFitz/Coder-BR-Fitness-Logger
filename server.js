const express = require('express')
// const session = require('express-session')
const session = require('cookie-session');
const mongoose = require('mongoose')
const methodOverride= require('method-override')
const path = require('path')
require('dotenv').config()
// const User = require("./models/user.js")
const modeldb = require('./models')

const bodyParser = require('body-parser');
const app = express()
const workoutRouter = require('./routes/api/workouts.js')
const userRouter = require("./routes/api/users.js")

//seeds
const workoutArr = require('./workoutArr')



// mongoose.connect(process.env.MONGOGO)
const url = process.env.MONGOGO
// Database Configuration
mongoose.connect(url, {
	
    
	useFindAndModify: false,
	useCreateIndex: true,
});

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//MiddleWares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
//use public folder for static assets
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
app.use('/static', express.static('public'))
// app.use('/images', express.static('images'));


app.use(
    session({
        // secret: 'setyourheartablaze',
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        keepSessionInfo: true
    })
);
// // Routes / Controllers
// app.get('/', (req, res) => {
// 	res.render('index.ejs', {
//         currentUser: req.session.currentUser
//     });
// });
// // Routes / Controllers
// app.get('/any', (req, res) => {
//     req.session.anyProperty = 'any value';
//     res.send('This is the route that sets the value of req.session.anyProperty');
// });
//MiddleWare Controllers for workouts
// const workoutsController = require('./controllers/workoutsController.js')
// app.use('/workouts', workoutsController)
// controller for users
// const usersController = require('./controllers/usersController.js')
// app.use('/users', usersController)

//routes
//app.use(router)
//
app.use('/workouts', workoutRouter);
app.use('/', userRouter);





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})