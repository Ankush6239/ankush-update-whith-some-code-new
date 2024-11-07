import React from "react";
import { WHAT_PEOPLE_bgimg } from "../link";
import Aboutcounter_2 from "./aboutcounter_2";
function about_counter(){
   const counters=[
    {start:100, end:1250, name:"Finish Projects"},
    {start:100, end:1400, name:"Creative Materials"},
    {start:100, end:1450, name:"Experience Materials"},
    {start:100, end:1700, name:"Professinal awards"},
   ]
    return(
        <>
        <div className="container-fluid mt-3"   style={{
          backgroundImage: `url(${WHAT_PEOPLE_bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center", 
        }}>
        <div className="container pt-2 pb-2">
            <div className="row p-5 m-5">
                {
                    counters.map((counter, index)=>(
<div className="col-lg-3 col-sm-12 text-center " key={index}> 
       <Aboutcounter_2 start={counter.start} end={counter.end}  /> 
        <h5>{counter.name}</h5>
       </div>
                    ))
                }
       
            </div>
        </div>
        </div>
        </>
    )
}
export default about_counter;