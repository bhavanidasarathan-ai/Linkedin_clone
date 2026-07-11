import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";


function Login(){

const navigate = useNavigate();


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");



const login = ()=>{


const savedEmail = localStorage.getItem("email");

const savedPassword = localStorage.getItem("password");


if(email === savedEmail && password === savedPassword){

  alert("Login Successful");

  navigate("/dashboard");

}

else{

  alert("Invalid Login Details");

}


};



return(

<div className="auth-page">


<div className="auth-card">


<h2>Login</h2>


<input

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>


<input

type="password"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

/>


<button onClick={login}>
Login
</button>


</div>


</div>


);


}


export default Login;