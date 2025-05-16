import React, { useEffect } from 'react'
import "./filterData.css"
import { useDate } from '../../contex/date-contex/DateContex'
import { useState } from 'react'
import { useFilter } from '../../contex/filter-contex/FilterProvider'
import axios from 'axios'
const FilterData = () => {
  const [allHotels,setAllHotels] = useState([])
  const [hotelData,setHotelData] = useState([])
  useEffect(()=>{
      axios.get("http://localhost:8080/api/hotels")
      .then(({data})=>{
        setAllHotels(data.hotels)
        setHotelData(data.hotels)
      })
      .catch(()=>console.log("error while fetching data"))
  },[])
    const contex = useDate()
    const {  
      numberOfBedRooms,price,numberOfBeds,filteredData,
      numberOfBathRooms,propertyType,rating, filterDispatch
    } = useFilter()
    console.log(numberOfBedRooms,numberOfBeds)
    console.log(numberOfBedRooms==0,numberOfBeds==0)
  useEffect(() => {
    console.log(allHotels.length)
    let filtered = [...hotelData];
    if (price) {
      filtered = filtered.filter(hotel => hotel.price <= price);
    }
    if (numberOfBedRooms) {
      filtered = filtered.filter(hotel => hotel.numberOfBedrooms >= numberOfBedRooms);
    }
    if (numberOfBeds) {
      filtered = filtered.filter(hotel => hotel.numberOfBeds >= numberOfBeds);
    }
    if (propertyType) {
      filtered = filtered.filter(hotel => hotel.propertyType.toLowerCase() === propertyType.toLowerCase());
    }
    if (rating) {
      filtered = filtered.filter(hotel => hotel.rating >= rating);
    }
    setAllHotels(filtered);
  }, [price,numberOfBedRooms, numberOfBeds, propertyType, rating]);
    if(!contex) return
    const {dateDispatch} = contex
    function handlePrice(e){
      filterDispatch({
        type:"SET-PRICE",
        payload:parseInt(e.target.value)
      })
    }
    function handleNumberOfBedRooms(e) {
      if (e.target.dataset.bedroom) {
        const wasSelected = e.target.classList.contains('selected');
        filterDispatch({
          type: "BEDROOMS",
          payload: !wasSelected ? parseInt(e.target.dataset.bedroom) : null
        });
      }
    }
    function handleNumberOfBeds(e){
      if(e.target.dataset.bed!=undefined){
        const wasSelected = e.target.classList.contains('selected');
        filterDispatch({
          type:"BEDS",
          payload:!wasSelected?parseInt(e.target.dataset.bed):null
        })
      }
    }
    function handleNumberOfBathRooms(e){
      if(e.target.dataset.bathroom!=undefined){
        const wasSelected = e.target.classList.contains('selected');
        if (!wasSelected) {
          e.target.classList.add("selected");
        }
        filterDispatch({
          type:"BATHROOM",
          payload:!wasSelected?parseInt(e.target.dataset.bathroom):null
        })
      }
    }
    function handleType(e){
      if(e.target.dataset.type!=undefined){
        const wasSelected = e.target.classList.contains('selected');
        filterDispatch({
          type:"TYPE",
          payload:!wasSelected?e.target.dataset.type:null
        })
      }
    }
    function handleRating(e){
      if(e.target.dataset.rating){
        const wasSelected = e.target.classList.contains('selected');
        if(!wasSelected)  e.target.classList.add("selected");
        filterDispatch({
          type:"RATING",
          payload:!wasSelected?parseInt(e.target.dataset.rating):null
        })
      }
    }
function handleFilteredClick(){
  if(numberOfBedRooms){
    setAllHotels(allHotels.filter(hotel=>hotel.numberOfBedrooms>=numberOfBedRooms))
  }
  if(numberOfBeds){
    setAllHotels(allHotels.filter(hotel=>hotel.numberOfBeds>=numberOfBeds))
  }
  if(propertyType){
    setAllHotels(allHotels.filter(hotel=>hotel.propertyType.toLowerCase()==propertyType.toLowerCase()))
  }
  if(rating){
    setAllHotels(allHotels.filter(hotel=>hotel.rating>=rating))
  }
  filterDispatch({
    type:"FILTERED-DATA",
    payload:allHotels
  })
}
  return (
    <div onClick={(e)=>e.stopPropagation()} className='h-[50vh] overflow-y-auto'>
    <span className='text-lg font-bold'>Filter Data</span>
    <div>
        <span class="material-symbols-outlined ml-[90%] cursor-pointer"  onClick={()=>dateDispatch({
            type:"CLOSE-FILTER"
        })}>close</span>
        <div>
            <label className="block mb-2 text-gray-700 font-medium">
                Price Range: {price}
            </label>
            <div className='flex h-15 items-center justify-between gap-2'>
                <span>900</span>
                <input
                type="range"
                min="900"
                max="19000"
                value={price}
                onChange={(e) => {
                    handlePrice(e)
                }}
                className=" w-lg h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-500"
                />
                <span>19000</span>
            </div>
        </div>
        <div >
            <span className='text-gray-500 text-2xl font-semibold'>Rooms And</span>
            <div className="grid gap-y-6 p-6 mx-auto">
              <div onClick={(e)=>handleNumberOfBedRooms(e)}
              className="grid grid-cols-[120px_1fr] items-center gap-x-4">
                <label className="text-lg font-medium text-gray-700">Bedrooms</label>
                <div className="bedRoomParent flex  gap-2">
                    <div data-bedroom={0}
                    className={`px-3 rounded-lg box flex items-center justify-center ${numberOfBedRooms==0?"selected":""}`}>
                    Any
                    </div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBedRooms==1?"selected":""}`} data-bedroom={1}>1</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBedRooms==2?"selected":""}`} data-bedroom={2}>2</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBedRooms==3?"selected":""}`} data-bedroom={3}>3</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBedRooms==4?"selected":""}`} data-bedroom={4}>4</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBedRooms==5?"selected":""}`} data-bedroom={5}>5+</div>
                </div>
              </div>
              <div 
              className="grid grid-cols-[120px_1fr] items-center gap-x-4">
                <label className="text-lg font-medium text-gray-700">Beds</label>
                <div onClick={(e)=>handleNumberOfBeds(e)}
                className="bedParent flex gap-2">
                    <div data-bed={0}
                    className={`px-3 rounded-lg box flex items-center justify-center ${numberOfBeds===0 ?"selected":""}`}>
                    Any
                    </div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBeds==1 ?"selected":""}`} data-bed={1}>1</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBeds==2 ?"selected":""}`} data-bed={2}>2</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBeds==3 ?"selected":""}`} data-bed={3}>3</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBeds==4 ?"selected":""}`} data-bed={4}>4</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBeds==5 ?"selected":""}`} data-bed={5}>5+</div>
                </div>
              </div>

              <div 
              className="grid grid-cols-[120px_1fr] items-center gap-x-4">
                <label className="text-lg font-medium text-gray-700">Bathrooms</label>
                <div onClick={(e)=>handleNumberOfBathRooms(e)}
                className="flex gap-2 parent">
                    <div data-bathroom={0}
                    className={`px-3 rounded-lg box flex items-center justify-center ${numberOfBathRooms==0 ?"selected":""}`}>
                    Any
                    </div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBathRooms==1?"selected":""}`} data-bathroom={1}>1</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBathRooms==2?"selected":""}`} data-bathroom={2}>2</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBathRooms==3?"selected":""}`} data-bathroom={3}>3</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBathRooms==4?"selected":""}`} data-bathroom={4}>4</div>
                  <div className={`px-3 py-1 rounded-lg box ${numberOfBathRooms==5?"selected":""}`} data-bathroom={5}>5+</div>
                </div>
              </div>
            </div>
            </div>
            <div
            className='mt-3'>
              <span className='text-gray-500 text-2xl font-semibold'>Property Type</span>
              <div onClick={(e)=>handleType(e)}
              className='parent flex gap-5 mt-5'>
                <div className={`bigBox text-xl border-1 rounded-xl flex justify-center items-center cursor-pointer ${propertyType=="house"?"selected":""}`} data-type="house">House</div>
                <div className={`bigBox text-xl border-1 rounded-xl flex justify-center items-center cursor-pointer ${propertyType=="guest house"?"selected":""}`} data-type="guest house">Lodge</div>
                <div className={`bigBox text-xl border-1 rounded-xl flex justify-center items-center cursor-pointer ${propertyType=="flat" ?"selected":""}`} data-type="flat">Falt</div>
                <div className={`bigBox text-xl border-1 rounded-xl flex justify-center items-center cursor-pointer ${propertyType=="hotel"?"selected":""}`} data-type="hotel">Hotel</div>
              </div>
            </div>
            <div 
            className='mt-5'>
              <span className='text-gray-500 text-2xl font-semibold'>Star & Rating</span>
              <div onClick={(e)=>handleRating(e)}
              className='parent flex gap-7 mt-5'>
                <div className={`border-1 ratingBox rounded-xl ${rating==1?"selected":""}`} data-rating={1}>1&up</div>
                <div className={`border-1 ratingBox rounded-xl ${rating==2?"selected":""}`} data-rating={2}>2&up</div>
                <div className={`border-1 ratingBox rounded-xl ${rating==3?"selected":""}`} data-rating={3}>3&up</div>
                <div className={`border-1 ratingBox rounded-xl ${rating==4?"selected":""}`} data-rating={4}>4&up</div>
                <div className={`border-1 ratingBox rounded-xl ${rating==5?"selected":""}`} data-rating={5}>5 </div>
              </div>
            </div>
            <div className='mt-5 w-[80%] flex justify-between items-center'>
              <span onClick={()=>filterDispatch({
                type:"CLEAR",
              })}
              className='cursor-pointer hover:underline text-lg'>Clear All</span>
              <span onClick={handleFilteredClick}
              className='border-1 bg-orange-400 p-2 text-white text-lg rounded-xl cursor-pointer'>Apply</span>
            </div>
        </div>

    </div>
  )
}

export default FilterData
