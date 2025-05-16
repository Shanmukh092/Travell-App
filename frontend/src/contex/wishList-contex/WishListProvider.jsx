import React from 'react'
import { useReducer,useContext,createContext } from 'react'
import { wishListReducer } from '../../Reducer/wishListReducer';
const initialValue = {
    wishList:[]
}
const wishListContex = createContext();

const WishListProvider = ({children}) => {
    const [state,wishDispatch] = useReducer(wishListReducer,initialValue)
  return (
    <>
      <wishListContex.Provider value={{...state,wishDispatch}}>
        {children}
      </wishListContex.Provider>
    </>
  )
}

const useWish = ()=>useContext(wishListContex)
export {useWish,WishListProvider}
