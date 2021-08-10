
// getting-started.js
const mongoose = require('mongoose');

// const conn = process.env.DB_STRING;

mongoose.connect('mongodb://localhost:27017/shalin_projects', {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true, useFindAndModify: false});

// const connection = mongoose.connect(conn, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are Connected to Mongoose");
  
});