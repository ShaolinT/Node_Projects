
// var div1 = document.getElementById("div1")
// var input1 = div1.querySelector("input")

// document.addEventListener("click", xClick , b1Value );
// document.addEventListener("click",  b2Value );
// document.addEventListener("click",  b3Value );
// document.addEventListener("click",  b4Value );
// document.addEventListener("click",  b5Value );
// document.addEventListener("click",  b6Value );
// document.addEventListener("click",  b7Value );
// document.addEventListener("click",  b8Value );
// document.addEventListener("click",  b9Value );

function won(e){
  var box1 = document.getElementById("b1").value;
  var box2 = document.getElementById("b2").value;
  var box3 = document.getElementById("b3").value;
  var box4 = document.getElementById("b4").value;
  var box5 = document.getElementById("b5").value;
  var box6 = document.getElementById("b6").value;
  var box7 = document.getElementById("b7").value;
  var box8 = document.getElementById("b8").value;
  var box9 = document.getElementById("b9").value;
  
  // Check if 'X' has Won
  if((box1 === "X") && (box2 === "X") && (box3 === "X")){    
    document.getElementById("print").innerText = "player X Won";
    
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  
  }
  else if((box1 === "X") && (box4 === "X") && (box7 === "X")){    
    document.getElementById("print").innerText = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box7 === "X") && (box8 === "X") && (box9 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box3 === "X") && (box6 === "X") && (box9 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box1 === "X") && (box5 === "X") && (box9 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box3 === "X") && (box5 === "X") && (box7 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box4 === "X") && (box5 === "X") && (box6 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }  
  else if((box2 === "X") && (box5 === "X") && (box8 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }  
  
  //Check if '0' has Won
  else if((box1 === "0") && (box2 === "0") && (box3 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box1 === "0") && (box4 === "0") && (box7 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box7 === "0") && (box8 === "0") && (box9 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box3 === "0") && (box6 === "0") && (box9 === "0")){    
    document.getElementById("print").innerText = "player 0 Won"; 
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box1 === "0") && (box5 === "0") && (box9 === "0")){    
    document.getElementById("print").innerText = "player 0 Won"
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box3 === "0") && (box5 === "0") && (box7 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box4 === "0") && (box5 === "0") && (box6 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
  }  
  else if((box2 === "0") && (box5 === "0") && (box8 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else{
    catsGame();
  }
}

//Insert Values

flag = 1;
function b1Value(){
 
  if(flag == 1){
      document.getElementById("b1").value = "X";
      document.getElementById("b1").className = "red";
      document.getElementById("b1").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b1").value = 0;
      document.getElementById("b1").disabled = true;
      flag = 1;
    }
}

function b2Value(){
 
  if(flag == 1){
      document.getElementById("b2").value = "X";
      document.getElementById("b2").className = "red";
      document.getElementById("b2").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b2").value = 0;
      document.getElementById("b2").disabled = true;
      flag = 1;
    }
}

function b3Value(){
 
  if(flag == 1){
      document.getElementById("b3").value = "X";
      document.getElementById("b3").className = "red";
      document.getElementById("b3").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b3").value = 0;
      document.getElementById("b3").disabled = true;
      flag = 1;
    }
}

function b4Value(){
 
  if(flag == 1){
      document.getElementById("b4").value = "X";
      document.getElementById("b4").className = "red";
      document.getElementById("b4").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b4").value = 0;
      document.getElementById("b4").disabled = true;
      flag = 1;
    }
}
function b5Value(){
 
  if(flag == 1){
      document.getElementById("b5").value = "X";
      document.getElementById("b5").className = "red";
      document.getElementById("b5").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b5").value = 0;
      document.getElementById("b5").disabled = true;
      flag = 1;
    }
}
function b6Value(){
 
  if(flag == 1){
      document.getElementById("b6").value = "X";
      document.getElementById("b6").className = "red";
      document.getElementById("b6").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b6").value = 0;
      document.getElementById("b6").disabled = true;
      flag = 1;
    }
}
function b7Value(){
 
  if(flag == 1){
      document.getElementById("b7").value = "X";
      document.getElementById("b7").className = "red";
      document.getElementById("b7").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b7").value = 0;
      document.getElementById("b7").disabled = true;
      flag = 1;
    }
}
function b8Value(){
 
  if(flag == 1){
      document.getElementById("b8").value = "X";
      document.getElementById("b8").className = "red";
      document.getElementById("b8").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b8").value = 0;
      document.getElementById("b8").disabled = true;
      flag = 1;
    }
}
function b9Value(){
 
  if(flag == 1){
      document.getElementById("b9").value = "X";
      document.getElementById("b9").className = "red";
      document.getElementById("b9").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b9").value = 0;
      document.getElementById("b9").disabled = true;
      flag = 1;
    }
}

function catsGame(){
  if(
    (document.getElementById("b1").value 
     && document.getElementById("b2").value
     && document.getElementById("b3").value 
     && document.getElementById("b4").value 
     && document.getElementById("b5").value 
     && document.getElementById("b6").value 
     && document.getElementById("b7").value 
     && document.getElementById("b8").value 
     && document.getElementById("b9").value) !== "" 
  
  ){
    document.getElementById("print").innerText = "It's a Cat's Game";
    reset();
  }
}

//Reset Game

function reset(){ 
  
   setTimeout(function(){location.reload();},2000);
   document.getElementById("b1").value = "";
   document.getElementById("b2").value = "";
   document.getElementById("b3").value = "";
   document.getElementById("b4").value = "";
   document.getElementById("b5").value = "";
   document.getElementById("b6").value = "";
   document.getElementById("b7").value = "";
   document.getElementById("b8").value = "";
   document.getElementById("b9").value = "";
  
}





// var div1 = document.getElementById("div1")
// var input1 = div1.querySelector("input")

// document.addEventListener("click", xClick , b1Value );
// document.addEventListener("click",  b2Value );
// document.addEventListener("click",  b3Value );
// document.addEventListener("click",  b4Value );
// document.addEventListener("click",  b5Value );
// document.addEventListener("click",  b6Value );
// document.addEventListener("click",  b7Value );
// document.addEventListener("click",  b8Value );
// document.addEventListener("click",  b9Value );

function won(e){
  var box1 = document.getElementById("b1").value;
  var box2 = document.getElementById("b2").value;
  var box3 = document.getElementById("b3").value;
  var box4 = document.getElementById("b4").value;
  var box5 = document.getElementById("b5").value;
  var box6 = document.getElementById("b6").value;
  var box7 = document.getElementById("b7").value;
  var box8 = document.getElementById("b8").value;
  var box9 = document.getElementById("b9").value;
  
  // Check if 'X' has Won
  if((box1 === "X") && (box2 === "X") && (box3 === "X")){    
    document.getElementById("print").innerText = "player X Won";
    
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  
  }
  else if((box1 === "X") && (box4 === "X") && (box7 === "X")){    
    document.getElementById("print").innerText = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box7 === "X") && (box8 === "X") && (box9 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box3 === "X") && (box6 === "X") && (box9 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box1 === "X") && (box5 === "X") && (box9 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box3 === "X") && (box5 === "X") && (box7 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }
  else if((box4 === "X") && (box5 === "X") && (box6 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }  
  else if((box2 === "X") && (box5 === "X") && (box8 === "X")){    
    document.getElementById("print").innerHTML = "player X Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player X Won");
     reset();
  }  
  
  //Check if '0' has Won
  else if((box1 === "0") && (box2 === "0") && (box3 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box1 === "0") && (box4 === "0") && (box7 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box7 === "0") && (box8 === "0") && (box9 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box3 === "0") && (box6 === "0") && (box9 === "0")){    
    document.getElementById("print").innerText = "player 0 Won"; 
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box1 === "0") && (box5 === "0") && (box9 === "0")){    
    document.getElementById("print").innerText = "player 0 Won"
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box3 === "0") && (box5 === "0") && (box7 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else if((box4 === "0") && (box5 === "0") && (box6 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
  }  
  else if((box2 === "0") && (box5 === "0") && (box8 === "0")){    
    document.getElementById("print").innerText = "player 0 Won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    alert("player 0 Won");
    reset();
  }
  else{
    catsGame();
  }
}

//Insert Values

flag = 1;
function b1Value(){
 
  if(flag == 1){
      document.getElementById("b1").value = "X";
      document.getElementById("b1").className = "red";
      document.getElementById("b1").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b1").value = 0;
      document.getElementById("b1").disabled = true;
      flag = 1;
    }
}

function b2Value(){
 
  if(flag == 1){
      document.getElementById("b2").value = "X";
      document.getElementById("b2").className = "red";
      document.getElementById("b2").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b2").value = 0;
      document.getElementById("b2").disabled = true;
      flag = 1;
    }
}

function b3Value(){
 
  if(flag == 1){
      document.getElementById("b3").value = "X";
      document.getElementById("b3").className = "red";
      document.getElementById("b3").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b3").value = 0;
      document.getElementById("b3").disabled = true;
      flag = 1;
    }
}

function b4Value(){
 
  if(flag == 1){
      document.getElementById("b4").value = "X";
      document.getElementById("b4").className = "red";
      document.getElementById("b4").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b4").value = 0;
      document.getElementById("b4").disabled = true;
      flag = 1;
    }
}
function b5Value(){
 
  if(flag == 1){
      document.getElementById("b5").value = "X";
      document.getElementById("b5").className = "red";
      document.getElementById("b5").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b5").value = 0;
      document.getElementById("b5").disabled = true;
      flag = 1;
    }
}
function b6Value(){
 
  if(flag == 1){
      document.getElementById("b6").value = "X";
      document.getElementById("b6").className = "red";
      document.getElementById("b6").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b6").value = 0;
      document.getElementById("b6").disabled = true;
      flag = 1;
    }
}
function b7Value(){
 
  if(flag == 1){
      document.getElementById("b7").value = "X";
      document.getElementById("b7").className = "red";
      document.getElementById("b7").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b7").value = 0;
      document.getElementById("b7").disabled = true;
      flag = 1;
    }
}
function b8Value(){
 
  if(flag == 1){
      document.getElementById("b8").value = "X";
      document.getElementById("b8").className = "red";
      document.getElementById("b8").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b8").value = 0;
      document.getElementById("b8").disabled = true;
      flag = 1;
    }
}
function b9Value(){
 
  if(flag == 1){
      document.getElementById("b9").value = "X";
      document.getElementById("b9").className = "red";
      document.getElementById("b9").disabled = true;
      flag = 0;
      }
    else {
      document.getElementById("b9").value = 0;
      document.getElementById("b9").disabled = true;
      flag = 1;
    }
}

function catsGame(){
  if(
    (document.getElementById("b1").value 
     && document.getElementById("b2").value
     && document.getElementById("b3").value 
     && document.getElementById("b4").value 
     && document.getElementById("b5").value 
     && document.getElementById("b6").value 
     && document.getElementById("b7").value 
     && document.getElementById("b8").value 
     && document.getElementById("b9").value) !== "" 
  
  ){
    document.getElementById("print").innerText = "It's a Cat's Game";
    reset();
  }
}

//Reset Game

function reset(){ 
  
   setTimeout(function(){location.reload();},2000);
   document.getElementById("b1").value = "";
   document.getElementById("b2").value = "";
   document.getElementById("b3").value = "";
   document.getElementById("b4").value = "";
   document.getElementById("b5").value = "";
   document.getElementById("b6").value = "";
   document.getElementById("b7").value = "";
   document.getElementById("b8").value = "";
   document.getElementById("b9").value = "";
  
}