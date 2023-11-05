import React from "react"
import './Calendar.css'
function Confirm(props){

    //props
    const sqlDate = props.sqlDate
    const preSelectedDate = props.preSelectedDate

    //function definitions
    const makeAppointment = async() => {

        const client_name = 'pepe'
      // Create a data object with the client_name and appointment_date
         const data = {
              client_name,
              appointment_date: sqlDate, // Send date in ISO format
            };
      
            // Send a POST request to the server
           const response = await fetch('http://localhost:3001', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
              },
              body: JSON.stringify(data), // Send data as JSON string
            });
        
            if (response.ok) {
              console.log('Data sent to server successfully.');
            } else {
              console.error('Error sending data to server.');
            }
          
          
          //setSelectedDate(selectedDateTime);
        };
    return(
        <div>
            <p>You have selected {preSelectedDate} for your next appointment</p>
            <button onClick={makeAppointment}>confirm</button>
        </div>
    )
}

export default Confirm