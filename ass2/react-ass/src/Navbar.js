import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render(){
        return(
         <div>
            <h2 className={"navhead"}>Posts</h2>
            <div class="topnav">
                 <a class="active" href={"/"}>Home</a>
                 <a>Posts</a>
            </div>
            
        </div>
        )
    }
}


export default Navbar;