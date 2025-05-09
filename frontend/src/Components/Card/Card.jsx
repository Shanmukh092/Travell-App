import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='relative card cursor-pointer border-1 w-80'>
        <img 
        className='h-60'
        src="https://a0.muscache.com/im/pictures/333214e0-6746-49aa-9082-2137f3c1e197.jpg?im_w=720"
         alt="" />
        <div className='flex justify-between items-center p-2'>
            <span className='text-xl font-bold'>Bir,owefo</span>
            <div className='h[100%]'>
            <i className="fa-solid fa-star text-yellow-300 text-xl align-middle"></i>
            <span className='mr-2 text-xl font-bold align-middle'>4.5</span>
            </div>
        </div>
        <div className='p-2'>
          <p className='font-bold'>Hotel Name</p>
          <p>
              <span>Rs. 3500</span>
              <span>night</span>
          </p>
        </div>
        <button onClick={(e)=>e.target.classList.toggle("text-red-500")}
        className='cursor-pointer absolute top-2 right-2'>
            <i class="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  )
}

export default Card

