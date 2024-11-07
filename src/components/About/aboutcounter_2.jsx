import React, {useEffect, useState} from "react";

function aboutcounter_2( {start, end, }){
    const [count, setcount]=useState(start);
    useEffect(()=>{
     const InterVald = setInterval(()=>{
        setcount(prevCount =>{
            if(prevCount>=end){
                clearInterval(InterVald);
                return prevCount;
             }
             return prevCount+1
        }
        )
     },0.1)
     return()=> clearInterval(InterVald);
    }, [end,0.1]);
    return(
        <>
        <div>
         <h2 className="fs-1 fw-bold pb-3 about_counter">{count}%</h2>
         </div>
        </>
    )
}

export default aboutcounter_2