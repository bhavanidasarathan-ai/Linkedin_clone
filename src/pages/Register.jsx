import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";


function Register(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const register = () => {

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);

    alert("Registered Successfully");

    navigate("/login");

  };


  return(

    <div className="auth-page">

      <div className="auth-card">

        <h2>Create Account</h2>


        <input
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />


        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button onClick={register}>
          Register
        </button>


      </div>

    </div>

  );

}

export default Register;