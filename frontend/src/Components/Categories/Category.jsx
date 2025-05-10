import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Category = () => {
  const [data,setData] = useState([])
  const [allData,setAllData] = useState([])
  const [leftPtr,setLeftPtr] = useState(0)
  const [rightPtr,setRightPtr] = useState(14)

  function handleCategoryClick(category){
    axios.get
  }
  useEffect(()=>{
    axios.get("http://localhost:8080/api/hotels/category")
    .then((response)=>{
      const arr = response.data.category.slice(leftPtr,rightPtr)
      setAllData(response.data.category)
      setData(arr)
    })
    .catch(()=>console.log("Failed to Fetch Data.."))
  },[])
  console.log(allData.length)
  return (
    <>
      <div className='flex h-16 justify-center gap-3 relative'>
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
               className={`cursor-pointer ${item.category!="Historical Homes"?"mr-9":"mr-0"}`}>{[item.category]}</span>)
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
