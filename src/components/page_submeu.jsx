import React from "react";
import { Link } from "react-router-dom";
function page_submenu(){
    return(
        <>
        <div className="page_submenu">
            <ul>
                <li><Link className="subMenu_Home_link" to='/'>About Us</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Couses Sidebar Left</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Blog</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Blog Details Sidebar Right</Link></li>
                </ul>
                <ul>
                <li><Link className="subMenu_Home_link" to='/'>Contact us</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Events</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Blog sidebar Right</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Blog Details Sidebar Left</Link></li>
                </ul>
                <ul>
                <li><Link className="subMenu_Home_link" to='/'>Couses</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Events Sidebar Right</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Blog sidebar Left</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Donate</Link></li>
                </ul>
                <ul>
                <li><Link className="subMenu_Home_link" to='/'>Couses Sidebar Right</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Events Sidebar Left</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Blog Details</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>404</Link></li>
                </ul>
           
        </div>
        </>
    )
}  
export default page_submenu