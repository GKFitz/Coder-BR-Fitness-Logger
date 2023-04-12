const bcrypt = require('bcrypt');
const User = require('../models/user.js');
// const db = require('../models')


//New SignUp part of the Landing Page
function signUp(req, res) => {
    res.render('users/new.ejs', { currentUser: req.session.currentUser});
});
//New login part of the Landing page
function loginPage (req, res){
    res.render('users/new.ejs', {currentUser: req.session.currentUser});
});

//New 
function createAcct (req, res) {
    console.log(req.body)
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    
       
        
        res.redirect('/')
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
    
        


    module.exports = {
        signUp,
        loginPage,

    }