const router = require("express").Router();
const workoutRoutes = require('./workouts.js');
const userRoutes = require('./users.js')



router.use('/workouts', workoutRoutes);
router.use('/users', userRoutes);

router.get('/', function(req, res) {
    res.render('index');
});

module.exports = router;