import React from "react"
import './Footer.css'
function Footer(){
const direccion = 'Colonia Nueva Tenochtitla, Norte 82 A #4729, Gustavo A. Madero CP. 07890'
const telefono = '55 1008 0734'
const email = 'luis-alfonso@gmail.com'

    return(
        <div data-testid ='footer-wrapper' className="footer-wrapper">
            <div className="direccion">
                <p>Dirección: {direccion}</p>
                <p>Telefono: {telefono}</p>
                <p>Email: {email}</p>
            </div>
            <p className="copyright">Copyright © 2023 Alfonso SoftTech. All rights reserved.</p>
        </div>
    )
}

export default Footer