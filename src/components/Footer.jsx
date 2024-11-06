import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faWifi, faEnvelope, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <div className="container-fluid pt-5 mt-5" style={{ backgroundColor: "#000000e8" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h2> ABOUT US</h2>
                            <ul className="ul_a">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, id.</li>
                            </ul>
                            <h2>CONTACT US</h2>
                            <ul className="ul_b">
                                <li>Phone: 6239736671</li>
                                <li>Email: aryaankush205@gmail.com</li>
                                <li>Address: Mohali</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2>OUR PROJECT</h2>
                            <ul className="ul_2">
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Water Surve</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Education for all</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Treatment</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Food Serving</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Cloth</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Shelter Project</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2>QUICK LINK</h2>
                            <ul className="ul_2">
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Causes</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Projects</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Gallery</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Terms of Use</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Legal Disclaimer</li>
                                <li><FontAwesomeIcon icon={faGreaterThan} className="pe-2" /> Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2>NEWSLETTER</h2>
                            <ul className="ul_3">
                                <li>Select your newsletters, enter your email address, and click "Subscribe"</li>
                                <li>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Recipient's email" aria-label="Recipient's email" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" id="basic-addon2">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "black" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-2 text-light">
                           <span className=""> <p className="m-2">© 2024 Grant Mede with ❤️ by HasThemes   </p>
                           </span>
                        </div>
                        <div className="col-lg-6 mt-2">  
                            <span>
                            <div className="d-flex justify-content-end m-2 text-light">
    <FontAwesomeIcon icon={faFacebook} className="pe-2" />
    <FontAwesomeIcon icon={faTwitter} className="pe-2" />
    <FontAwesomeIcon icon={faGoogle} className="pe-2" />
    <FontAwesomeIcon icon={faWifi} className="pe-2" />
    <FontAwesomeIcon icon={faLinkedin} className="pe-2" />
    <FontAwesomeIcon icon={faDribbble} className="pe-2" />
</div>
                            </span>   
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
