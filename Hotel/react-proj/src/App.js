import React,{useEffect,useState} from "react";
import {BrowserRouter as Router , Redirect, Route , Switch,} from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Homepage from "./Components/Homepage";
import BookNow from "./Components/BookNow";
import SingleHotel from "./Components/SingleHotel";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AdminLogin from "./Components/AdminLogin";

const App = () => {
  const [ user, setUser ] =useState({});
  const [booking , setbooking] = useState({});
  const[hotel , sethotel] = useState({});

   useEffect(() => {
    let savedUser = localStorage.getItem("user");
    if(savedUser && Object.keys(user).length === 0 ){
      setUser(JSON.parse(savedUser).user);
    }
  },[user]); 

  useEffect(() => {
    let savedHotel = localStorage.getItem("hotel");
    if(savedHotel && Object.keys(hotel).length === 0 ){
      setUser(JSON.parse(savedHotel).hotel);
    }
  },[hotel]); 

  useEffect(() => {
    let savedBooking = localStorage.getItem("booking");
    if(savedBooking && Object.keys(booking).length === 0 ){
      setUser(JSON.parse(savedBooking).booking);
    }
  },[booking]);

  return (
    <Router>
      <div className={"header"} id={"top"}>
        <Navbar />
      </div>
      <Switch>
        <Route path={"/"}exact>
          <Homepage  
              hotel = {hotel}
             setUserState={sethotel}/>
        </Route>
        <Route path={"/booking"}>
          <BookNow setUserState={setbooking}/>
        </Route>
        <Route path={"/Hotels/:slug"}exact>
          <SingleHotel />
        </Route>
       <Route path={"/signup"}>
          <Signup setUserState={setUser}/>
        </Route>
        <Route path={"/login"}>
          <Login setUserState={setUser}/>
        </Route>
        <Route path={"/about_us"}>
          < AboutUs />
        </Route>
        <Route path={"/contact_us"}>
          <ContactUs />
        </Route>
        <Route path={"/AdminLogin"}>
          <AdminLogin setUserState={setUser}/>
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
