import React from 'react'
import { useContext,createContext,useReducer } from 'react'
import { authReducer } from '../../Reducer/authReducer'
const initialState = {
    name:null,
    email:null,
    password:null,
    phone:null,
    accessToken:null,
    isLoggedIn:false,
    response:false
}
const AuthContex = createContext()

const AuthProvider = ({children}) => {
    const [state,authDispatch] = useReducer(authReducer,initialState)
  return (
    <>
    <AuthContex.Provider value={{...state,authDispatch}}>
        {children}
    </AuthContex.Provider>
    </>
  )
}

const useAuth = ()=>useContext(AuthContex);
export {useAuth,AuthProvider}
