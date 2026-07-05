document
.getElementById("registerForm")
.addEventListener("submit", function(e){

e.preventDefault();

let firstName=document.getElementById("firstName").value.trim();

let lastName=document.getElementById("lastName").value.trim();

let email=document.getElementById("email").value.trim();

let password=document.getElementById("password").value;

let confirmPassword=document.getElementById("confirmPassword").value;

let location=document.getElementById("location").value.trim();

let terms=document.getElementById("terms").checked;

if(firstName==""){
alert("Enter First Name");
return;
}

if(lastName==""){
alert("Enter Last Name");
return;
}

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Invalid Email");
return;
}

if(password.length<6){
alert("Password should contain minimum 6 characters");
return;
}

if(password!=confirmPassword){
alert("Passwords do not match");
return;
}

if(!terms){
alert("Accept Terms & Conditions");
return;
}

let users=JSON.parse(localStorage.getItem("users")) || [];

let exists=users.find(user=>user.email===email);

if(exists){
alert("Email already registered");
return;
}

users.push({
firstName,
lastName,
email,
password,
location
});

localStorage.setItem("users",JSON.stringify(users));

alert("Registration Successful");

window.location.href="login.html";

});
