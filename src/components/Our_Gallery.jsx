import React from "react";
import {Home_section_Img1} from "./link";
import Tab_panel from "./Tab_panel";

function Our_Gallery(){
return(
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 mt-5 text-center">
            <h2 className="fs">OUR <span className="section_heading">Gallery</span></h2>
            <img src={Home_section_Img1} alt="" />
            <p className="pt-2 ">We create events aiming to pear to the voice for children and gather for support. <br/>
            Please update with our events and confirm you presence.</p>
            </div>
            <div className="row">
            <Tab_panel/>
            </div>
        </div>
    </div>
    </>
)
}
export default Our_Gallery