import React, { useState } from "react";
import { Home_carousel_1, Home_carousel_2,Home_carousel_3 } from "./link";

function HomeCarousel() {
  

  return (
<>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Home_carousel_1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <div className="carousel_caption_positon">
        <h2 className="fs-1 fw-bold">WE CAN HELP SOMEONE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ante commodo, dictum lectus suscipit. Quisque nec ullamcorper elit, nec fermentum metus</p>
        <button className="carousel_btn">Donate Now</button>    <button className="carousel_btn">Learn More</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Home_carousel_2}class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h2 className="fs-1 fw-bold">Second slide label</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ante commodo, dictum lectus suscipit. Quisque nec ullamcorper elit, nec fermentum metu</p>
        <button className="carousel_btn">Donate Now</button>    <button className="carousel_btn">Learn More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Home_carousel_1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h2 className="fs-1 fw-bold">Third slide label</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ante commodo, dictum lectus suscipit. Quisque nec ullamcorper elit, nec fermentum metu</p>
        <button className="carousel_btn">Donate Now</button>    <button className="carousel_btn">Learn More</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</>
  );
}

export default HomeCarousel;
