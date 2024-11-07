import React,{useEffect, useState} from "react";
import { Home_section_Img1, card_img_6, card_img_4,card_img_5 } from "../../link";

function What_wedo(){
    const card = [
        { name:"DONATE FOR EDUCATION", img: card_img_6},
        { name:"DONATE FOR EDUCATION", img: card_img_4},
        { name:"DONATE FOR EDUCATION", img: card_img_5},
    ];
//  const [count, setcount]=useState(0);
//   useEffect(()=>{
//     const intervalld= setInterval(() => {
//         setcount(prevCount=>prevCount+1)
//     }, 1000);
//     return ()=>clearInterval(intervalld)
//   },1000);
   
    return(
        <>
        <div className="container ">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <h2 className="fs">What We <span className="section_heading"> Do</span></h2>
                        <img src={Home_section_Img1} alt="" />
                        <p>We create events aiming to pear to the voice for children and gather for support. <br />
                            Please update with our events and confirm you presence.</p>
                    </div>
                </div>
                <div className="row">
                    {
                        card.map((item,index)=>(
                          <div className="col-lg-4 col-sm-12 pt-3" key={index}>
                        <div className="what_wedo_card_a">
                            <img src={item.img} alt="" />
                            <div className="what_wedo_card_b">
                                <h3 className="fs-5 fw-bold text-light">{item.name}</h3>
                            </div>
                        </div>
                    </div>
                      ))
                    }
                    
                </div>
                </div>
                <div>
                    {/* {count} */}
                    </div>
        </>
    )
}
export default What_wedo