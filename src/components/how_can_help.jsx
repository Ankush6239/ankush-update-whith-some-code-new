import React from "react";
import { how_can_help_img1, } from "./link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns,faMoneyBill1, faUsers } from '@fortawesome/free-solid-svg-icons';

function HowCanHelp() {
    return (
        <div className="container-fluid mt-5 pb-5" style={{ 
            backgroundImage: `url(${how_can_help_img1})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height:'auto',
        }}>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-lg-12 text-center text-light">
                        <h2 className="fw-bold">HOW CAN YOU HELP US?</h2>
                    </div>
                    <div className="col-lg-12 pt-2 text-center text-light">
                        <h3 className="fs-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero neque itaque repudiandae fugit corrupti voluptate eum 
                        </h3>
                    </div>
                </div>
                <div className="row pt-3 text-light">
                    <div className="col-lg-4 col-sm-12 text-center pb-4">
                        <div>
                        <FontAwesomeIcon icon={faBuildingColumns} size="3x" className="fabuild" />
                        <h3 className="fw-bold fs-5">Donator</h3>
                        <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                      
        <a href="#" className="carousel_btn ">DONATE</a>
  
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 text-center pb-4">
                        <div>
                        <FontAwesomeIcon icon={faUsers} size="3x" className="fabuild" />
                        <h3 className="fw-bold fs-5">Volunteer</h3>
                        <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                      
        <a href="#" className="carousel_btn">DONATE</a>
  
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 text-center pb-4">
                        <div>
                        <FontAwesomeIcon icon={faMoneyBill1} size="3x" className="fabuild" />
                        <h3 className="fw-bold fs-5">Funrising</h3>
                        <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                      
        <a href="#" className="carousel_btn">DONATE</a>
  
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default HowCanHelp;
