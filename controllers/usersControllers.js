const bcrypt = require('bcrypt');
const express = require('express')
const User = require('../models/user.js');
// const db = require('../models')



function sessionPage(req, res){
    res.render('loginNew.ejs')
}



//New SignUp part of the Landing Page
//since index is where we want to land, get rid of 'new route?
function signUp(req, res) {
    res.render('index.ejs', { currentUser: req.session.currentUser});
};
//New login part of the Landing page
function loginPage (req, res){
    res.render('index.ejs', {currentUser: req.session.currentUser});
};

//Delete logout function
function logout (req, res){
    req.session.destroy()
    res.redirect("/")
}



//Create (register account) function with password hashing
function createAcct (req, res) {
    console.log(req.body)
    //overwrite the user password with the hashed password then pass to our database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    const createdUser = User.create(req.body)
    createdUser.then(res.redirect("/"))
        
    
}
    

// function login (req, res) {
//     // console.log(req.body.email)
//     User.findOne({email: req.body.email})
//     .then(async newUser => {
//             // console.log(newUser.password)
//             // console.log(req.body.password)
//             const confirm= await newUser.validatePassword(req.body.password)
//             // console.log("++++++++++++++++++")
//             // console.log(confirm)
//             if (confirm) {
//             console.log("Correct Password!")
//             res.status(200).send("Password Correct");

//             }else{
//             console.log("Incorrect Password")
//             res.status(401).send("Incorrect Password");
//         }

//         })
//         .catch(err => {
//             res.status(422).json(err);
//         });
    
//     },
//Get Login function
async function login (req, res) {
    // Check for an existing user
    const findUser = await User.findOne( {email: req.body.email})
    if (!findUser) {
        res.send(`Oops! No user with that email address has been registered.`)
    } else {
        console.log(req.body.password)
        console.log(findUser.password)
        // If a user has been found
        // compare the given password with the hashed password we have stored
        const pwMatches = bcrypt.compareSync(req.body.password, findUser.password)
        // if the passwords match
        if (pwMatches) {
            // add the user to our session
            req.session.currentUser = findUser
                //  redirect back to our home page
                res.render('index.ejs', {
                    login : findUser
                })
            } else {
                // if the passwords don't match
                res.send('Oops! Invalid credentials.');
            }
    
        }
    
        
}
    
        


module.exports = {
    sessionPage,
    signUp,
    loginPage,
    createAcct,
    login,
    logout,


}