import React, { useEffect, useState } from 'react'
import "./Styles.css"
import { useAsyncError, useNavigate } from 'react-router-dom';
import LoginPage from '../../authentication/login/LoginPage';
import RegisterPage from '../../authentication/Register/RegisterPage';
import { useDate } from '../../contex/date-contex/DateContex';
import { useAuth } from '../../contex/auth-contex/AuthProvider';
import { wishListHandller } from '../../services/wishListHandller';
import { useWish } from '../../contex/wishList-contex/WishListProvider';
const Auth = () => {
    const contex = useDate()
    if(!contex) return;
    const {dateDispatch} = contex
    const [login,setLogin] = useState(true)
    const [register,setRegister] = useState(false)
    const [wishNavigate,setWishNavigate] = useState(false)
    const {wishDispatch} = useWish();
    const navigate = useNavigate()
    const {name,phone,email,isLoggedIn} = useAuth();
    useEffect(()=>{
        if(isLoggedIn && wishNavigate)  navigate("/wish-list")
    },[wishNavigate])
    function handleLogin(e){
        setLogin(true)
        setRegister(false)
    }
    function handleRegister(e){
        setRegister(true)
        setLogin(false)
        
    }
    function handleWishClick(e){
        console.log("weofiu")
        wishListHandller(null,phone,"getAllWishes",wishDispatch)
        setWishNavigate(true)
        e.stopPropagation()
    }
    if(name){
        return(
            <div>
                <span className='text-2xl font-bold'>User Details</span>
                <hr />
                <div className='mb-5 flex flex-col justify-between'>
                <span className='text-xl'>name-{name}</span>
                <span className='text-xl'>phone-{phone}</span>
                <span className='text-xl'>email-{email}</span>
            </div>
            <hr />
            <div>
                <span onClick={(e)=>handleWishClick(e)}
                className=' text-2xl font-semibold mt-2 cursor-pointer hover:text-red-500'>User WishList</span>
            </div>
            </div>
        )
    }
  return (
    <div onClick={(e)=>e.stopPropagation()}>
        <div className='mb-5 flex justify-between'>
            <div>
                <span onClick={handleLogin}
                className={`h-5 w-10 rounded-xl p-2 cursor-pointer bg-gray-400 text-black mr-2 ${login?"selectedBtn":""}`}>Login</span>
                <span onClick={handleRegister}
                className={`h-5 w-10 rounded-xl p-2 cursor-pointer bg-gray-400 text-black  ${register?"selectedBtn":""}`}>Register</span>
            </div>
            <div className='mr-10'>
                <span onClick={()=>dateDispatch({
                    type:"CLOSE",
                })}
                className="cursor-pointer material-symbols-outlined ml-[90%] mb-10">close</span>
            </div>
        </div>
        <div>
            {login?<LoginPage/>:<RegisterPage/>}
        </div>
    </div>
  )
}

export default Auth
