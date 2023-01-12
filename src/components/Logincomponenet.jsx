import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; 


function Logincomponenet() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

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
  function handleClick() {
    
    fetch('http://localhost:8888/findingtheuser', {

      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(jsonData)

    }).then((result) => {
      result.json().then((Response) => {
        if (Response.emailId != null) {
          console.log(Response.emailId)
          toast.success('Success Message')
          localStorage.setItem('UserInformation', JSON.stringify(Response))
          navigate("/")
        } else {
          toast.error("Don't have account please Signup")
        }
      })
    })
  }



  return (
    <>
      <div className="loginform">
        <form id="msform" style={{ marginTop: "200px" }}>
          <fieldset id="p1">
            <h2 class="fs-title">Create your account</h2>
            <h3 class="fs-subtitle">This is step 1</h3>
            <input type="text" value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email" />
            <input type="password" value={password}
              onChange={handlePasswordChange} placeholder="Enter your password" />
            <p className="forgot" align="center">
              <a href="#">Forgot Password?</a>
            </p>
            <a href="#"></a>
            <input type="button" name="Sign In" class="next action-button" value="Sign In" onClick={handleClick} />

          </fieldset>
        </form>
      </div>
          
    </>
  );
}

export default Logincomponenet;