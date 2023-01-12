import React, { Profiler } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLogo from "./pics/MainLogo.png";
import {  toast } from 'react-toastify'; 

function Headercomponent() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("UserInformation"));
    function signOut(){
       toast.success("Log out success")
        localStorage.clear();
        navigate("/")
    }
    function Profile(){
        navigate("/userprofile")
    }
    return (
        <>
            <nav className="nav">
                <div className="container">
                    <h1 className="logo">
                        <a href="/">
                            <img src={MainLogo} />
                        </a>
                    </h1>
                    <ul>
                        <li>
                            <a href="/" className="current">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Privacy-Policy </a>
                        </li>
                        {user != null && user != "" ? (
                            <>

                                {/* <li >
                                    {user.userType != "Admin" ? (
                                        <a onClick={() => AddToCart()}> Cart</a>) : (
                                        <a onClick={() => navigate("/contact/info")}>Career</a>
                                    )}
                                </li> */}

                                {/* <li>
                                    <a onClick={() => Booking()}> My Bookings</a>
                                </li> */}
                                <li>
                                    {/* <a href="">{user.firstName}</a> */}
                                    <a onClick={() =>Profile()}>Welcome {user.firstName}</a>
                                </li>
                                <li>
                                    <a onClick={() => signOut()}> LogOut</a>
                                    {/* <a> LogOut</a>  */}
                                </li>

                            </>
                        ) : (
                            <>
                                <li>
                                    <a onClick={() => navigate("/signuppage")}>Sign Up</a>
                                </li>
                                <li>
                                    <a onClick={() => navigate("/LogIn")}> Log in</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Headercomponent;