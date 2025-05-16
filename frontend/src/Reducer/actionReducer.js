export const actionReducer = (state,{type,payload})=>{
    switch(type){
        case "MENU":
            return {...state,openWishList:!state.openWishList,isDetailsOpen:false}
        case "DETAILS":
            return {...state,isDetailsOpen:!state.isDetailsOpen,openWishList:false}
        case "CLEAR":
            return {...state,isDetailsOpen:false,openWishList:false}
        default:
            return state
    }
}