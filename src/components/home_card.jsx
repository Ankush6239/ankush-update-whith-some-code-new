import React from "react";

function Home_card(props) {
  return (
    <>
      <div className="card " style={{ width: "22rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body text-center ">
          <h5 className="card-title fs-5 fw-bold">{props.tittle}</h5>
          <p className="card-text">{props.para}</p>
        </div>
      
      </div>
      <div className="d-flex pb-4">
        <span className="pt-4">
          <div className="">
        <a href="#" className="carousel_btn card_btn">DONATE</a>
        </div>
        </span>
        <span className="pt-4 ps-5">
        $ {props.value} / ${props.value2}
        </span>
        </div>
    </>
  );
}

export default Home_card;
