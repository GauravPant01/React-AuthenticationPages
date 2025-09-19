import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    
      // redirect on button click
      navigate("/profile");
   
  };

  return (
    <div className="outermost">
    <div className="outer">
      <div className="inner">
        <span >
          <h1>Signin to your PopX Account</h1>
        </span>
        <h3 id="para1">Lorem ipsum dolor sit amet,</h3>
        <h3 id="para">consectetur adipisicing elit,</h3>
      </div>

      <div className="input-group">
        <label htmlFor="email"> Email Address </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    
    
  );
};

export default Login;
