import React , {useState} from "react";
import Axios from "axios";
import "../css/login.css"
import {useHistory} from "react-router-dom";

const BookNow = (props) => {
    const history =  useHistory();
    const { setUserState } =props ;
    const [booking, setbooking] = useState({}); 

    const onSubmitClick = async (event) => {
        event.preventDefault();
        console.log(booking);
        await Axios.post("http://localhost:8080/booking", booking)
        .then(({data}) => {
            console.info(data);
            localStorage.setItem("user",JSON.stringify(data));
            setUserState(data);
            history.push("/");
        })
        .catch((error) => {
            console.error(error);
        })
    };

    return(
        <body className={"body"}>
                <div className={"section"}>
                <form className={"ui form"}>
                    <h3>Book Now</h3>
                        <div className={"two-field"}>
                            <div className={"field"}>
                                <label>UserName</label>
                                <input type={"text"}
                                   placeholder={"UserName"}
                                   onChange={(e) => {
                                       setbooking({
                                           
                                               ...booking,
                                               userName : e.target.value,
                                           
                                       });
                                   }}
                                />
                            </div>
                            <div className={"field"}>
                                <label>Email</label>
                                <input type={"email"}
                                   placeholder={"Email"}
                                   onChange={(e) => {
                                       setbooking({
                                           
                                               ...booking,
                                               email : e.target.value,
                                           
                                       });
                                   }}/>
                            </div>
                            <div className={"field"}>
                                <label>Hotel Name</label>
                                <input type={"text"}
                                   placeholder={"Hotel Name"}
                                   onChange={(e) => {
                                       setbooking({
                                           
                                               ...booking,
                                               HotelName : e.target.value,
                                           
                                       });
                                   }}/>
                            </div>
                        </div>
                        <div className={"field"}>
                            <label>Guests</label>
                             <input type={"text"}
                                   placeholder={"Guests"}
                                   onChange={(e) => {
                                       setbooking({
                                           
                                               ...booking,
                                               guests : e.target.value,
                                           
                                       });
                            }}/>
                        </div>
                        <div className={"field"}>
                            <label>Check In</label>
                                <input type={"date"}
                                   placeholder={"Check In"}
                                   onChange={(e) => {
                                       setbooking({
                                           
                                               ...booking,
                                               checkIn : e.target.value,
                                           
                                       });
                                   }}/>
                        </div>
                        <div className={"field"}>
                            <label>Check Out</label>
                                <input type={"date"}
                                   placeholder={"Check Out"}
                                   onChange={(e) => {
                                       setbooking({
                                           
                                               ...booking,
                                               checkOut : e.target.value,
                                           
                                       });
                                   }}/>
                        </div> 
                        <div className={"field"}>
                            <label>Number Of Rooms</label>
                                <input type={"text"}
                                   placeholder={"Number Of Rooms"}
                                   onChange={(e) => {
                                       setbooking({
                                           
                                               ...booking,
                                               room : e.target.value,
                                           
                                       });
                                   }}/>
                        </div>
                        <button className={"ui primary button"} onClick={onSubmitClick}>
                            Submit
                        </button>
                </form>
                </div>
            </body>
    )
}
export default BookNow;