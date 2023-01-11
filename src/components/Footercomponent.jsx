import MainLogo from "./pics/MainLogo.png";
function Footercomponent() {
    return (
        <>
            <section className="footer">
                <div className="horizontal_line" />
                <footer>
                    <div className="footer-container">
                        <div className="left-col">
                            <img src={MainLogo} alt className="logo" />
                            <div className="social-media">
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                            <p className="rights-text">
                                © 2022 Created By <b>NBM Groups</b> All Rights Reserved.
                            </p>
                        </div>
                        <div className="right-col">
                            <h1>
                                Be In <span style={{ fontSize: 25 }}>Our Touch</span>
                            </h1>
                            <div className="border" />
                            <p>Enter Your Email to get our news and updates.</p>
                            <form action className="newsletter-form">
                                <input type="text" className="txtb" placeholder="Enter Your Email" />
                                <input type="submit" className="btn" defaultValue="submit" />
                            </form>
                        </div>
                    </div>
                </footer>
                <div className="horizontal_line" />
            </section>

        </>
    )
} export default Footercomponent