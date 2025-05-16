import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios, { all } from 'axios'
import { useAuth } from '../../contex/auth-contex/AuthProvider'
import { useWish } from '../../contex/wishList-contex/WishListProvider'

import { useLocation } from "react-router-dom";
const WishList = () => {
  const location = useLocation();
  const [allHotels,setAllHotels] = useState([])
  const [userWishList,setWishList]  = useState([])
  const [allHotelsId,setHotelId] = useState([])
  const {wishDispatch,wishList} = useWish()
  const {phone} = useAuth()
  // console.log(wishList)
  // useEffect(()=>{
    // },[])
    // console.log(allHotels)
    useEffect(()=>{
      axios.get("http://localhost:8080/api/hotels")
      .then(({data})=>setAllHotels(data.hotels))
      .catch(()=>console.log("error while fetching data"))
      axios.get("http://localhost:8080/api/wish/get-all-wish-list-hotels",{
          params: { phone }
      }).
      then((response)=>{
        wishDispatch({
          type:"USER-WISHES",
          payload:response.data.listOfHotels
          })
          setHotelId(response.data.listOfHotels)
        }
      )
      .catch(()=>console.log("error"))
      setWishList(allHotels.filter(hotel=>allHotelsId.includes(hotel.id)))
  },[wishList])
  // useEffect(()=>{
  // },[allHotels])
  console.log(userWishList)
  return (
    <div>
      <div className='wishContainer grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  gap-10'>
        {
          userWishList.map((hotel) => <Card hotel={hotel} />)
        }
      </div>
    </div>
  )
}

export default WishList
