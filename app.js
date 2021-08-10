const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("./src/config/db_connection");
//const User = require("./src/models/user");
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const MongoDbStore = require("connect-mongodb-session")(session)

const port = 3000;

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();



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



/**
 * -------------- SESSION SETUP ----------------
 */

//  const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'new_users' });

//  const sessionStore =  MongoStore.create({ mongoUrl: process.env.DB_STRING, collection: 'new_users' })

// const sessionStore = new MongoDbStore({ mongooseConnection: connection, collection: 'new_users' });

//  app.use(session({
//      secret: process.env.SECRET,
//      resave: false,
//      saveUninitialized: true,
//      store: sessionStore,
//      cookie: {
//          maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
//      }
//  }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);


// ================== PASSPORT ================
// Passport middleware
require('./src/config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());



// ================= ROUTES =====================

app.use('/', require('./src/routes/index.js'));
app.use('/users', require('./src/routes/users.js'));


//================= CHAT APP RELATED STUFF ==================================

// app.use(express.static(path.join(__dirname, "/Chat_Application"))); //for serving static files

app.get("/chat_application",(req,res)=>{
  res.status(200).render("group_chat");
})

//Node Server Which will handle our Socket Io Connection

const io = require("socket.io")(7050, { cors: {}});

const users = {};

io.on("connection", socket => {
  socket.on("new-user-joined", name => {
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });

  socket.on("send", message => {
    socket.broadcast.emit("receive", {message: message, name: users[socket.id]})
  });

  socket.on("disconnect", (message) => {
    socket.broadcast.emit("left", users[socket.id])
  });
  
});

// ============================================================

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
