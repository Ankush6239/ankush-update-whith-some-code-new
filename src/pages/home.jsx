import React, { useState, useEffect } from "react";
import Nav_bar from "../components/nav_bar";
import Home_carousel from "../components/Home_carousel";
import Home_section_a from "../components/Home_section_a";
import Home_card from "../components/home_card";
import { card_img_1, card_img_2, card_img_3 } from "../components/link";
import How_can_help from "../components/how_can_help";
import Our_Gallery from "../components/Our_Gallery";
import Count_Down from "../components/count_Down";
import OUR_VOLUNTEERS from "../components/OUR_VOLUNTEERS";
import WHAT_PEOPLE from "../components/WHAT_PEOPLE";
import LATEST_FROM_BLOG from "../components/LATEST_FROM_BLOG";
import OUR_SPONSORS from "../components/OUR _SPONSORS";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            <Nav_bar />
            <div>
                <Home_carousel />
            </div>
            <div>
                <Home_section_a />
            </div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <Home_card
                            img={card_img_1}
                            tittle="Children to get education"
                            para="Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus."
                            value="25000"
                            value2="50000"
                        />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <Home_card
                            img={card_img_2}
                            tittle="Bring Electric and Light"
                            para="Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus."
                            value="45000"
                            value2="90000"
                        />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <Home_card
                            img={card_img_3}
                            tittle="Water carrier items"
                            para="Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus."
                            value="35000"
                            value2="70000"
                        />
                    </div>
                </div>
            </div>
            <div>
                <How_can_help />
            </div>
            <div>
                <Our_Gallery />
            </div>
            <div>
                <Count_Down />
            </div>
            <div>
                <OUR_VOLUNTEERS />
            </div>
            <div>
                <WHAT_PEOPLE />
            </div>
            <div>
                <LATEST_FROM_BLOG />
            </div>
            <div>
                <OUR_SPONSORS />
            </div>
            <Footer />
            {isVisible && (
                <button onClick={scrollToTop} style={styles.backToTopButton}>
                    <FontAwesomeIcon icon={faAngleUp}/>
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
        // borderRadius: "50%",
        backgroundColor: "#0AAAA0",
        color: "white",
        border: "none",
        cursor: "pointer",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    },
};

export default Home;
