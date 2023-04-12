const router = require("express").Router();
const workoutRoutes = require('./workouts.js');
const userRoutes = require('./users.js')



router.use('/workouts', workoutRoutes);
router.use('/users', userRoutes);

module.exports = router;