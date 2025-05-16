import React from 'react'
import { createContext,useState,useContext } from 'react'

const initialValue = {
    hotelCategory :null
}

const myCategoryContex = createContext(initialValue)
const CategoryContex = ({children}) => {
    const [state,setState] = useState(initialValue)
  return (
    <myCategoryContex.Provider value={{state,setState}}>
        {children}
    </myCategoryContex.Provider>
  )
}

const useCategoryContex = ()=> useContext(myCategoryContex)

export {CategoryContex,useCategoryContex}
