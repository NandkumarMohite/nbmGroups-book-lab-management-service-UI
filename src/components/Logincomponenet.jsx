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
          alert("Signed In");
          localStorage.setItem('UserInformation', JSON.stringify(Response))
          window.location.reload()
        }
      })
    })
  }



  return (
    <>
      <form id="msform" style={{marginTop:"200px"}}>
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
      {/* <div className="LoginPage">
          <div className="main">
            <p className="sign" align="center">
              Login{" "}
            </p>
            <form className="form1">
              <input
                className="un "
                type="email"
                align="center"value={email}
                onChange={handleEmailChange} placeholder="Email Id" 
              />
              <input
                className="pass"
                type="password"
                align="center"value={password}
                onChange={handlePasswordChange} placeholder="Password"
              />
              <a className="submit" align="center" onClick={handleClick}>
                Login
              </a>
              <p className="forgot" align="center">
                <a href="#">Forgot Password?</a>
              </p>
              <a href="#"></a>
            </form>
          </div>
          <a href="#"></a>
        </div>
         */}

    </>
  );
}

export default Logincomponenet;