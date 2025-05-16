import axios from "axios";
import { useAuth } from "../contex/auth-contex/AuthProvider";
export const loginHandller = (phone,password,authDispatch)=>{
    console.log(phone,password)
    axios.post("http://localhost:8080/auth/login",{
        phone,password
    }).then((response)=>{
        const { userData, token } = response.data;
        if (userData && token) {
        authDispatch({
            type: "USER-DETAILS",
            payload: userData
        });
        authDispatch({
            type: "TOKEN",
            payload: token
        });
        console.log("Login success:", response);
        } else {
            window.alert("Login failed: missing user data or token");
        }
    })
    .catch(()=>window.alert("Invalid email/pass"))
}