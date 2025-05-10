import React, { useEffect, useState } from 'react'
import Card from '../Components/Card/Card'
import Category from '../Components/Categories/Category'
import axios from 'axios'

const Home = () => {
  const [allHotels,setAllHotels] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/api/hotels")
    .then((hotels)=>setAllHotels(hotels.data.hotels))
    .catch(()=>console.log("error while fetching data"))
  },[])
  return (
    // const {hotelData} = {allHotels.}
    <div>
      <Category/>
      <div className='grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  gap-10'>
        {
          allHotels.map((hotel) => <Card hotel={hotel} />)
        }
      </div>
    </div>
  )
}

export default Home
