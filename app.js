const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("./src/config/db_connection");
//const User = require("./src/models/user");
const passport = require('passport');
const session = require('express-session');

const port = 3000;

//PASSPORT
require('./src/config/passport')(passport);

// Users.js 
const { ensureAuthenticated, forwardAuthenticated } = require('./src/config/auth');


//console.log(path.join(__dirname + "/src/templates/"));

//Express Related Stuff
app.use(express.static(path.join(__dirname, "/src"))); //for serving static files
app.use(bodyParser.json());

//'HBS' TEMPLATE ENGINE RELATED
app.set("view engine", "hbs"); //Set the template engine as PUG
hbs.registerPartials(path.join(__dirname, "/src/templates/partials")); // setting partials dir
app.set("views", path.join(__dirname, "/src/templates/views")); //  Set the Views Directory




// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//ROUTES

app.use('/', require('./src/routes/index.js'));
app.use('/users', require('./src/routes/users.js'));

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
