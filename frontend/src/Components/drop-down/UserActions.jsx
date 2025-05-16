import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contex/auth-contex/AuthProvider'
import { useActions } from '../../contex/user-actions.jsx/ActionProvider'
const UserActions = () => {
    const navigate = useNavigate()
    const {authDispatch} = useAuth()
    const {actionDispatch} = useActions()
    function handleClick(){
        authDispatch({
            type:"LOGOUT"
        })
        actionDispatch({
            type:"CLEAR",
        })
        
    }
  return (
    <>
      <div className='flex flex-col gap-3'>
        <span onClick={()=>navigate("/wish-list")}
        className='hover:bg-gray-400 hover:border-0.5 p-5 cursor-pointer'><i className="fa-regular fa-heart"></i> WishList</span>
        <span onClick = {handleClick}
        className='hover:bg-red-500 hover:border-0.5 p-5 cursor-pointer'>Sign Out</span>
      </div>
    </>
  )
}

export default UserActions
