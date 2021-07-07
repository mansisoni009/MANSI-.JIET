import React from "react";
import "../css/aboutus.css"; 
import aboutUsImg from "../Images/aboutUsImg.jpg"
const Aboutus = () => {
    return(
        <div>
         <img src={aboutUsImg} alt="about us image"/>
         <p>
             This site is made by a team of three members Mansi Soni , Ananya Sharma and Khushi Jhala.
             We all are persuading Engineering from JIET Institute.
             The project is a Hotel Booking website.
         </p>,
         <p>
             Our Hotel Booking website , Rajasthan's travel platform , helps millions
            travelers each month make every trip their best trip.
            Travelers across the globe can use this site to
            browse hundreds of Hotels compare their prices and choose the best hotel 
            that suits them. It helps to find the best hotel in Rajasthan at cheap prices.
         </p>
        </div>

    );
}
export default Aboutus;