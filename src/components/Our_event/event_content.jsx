import React from "react";
import { our_event_img1, our_event_img2, our_event_img3, our_event_img4           } from "../link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock,faLocationDot } from "@fortawesome/free-solid-svg-icons";

function event_content(){
    const Eventcard=[
        { img:our_event_img1, card_title:"EVENT TITLE GOES HERE", card_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", },
        { img:our_event_img2, card_title:"EVENT TITLE GOES HERE", card_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", }
        ,{ img:our_event_img3, card_title:"EVENT TITLE GOES HERE", card_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", },
        { img:our_event_img4, card_title:"EVENT TITLE GOES HERE", card_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", }
    
    ]
    return(
        <>
        <div className="container mt-5">
            <div className="row">
              {Eventcard.map((item,index)=>(
 <div className="col-lg-12 col-sm-12" key={index}>
 <div class="mb-3" >
<div class="row g-0">
<div class="col-lg-5 col-sm-12 ">

<img src={item.img} class="img-fluid rounded-start ourevent_img" 

/>

<div className="text-center our_date">
<p className="fw-bold">
19 <br />
MAR
</p>
</div>
</div>
<div class="col-lg-7">
<div class="card-body bg-white">
<h5 class="card-title fw-bold">{item.card_title}</h5>
<p class="card-text"><small class="text-muted pe-3"><FontAwesomeIcon icon={faClock} className="pe-2" />10:00 - 05:00</small><small class="text-muted "><FontAwesomeIcon icon={faLocationDot} className="pe-2" />New Jorgia</small></p>
<p class="card-text">{item.card_text} </p>
<div>
<button className="content_are_btn rounded">READ MORE</button>
</div>
</div>
</div>
</div>
</div>
 </div>
              )
            )}
               
            </div>
        </div>
        </>
    )
}

export default event_content