import React from 'react'
import "./Styles.css"
import { useDate } from '../../contex/date-contex/DateContex'
import { useDetails } from '../../contex/tripDetails-contex/DetailsProvider'
import {handlePayment} from "../../services/razorPay"
const Payment = () => {
  let {checkInDate,checkOutDate} = useDate()
  if(!checkInDate || !checkOutDate) return
  checkInDate = checkInDate.toString().substring(4, 10)
  checkOutDate = checkOutDate.toString().substring(4,10);
  const {hotel,numberOfDays,detailsDispatch,isSucess} = useDetails()
  const {image,rating,name,state,price} = hotel
  console.log(hotel,numberOfDays)
  async function handlePaymentClick(totalPrice){
    await handlePayment(totalPrice,detailsDispatch)
    if(isSucess){
      detailsDispatch({
        type:"CLEAR",
      })
    }
  }
  if(isSucess){
    return(
      <>
      <div className='flex justify-center items-center gap-2 mx-auto h-[80vh] w-[90vw] gap-10'>
        <div className='flex flex-col items-center'>
          <span className='bg-green-500 text-white sucess rounded-4xl h-[150px] w-[150px] flex justify-center items-center'>
            <i className="fa-sharp-duotone fa-solid fa-check"></i>
          </span>
          <span className='text-orange-500 text-3xl font-bold mt-4'>Payment Success</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='flex justify-center items-center gap-2 mx-auto h-[90vh] w-[100vw] gap-10'>
      <div className='flex flex-col gap-5 w-[25%]'>
        <span className='text-2xl font-bold'>Trip Details</span>
        <span className='text-xl font-semibold'>Your Trip</span>
        <span>Dates</span>
        <span>{checkInDate} - {checkOutDate}</span>
        <hr />
        <span className='text-xl font-bold'>Pay With</span>
        <span className='text-blue-500 font-bold flex justify-center border-1 cursor-pointer'>
          Razorpay
        </span>
        <span onClick={()=>handlePaymentClick((price*numberOfDays)+150)}
        className='text-white cursor-pointer bg-orange-500 flex justify-center p-3'>Conform Booking</span>
      </div>
      <div className='border-1 p-5'>
        <div className='flex gap-2'>
          <div>
            <img src={image} className='h-50 w-70'/>
          </div> 
          <div>
            <div className='flex flex-col justify-between h-[100%]'>
              <span className='font-mono'>{name},{state}</span>
              <span><i className="text-yellow-500 fa-solid fa-star"></i>{rating}</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between mt-5 gap-3'>
          <hr />
          <span className='text-center font-mono' >Your Booking is protected</span>
          <hr/>
        </div>
        <div className='mt-2 flex flex-col gap-3'>
          <span className='text-xl font-bold '>Price Details</span>
          <div className='flex justify-between'>
            <span>Rs {price} X {numberOfDays} {numberOfDays>1?"nights":"night"}</span>
            <span>Rs.{price*numberOfDays}</span>
          </div>
          <div className='flex justify-between'>
            <span>Service Fee</span>
            <span>Rs.150</span>
          </div>
          <hr />
          <div className='flex justify-between mt-5'>
            <span className='text-xl font-bold'>Total</span>
            <span>Rs.{(price*numberOfDays)+150}</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Payment
