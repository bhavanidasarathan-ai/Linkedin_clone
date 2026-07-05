// LOGIN

document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let email=document.getElementById("loginEmail").value.trim();

let password=document.getElementById("loginPassword").value;

let users=JSON.parse(localStorage.getItem("users")) || [];

let user=users.find(u=>u.email===email && u.password===password);

if(user){

localStorage.setItem("loggedInUser",JSON.stringify(user));

alert("Login Successful");

window.location.href="index.html";

}else{

alert("Invalid Email or Password");

}

});



// SIGNUP

document.getElementById("signupForm").addEventListener("submit",function(e){

e.preventDefault();

let firstName=document.getElementById("firstName").value.trim();

let lastName=document.getElementById("lastName").value.trim();

let email=document.getElementById("email").value.trim();

let password=document.getElementById("password").value;

let users=JSON.parse(localStorage.getItem("users")) || [];

let exists=users.find(user=>user.email===email);

if(exists){

alert("Account already exists.\nPlease Login.");

showLogin();

return;

}

users.push({

firstName:firstName,

lastName:lastName,

email:email,

password:password

});

localStorage.setItem("users",JSON.stringify(users));

alert("Registration Successful!");

document.getElementById("signupForm").reset();

showLogin();

});
