export const wishListReducer = (state,{type,payload})=>{
    console.log(state.wishList,payload)
    switch(type){
        case "ADD":
            const newWish = [...state.wishList,payload]
            return {...state,wishList:newWish}
        case "REMOVE":
            return {...state,wishList:state.wishList.filter(id=>id!==payload)}
        case "USER-WISHES":
            return {...state,wishList:[...payload]}
        default:
            return state
    }
}