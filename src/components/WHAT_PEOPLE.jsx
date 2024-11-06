import React from "react";
import { Home_section_Img1, WHAT_PEOPLE_bgimg, WHAT_PEOPLE_carouselImg } from "./link";


function WHAT_PEOPLE() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${WHAT_PEOPLE_bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center", 
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5 text-center">
              <h2 className="fs text-light">WHAT PEOPLE SAY</h2>
              <img src={Home_section_Img1} alt="Section Image" />
              <p className="pt-2 text-light">
                We create events aiming to be a voice for children and gather for
                support.
                <br />
                Please update with our events and confirm your presence.
              </p>
            </div>
          </div>
         <div className="row">
         
    {/* <!-- Carousel Start --> */}
    <div id="peopleSayCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            {/* <!-- First Slide --> */}
            <div class="carousel-item active">
                <div class="text-center">
                    <img src={WHAT_PEOPLE_carouselImg} class="rounded-circle mb-3" alt="Person Image"/>
                    <p className="peopleSayCarousel_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius semper ligula, et molestie metus.</p>
                    <h5 className="peopleSayCarousel_p">Zafari Jamith</h5>
                    <h6 className="peopleSayCarousel_p">Director</h6>
                </div>
            </div>
            {/* <!-- Second Slide --> */}
            <div class="carousel-item">
                <div class="text-center">
                    <img src={WHAT_PEOPLE_carouselImg}  class="rounded-circle mb-3" alt="Person Image"/>
                    <p className="peopleSayCarousel_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius semper ligula, et molestie metus.</p>
                    <h5 className="peopleSayCarousel_p">Zafari Jamith</h5>
                    <h6 className="peopleSayCarousel_p">Director</h6>
                </div>
            </div>
            {/* <!-- Third Slide --> */}
            <div class="carousel-item">
                <div class="text-center">
                    <img src={WHAT_PEOPLE_carouselImg} class="rounded-circle mb-3 " alt="Person Image"/>
                    <p className="peopleSayCarousel_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius semper ligula, et molestie metus.</p>
                    <h5 className="peopleSayCarousel_p">Zafari Jamith</h5>
                    <h6 className="peopleSayCarousel_p">Director</h6>
                </div>
            </div>
        </div>

        {/* <!-- Carousel Controls --> */}
        <a class="carousel-control-prev" href="#peopleSayCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#peopleSayCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    {/* <!-- Carousel End --> */}
         </div>
        </div>
      </div>
    </>
  );
}

export default WHAT_PEOPLE;
