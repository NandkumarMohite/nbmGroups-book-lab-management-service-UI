import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect } from "react";
import { wait } from '@testing-library/user-event/dist/utils';



// import React, { useState, useEffect } from "react";
function Userprofilecomponent() {

    const [User, setUser] = useState([]);
    const [email, setEmail] = useState("-");
    const [password, setPassword] = useState("-");
    const [passwordcheck, setPasswordcheck] = useState("-");
    const [FirstName, setFirstName] = useState("-");
    const [LastName, setLastName] = useState("-");
    const [MobileNumber, setMobileNumber] = useState("-");
    const [State, setState] = useState("-");
    const [District, setDistrict] = useState("-");
    const [Nationality, setNationality] = useState("-");
    const [Taluka, setTaluka] = useState("-");
    const [Gender, setGender] = useState("-");
    const [DateOfBirth, setDateOfBirth] = useState("-");
    const [UserID, setUserID] = useState("-");


    const [Religion, setReligion] = useState("-");
    const [BloodGrp, setBloodGrp] = useState("-");
    const [Address, setAddress] = useState("-");
    const [Pincode, setPincode] = useState("-");

    const [Sport, setSport] = useState("-");
    const [Indoor, setIndoor] = useState("-");
    const [Author, setAuthor] = useState("-");
    const [Novel, setNovel] = useState("-");
    const [Player, setPlayer] = useState("-");
    const [Hobiles, setHobiles] = useState("-");

    const [BookName, setBookName] = useState("-");
    const [DateTaken, setDateTaken] = useState("-");
    const [DateReturn, setDateReturn] = useState("-");




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
    const handlePincodeChange = (e) => {
        setPincode(e.target.value);
    };
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    const handleBloodGrpChange = (e) => {
        setBloodGrp(e.target.value);
    };
    const handleReligionChange = (e) => {
        setReligion(e.target.value);
    };
    const handleDateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value);
    };
    const handleTalukaChange = (e) => {
        setTaluka(e.target.value);
    };
    const handleSportChange = (e) => {
        setSport(e.target.value);
    };
    const handleIndoorChange = (e) => {
        setIndoor(e.target.value);
    };
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };
    const handlePlayerChange = (e) => {
        setPlayer(e.target.value);
    };
    const handleNovelChange = (e) => {
        setNovel(e.target.value);
    };
    const handleHobilesChange = (e) => {
        setHobiles(e.target.value);
    };

    var findhobies ={

        "userId":13
    };

    var jsonData = {

        "emailId": "sumit@gmail.com",
        "password": "Raju@2810"
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
                setUserID(Response.userId)
                setPassword(Response.password)
                setAddress(Response.address)
                setBloodGrp(Response.bloodGrp)
                setPincode(Response.pinCode)
                setReligion(Response.religion)

            })
        })

      
        
        fetch("http://localhost:8888/findhobies", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(findhobies)
        }).then((result) => {
            result.json().then((Response) => {
                setUser(Response);
               setSport(Response.sport);
               setIndoor(Response.indoor);
               setAuthor(Response.author);
               setNovel(Response.novel);
               setSport(Response.sport);
               setHobiles(Response.hobiles);
               setPlayer(Response.player);

            })
        })
    }, [])


   var jsonDataHobies={

     "userId":UserID,
	 "sport":Sport,
	 "indoor":Indoor,
	  "author":	Author,
	  "novel":Novel,
	  "player":Player,
	  "hobiles":Hobiles,

   }

    
  function handleClickHobies() {
    
    fetch('http://localhost:8888/addhobbies', {

      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(jsonDataHobies)

    }).then((result) => {
      result.json().then((Response) => {
        console.log(Response.Output);
       
        if (Response.Output == "Hobbies Added Success") {
       
          alert("Hi")
          localStorage.setItem('UserHobies', JSON.stringify(Response))
       
        } else {
          toast.error("Some thing wents wrong")
        }
      })
    })
  }



    return (
        <>

            <div classname="Profile" style={{ display: 'flex' }}>
                <form id="msform" style={{ marginLeft: '140px', marginRight: '0px' }}>
                    <fieldset id="p1">
                        <div className="student-profile py-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card shadow-sm">
                                            <div className="card-header bg-transparent text-center">
                                                <img
                                                    className="profile_img"
                                                    src="https://source.unsplash.com/600x300/?student"
                                                    alt="student dp"
                                                />
                                                <h2 class="fs-title">

                                                    <div className="page">
                                                        <div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={FirstName+" "+LastName} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px', fontSize: 'larger', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                        </div>
                                                    </div>


                                                </h2>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    <strong className="pr-1">User ID:</strong>{UserID}
                                                    
                                                    
                                                </p>
                                                <p className="mb-0">
                                                    <strong className="pr-1">Number of Book:</strong>4
                                                </p>
                                                <p className="mb-0">
                                                    <strong className="pr-1">Table Number:</strong>54
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card shadow-sm">
                                            <div className="card-header bg-transparent border-0">
                                                <h3 className="mb-0">
                                                    General Information
                                                </h3>
                                            </div>
                                            <div className="card-body pt-0">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th width="30%">Email Id</th>
                                                            <td width="2%">:</td>
                                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={email} onChange={handleEmailChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                        </div></td>
                                                        </tr>
                                                        <tr>

                                                            
                                                            <th width="30%">Mobile Number</th>
                                                            <td width="2%">:</td>
                                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={MobileNumber} onChange={handleMobileNumberChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                        </div></td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Password</th>
                                                            <td width="2%">:</td>
                                                            <td><div className="field field_v1">
                                                        <input type="password" id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={password} onChange={handlePasswordChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Gender</th>
                                                            <td width="2%">:</td>
                                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Gender} onChange={handleGenderChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Religion</th>
                                                            <td width="2%">:</td>
                                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Religion} onChange={handleReligionChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">blood</th>
                                                            <td width="2%">:</td>
                                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={BloodGrp} onChange={handleBloodGrpChange}  style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <form id="msform" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <fieldset id="p1">
                        <h2 class="fs-title">Address</h2>
                        <h3 class="fs-subtitle">you can fill the remaining one</h3>
                        <div className="student-profile py-4">
                            <div className="card-body pt-0">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th width="30%">Nationality</th>
                                            <td width="2%">:</td>
                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Nationality} onChange={handleNationalityChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                        </tr>
                                        <tr>
                                            <th width="30%">State</th>
                                            <td width="2%">:</td>
                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={State} onChange={handleStateChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                        </tr>
                                        <tr>
                                            <th width="30%">District</th>
                                            <td width="2%">:</td>
                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={District} onChange={handleDistrictChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Taluka</th>
                                            <td width="2%">:</td>
                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Taluka} onChange={handleTalukaChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Address</th>
                                            <td width="2%">:</td>
                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Address} onChange={handleAddressChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Pin Code</th>
                                            <td width="2%">:</td>
                                            <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Pincode} onChange={handlePincodeChange} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div>
                                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </fieldset>
                </form>
                <div className="blocking" style={{ display: 'block' }}>
                    <form id="msform" style={{ marginLeft: '0px', marginRight: '0px' }}>
                        <fieldset id="p1">
                            <h2 class="fs-title">Hobbies</h2>
                            <h3 class="fs-subtitle">you can fill the remaining one</h3>
                            <div className="student-profile py-4">
                                <div className="card-body pt-0">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th width="30%">Sport</th>
                                                <td width="2%">:</td>
                                                <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Sport} onChange={handleSportChange}  style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div>
                                                            </td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Indoor</th>
                                                <td width="2%">:</td>
                                                <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Indoor} onChange={handleIndoorChange}  style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Author</th>
                                                <td width="2%">:</td>
                                                <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Author} onChange={handleAuthorChange}  style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Novel</th>
                                                <td width="2%">:</td>
                                                <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Novel} onChange={handleNovelChange}  style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Player</th>
                                                <td width="2%">:</td>
                                                <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Player} onChange={handlePlayerChange}  style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                            </tr>
                                            <tr>
                                                <th width="30%">hobiles</th>
                                                <td width="2%">:</td>
                                                <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={Hobiles} onChange={handleHobilesChange}  style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div>
                                                            </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <button onClick={handleClickHobies}>update</button>
                                    {/* <input type="Button" onClick={handleClickHobies} >Update</input> */}
                                </div>

                            </div>
                        </fieldset>
                    </form>





                    <form id="msform" style={{ marginLeft: '-100%', marginRight: '0px', marginTop: '-7%' }}>
                        <fieldset id="p1" style={{ paddingLeft: '85px', paddingRight: '85px', paddingBottom: '32px', width: '100px' }}>
                            <h2 class="fs-title">Book History</h2>
                            <h3 class="fs-subtitle">You can find your last 3 book history here</h3>
                            <div className="student-profile py-4">
                                <div className="card-body pt-0" style={{width:"530px"}}>
                                    <div className="blokingtable" style={{ display: 'inline-flex' }}>
                                        <table className="table table-bordered" >
                                            <tbody>
                                                <tr>
                                                    <th width="30%">Book Name</th>
                                                    <td width="2%">:</td>
                                                    <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={BookName} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">DateTaken</th>
                                                    <td width="2%">:</td>
                                                    <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={DateTaken} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">DateReturn</th>
                                                    <td width="2%">:</td>
                                                    <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={DateReturn} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                                </tr>



                                            </tbody>

                                        </table>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th width="30%">Book Name</th>
                                                    <td width="2%">:</td>
                                                    <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={BookName} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">DateTaken</th>
                                                    <td width="2%">:</td>
                                                    <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={DateTaken} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">DateReturn</th>
                                                    <td width="2%">:</td>
                                                    <td><div className="field field_v1">
                                                        <input id="first-name" className="field__input" placeholder="e.g. Stanislav"
                                                         value={DateReturn} style={{border: 'none', borderRadius: '0px', 
                                                         marginBottom: '0px', padding: '0px',height:'24px', 
                                                         textAlign: 'center', fontWeight: 'bold',
                                                         fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}} />                                                            <span className="field__label-wrap" aria-hidden="true">
                                                            </span>
                                                            </div></td>
                                                </tr>



                                            </tbody>

                                        </table>
                                    </div>
                                </div>

                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

        </>
    )
} export default Userprofilecomponent;