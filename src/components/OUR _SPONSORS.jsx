import React from "react";
import { Home_section_Img1, OUR_SPONSOR_logo1,OUR_SPONSOR_logo2,OUR_SPONSOR_logo3,OUR_SPONSOR_logo4,OUR_SPONSOR_logo5 } from "./link";
function OUR_SPONSORS(){
    return(
        <>
        <div className="container">
        <div className="row">
            <div className="col-lg-12 mt-5 text-center">
            <h2 className="fs">OUR<span className="section_heading"> SPONSORS</span></h2>
            <img src={Home_section_Img1} alt="" />
            {/* <p className="pt-2 ">We create events aiming to pear to the voice for children and gather for support. <br/>
            Please update with our events and confirm you presence.</p> */}
            </div>

            </div>
            <div className="row">
                <div className="col">
                    <img src={OUR_SPONSOR_logo1} className="our_suponsers_logo p-2 mt-4 mb-4 border border-dark " alt="" />
                </div>
                <div className="col">
                    <img src={OUR_SPONSOR_logo2} className="our_suponsers_logo p-2 mt-4 mb-4 border border-dark " alt="" />
                </div>
                <div className="col">
                    <img src={OUR_SPONSOR_logo3} className="our_suponsers_logo p-2 mt-4 mb-4 border border-dark " alt="" />
                </div>
                <div className="col">
                    <img src={OUR_SPONSOR_logo4} className="our_suponsers_logo p-2 mt-4 mb-4 border border-dark " alt="" />
                </div>
                <div className="col">
                    <img src={OUR_SPONSOR_logo2} className="our_suponsers_logo p-2 mt-4 mb-4 border border-dark " alt="" />
                </div>
                <div className="col">
                    <img src={OUR_SPONSOR_logo5} className="our_suponsers_logo p-2 mt-4 mb-4 border border-dark " alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default OUR_SPONSORS