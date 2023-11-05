import React from "react"
import ErrorMsg from "../ErrorMsg/ErrorMsg"
import './Calendar.css'


function Table(props){

//props
const currentWeek = props.currentWeek
const isHourAvailable = props.isHourAvailable
const selectDate = props.selectDate


if(currentWeek.length !==  5) return <ErrorMsg  message={'There was an error retrieving the calendar please try again later'}/>
return(
  <div data-testid = 'table-wrapper'className="table-wrapper">
        <table data-testid = 'table-element' className="calendar-table">
          <thead>
            <tr>
              <th></th>
              {currentWeek.map((day, dayIndex) => (
                <th key={dayIndex}>
                  {day.toLocaleString('en-US', { weekday: 'long' })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }, (_, hourIndex) => {
              const hour = 14 + hourIndex;
              return (
                <tr key={hourIndex}>
                  <td data-testid= 'hour-row'>
                        {hour}:00
                  </td>
                  {currentWeek.map((day, dayIndex) => {
                    const isAvailable = isHourAvailable(day, hour);
                    const cellClass = isAvailable ? 'available' : 'unavailable';
                    return (
                      <td
                        title="hour-cell"
                        onClick={() => selectDate(day, hour)}
                        key={dayIndex}
                        className={cellClass}
                      >

                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
  </div>  
)
}

export default Table