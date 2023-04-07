const express = require('express')
const mongoose = require('mongoose')
const methodOverride= require('method-override')

const app = express()
require('dotenv').config()

mongoose.connect(process.env.MONGOGO)



const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//MiddleWares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



//I
app.get("/", (req, res) => {
    console.log('server up')
    res.render('index.ejs')
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})