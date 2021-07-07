import React from "react";
import "../css/Contactus.css";
import contact from "../Images/contact.jpg"

const ContactUs = () => {
    return(
       <> 
        <img src={contact} alt="conatct us image"/>
        <table>
            <tr>
                <td>Mansi Soni</td>
                <td><a href="mailto: mansi.19jdai017@jietjodhpur.ac.in">mansi.19jdai017@jietjodhpur.ac.in</a></td>
            </tr>
            <tr>
                <td>Ananya Sharma</td>
                <td><a href="mailto: ananya.19jics012@jietjodhpur.ac.in">ananya.19jics012@jietjodhpur.ac.in</a></td>
            </tr>
            <tr>
                <td>Khushi Jhala</td>
                <td><a href="mailto : khushi.19jdai022@jietjodhpur.ac.in">khushi.19jdai022@jietjodhpur.ac.in</a></td>
            </tr>
        </table>
       </>
    );
};
export default ContactUs;