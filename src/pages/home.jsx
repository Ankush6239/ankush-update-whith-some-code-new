import React from "react";
import Nav_bar from "../components/nav_bar";
import Home_carousel from "../components/Home_carousel"
import Home_section_a from "../components/Home_section_a";
import Home_card from "../components/home_card";
import { card_img_1,card_img_2,card_img_3 } from "../components/link";
import How_can_help from "../components/how_can_help";
import Our_Gallery from "../components/Our_Gallery";
import Count_Down from "../components/count_Down";
import OUR_VOLUNTEERS from "../components/OUR_VOLUNTEERS";
import WHAT_PEOPLE from "../components/WHAT_PEOPLE";
import LATEST_FROM_BLOG from "../components/LATEST_FROM_BLOG";
import OUR_SPONSORS from "../components/OUR _SPONSORS";
import Footer from "../components/Footer";
function home(){
    return(
<>
<Nav_bar/>
<div>
    <Home_carousel/>
 </div>   
 <div>
    <Home_section_a/>
 </div>
<div className="container pt-5">
  <div className="row">
    <div className="col-lg-4  col-sm-12">
    <Home_card
    img={card_img_1}
    tittle= "Children to get education"
    para="Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus." 
    value="25000"
    value2="50000"
    />
    

</div>
<div className="col-lg-4 col-sm-12">
     <Home_card
    img={card_img_2}
    tittle= "Bring Electric and Light"
    para="Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus."
    value="45000"
    value2="90000" />
    </div>
    <div className="col-lg-4 col-sm-12">
     <Home_card
    img={card_img_3}
    tittle= "Water carrier items"
    para="Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus."
    value="35000"
    value2="70000"
    />
    </div>
    </div>
    
    </div>
    <div>
        <How_can_help/>
    </div>
    <div>
        <Our_Gallery/>
    </div>
    <div>
        <Count_Down/>
    </div>
    <div>
        <OUR_VOLUNTEERS/>
    </div>
    <div>
        <WHAT_PEOPLE/>
    </div>
    <div>
        <LATEST_FROM_BLOG/>
    </div>
    <div>
        <OUR_SPONSORS/>
    </div>
    <Footer/>
</>
    )
}

export default home
// git code updation code
// echo "# ankush-update-whith-some-code-new" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Ankush6239/ankush-update-whith-some-code-new.git
// git push -u origin main

// …or push an existing repository from the command line

// git remote add origin https://github.com/Ankush6239/ankush-update-whith-some-code-new.git
// git branch -M main
// git push -u origin main