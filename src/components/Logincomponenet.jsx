import React, { useState } from "react";

function Logincomponenet() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  var jsonData = {

    "emailId": email,
    "password": password
  }
function handleClick(){
  fetch('http://localhost:8888/login', {

    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(jsonData)

  })
}


  return (
    <>
    
      <div className="container">
        <div className="row justify-content-md-center">
          <h1>Login </h1>
          <div className="grid">
            <i className="fas fa-key" />
            <input type="emailId" value={email}
              onChange={handleEmailChange} placeholder="Email Id" />
          </div>
          <div className="grid">
            <i className="fas fa-key" />
            <input type="Passsword" value={password}
              onChange={handlePasswordChange} placeholder="Password" />
          </div>
          <button className="btn" onClick={handleClick}>Submit</button>
        </div>
      </div>
      
    </>
  );
}

export default Logincomponenet;