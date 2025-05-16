import React from 'react'
import { createContext,useContext,useReducer } from 'react'
import { dateReducer } from '../../Reducer/dateReducer'
const initialValue={
    destination:"",
    guests:0,
    checkInDate:null,
    checkOutDate:null,
    isSearchOpen:false,
    searchesHotels:null,
    isFilterOpen:false,
    isUser:false
}
const myDateContex = createContext()
const DateContex = ({children}) => {
    const [state,dateDispatch] = useReducer(dateReducer,initialValue)
    return(
        <myDateContex.Provider
        value={{...state,dateDispatch}}>
            {children}
        </myDateContex.Provider>
    )
}
const useDate = ()=>useContext(myDateContex)

export {useDate,DateContex}
