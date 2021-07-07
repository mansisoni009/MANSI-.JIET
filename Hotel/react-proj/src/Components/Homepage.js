import React, { useEffect, useState } from "react";
import introimg from"../Images/introimg.jpg";
import introimg2 from"../Images/intro2.jpg";
import Axios from "axios"
 import HotelCard from "../Components/HotelCard"
import "../css/homepage.css"

const Homepage = (props) => {
    const {hotel} = props;
    const [ hotels , setHotel] = useState({});
 
    useEffect(() => {
        if(Object.keys(hotel).length>0) {
            const fetchHotels = async () => {
                await Axios.get(`http://localhost:8080/admin/get-hotel/${hotel._id}`)
                .then(({data : foundHotels}) => {
                    console.info("All hotels were found.");
                     console.info(foundHotels);
                    setHotel(foundHotels);
                })
                .catch((error) => {
                    console.error("some error occured", error);
                });     
            }     
            fetchHotels();

        }  
    },[hotel]); 
      const renderCards =  hotels.forEach((hotel,index) => {
        return <HotelCard hotel={hotel} key={index}/>;
    }); 

    return(
        <div>
            <img src={introimg} alt="hotel" className={"image"}/>
            <img src={introimg2} alt="hotel" className={"image"}/>

            <div className={"section"}>
                <div className="ui cards">{renderCards}</div>
            </div>   
        </div>
    )
}

export default Homepage;