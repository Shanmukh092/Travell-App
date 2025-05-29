import React from 'react'
import './NavBar.css'
import { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import SearchBar from '../search-bar/SearchBar'
import { useDate } from '../../contex/date-contex/DateContex'
import { useAuth } from '../../contex/auth-contex/AuthProvider'
import { useActions } from '../../contex/user-actions.jsx/ActionProvider'
// import { useLocation } from "react-router-dom";
const NavBar = () => {
  const contex = useDate()
  const location = useLocation();
  const {actionDispatch} = useActions()
  if(!contex) return null;;
  const {checkInDate,checkOutDate,isSearchOpen,dateDispatch,destination,guests} = contex
  const {name,authDispatch,isLoggedIn} = useAuth()
  function heandleSearchClick(e){
    e.stopPropagation()
    dateDispatch({
      type:"OPEN_SEARCH",
    })
  }
  function closeAll(e){
    console.log(location)
      actionDispatch({
        type:"CLEAR",
      })
      dateDispatch({
        type:"CLOSE"
      })
  }
  function handleActions(e){
    if(!isLoggedIn){
      dateDispatch({
        type:"USER",
      })
      e.stopPropagation()
      return
    }
    if(e.target.innerText=="menu"){
      actionDispatch({
        type:"MENU"
      })
      e.stopPropagation()
      return
    }
    actionDispatch({
      type:"DETAILS"
    })
    e.stopPropagation()
  }
  const navigate = useNavigate()
  if(checkInDate && checkOutDate){
    var checkInMonth = checkInDate.toString().substring(4, 7); 
    var checkInDay = checkInDate.toString().substring(8, 10);
    var checkOutMonth = checkOutDate.toString().substring(4, 7); 
    var checkOutDay = checkOutDate.toString().substring(8, 10);
  }
  return (
    <header onClick={(e)=>closeAll(e)}>
      <div className='flex justify-between h-16 items-center'> 
        <span onClick={()=>navigate("/")}
         className='ml-5 font-bold text-red-500 text-3xl cursor-pointer'>Travel App</span>
        <div className='flex'>
        <div onClick={(e)=>heandleSearchClick(e) }
         className={`relative searchContainer border-1 h-10 rounded-sm ${checkInDate && checkOutDate ?"w-[25vw]":"w-90"}  flex justify-between items-center gap-1 cursor-pointer  bg-white`}>
          <span className='ml-8'>{destination?destination:"Any Where"}</span>
          <span className='border-right'></span>
          <span>{checkInDate && checkOutDate?`${checkInMonth} ${checkInDay} - ${checkOutMonth} ${checkOutDay}`:"Any Week"}</span>
          <span className='border-right'></span>
          <span className='mr-5'>{guests?guests>1?`${guests} guests`:`${guests} guest` :"Add gust"}</span>
        </div>
        <span  onClick={(e)=>heandleSearchClick(e)}
        className="material-symbols-outlined p-2 border-1 ml-1 h-10 bg-orange-400 text-white rounded-sm cursor-pointer">search</span>
        </div>
        <div className='mr-5' >
          <div className='flex gap-5'>
            <div>
              <div>{name?<span className='text-xl font-bold'>Hey,{name}</span>:""}</div>
            </div>
            <div onClick={(e)=>handleActions(e)}
            className='border-1 h-7  rounded-sm flex items-center cursor-pointer
            hover:shadow'>
              <span 
              className="material-symbols-outlined  rounded-sm">menu</span>
              <span className="material-symbols-outlined bg-gray-300">person_2</span>
            </div>
            {/* {
              name &&
              <div className='ml-2'>
              <span onClick={()=>authDispatch({
                type:"LOGOUT"
              })}
              className='border-1 bg-red-500 text-white p-2 rounded-xl cursor-pointer'>Sign Out</span>
            </div>
            } */}
            </div>
          </div>
      </div>
    </header>

  )
}

export default NavBar
