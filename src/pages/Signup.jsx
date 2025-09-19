import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [name, setName] = useState("Marry Doe");
  const [number, setNumber] = useState("Marry Doe");
  const [email, setEmail] = useState("Marry Doe");
  const [password, setPassword] = useState("Marry Doe");
  const [company, setCompany] = useState("Marry Doe");
  const [isAgency, setIsAgency] = useState("yes");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (name && number && email && password && company && isAgency) {
      console.log({ name, number, email, password, company, isAgency });
      navigate("/profile");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="outer" styles={{marginLeft:"20px"}}>
      
      <div className="inner" >
        <h1 style={{ width: "70%" }}>Create Your PopX Account</h1>
      </div>

      <div className="input-group">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" "
          required
        />
        <label htmlFor="name">
          Full Name{" "}
          <span style={{ color: "red" }} className="required">
            *
          </span>
        </label>
      </div>

      <div className="input-group">
        <input
          type="tel"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder=" "
          required
        />
        <label htmlFor="number">
          Phone Number{" "}
          <span style={{ color: "red" }} className="required">
            *
          </span>
        </label>
      </div>

      <div className="input-group">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
          required
        />
        <label htmlFor="email">
          Email Address{" "}
          <span style={{ color: "red" }} className="required">
            *
          </span>
        </label>
      </div>

      <div className="input-group">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
          required
        />
        <label htmlFor="password">
          Password{" "}
          <span style={{ color: "red" }} className="required">
            *
          </span>
        </label>
      </div>

      <div className="input-group">
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder=" "
          required
        />
        <label htmlFor="company">Company Name</label>
      </div>
      <span>
        Are you an Agency?{" "}
        <span style={{ color: "red" }} className="required">
          *
        </span>
      </span>

      <div className="radio-group" style={{ display: "flex", gap: "2rem" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <input
            type="radio"
            name="agency"
            value="yes"
            checked={isAgency === "yes"}
            onChange={(e) => setIsAgency(e.target.value)}
          />
          Yes
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <input
            type="radio"
            name="agency"
            value="no"
            checked={isAgency === "no"}
            onChange={(e) => setIsAgency(e.target.value)}
          />
          No
        </label>
      </div>

      <button
        onClick={handleSignup}
        style={{ backgroundColor: "blue", marginTop: "10rem" }}
      >
        Create Account
      </button>
      
    </div>
  );
};

export default Signup;
