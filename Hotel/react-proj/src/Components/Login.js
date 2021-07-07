import React , {useState} from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";
import "../css/login.css"

/* class Login extends React.Component */
const Login = (props) => {
   
    const {setUserState} = props;
    const history = useHistory();
    const [credentials, setCredentials] = useState({});


    const onSubmitClick = async (event) => {
        event.preventDefault();
        await Axios.post("http://localhost:8080/login", credentials) 
        .then(({data}) => {
            console.info(data);
            localStorage.setItem("user",JSON.stringify(data));
            setUserState(data.user);
            history.push("/");
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.info("Login API call Finished");
        });
    };

        return(
            <body className={"body"}>
                            <div className={"section"}>
                <form className={"ui form"}>
                    <h3>Login</h3>
                        <div className={"two-fields"}>
                            <div className={"field"}>
                                <input type={"email"}
                                   placeholder={"Email : "}
                                   onChange={(e) => {
                                       setCredentials({
                                           
                                               ...credentials,
                                               email : e.target.value,
                                           
                                       });
                                   }}/>
                            </div>
                            <div className={"field"}>
                                <input type={"password"}
                                   placeholder={"Password"}
                                   onChange={(e) => {
                                       setCredentials({
                                           
                                               ...credentials,
                                               password : e.target.value,
                                           
                                       });
                                   }}/>
                            </div>
                        </div>
                        <div className={"signuplink"}>
                            <a href={"/signup"}>Don't have an account? Sign up Now</a>
                        </div>
                        <button className={"ui primary button"} onClick={onSubmitClick}>
                            Submit
                        </button>
                </form>
            </div>
            </body>

        )
    
}

export default Login;