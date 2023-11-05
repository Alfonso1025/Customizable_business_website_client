import React from "react"
import './ErrorMsg.css'


function ErrorMsg(props){

    //props
    
    const message = props.message
   
    return(
    <div data-testid = 'error-container' className="error-container">
       <div className="error-box">
            <h1 className="error-message">{message}</h1>
       </div>
    </div>
    )
}

export default ErrorMsg