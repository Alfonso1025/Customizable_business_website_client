import React, {useState} from "react"
import { Link } from "react-router-dom"
import SignUp from "../../components/SignUp/SignUp"
import SignIn from "../../components/SignIn/SignIn"


function Appointment(){
    const [isLoginOpen, setIsLoginOpen] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)


    return(
        <>
        { isLoginOpen ? <SignIn setIsAuthenticated={setIsAuthenticated}
                        setIsLoginOpen ={setIsLoginOpen}/>
        
                      :   
                        <SignUp setIsLoginOpen={setIsLoginOpen} />
        
        }
        </>
    )
}

export default Appointment