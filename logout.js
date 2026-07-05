function logout() {

    localStorage.removeItem("loggedInUser");

    
    alert("You have been logged out successfully!");

    window.location.href = "login.html";
}
