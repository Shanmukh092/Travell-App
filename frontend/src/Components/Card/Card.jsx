import React from 'react'

const Card = ({hotel}) => {
  // const hotel = props
  const{city,state,name,price,rating,image} = hotel
  console.log(hotel)
  return (
    <div>
      <div className='relative card cursor-pointer border-1 w-80'>
        <img 
        className='h-60'
        src={image}
         alt="" />
        <div className='flex justify-between items-center p-2'>
            <span className='text-xl font-bold'>{city}, {state}</span>
            <div className='h[100%]'>
            <i className="fa-solid fa-star text-yellow-300 text-xl align-middle"></i>
            <span className='mr-2 text-xl font-bold align-middle'>{rating}</span>
            </div>
        </div>
        <div className='p-2'>
          <p className='font-bold'>{name}</p>
          <p>
              <span>Rs. {price}/</span>
              <span>night</span>
          </p>
        </div>
        <button onClick={(e)=>e.target.classList.toggle("text-red-500")}
        className='cursor-pointer absolute top-2 right-2'>
            <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  )
}

export default Card

