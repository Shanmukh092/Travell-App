import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
      <div className='flex justify-between h-16 items-center'> 
        <div className='ml-5 font-bold text-red-500 text-3xl cursor-pointer'>Travell App</div>
        <div className='flex'>
        <div className='searchContainer border-1 h-10 rounded-sm w-60 flex justify-center items-center gap-1 cursor-pointer  bg-white'>
          <span>Any Where</span>
          <span className='border-right'></span>
          <span>Any Week</span>
          <span className='border-right'></span>
          <span>Add gust</span>
        </div>
        <span class="material-symbols-outlined p-2 border-1 ml-1 h-10 bg-orange-400 text-white rounded-sm cursor-pointer">search</span>
        </div>
        <div className='mr-5'>
          <div className='border-1 h-7  rounded-sm flex items-center cursor-pointer
          hover:shadow'>
            <span className="material-symbols-outlined  rounded-sm">menu</span>
            <span class="material-symbols-outlined bg-gray-300">person_2</span>
          </div>
          </div>
      </div>
      <hr className='mb-3'/>
    </header>
  )
}

export default NavBar
