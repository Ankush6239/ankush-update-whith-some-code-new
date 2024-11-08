import React from "react";
import { Home_section_Img1, about_content_are_img2 } from "../../link";
function about_content_are(){
    return(
        <>
        <div className="container overflow-hidden">
            <div className="row">
                <div className="col-lg-6 col-sm-12 pt-5">
                <div className="text-center">
            <h2 className="fs">About<span className="section_heading"> Us</span></h2>
            <img src={Home_section_Img1} alt=""  />
           
        </div>
                <p className=" mt-3">
                Lorem ipsum dolor sit amet, consectetur adipi elit. Cras mollis ligula mauris, vitae porttitor nunc maximus Integer fringilla place acLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris, vitae porttitor nunc maximus a. Integer fringilla placerat leo ac bibendum. Quisque et neque eu magna cula pellentesque. Nam volutpat scelerisque tellus, vel ultrices arcu blandit vel. Curabitur semper cursus nulla, et accumsan nisl eleifend a. Integer vitae nisi quis arcu vehicula pharetra ac blandit purus. <br/>
                <br/>

Etiam ut erat et nisi pulvinar accumsan. Curabitur imperdiet at sem vel elementum. Sed eget vestibulum purus. Quisque rhoncus leo vitae sem scelerisque varius.
                </p>
                <button className="content_are_btn">BECOME A VOLUNTEER</button>
                </div>
                <div className="col-lg-6 pt-5">
            <div className="mt-2" >
                <img src={about_content_are_img2} alt="" />
            </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default about_content_are;