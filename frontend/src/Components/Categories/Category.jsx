import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCategoryContex } from '../../contex/CategoryContex'

const Category = ({category}) => {
  const [data,setData] = useState([])
  const [allData,setAllData] = useState([])
  const [leftPtr,setLeftPtr] = useState(0)
  const [rightPtr,setRightPtr] = useState(12)
  const {setState} = useCategoryContex()

  function handleCategoryClick(category){
    setState({hotelCategory:category})
  }
  useEffect(()=>{
    axios.get("http://localhost:8080/api/hotels/category")
    .then((response)=>{
      const arr = response.data.category.slice(leftPtr,rightPtr)
      setAllData(response.data.category)
      setData(arr)
    })
    .catch(()=>console.log("Failed to Fetch Data.."))
    // console.log(allData.length)
  },[])
  return (
    <>
      <div className='flex h-16 w-[90vw] justify-center gap-3 relative mt-5'>
        <button onClick={()=>{
        setLeftPtr(leftPtr-1)
        setRightPtr(rightPtr-1)
        setData(allData.slice(leftPtr,rightPtr))
        }}
        disabled={leftPtr ==0}
         className='bg-gray-400 rounded-xl h-[25px] w-[25px] cursor-pointer mr-2'> <span className="material-symbols-outlined">arrow_back_ios_new</span> </button>
         <div className={`flex flex-wrap w-400  mr-0 `}>
          {
            data.map(item=><span onClick={()=>handleCategoryClick(item.category)}
               className={`font-bold ${category==item.category?"underline  decoration-2":""}
                cursor-pointer ${item.category!="Historical Homes"?"mr-9":"mr-0"}`}>{[item.category]}</span>)
          }
         </div>
         <button
         onClick={()=>{
        setLeftPtr(leftPtr+1)
        setRightPtr(rightPtr+1)
        setData(allData.slice(leftPtr,rightPtr))
      }}
      disabled={rightPtr >= allData.length}
        className='bg-gray-400 rounded-xl h-[25px] w-[25px] cursor-pointer mr-2 absolute top-0 right-0'>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </>
  )
}

export default Category
