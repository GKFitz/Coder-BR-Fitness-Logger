const apiRoutes = require("./api")
const express = require('express');
const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res)=>{
    res.send("Hello World")
})

router.use("/api", apiRoutes);


module.exports = router;