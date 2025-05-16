import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useWish } from '../../contex/wishList-contex/WishListProvider';
import { useAuth } from '../../contex/auth-contex/AuthProvider';
import { wishListHandller } from '../../services/wishListHandller';

const Card = ({hotel}) => {
  if(!hotel)  return
  const navigate = useNavigate();
  const {isLoggedIn,phone,authDispatch} = useAuth()
  const{id,city,state,name,price,rating,image} = hotel
  let {wishDispatch,wishList} = useWish()
  // console.log(wishList)
  function handleClick(){
    if(!name.includes("Whispering Pines Cottages")){
      navigate(`/hotels/${name}/${city}-${state}/${id}/reserve`);
    }
  }
  // console.log(wishList)
  return (
    <div className="w-full max-w-sm mx-auto">
      <div  onClick={()=>handleClick()}
      className="cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
        <img
          className="h-60 w-full object-cover"
          src={image}
          alt={name}
        />
        <button
          onClick={(e) =>{ 
            if(!isLoggedIn){
              alert("to add to wishlist you need to ligin first");
              return;
            }
            const isClassExist = !wishList.includes(id)
            wishDispatch({
              type:isClassExist?"ADD":"REMOVE",
              payload:id
            })
            console.log(isClassExist)
            wishListHandller(id,phone,isClassExist?"add":"delete",authDispatch);
            wishListHandller(id,phone,"getAll",authDispatch)
            e.stopPropagation()
          }}
          className={`absolute top-3 right-3 cursor-pointer  text-gray-300 ${wishList.includes(id)?"text-red-500":""} hover:text-red-500 transition-colors duration-200 text-2xl`}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">
              {name},{city}, {state}
            </span>
            <div className="flex items-center space-x-1">
              <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
              <span className="text-sm font-medium text-gray-700">{rating}</span>
            </div>
          </div>
          <p className="text-lg font-bold text-gray-900 truncate">{name}</p>
          <p className="text-gray-600">
            <span className="font-semibold text-gray-800">Rs. {price}</span> / night
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card



    //   <div className='relative card cursor-pointer border-1 w-80'>
    //     <img 
    //     className='h-60'
    //     src={image}
    //      alt="" />
    //     <div className='flex justify-between items-center p-2'>
    //         <span className='text-xl font-bold'>{city}, {state}</span>
    //         <div className='h[100%]'>
    //         <i className="fa-solid fa-star text-yellow-300 text-xl align-middle"></i>
    //         <span className='mr-2 text-xl font-bold align-middle'>{rating}</span>
    //         </div>
    //     </div>
    //     <div className='p-2'>
    //       <p className='font-bold'>{name}</p>
    //       <p>
    //           <span>Rs. {price}/</span>
    //           <span>night</span>
    //       </p>
    //     </div>
    //     <button onClick={(e)=>e.target.classList.toggle("text-red-500")}
    //     className='cursor-pointer absolute top-2 right-2'>
    //         <i className="fa-solid fa-heart"></i>
    //     </button>
    //   </div>
    // </div>