export const authReducer = (state,{type,payload})=>{
    switch(type){
        case "USER-DETAILS":
            const {phone,name,email,password} = payload
            const newState = 
            {...state,name:name,email:email,password:password,phone:phone,isLoggedIn:true}
            return newState;
        case "RESPONSE":
            return {...state,response:payload}
        case "LOGOUT":
            return {...state,name:null,email:null,password:null,phone:null,isLoggedIn:false}
        case "TOKEN":
            return{...state,accessToken:payload}
        default:
            return state
    }
}