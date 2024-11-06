import React from "react";
import { about_title_area } from "../../link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Importing useNavigate from React Router

function TitleArea() {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Function to navigate back to the Home page
    const goToHome = () => {
        navigate("/"); // Replace with the correct route if your Home page is located elsewhere
    };

    return (
        <>
            <div
                className="container-fluid p-5 pb-0"
                style={{
                    backgroundImage: `url(${about_title_area})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container pt-5">
                    <div className="row p-5">
                        <div className="col-lg-12 text-center text-light">
                            <h2 className="fs-1 fw-bold">About Us</h2>
                            <h6 className="fw-bold">Home /<span className="section_heading"> About Us</span></h6>
                        </div>
                    </div>
                    <div className="row pb-2">
                        <div className="col-lg-12 d-flex justify-content-end">
                            {/* Updated button with onClick handling navigation */}
                            <button className="tittle_button" onClick={goToHome}>
                                <FontAwesomeIcon
                                    icon={faArrowLeft}
                                    size="1.5x"
                                    style={{
                                        color: "#0AAAA0", 
                                        paddingRight:"3px",
                                        fontWeight:"bolder !important",
                                    }}
                                />
                                 Back To Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TitleArea;
