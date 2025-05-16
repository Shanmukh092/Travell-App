import React from 'react'
import  { createContext, useContext, useReducer } from 'react'
import { filterReducer } from '../../Reducer/filterReducer'
const initialValue = {
  numberOfBedRooms: null,
  price:9950,
  numberOfBeds: null,
  numberOfBathRooms: null,
  propertyType: null,
  rating: null, 
  filteredData:null
}
const filterContext = createContext()
const FilterProvider = ({children}) => {
  const [state, filterDispatch] = useReducer(filterReducer, initialValue)
  return (
    <filterContext.Provider value={{...state, filterDispatch}}>
        {children}
    </filterContext.Provider>
  )
}
const useFilter = () => useContext(filterContext)
export { useFilter, FilterProvider,filterContext }
