import React from 'react'
import { useNavigate} from "react-router-dom";
import "../styles/LandingScreen.css";

const LandingScreen = () => {
    const navigate = useNavigate();
  return (
    
    <div className="container">
      <div className="internal">  
      <h2 id="heading">Welcome to PopX</h2>
      <p id="par8">Lorem ipsum dolor sit amet,</p>
      <p id="par9">consectetur adipisicing elit,</p>
      </div> 
      <button id="b1" onClick={() => navigate("/signup")}>Create Account</button>
      <button id="b2" onClick={() => navigate("/login")}>Already Registered? Login</button>
    </div>
    
  )
}

export default LandingScreen
