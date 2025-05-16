import axios from "axios"
export const singUpHandller = (name,email,password,phone,authDispatch,form)=>{
    axios.post("http://localhost:8080/auth/register",{
        name,phone,email,password
    }).then((response)=>{
        authDispatch({
            type:"RESPONSE",
            payload:response.data.ok
        })
        if(response.data.ok){
                authDispatch({
                type:"USER-DETAILS",
                payload:form
            })
        }
    })
    .catch((error)=>console.log(error))
}