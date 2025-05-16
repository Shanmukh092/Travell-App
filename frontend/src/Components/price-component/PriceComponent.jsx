import React from 'react'
import { useState,useEffect } from 'react';
import DateSelector from '../date-picker/DateSelector';
import { useDate } from '../../contex/date-contex/DateContex';
const PriceComponent = ({hotel}) => {
    if(!hotel)  return null
    const {rating,price,numberOfguest} = hotel
    const [numberOfDays,setNumberOfDays] = useState(0)
    const contex = useDate()
    if(!contex) return null
    function stripTime(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    var {checkInDate,checkOutDate,guests} = contex;
    console.log(checkInDate,checkOutDate)
    useEffect(() => {
        if (checkInDate && checkOutDate) {
            const diffInTime = checkOutDate - checkInDate;
            const days = diffInTime / (1000 * 60 * 60 * 24);
            days==0?setNumberOfDays(0.5):setNumberOfDays(days)
        }
        else{
            console.log(checkInDate)
        }
    }, [checkInDate, checkOutDate]);
  return (
    <>
      <div className='h-110 w-115 border-1'>
        <div className='p-5'>
            <div className=' flex justify-between'>
            <span className='text-3xl'>₹{price}     <span className='text-xl'>night</span></span>
            <span className='text-2xl'><i className=" text-yellow-400 fa-solid fa-star"></i>{rating}</span>
        </div>
        <div className='mt-2 flex '>
            <div>
                <label className="block text-sm text-gray-600 mb-1">Check In</label>
                <DateSelector type={"check-in"} selectedDate={checkInDate} />
            </div>
            <div className='ml-3'>
                <label className="block text-sm text-gray-600 mb-1">Check out</label>
                <DateSelector type={"check-out"} selectedDate={checkOutDate}/>
            </div>
        </div>
        <div className='mt-2 border-1 h-20 p-2'>
            <label className='text-2xl'>Guests</label>
            <p className='text-xl'>{numberOfguest}</p>
        </div>
        <div>
            <button className='mt-5 h-11 w-full bg-orange-500 cursor-pointer rounded-md'>
                <span className='text-white text-xl'>Reserve</span>
            </button>
        </div>
        <div className='flex mt-3 w-full justify-between'>
            <span className='text-xl'>Rs. {price} X {numberOfDays}</span>
            <span className='text-xl'>Rs. {numberOfDays*price}</span>
        </div>
        <div className='flex mt-3 w-full justify-between'>
            <span className='text-xl'>Special Fee</span>
            <span className='text-xl'>Rs. 150</span>
        </div>
        <hr className='mt-3'/>
        <div className='flex mt-3 w-full justify-between'>
            <span className='text-2xl font-bold'>Total</span>
            <span className='text-2xl font-bold'>{numberOfDays*price+150}</span>
        </div>
        </div>
      </div>
    </>
  )
}

export default PriceComponent
