import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HotelImages from '../../Components/hotel-images/HotelImages'
import HotelDetails from '../../Components/hotel-details/HotelDetails'
import PriceComponent from '../../Components/price-component/PriceComponent'
import SearchBar from '../../Components/search-bar/SearchBar'
const SingleHotel = () => {
    const {id,name,address} = useParams()
    const [singleHotel,setSingleHotel] = useState()
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/single-hotel/${id}`)
        .then(({data})=>setSingleHotel(data))
        .catch((error)=>console.log("error-",error))
    },[id])
    console.log(singleHotel)
  return (
    <div className='w-[80%] mx-auto'>
        <span className='text-3xl font-sans'>{name},{address}</span>
        <div className='gap-5 mt-4'>
            {singleHotel && <HotelImages className="mt-7" hotel={singleHotel} />}
        </div>
        <div className='mt-10 flex flex-col lg:flex-row justify-between'>
          <div><HotelDetails hotel={singleHotel}/></div>
          <div> <PriceComponent hotel={singleHotel}/> </div>
        </div>
    </div>
  )
}

export default SingleHotel
