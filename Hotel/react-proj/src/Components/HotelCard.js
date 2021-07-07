import React from "react";

const HotelCard = (props) => {
  const { hotel } = props;
  

  return(
    <div className= {"card"}>
      <div className={"content"}>
        <div className={"header"}>{hotel.name}</div>
        <div className={"meta"}>{hotel.stars}</div>
        <div className={"description"}>{hotel.price}</div>
        <div className={"description"}>{hotel.city}</div>
      </div>
      <div>
         <button class="ui primary button">
           <a href={"/BookNow"}>Book Now</a>
          </button>
      </div>
    </div>
  );
};

export default HotelCard;