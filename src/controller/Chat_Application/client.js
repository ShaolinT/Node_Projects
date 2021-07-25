const socket = io('http://localhost:7050');

const messageContainer = document.querySelector(".container");
const messageSubmitBtn = document.getElementById("btn")
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')

const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
};

const name = prompt("Enter your Name to join");
socket.emit("new-user-joined", name);

socket.on("user-joined", name => {
  append(`${name} joined the Chat`, 'right');
});

//"Message Send Emit"

socket.on('receive', data => {
  append(`${data.name} : ${data.message} `, 'left')
})

socket.on('left', name =>{
  append(`${name} left the chat`, 'left')
})

// If the form Submit Button clicked, send server the message

form.addEventListener('submit' , (e)=>{
//messageSubmitBtn.addEventListener('submit', (e)=>{ 
    e.preventDefault();
    console.log("clicked");
    
    const message = messageInput.value;
    append(`You: ${message}`, `right`)
    socket.emit('send', message)
    messageInput.value = ''
  })