import React, { useState, useEffect } from "react";

function Deleteuserinformationcomponent() {

    let emailId = 'n.b.mohite88@gmail.com';
    let password2 = 'Raju@2810';

    const [User, setUser] = useState([]);
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


    var jsonData = {

        "emailId": emailId,
        "password": password2
    }

    var deletejsonData = {

        "emailId": email,
        "password": password
    }


    useEffect(() => {

        fetch("http://localhost:8888/findingtheuser", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(jsonData)
        }).then((result) => {
            result.json().then((Response) => {
                setUser(Response);
                setFirstName(Response.firstName)
                setLastName(Response.lastName)
                setEmail(Response.emailId)
                setPassword(Response.pasetPassword)
                setMobileNumber(Response.mobileNumber)
                setState(Response.state)
                setDistrict(Response.district)
                setTaluka(Response.taluka)
                setDateOfBirth(Response.dateofBirth)
                setNationality(Response.nationality)
                setGender(Response.gender)

            })
        })
    }, [])

    function deleteUser() {
        fetch("http://localhost:8888/deleteuser", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(jsonData)
        }).then((result) => {
            result.json().then((Response) => {
                if (Response.emailId == null) {
                    alert("Delted")
                    window.location.reload()
                }
            })
        })
    }



    return (
        <>
            <>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>Create your account now </h1>
                        <div className="grid">
                            <i className="fas fa-key" />
                            <input type="text" value={FirstName}
                            />
                        </div>
                        <div className="grid">
                            <i className="fas fa-key" />
                            <input type="text" value={LastName}
                                placeholder="Last Name" />
                        </div>

                        <div className="grid">
                            <i className="fas fa-envelope-square" />
                            <input type="email" value={email}
                                placeholder="Enter your email" />
                        </div>
                        <div className="grid">
                            <i className="fas fa-key" />
                            <input type="text" value={MobileNumber}
                                placeholder="Mobile Number" />
                        </div>
                        <div className="grid">
                            <i className="fas fa-key" />
                            <label>DOB</label>
                            <input type="date" value={DateOfBirth}
                                placeholder="DOB" />
                        </div>
                        <div className="grid">
                            <i className="fas fa-key" />
                            <label>Gender</label>
                            <input type="text" value={Gender}
                                placeholder="gender" />
                        </div>
                        <div className="grid">
                            <i className="fas fa-key" />
                            <input type="text" value={Nationality}
                                placeholder="Nationality" />
                        </div>
                        <div className="grid">
                            <i className="fas fa-key" />
                            <input type="text" value={State}
                                placeholder="State" />
                        </div>
                        <div className="grid">
                            <i className="fas fa-key" />
                            <input type="text" value={District}
                                placeholder="District" />
                        </div>
                        <div className="grid">
                            <i className="fas fa-key" />
                            <input type="text" value={Taluka}
                                placeholder="Taluka" />
                        </div>
                        <button className="btn" onClick={deleteUser}>Delete User</button>
                    </div>
                </div>
            </>
        </>
    )
} export default Deleteuserinformationcomponent;