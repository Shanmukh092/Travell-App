import axios from "axios";
export const wishListHandller  = (hotelId,phone,type,wishDispatch)=>{
    console.log(hotelId)
    if(type=="add"){
        axios.post("http://localhost:8080/api/wish/add-wish",{
            hotelId,phone
        }).then((response)=>wishDispatch({
            type:"USER-WISHES",
            payload:response.data.listOfHotels
        }))
        .catch(()=>console.log("failed"));
    }
    else if(type=="delete"){
        axios.post(`http://localhost:8080/api/wish/remove-wish/${hotelId}`,{
            phone
        }).then((response)=>wishDispatch({
            type:"USER-WISHES",
            payload:response.data.listOfHotels
        }))
        .catch(()=>console.log("failed"))
    }
    else{
        axios.get("http://localhost:8080/api/wish/get-all-wish-list-hotels",{
            params: { phone }
        }).then((response)=>wishDispatch({
            type:"USER-WISHES",
            payload:response.data.listOfHotels
        }))
        .catch(()=>console.log("error"))
    }
}