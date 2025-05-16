import React from 'react'

const HotelImages = ({hotel}) => {
    if(hotel && hotel.image){
        console.log(hotel.image);
    }
    else{
        return(
            <div>
                Hotel currently not avaliable
            </div>
        )
    }
    const {image,imageArr} = hotel
    
  return (
    <>
    <div className='gap-3 hidden lg:flex'>
        <div>
            <img src={image} alt="" className='h-full'/>
        </div>
        <div className='grid w-[70%]  grid-cols-2 gap-1'>
            {imageArr && imageArr.map(image=><img src={image} className='h-80 w-full'/>)}
        </div>
    </div>
    <div className='flex flex-col gap-5 lg:hidden h-100 border-1 overflow-y-auto'>
        {imageArr && imageArr.map(image=><img src={image} className='h-80 w-full'/>)}
    </div>
    </>

  )
}

export default HotelImages
