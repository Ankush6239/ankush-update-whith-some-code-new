import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Gallery_Img,Gallery_Img2,Gallery_Img3,Gallery_Img4,Gallery_Img5,Gallery_Img6,Gallery_Img7,Gallery_Img8, } from "./link";
import { useState } from "react";
function Tab_panel(){
  const [open, setOpen] = useState(false);

  // Toggle the open state
  const handleToggle = () => {
    setOpen(!open);
  };
    return(
        <>
        <div className="container pt-5">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Charity</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Nature</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="video-tab" data-bs-toggle="tab" data-bs-target="#video" type="button" role="tab" aria-controls="video" aria-selected="false">Video</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="children-tab" data-bs-toggle="tab" data-bs-target="#children" type="button" role="tab" aria-controls="children" aria-selected="false">Children</button>
  </li>
</ul>

<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="row pt-3">
      <div className="col-lg-3  pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img2} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img3} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img4} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3  pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img5} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img6} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img7} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img8} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className="row ">
      <div className="col-lg-3  pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img2} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img3} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img4} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <div className="row ">
      <div className="col-lg-3  pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img2} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img3} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img4} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">  <div className="row ">
      <div className="col-lg-3  pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img2} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img3} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img4} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>
    </div>
    </div>
  <div class="tab-pane fade" id="children" role="tabpanel" aria-labelledby="children-tab">
  <div className="row ">
      <div className="col-lg-3  pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img2} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img3} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>

      <div className="col-lg-3 pt-3 ">
        <div className="card_tab_panel text-center">
          <img src={Gallery_Img4} alt="" />
          <div className={`card_tab_panel2 ${open ? "show" : ""}`} >
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          <h4 onClick={handleToggle}>poor nature</h4>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    </>
    )
}
export default Tab_panel