

const mongoose = require("mongoose");
// const bcrypt= require("bcrypt");
const Schema = mongoose.Schema;

// const SALT_WORK_FACTOR = 5;
const userSchema = new Schema({
  // name: { type: String, required: true}
  username: { type: String, lowercase: true, required: true, unique: true },
  email: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
  workouts: [{
    type: Schema.Types.ObjectId,
    ref: "Workout"
  }]
  
});


const User = mongoose.model("User", userSchema);

module.exports = User;