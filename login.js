document
.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("loginEmail").value;

let password=document.getElementById("loginPassword").value;

let users=JSON.parse(localStorage.getItem("users")) || [];

let user=users.find(u=>u.email===email && u.password===password);

if(user){

localStorage.setItem("loggedInUser",JSON.stringify(user));

alert("Login Successful");

window.location.href="index.html";

}
else{

alert("Invalid Email or Password");

}

});
