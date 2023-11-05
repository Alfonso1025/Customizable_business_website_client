import React, { useState, useEffect } from 'react';
import './Calendar.css';
import Confirm from './Confirm';
import Table from './Table';
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
const Calendar = () => {

//local state
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentWeek, setCurrentWeek] = useState([])
    const [currentAppointments, setCurrentAppointments] = useState([])
    const [isTemporarilyReserved, setIsTemporarilyReserved] = useState(false)
    const [preSelectedDate, setPreSelectedDate] = useState('') // the user has selected the date but has not confirmed yet
    const [preSelectedHour, setPreSelectedHour] = useState('')
    const [preSelectedDay, setPreSelectedDay] = useState('')
    const [sqlDate, setSqlDate] = useState('') // is the preselected date but in datetime sql format
// function definitions
const generateWeek = (startDate, numDays) => {
    const week = [];
    for (let i = 0; i < numDays; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      week.push(day);
    }
    return week
  };
   
const getAllAppointments = async()=>{
    try {
        const response = await fetch('http://localhost:3001/get_appointments')
        const parseResponse = await response.json()
        console.log('those are all the appointments: ',parseResponse)
        setCurrentAppointments(parseResponse)
    } catch (error) {
        console.log(error)
    }
    
  }
    
 const goToNextWeek = ()=>{

    if (currentWeek.length > 0) {
        const last = currentWeek[currentWeek.length - 1];
        const nextWeekStartDate = new Date(last);
        nextWeekStartDate.setDate(last.getDate() + 1); // Start the next week
  
        setCurrentWeek(generateWeek(nextWeekStartDate, 5));
 }
}

const goToLastWeek = () => {
    if (currentWeek.length > 0) {
      const first = currentWeek[0];
      const lastWeekStartDate = new Date(first);
      lastWeekStartDate.setDate(first.getDate() - 6);

      setCurrentWeek(generateWeek(lastWeekStartDate, 5));
    }
  };
const dateToSqlFormat = (day, hour)=>{
    
     const selectedDate = new Date(day);

     // Set the time to the specified hour
     selectedDate.setHours(hour, 0, 0, 0);

     // Format the 'selectedDate' as a MySQL DATETIME string
     const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const date = String(selectedDate.getDate()).padStart(2, '0');
    const hours = String(selectedDate.getHours()).padStart(2, '0');
    const minutes = '00';
    const seconds = '00';

    const formattedDate = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    return formattedDate

  }
const selectDate = (day, hour)=>{
    
    const date = new Date(day);
    date.setHours(hour, 0, 0, 0);

   const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
   };

   const stringDate = date.toLocaleDateString('en-US', options);
   const mysqlFormatDate = dateToSqlFormat(date, hour)
    setPreSelectedDate(stringDate)
    setIsTemporarilyReserved(true)
    setPreSelectedDay(day)
    setPreSelectedHour(hour)
    setSqlDate(mysqlFormatDate)

  }

  
  const isHourAvailable = (day, hour)=>{
   const date = dateToSqlFormat(day, hour)
   const range = currentAppointments.length
   for(let i = 0; i < range; i++ ){
       if(date === currentAppointments[i].appointment_date){
        return false
       }
   }
   return true
  }
  // use state hooks
useEffect(() => {
    
    setCurrentWeek(generateWeek(currentDate, 5));
  }, []); 

useEffect(()=>{
    getAllAppointments()
  },[])

  return (
<>
   { !isTemporarilyReserved &&
    
  <div data-testid='calendar-wrapper' className='calendar-wrapper'>

      <div data-testid = 'calendar-header' className='calendar-header'>
        <h1>
          From{' '}
            {currentWeek.length > 0 && currentWeek[0].toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}{' '}
            to{' '}
            {currentWeek.length > 0 && currentWeek[currentWeek.length - 1].toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
           })}
        </h1>
      </div>
      <div data-testid ='move-week-wrapper' className='move-week-wrapper'>
               
                <div data-testid = 'button-back' onClick={goToLastWeek} className='move-week-div'>
                    <IoChevronBackSharp style={{fontSize: '60px',color:' rgb(80, 106, 114)'}}/>
                    
                </div>
                <div data-testid='button-forward'onClick={goToNextWeek} className='move-week-div'> 
                    <IoChevronForwardSharp style={{fontSize: '60px',color:'rgb(80, 106, 114)'}}/>
                </div>
      </div>
         
      <Table currentWeek={currentWeek} 
                 isHourAvailable={isHourAvailable}
                 selectDate={selectDate}/>
    
    
  </div> 
}
{
    isTemporarilyReserved &&
     <Confirm preSelectedDate={preSelectedDate}
              sqlDate = {sqlDate}/>
              
}
</>
  );
    

};

export default Calendar;
