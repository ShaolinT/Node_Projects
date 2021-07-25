const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    // setTimeout(function(){ 
    //     window.location.href = "/login";
    // }, 3000); 
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    // setTimeout(function(){ 
    //     window.location.href = "/signup";
    // }, 3000); 
	container.classList.add("right-panel-active");
    
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
