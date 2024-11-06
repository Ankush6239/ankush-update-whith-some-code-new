import React from "react";
import { Home_section_Img1 } from "./link";

function Home_section_a(){
    return(
<>
<div className="container mt-5">
    <div className="row">
        <div className="col-lg-12 col-sm-12 text-center">
            <h2 className="fs">OUR <span className="section_heading">CAUSES</span></h2>
            <img src={Home_section_Img1} alt="" />
            <h3 className=" fs-5">Our charity help those people who have no hope</h3>
        </div>
    </div>
</div>
</>
    )
}
export default Home_section_a