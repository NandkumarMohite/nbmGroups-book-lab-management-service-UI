import './useIf.css';
import Hotels from './pics/mainBacelemet.jpg'
import { hydrate } from 'react-dom';
import React, { useState, useEffect } from "react";
import userEvent from '@testing-library/user-event';
function Userinformationcomponent() {
    const [User, setUser] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8888/getbooks", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },

        }).then((result) => {
            result.json().then((Response) => {
                setUser(Response);

            })
        })
        fetch("http://localhost:8888/getbooks", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },

        }).then((result) => {
            result.json().then((Response) => {
                setUser(Response);

            })
        })
    }
        , [])

    return (
        <>
            <div style={{ marginTop: "10%" }}>
                <h1>Phylosopy</h1>
                <div className="allbooks" style={{}}>
                {
                    User.map(
                        User =>
                        
                            <tr key={User.bookId}>
                               
                                <figure className="movie">
                                    <div className="movie__hero">
                                        <img src={Hotels} alt="Rambo" className="movie__img" />
                                    </div>
                                    <div className="movie__content">
                                        <div className="movie__title">
                                            <h1 className="heading__primary">{User.bookName} <i className="fas fa-fire" /></h1>
                                            <div className="movie__tag movie__tag--1">#{User.typeOfBook}</div>
                                            <div className="movie__tag movie__tag--2">#{User.subTypeOfBook}</div>
                                        </div>
                                        <p className="movie__description">
                                           {User.bookInformation}
                                        </p>
                                        <div className="movie__details">
                                            <p className="movie__detail"><span className="icons icons-red"><i className="fas fa-camera-retro" /> </span>{User.bookAuthorName}</p>
                                            <p className="movie__detail"><span className="icons icons-grey"><i className="fas fa-clock" /> </span>{User.expectedTime}</p>
                                            <p className="movie__detail"><span className="icons icons-yellow"><i className="fas fa-file-invoice-dollar" />
                                            </span>{User.rentPrize}Rent Per Month</p>
                                        </div>
                                    </div>
                                    <div className="movie__price">{User.prize}</div>
                                </figure>
                               
                            </tr>
                    )
                }
                 </div>
            </div>

            <div style={{ marginTop: "5%" }}>

                <figure className="movie">
                    <div className="movie__hero">
                        {/* <img src="https://www.mensjournal.com/wp-content/uploads/2018/10/rambo-main-3.jpg?quality=86&strip=all" alt="Rambo" className="movie__img" /> */}
                    </div>
                    <div className="movie__content">
                        <div className="movie__title">
                            <h1 className="heading__primary">First Blood Part II <i className="fas fa-fire" /></h1>
                            <div className="movie__tag movie__tag--1">#action</div>
                            <div className="movie__tag movie__tag--2">#thriller</div>
                        </div>
                        <p className="movie__description">
                            First Blood is a 1982 American action film directed by Ted Kotcheff, and co-written by Sylvester
                            Stallone, who also stars as Vietnam War veteran John Rambo.
                        </p>
                        <div className="movie__details">
                            <p className="movie__detail"><span className="icons icons-red"><i className="fas fa-camera-retro" /> </span>Buzz
                                Feitshans</p>
                            <p className="movie__detail"><span className="icons icons-grey"><i className="fas fa-clock" /> </span>1h 33m</p>
                            <p className="movie__detail"><span className="icons icons-yellow"><i className="fas fa-file-invoice-dollar" />
                            </span>$12.52 crores</p>
                        </div>
                    </div>
                    <div className="movie__price">$12.56</div>
                </figure>
            </div>
        </>

    )
} export default Userinformationcomponent