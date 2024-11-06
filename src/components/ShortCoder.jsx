import React from "react";
import { Link } from "react-router-dom";
function ShortCodes(){
    return(
        <>
         <div className="page_submenu">
            <ul>
                <li><Link className="subMenu_Home_link" to='/'><b>ShortCodes 1</b></Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Causes</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Contact Form</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Hero Static</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Hero Static Left</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Hero Static Rightt</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Keep In Touch</Link></li>
                </ul>
                <ul>
                <li><Link className="subMenu_Home_link" to='/'><b>ShortCodes 2</b></Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Latest Blog</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Google Map</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Our Gallery</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Our Sponsors</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Our Volunteers</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Page Breadcumb Right</Link></li>
                </ul>
                <ul>
                <li><Link className="subMenu_Home_link" to='/'><b>ShortCodes 3</b></Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Page Title Center</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Page Title Left</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Page Title Right</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Pagination</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Services</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Testimonials</Link></li>
                </ul>
                <ul>
                <li><Link className="subMenu_Home_link" to='/'><b>ShortCodes 4</b></Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Up Comming Events</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Video Gallery col 2</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Video Gallery col 3</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>Video Gallery col 4</Link></li>
                <li><Link className="subMenu_Home_link" to='/'>What we do</Link></li>
                </ul>
           
        </div>
        </>
    )
}
export default ShortCodes