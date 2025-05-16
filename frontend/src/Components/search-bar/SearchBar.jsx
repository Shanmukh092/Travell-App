import React, { useEffect, useState } from 'react'
import DateSelector from '../date-picker/DateSelector'
import { useDate } from '../../contex/date-contex/DateContex'
import axios from 'axios'
const SearchBar = () => {
  const contex = useDate();
  if(!contex) return;
  const {dateDispatch,guests,destination} = contex
  console.log(destination)
  const [hotels,setAllHotels] = useState([])
  function handleDestination(e){
    dateDispatch({
      type:"DESTINATION",
      payload:e.target.value
    })
  }
  useEffect(()=>{
    axios.get("http://localhost:8080/api/hotels")
    .then(({data})=>setAllHotels(data.hotels))
    .catch(error=>console.log(error))
  },[])
  function handleOptions(name){
    dateDispatch({
      type:"DESTINATION",
      payload:name
    })
  }
    function handleCloseSearch(){
    dateDispatch({
      type:"CLOSE",
    })
  }
  function handleSearchClick(){
    axios.get("http://localhost:8080/api/hotels")
    .then(({data})=>{
      if(destination==''){
        throw new Error("Enter A valid Destination")
      }
      else{
        const searchHotelsWithCities = data.hotels.filter(hotel=>destination.toLowerCase()==hotel.city.toLowerCase());
        const searchHotelsWithState = data.hotels.filter(hotel=>destination.toLowerCase()==hotel.state.toLowerCase());
        const searchdHotelWithName = data.hotels.filter(hotel=>destination.toLowerCase()==hotel.name.toLowerCase());
        const result = searchHotelsWithCities.length>0?searchHotelsWithCities
        :searchHotelsWithState.length>0?searchHotelsWithState:searchdHotelWithName
        dateDispatch({
          type:"SEARCH-RESULTS",
          payload:result
        })
      }
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="flex flex-col w-full" onClick={(e)=>e.stopPropagation()}>
      <span class="material-symbols-outlined ml-[90%] cursor-pointer"  onClick={handleCloseSearch}>close</span>
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-center">
        <div className="flex  flex-grow min-w-[140px] justify-between">
          <div className='flex flex-col'>
            <label className="text-sm text-gray-600 mb-1">Where</label>
            <input
            onChange={handleDestination}
            value={destination}
            className="border p-2 rounded focus:border-blue-600"
            placeholder="Search Destination"/>
          </div>
          <div className='flex flex-col mr-21'>
          <label className="text-sm text-gray-600 mb-1">Guests</label>
          <input
          onChange={(e)=>{
            dateDispatch({
              type:"GUEST",
              payload:e.target.value
            })
          }}
            type="number"
            className="border p-2 rounded focus:border-blue-600"
            placeholder="Add guests"/>
          </div>
          
        </div>
        <div className="flex flex-grow min-w-[140px] justify-between">
          <div className='flex flex-col'>
            <label className="text-sm text-gray-600 mb-1">Check In</label>
            <DateSelector type={"check-in"} />
          </div>
          <div className='flex flex-col'>
              <label className="text-sm text-gray-600 mb-1">Check Out</label>
          <DateSelector  type={"check-out"}/>
          </div>
        </div>

        <div className="pt-6 sm:pt-5">
          <span
          onClick={handleSearchClick}
            className="material-symbols-outlined bg-orange-500 text-white p-2 rounded cursor-pointer"
            style={{ fontSize: '36px' }}
          >
            search
          </span>
        </div>
      </div>
      <div  
      style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        <hr className='m-5' />
        <div className='flex flex-col gap-5'>
          {hotels.map(({name})=><div className='mt-3'>
          <span onClick={()=>handleOptions(name)}
           className='cursor-pointer font-sans border-1 p-2 rounded-md'
          >{name}</span>
        </div>)}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
