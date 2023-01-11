import React, { useState } from "react";




function Signupcomponent() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordcheck, setPasswordcheck] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [State, setState] = useState("");
    const [District, setDistrict] = useState("");
    const [Nationality, setNationality] = useState("");
    const [Taluka, setTaluka] = useState("");
    const [Gender, setGender] = useState("");
    const [DateOfBirth, setDateOfBirth] = useState("");


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handlePasswordCheckChange = (e) => {
        setPasswordcheck(e.target.value);
    };
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };
    const handleStateChange = (e) => {
        setState(e.target.value);
    };
    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
    };
    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    };
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };
    const handleDateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value);
    };
    const handleTalukaChange = (e) => {
        setTaluka(e.target.value);
    };

    function next() {
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "block";
        document.getElementById("bar2").style.color = "#fc5c65";

    }
    function next2() {
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "block";
        document.getElementById("bar3").style.color = "#fc5c65";
    }
    function Previous() {
        document.getElementById("p1").style.display = "block";
        document.getElementById("p2").style.display = "none";
        document.getElementById("bar2").style.color = "deepskyblue";

    }
    function Previous2() {
        document.getElementById("p2").style.display = "block";
        document.getElementById("p3").style.display = "none";
        document.getElementById("bar3").style.color = "deepskyblue";
    }

    var jsonData = {

        "state": State,
        "emailId": email,
        "district": District,
        "lastName": LastName,
        "mobileNumber": MobileNumber,
        "firstName": FirstName,
        "nationality": Nationality,
        "taluka": Taluka,
        "gender": Gender,
        "dateOfBirth": DateOfBirth,
        "password": password

    }

    function handleClick() {
        if(password===passwordcheck){
        if (jsonData.emailId === "") {
            alert("emailId can't be empty")
            
        }
        else if(jsonData.password === ""){
            alert("password can't be empty")
        }
        else if(jsonData.firstName === ""){
            alert("firstName can't be empty")
        }
        else if(jsonData.lastName === ""){
            alert("lastName can't be empty")
        }
        else {
            fetch('http://localhost:8888/signup', {

                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(jsonData)

            })
        }
    }else{
        alert("Check Your password not maching ")
    }
    }

    return (
        <>
            <div className="signup">
                <div class="multilevel">
                    <form id="msform">
                        {/* <!-- progressbar --> */}
                        <ul id="progressbar">
                            <li id="bar1" style={{ color: "#fc5c65" }}>Account Setup</li>
                            <li id="bar2">Social Profiles</li>
                            <li id="bar3">Personal Details</li>
                        </ul>
                        {/* <!-- fieldsets --> */}
                        <fieldset id="p1">
                            <h2 class="fs-title">Create your account</h2>
                            <h3 class="fs-subtitle">This is step 1</h3>
                            <input type="text" value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your email" />
                            <input type="text" value={MobileNumber}
                                onChange={handleMobileNumberChange} placeholder="Mobile Number" />
                            <input type="password" value={password}
                                onChange={handlePasswordChange} placeholder="Enter your password" />
                            <input type="password" value={passwordcheck}
                                onChange={handlePasswordCheckChange} placeholder="Confirm your password" />
                            <input type="button" name="next" class="next action-button" value="Next" onClick={next} />
                        </fieldset>
                        <fieldset id="p2">
                            <h2 class="fs-title">Social Profiles</h2>
                            <h3 class="fs-subtitle">Your presence on the social network</h3>
                            <input type="text" value={Nationality}
                                onChange={handleNationalityChange} placeholder="Nationality" />
                            <input type="text" value={State}
                                onChange={handleStateChange} placeholder="State" />
                            <input type="text" value={District}
                                onChange={handleDistrictChange} placeholder="District" />
                            <input type="text" value={Taluka}
                                onChange={handleTalukaChange} placeholder="Taluka" />
                            <input type="button" name="previous" class="previous action-button" value="Previous" onClick={Previous} />
                            <input type="button" name="next" class="next action-button" value="Next" onClick={next2} />
                        </fieldset>
                        <fieldset id="p3">
                            <h2 class="fs-title">Personal Details</h2>
                            <h3 class="fs-subtitle">We will never sell it</h3>
                            <input type="text" value={FirstName}
                                onChange={handleFirstNameChange} placeholder="First Name" />
                            <input type="text" value={LastName}
                                onChange={handleLastNameChange} placeholder="Last Name" />
                            <input type="text" value={DateOfBirth}
                                onChange={handleDateOfBirthChange} placeholder="DOB" />
                            <input type="text" value={Gender}
                                onChange={handleGenderChange} placeholder="gender" />

                            <input type="button" name="previous" class="previous action-button" value="Previous" onClick={Previous2} />
                            <a class="submit action-button" target="_top" onClick={handleClick}>Submit</a>
                        </fieldset>
                    </form>
                </div>

            </div>















            {/* 
            <div className="container">
                <div className="row justify-content-md-center">
                    <h1>Create your account now </h1>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <input type="text" value={FirstName}
                            onChange={handleFirstNameChange} placeholder="First Name" />
                    </div>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <input type="text" value={LastName}
                            onChange={handleLastNameChange} placeholder="Last Name" />
                    </div>

                    <div className="grid">
                        <i className="fas fa-envelope-square" />
                        <input type="email" value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email" />
                    </div>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <input type="password" value={password}
                            onChange={handlePasswordChange} placeholder="Enter your password" />
                    </div>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <input type="text" value={MobileNumber}
                            onChange={handleMobileNumberChange} placeholder="Mobile Number" />
                    </div>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <label>DOB</label>
                        <input type="date" value={DateOfBirth}
                            onChange={handleDateOfBirthChange} placeholder="DOB" />
                    </div>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <label>Gender</label>
                        <input type="text" value={Gender}
                            onChange={handleGenderChange} placeholder="gender" />
                    </div>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <input type="text" value={Nationality}
                            onChange={handleNationalityChange} placeholder="Nationality" />
                    </div>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <input type="text" value={State}
                            onChange={handleStateChange} placeholder="State" />
                    </div>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <input type="text" value={District}
                            onChange={handleDistrictChange} placeholder="District" />
                    </div>
                    <div className="grid">
                        <i className="fas fa-key" />
                        <input type="text" value={Taluka}
                            onChange={handleTalukaChange} placeholder="Taluka" />
                    </div>
                    <button className="btn" onClick={handleClick}>Submit</button>
                </div>
            </div> */}
        </>

    );
}
export default Signupcomponent;