export const detailsReducer = (state,{type,payload})=>{
    switch(type){
        case "HOTEL":
            return {...state,hotel:payload}
        case "DAYS":
            return {...state,numberOfDays:payload}
        case "SUCESS":
            return {...state,isSucess:true}
        case "CLEAR":
            return {...state,hotel:null,numberOfDays:null}
        default:
            return state
    }
}