import React, { useEffect, useState } from "react";
import Nav_bar from "../components/nav_bar";
import Footer from "../components/Footer";
import Event_content from "../components/Our_event/event_content";
import TitleArea from "../components/About/about/tiitle_are";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import OUR_SPONSORS from "../components/OUR _SPONSORS";

function our_event(){
    const [visibility, setVisibility]=useState(false);
    const toggleVisibility=()=>{
        if(window.pageYOffset > 200){
            setVisibility(true);
        }else{
            setVisibility(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', toggleVisibility);
        return ()=>{
            window.removeEventListener('scroll', toggleVisibility);
        }
    },[]);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return(
        <>
        <Nav_bar/>
       <div>
        <TitleArea
        Title=" Our Event"
        Head="Our Event"
        />
       </div>
<div>
    <Event_content/>
</div>
<div>
    <OUR_SPONSORS/>
</div>

        <Footer/>
        
        {visibility && (
            <button onClick={scrollToTop} style={styles.backToTopButton}>
                <FontAwesomeIcon icon={faAngleUp}/>
            </button>
        )}
        </>
    )
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

export default our_event