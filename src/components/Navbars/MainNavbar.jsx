import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineHome, AiOutlineSchedule, AiOutlineMessage } from 'react-icons/ai';
import {GiTronArrow} from 'react-icons/gi'
import { RiPsychotherapyLine } from "react-icons/ri";
import './Navbar.css'

const navFeaturesJson = [
    {
        icon : AiOutlineHome
    }
]
function MainNavbar(){

    return(
        <nav title = 'navbar-wrapper'className="navbar-wrapper">
            <div className="nav-item">
               
                <Link to="/">
                    <AiOutlineHome style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Sitio</p>
            </div>
            <div className="nav-item">
                <Link to="/trayectoria"> 
                    <GiTronArrow style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Trayectoria</p>
            </div>
            
            <div className="nav-item">
                <Link to="/practica">
                    <RiPsychotherapyLine style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Areas de practica</p>
            </div>
            <div className="nav-item">
                <Link to="/agendarcita">
                    <AiOutlineSchedule style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Agendar cita</p>
            </div>

            <div  className="nav-item">
                <Link to="/contacto">
                    <AiOutlineMessage style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Contacto</p>
            </div>
      </nav>
    )
}

export default MainNavbar