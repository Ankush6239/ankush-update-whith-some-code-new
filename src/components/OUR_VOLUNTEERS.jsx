import { useState } from "react";
import React from "react";
import { Home_section_Img1, OUR_VOLUNTEERS_img1,OUR_VOLUNTEERS_img2,OUR_VOLUNTEERS_img3, OUR_VOLUNTEERS_img4 } from "./link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGooglePlusG, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function OUR_VOLUNTEERS() {
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => {
      setOpen(!open);
    };

    const volunteers = [
      { name: "Farnado rotia", role: "Secretary", img: OUR_VOLUNTEERS_img1 },
      { name: "Serena sanion", role: "Secretary", img: OUR_VOLUNTEERS_img2 },
      { name: "Peterson smith", role: "Secretary", img: OUR_VOLUNTEERS_img3 },
      { name: "Anabari koy", role: "Secretary", img: OUR_VOLUNTEERS_img4 },
      // Add other volunteers here as objects
    ];

    return (
      <>
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-12 mt-5 text-center">
              <h2 className="fs">
                Our <span className="section_heading">Volunteers</span>
              </h2>
              <img src={Home_section_Img1} alt="" />
              <p className="pt-2">
                We create events aiming to be a voice for children and gather for support.
                <br />
                Please update with our events and confirm your presence.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            {volunteers.map((volunteer, index) => (
              <div key={index} className="col-lg-3 pt-2 col-sm-12">
                <div className="card_over ms-2">
                  <div className="card_volunteers text-center ">
                    <img src={volunteer.img} alt={volunteer.name} />
                    <div className={`our_volunteers2  ${open ? "show" : ""}`}>
                    <div className="d-flex">
                    <FontAwesomeIcon icon={faFacebookF} size="1x" className="ms-2 border border-light p-3" />
                    <FontAwesomeIcon icon={faTwitter} size="1x" className="ms-2 border border-light p-3" />
                    <FontAwesomeIcon icon={faGooglePlusG} size="1x" className="ms-2 border border-light p-3" />
                    </div>
                      <h4 onClick={handleToggle}>poor nature</h4>
                    </div>
                  </div>
                  
                </div>
                <div className="our_volunteers_p">
                <p className="mt-1 mb-0 fs-5 ">{volunteer.name}</p>
                  <p className="mt-1 mb-0">{volunteer.role}</p>
                  </div>
              </div>
            ))}
            
            
          </div>
        </div>
      </>
    );
}

export default OUR_VOLUNTEERS;
