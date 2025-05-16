import React from 'react'

const HotelDetails = ({hotel}) => {
  if(!hotel)  return null
  const {
    hostName, numberOfguest, numberOfStudies, numberOfBeds, 
    ameneties, healthAndSafety, houseRules, numberOfBedrooms, 
    numberOfBathrooms
    } = hotel
console.log(numberOfBedrooms,numberOfBathrooms)
  return (
    <>
      <div>
        <span className='text-xl'>Hosted By,  {hostName}</span>
        <p>{numberOfguest} gusts , {numberOfBedrooms>1?`${numberOfBedrooms} Beedrooms`:`1 Beedroom`} 
          ,  {numberOfBeds} bed, {numberOfBathrooms>1?`${numberOfBathrooms} Bathrooms`:`1 Bathroom`}
        </p>

        <hr className='mt-3 mb-5 justify-around' />
        <div className='flex gap-8'>
            <div>
              {houseRules.map((rule, i) =><p className='text-xl'>{i+1}.{rule}</p>)}
            </div>
            <div>
              {healthAndSafety.map((safety, i) => <p className='text-xl'>{safety}</p>)}
            </div>
        </div>
         <hr className='mt-3 mb-5 justify-around' />
         <div className={ameneties.length>3?"grid grid-cols-2":""}>
          <span className='text-xl'><span>What this Place Offers</span></span>
          {ameneties.map(item=><p><i className="fa-solid fa-check"></i> {item}</p>)}
         </div>
      </div>
    </>
  )
}

export default HotelDetails
