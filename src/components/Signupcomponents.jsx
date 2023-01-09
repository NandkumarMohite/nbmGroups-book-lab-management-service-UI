import React, { useState } from "react";




function Signupcomponent() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    return (
        <>
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
            </div>
        </>

    );
}
export default Signupcomponent;