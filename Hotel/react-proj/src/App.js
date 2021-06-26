import React from "react";
import {BrowserRouter as Router , Redirect, Route , Switch,} from "react-router-dom";
import "./App.css";
import Aboutus from "./Components/Aboutus";
import ContactUs from "./Components/Contactus";


const App =() => {
  return (
    <Router>
      <div className={"header"} id={"top"}>
        <h2>Hotel Booking</h2>
        
      </div>
      <Switch>
        <Route path={"/"}exact>
          <h1>homepage</h1>
        </Route>
        <Route path={"/signup"}>
          <h1>signup</h1>
        </Route>
        <Route path={"/login"}>
          <h1>login</h1>
        </Route>
        <Route path={"/about_us"}>
          < Aboutus />
        </Route>
        <Route path={"/contact_us"}>
          <ContactUs />
        </Route>
        <Route path={"/404"}>
          <h1>Page Not Found</h1>
        </Route>
        <Route path={"/**"}>
          <Redirect to={"/404"}/>
        </Route>
      </Switch>
      <footer className="footer">
        <div className="footerelements"><a href={"/about_us"}> About Us</a></div>
        <div className="footerelements"><a href={"/Contact_us"}> Contact Us</a></div>
        <div className="footerelements"><a href="#top">Back to Top</a></div>
        <div className="footerelements">copyright &copy; 2021-2030 Bookings.com .All rights reserved</div>
      </footer>
    </Router>
  );
}

export default App;
