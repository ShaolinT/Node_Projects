const mongoose = require("mongoose");

const newUserSignupSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    }
  },
  { collection: "new_users" }
);

//Creating a Collection

const User = mongoose.model("User", newUserSignupSchema);

module.exports = User;
