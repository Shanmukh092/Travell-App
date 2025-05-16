import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDate } from '../../contex/date-contex/DateContex';
const DateSelector = ({type,selectedDate}) => {
  const [date,setDate] = useState(Date.now())
  const contex = useDate()
  if(!contex) return null;
  const {dateDispatch,checkOutDate,checkInDate} = contex;
  function stripTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function handleDateChange(userDate){
    console.log(userDate)
    const dateObj = new Date(userDate); 
    const today = stripTime(new Date());
    const selected = stripTime(dateObj);
    if(checkInDate && dateObj.getTime()<checkInDate){
      alert("Cannot select a past date,check out date should be the next dates from check in dates");
      return
    }
    setDate(userDate)
    if(type=="check-in"){
      dateDispatch({
        type:"CHECK-IN",
        payload:userDate
      })
    }
    else{
      if(!checkInDate){
        alert("Please select CheckIN Date..")
        return;
      }
      dateDispatch({
        type:"CHECK-OUT",
        payload:userDate
      })
    }
  }
  return (
    <div>
      <DatePicker
        selected={selectedDate?selectedDate:date}
        onChange={(date)=>handleDateChange(date)}
        dateFormat={'dd/MM/yyyy'}
        closeOnScroll={true}
        placeholder='CheckIN'
        className="border p-2 rounded focus:border-blue-600"
      />
    </div>
  )
}

export default DateSelector
