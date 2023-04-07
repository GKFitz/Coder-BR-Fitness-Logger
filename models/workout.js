const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  
  type: { 
    type: String, 
    required: true, 
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

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;