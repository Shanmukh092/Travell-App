import React from 'react'
import { useContext } from 'react'
import { useDate } from '../../contex/date-contex/DateContex'
import { useFilter } from '../../contex/filter-contex/FilterProvider'
const Filter = () => {
    const contex = useDate()
    const filterContex = useFilter()
    console.log(filterContex)
    if(!contex) return
    // console.log(filterContex,contex)
    const {dateDispatch} = contex
    // console.log(dateDispatch)
  return (
    <div onClick={(e)=>{
            dateDispatch({
                type:"OPEN-FILTER"
            })
            e.stopPropagation()
        }
        }
    className='items-center border-2 rounded-3xl p-2 cursor-pointer'>
      <i className="fa-solid fa-filter"></i>
      <span className='ml-2'>Filter</span>
    </div>
  )
}

export default Filter
