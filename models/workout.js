const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  
  type: { 
    type: String, 
    // required: true, 
  },
  duration: { 
    type: String, 
    required: true,
  },
  distance: { 
    type: Number, 
    required: true,
  },
  

  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;