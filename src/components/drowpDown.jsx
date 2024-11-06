import React from "react";
import { Link } from "react-router-dom";
function drowpDown(){
    return(
        <>
       <div className="drowupDown">
        <ul>
           <li><Link className="subMenu_Home_link" to="/">menu 1</Link></li>
           <li><Link className="subMenu_Home_link" to="/">menu 2</Link></li>
           <li><Link className="subMenu_Home_link" to="/">menu 3</Link></li>
           <li><Link className="subMenu_Home_link" to="/">menu 4</Link></li>
           <li><Link className="subMenu_Home_link" to="/">menu 5</Link></li>
           <li><Link className="subMenu_Home_link" to="/">menu 6</Link></li>
        </ul>
       </div>
        
        </>
    )
}

export default drowpDown