export const filterReducer = (state,{type,payload})=>{
    switch(type){
        case "SET-PRICE":
            return {...state,price:payload}
        case "BEDROOMS":
            return {...state,numberOfBedRooms:payload}
        case "BATHROOM":
            return {...state,numberOfBathRooms:payload}
        case "BEDS":
            return {...state,numberOfBeds:payload}
        case "TYPE":
            return {...state,propertyType:payload}
        case "RATING":
            return {...state,rating:payload}
        case "FILTERED-DATA":
            return {...state,filteredData:payload}
        case "CLEAR":
            return {
                ...state,
                numberOfBedRooms: null,
                numberOfBeds: null,
                numberOfBathRooms: null,
                propertyType: null,
                rating: null,
                price: null,
                filteredData:null
                }
        default:
            return state
    }
}