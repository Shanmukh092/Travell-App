import React, { Children } from 'react'
import { useContext,useReducer,createContext } from 'react'
import { actionReducer } from '../../Reducer/actionReducer';
const initialState = {
    openWishList:false,
    isDetailsOpen:false
}
const ActionContex = createContext();
const ActionProvider = ({children}) => {
  const [state,actionDispatch] = useReducer(actionReducer,initialState)
  return (
    <div>
      <ActionContex.Provider value={{...state,actionDispatch}}>
        {children}
      </ActionContex.Provider>
    </div>
  )
}

const useActions = ()=>useContext(ActionContex)
export {useActions,ActionProvider}

