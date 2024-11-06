import React from "react";
import { Link } from "react-router-dom";
function blog_submenu(){
    return(
        <>
         <div className="drowupDown">
        <ul>
           <li><Link className="subMenu_Home_link" to="/">Blog</Link></li>
           <li><Link className="subMenu_Home_link" to="/">Blog Side Bar</Link></li>
           <li><Link className="subMenu_Home_link" to="/">Blog Side Bar Left</Link></li>
           <li><Link className="subMenu_Home_link" to="/">Blog Side Bar Right</Link></li>
           <li><Link className="subMenu_Home_link" to="/">Blog Side Bar Details Left</Link></li>
           <li><Link className="subMenu_Home_link" to="/">Blog Side Bar Details Right</Link></li>
        </ul>
       </div>
        </>
    )
}
export default blog_submenu