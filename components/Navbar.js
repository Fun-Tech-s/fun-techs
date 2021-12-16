import React, { useState } from 'react';
import Logo from './Logo';

function Navbar(props) {
    const [sidebar, setsidebar] = useState("0px");
    return (
        <div className='fixed-top white'>
            <div className="navigation-bar">
   <div className="nav-logo padding"><div className='padding'><Logo /></div></div>
   <div className="padding hide-small">
    <div className='row-flex padding'>
        <div>
        <input class="input bordered full-width height-40" placeholder="Search Courses." />
        </div>
        <div>
       <button className='button padding indigo text-white pointer height-40'>Search</button>
        </div>
    </div>
   </div>
     <div className="padding hide-medium-down">
        <div>
      <a href="#" className="lato text-black navbar-link">Courses</a>
      <a href="#" className="lato text-black navbar-link">About</a>
      <a href="#" className="lato text-black navbar-link">Team</a>
      <a href="#" className="lato text-black navbar-link">Login</a>
      <a href="#">
          <button className='button indigo text-white padding-left-20 padding-right-20'>Register <i class="fas fa-angle-right"></i></button>
      </a>
     </div>
 </div>

<div class="show-medium-down padding-20"><i class="fas fa-bars text-indigo pointer" onClick={()=>setsidebar("250px")}></i></div>

</div>

<div class="sidebar white card" style={{width:`${sidebar}`}}>
 <div className='relative'>
 <div class="text-right padding">
         <span class="close-sidebar text-xx-large text-black opacity-3 pointer lato" onClick={()=>setsidebar("0px")}>
             &times;
         </span>
     </div>
     <div>
        <center> <Logo /> </center>
     </div>
     <div className='row-flex padding'>
        <div>
        <input class="input bordered full-width height-40" placeholder="Search Courses." />
        </div>
        <div>
       <button className='button padding indigo text-white pointer height-40'>Search</button>
        </div>
    </div>
     <div class="padding">
         <div class="text-center padding navbar-link"><a href="#" class="">Courses</a></div>
         <div class="text-center padding navbar-link"><a href="#" class="">About</a></div>
         <div class="text-center padding navbar-link"><a href="#" class="">Free Courses</a></div>
         <div class="text-center padding navbar-link"><a href="#" class="">Link Four</a></div>
     </div>

  <div className=''>
      <div className='hr'></div>
  <div className='row'>
        <div  className="col sm-12 md-6 lg-6 padding">
        <a href="#">
          <button className='button border blue text-white full-width'>Login</button>
        </a>
        </div>
        <div className="col sm-12 md-6 lg-6 padding">
        <a href="/register">
          <button className='button indigo text-white full-width'>Register</button>
        </a>
        </div>
    </div> 
</div>  
 </div>


</div>

        </div>
    );
}

export default Navbar;