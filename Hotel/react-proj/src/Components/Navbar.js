import React, { Component } from 'react';
import "../css/Navbar.css";

class Navbar extends Component {
    render(){
        return(
         <div>
            <h2 className={"navhead"}>Hotel Booking</h2>
            <div class="topnav">
                 <a class="active" href={"/"}>Home</a>
                 <a href={"/about_us"}>About</a>
                 <a href={"/Hotels"}>Hotels</a>
                 <a href={"/login"}>Login</a>
                 <input type="text" placeholder="Search.." />
            </div>
            
        </div>
        )
    }
}


export default Navbar;