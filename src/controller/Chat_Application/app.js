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

