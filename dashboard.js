let user=JSON.parse(localStorage.getItem("loggedInUser"));

if(user==null){

window.location.href="login.html";

}

document.addEventListener("DOMContentLoaded",function(){

let name=document.querySelector(".profile-card h2");

if(name){

name.innerHTML=user.firstName+" "+user.lastName;

}

});
