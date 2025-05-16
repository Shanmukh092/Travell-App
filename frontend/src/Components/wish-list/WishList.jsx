import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios, { all } from 'axios'
import { useAuth } from '../../contex/auth-contex/AuthProvider'
import { useWish } from '../../contex/wishList-contex/WishListProvider'
const WishList = () => {
  const [allHotels,setAllHotels] = useState([])
  const [userWishList,setWishList]  = useState([])
  const {wishList} = useWish()
  console.log(wishList)
  useEffect(()=>{
      axios.get("http://localhost:8080/api/hotels")
      .then(({data})=>setAllHotels(data.hotels))
      .catch(()=>console.log("error while fetching data"))
  },[])
  console.log(allHotels)
  useEffect(()=>{
    const matchedHotels = allHotels.filter(hotel => wishList.includes(hotel.id));
    setWishList(matchedHotels); 
  },[wishList,allHotels ])
  console.log(userWishList)
  return (
    <div>
      <div className='grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  gap-10'>
        {
          userWishList.map((hotel) => <Card hotel={hotel} />)
        }
      </div>
    </div>
  )
}

export default WishList
