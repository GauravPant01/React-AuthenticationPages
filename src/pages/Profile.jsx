import React from 'react'
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="class1">
        <h3>Accounts Settings</h3>
      </div>
      <div className="class2">
        <div className="leftdiv">
        <img src="/profileimage.jpg" alt="Profile" style={{ width: "100px",height:"80px", borderRadius: "50%" }} />
        </div>
        <div className="rightdiv">
          <p id="pararightdiv"><b>Marry Doe</b></p>
          <p>Marry@Gmail.com</p>
        </div>
      
      
      </div>
      <p id="bottom">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna andsly Aliquyam Erat, Sed Diam </p>
    
    <br/>
    <hr style={{ border: "none", borderTop: "2px dotted #ccc", margin: "1rem 0" }} />
    </div>
    
  )
}

export default Profile
