import React , {useState} from "react";
import Axios from "axios";
import "../css/login.css"
import {useHistory} from "react-router-dom";



const SignUp = (props) => {

    const history = useHistory();
    const { setUserState } = props ;
    const [user, setUser] = useState({});

    const onSubmitClick = async (event) => {
        event.preventDefault();
        console.log(user);
        await Axios.post("http://localhost:8080/signup", user)
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
                    <h3>SignUp</h3>
                        <div className={"two-field"}>
                            <div className={"field"}>
                                <input type={"text"}
                                   placeholder={"User Name"}
                                   onChange={(e) => {
                                       setUser({
                                           
                                               ...user,
                                               userName : e.target.value,
                                           
                                       });
                                   }}
                                />
                            </div>
                            <div className={"field"}>
                                <input type={"email"}
                                   placeholder={"Email"}
                                   onChange={(e) => {
                                       setUser({
                                           
                                               ...user,
                                               email : e.target.value,
                                           
                                       });
                                   }}/>
                            </div>
                            <div className={"field"}>
                                <input type={"password"}
                                   placeholder={"Password"}
                                   onChange={(e) => {
                                       setUser({
                                           
                                               ...user,
                                               password : e.target.value,
                                           
                                       });
                                   }}/>
                            </div>
                        </div>
                        <div className={"signuplink"}>
                            Sign Up Now!
                        </div>
                        <button className={"ui primary button"} onClick={onSubmitClick}>
                            Submit
                        </button>
                </form>
                </div>
            </body>
        )
    
}

export default SignUp;