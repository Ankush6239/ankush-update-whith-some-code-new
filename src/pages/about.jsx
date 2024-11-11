import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav_bar from "../components/nav_bar";
import Footer from "../components/Footer";
import Title_are from "../components/About/about/tiitle_are";
import About_content_are from "../components/About/about/About_content_are";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"; // Import icon here
import What_wedo from "../components/About/about/what_wedo";
import About_counter from "../components/About/about_counter";
import OUR_VOLUNTEERS from "../components/OUR_VOLUNTEERS";
import OUR_SPONSORS from "../components/OUR _SPONSORS";
import We_think_about from "../components/About/about/we_think_about";
function About() {
    const [isVisible, setVisibility] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Nav_bar />
            <div className="title_area">
                <Title_are
                 Title="About Us"
                 Head="About Us"
                />
            </div>
            <div className="content">
                <About_content_are />
            </div>
            <div className="what-we-do">
                {/* <What_we_do/> */}
                <What_wedo/>
            </div>
            <div className="aboutCounter">
                <About_counter/>
            </div>
            <div>
                <OUR_VOLUNTEERS/>
            </div>
            <div>
                <We_think_about/>
            </div>
            <div>
                <OUR_SPONSORS />
            </div>
            <Footer />
            {isVisible && (
                <button onClick={scrollToTop} style={styles.backToTopButton}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
            )}
        </>
    );
}

const styles = {
    backToTopButton: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
        fontSize: "18px",
        backgroundColor: "#0AAAA0",
        color: "white",
        border: "none",
        cursor: "pointer",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    },
};

export default About;
