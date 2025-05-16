import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import Category from '../../Components/Categories/Category'
import axios from 'axios'
import { useCategoryContex } from '../../contex/CategoryContex'
import { useDate } from '../../contex/date-contex/DateContex'
import SearchBar from '../../Components/search-bar/SearchBar'
import Filter from '../../Components/filter/Filter'
import FilterData from '../../Components/filter-data/FilterData'
import { useFilter } from '../../contex/filter-contex/FilterProvider'
import NotAvaliable from '../not-avaliable/NotAvaliable'
import Auth from '../../Components/auth/Auth'
import { useWish } from '../../contex/wishList-contex/WishListProvider'
import { useAuth } from '../../contex/auth-contex/AuthProvider'

const Home = () => {
  const [allHotels,setAllHotels] = useState([])
  const {state} = useCategoryContex();
  const contex = useDate();
  const {wishList} = useWish()
  if(!contex) return null
  const {isSearchOpen,dateDispatch,searchesHotels,isFilterOpen,isUser} = contex
  const {filteredData} = useFilter();
  function shuffelArray(array){
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    return array;
  }
  // console.log(searchesHotels)
  useEffect(()=>{
    if(searchesHotels){
      setAllHotels(searchesHotels);
    }
    else if(filteredData){
      setAllHotels(filteredData);
    }
    else{
      axios.get("http://localhost:8080/api/hotels")
      .then(({data})=>setAllHotels(shuffelArray(data.hotels)))
      .catch(()=>console.log("error while fetching data"))
      console.log(allHotels)
    }
  },[searchesHotels,filteredData])
  // console.log(allHotels)
    function handleCloseSearch(){
    dateDispatch({
      type:"CLOSE",
    })
  }
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  return (
    <div className='relative'
    onClick={handleCloseSearch}
    >
      <div className='flex justify-between items-center'>
        <div ><Category category={state.hotelCategory}/></div>
        <div><Filter/></div>
      </div>
        {isSearchOpen && 
        <div className=" fixed inset-0 z-50 flex items-start justify-center overflow-hidden pt-20 px-4 sm:px-6 md:px-10">
          <div className="bg-white p-4 sm:p-6 rounded shadow-lg w-full max-w-2xl mx-auto"
          >
            <SearchBar />
          </div>
        </div>
        }
        {
          isUser && 
          <div className="fixed top-20 right-4 z-50 w-full max-w-md sm:right-6 md:right-10">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl">
              <Auth />
            </div>
          </div>
        }
        {
          isFilterOpen && 
        <div className=" fixed inset-0 z-50 flex items-start justify-center overflow-hidden pt-20 px-4 sm:px-6 md:px-10">
          <div className="bg-white p-4 sm:p-6 rounded shadow-lg w-full max-w-2xl mx-auto"
          >
            <FilterData/>
          </div>
        </div>
        }
      <div className='grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  gap-10'>
        {
          state.hotelCategory?allHotels.map(hotel=>hotel.category==state.hotelCategory?<Card hotel={hotel}/>:""):allHotels.map((hotel) => <Card hotel={hotel} />)
        }
      </div>
      <div>
        {allHotels.length==0 ?<NotAvaliable/>:""}
      </div>
    </div>
  )
}

export default Home
