import React, { useState } from "react";
import { headerLogo } from "./link";
import { Link } from "react-router-dom";
import DropDown from "../components/drowpDown"
import BlogSubMenu from "./blog_submenu";
import PageSubMenu from "./page_submeu";
import ShortCodesSubmenu from "./ShortCoder";
function nav_bar(){
  const [isDrowpDown,setDrowpdown]= useState({
    dropdown1:false,
    dropdown2:false,
    dropdown3:false,
    dropdown4:false,


  });
  const handleMouseOn =(dropdown)=>{
    setDrowpdown((pevdefault)=>({
      ...pevdefault,
      [dropdown]:true,
    }));
  
  }
  const handleMouseOff =(dropdown)=>{
    setDrowpdown((pevdefault)=>({
      ...pevdefault,
      [dropdown]:false,
    }));
  } 
  
    return(
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container my-1">
    <a class="navbar-brand" href="#"><img src={headerLogo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-5">
        <div className="menu"
        onMouseEnter={()=>handleMouseOn('dropdown1')}
        onMouseLeave={()=>handleMouseOff ('dropdown1')}

        >      <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/" > Home </Link>
          {isDrowpDown.dropdown1 && <DropDown/>}
        </li>
        </div>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="GrantFoundation/aboutus/" > About </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/" > Project </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/GrantFoundation/Our_events/" > Events </Link>
        </li>
        <div
        className="menu"
        onMouseEnter={()=>handleMouseOn('dropdown2')}
        onMouseLeave={()=>handleMouseOff('dropdown2')}
        >
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/" > Blog </Link>
          {isDrowpDown.dropdown2 && <BlogSubMenu/>}
        </li>
        </div>
        <div
        className="menu"
        onMouseEnter={()=>handleMouseOn('dropdown3')}
        onMouseLeave={()=>handleMouseOff('dropdown3')}
        >
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/" > Page </Link>
          {isDrowpDown.dropdown3 && <PageSubMenu/>}
        </li>
        </div>
        <div
        className="menu"
        onMouseEnter={()=>handleMouseOn('dropdown4')}
        onMouseLeave={()=>handleMouseOff('dropdown4')}
        >
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/" > ShortCodes </Link>
          {isDrowpDown.dropdown4 && <ShortCodesSubmenu/> }
        </li>
        </div>
        <li class="nav-item d-none-sm">
          <Link class="navbar_btn  " aria-current="page" to="/" > DONATE </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
    )
};
export default nav_bar