const express = require("express");
const router = express.Router();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth.js');

const JWT_Secret = "asdasddui8d88d76d7d6d54&^%&*^(*&)(&*(^$!!";

// Load User model
const User = require("../models/user");
const { forwardAuthenticated } = require('../config/auth');

router.get("/signup", forwardAuthenticated, (req, res) => {
  res.status(200).render("signup");
});

router.get("/login", forwardAuthenticated , (req, res) => {
  res.status(200).render("login");
});


// SIGNUP

router.post("/signup", async (req, res) => {
  console.log(req.body);

  const { username, email, password: plainTextPassword } = req.body;

   // Finding data on Mongo DB
  const user = await User.findOne({ email }).lean()

  if(user){
    return res.json({ status: "error", error: "email/password already Exist" });
  }

  // Hashing Password Using Bcrypt
  // console.log(await bcrypt.hash(password, 10));
  const password = await bcrypt.hash(plainTextPassword, 10);
  try {
    //Putting data in DataBase
    const response = await User.create({
      username,
      email,
      password,
    });
    console.log(`User Created Successfully : `, response);
  } catch (error) {
    console.log(error.message.indexOf("11000"));

    if (error.message.indexOf("11000")) {
      alert("Username Already Exist");
    }
    throw error;
  }
  res.json({ status: "ok" });
});


// LOGIN
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  //Finding data on Mongo DB
  const user = await User.findOne({ email }).lean();

  if (!user) {
    return res.json({ status: "error", error: "email/password mismatach" });
  }

  // If email match with DB then compare entered text password with DB Hash Password

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      JWT_Secret
    );
    res.json({ status: "ok", data: token });
  } else {
    res.json({ status: "error", error: "Username/ password mismatach" });
  }
});

// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/users/login',
//     // failureFlash: true
//   })(req, res, next);
// });


// GAMES RALATED STUFF

router.get("/games/tictactoe" , (req, res) => {
  res.status(200).render("games_tictactoe");
});

module.exports = router;