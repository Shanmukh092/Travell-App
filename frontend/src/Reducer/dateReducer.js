export const dateReducer = (state,{type,payload})=>{
    switch(type){
        case "OPEN_SEARCH":
            return {...state,isSearchOpen:!state.isSearchOpen}
        case "CLOSE":
            return {...state,isFilterOpen:false,isSearchOpen:false,isUser:false}
        case "CHECK-IN":
            return {...state,checkInDate:payload}
        case "CHECK-OUT":
            return {...state,checkOutDate:payload}
        case "DESTINATION":
            if(payload!='') return {...state,destination:payload}
            else return {...state,destination:"",searchesHotels:null}
        case "GUEST":
            return {...state,guests:payload}
        case "SEARCH-RESULTS":
            return {...state,searchesHotels:payload}
        case "OPEN-FILTER":
            return {...state,isFilterOpen:true}
        case "CLOSE-FILTER":
            return {...state,isFilterOpen:false}
        case "USER":
            return {...state,isUser:true}
        default:
            return  state
    }
}