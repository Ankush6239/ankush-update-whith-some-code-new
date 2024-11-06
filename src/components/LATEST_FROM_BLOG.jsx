import React from "react";
import {Home_section_Img1} from "./link";
import Home_card from "./home_card";
import {card_img_2,} from "./Link";
function LATEST_FROM_BLOG(){
    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col-lg-12 mt-5 text-center">
            <h2 className="fs">LATEST<span className="section_heading"> FROME BLOG</span></h2>
            <img src={Home_section_Img1} alt="" />
            <p className="pt-2 ">We create events aiming to pear to the voice for children and gather for support. <br/>
            Please update with our events and confirm you presence.</p>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-4 col-sm-12">
            <Home_card
    img={card_img_2}
    tittle= "Bring Electric and Light"
    para="Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus."
    value="45000"
    value2="90000" />
                </div>
                <div className="col-lg-4 col-sm-12">
            <Home_card
    img={card_img_2}
    tittle= "Bring Electric and Light"
    para="Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus."
    value="45000"
    value2="90000" />
                </div>
                <div className="col-lg-4 col-sm-12">
            <Home_card
    img={card_img_2}
    tittle= "Bring Electric and Light"
    para="Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus."
    value="45000"
    value2="90000" />
                </div>
            </div>
        </div>
        </>
    )

}
export default LATEST_FROM_BLOG

