import React from 'react'
import { useReducer,useContext,createContext } from 'react'
import { detailsReducer } from '../../Reducer/detailsReducer'
const initialState = {
    numberOfDays:null,
    hotel:null,
    isSucess:false
}
const DetailsContex = createContext()
const DetailsProvider = ({children}) => {
    const [state,detailsDispatch] = useReducer(detailsReducer,initialState)
  return (
    <div>
      <DetailsContex.Provider value={{...state,detailsDispatch}}>
        {children}
      </DetailsContex.Provider>
    </div>
  )
}
const useDetails = ()=>useContext(DetailsContex)
export {useDetails,DetailsProvider}
