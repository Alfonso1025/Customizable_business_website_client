import React, { useRef } from 'react';
import './Trayectory.css'
import profilePic from '../../media/profile_portfolio-removebg-preview.png'


 
function Trayectory(){
    
    const estudios = `La Maestra Mejía se graduó como Licenciada en Psicología en 
    la Universidad Metropolitana en 1986. Además, obtuvo el grado de Maestra en 
    Pedagogía en UNITEC.`
    const academia = `La Maestra Mejía ha desempeñado su papel como docente de educación primaria 
    en diversas instituciones educativas de carácter privado, ubicadas en la 
    metrópolis de la Ciudad de México. Además, ha ejercido la función de psicóloga 
    en alguna de estas prestigiosas instituciones.`
    const practica = `El consultorio de la Maestra Mejía fue establecido en el año 
    1995. Desde entonces, se ha distinguido por su enfoque especializado en la 
    atención de niños a través de la terapia conductual. `
    const quote = `"El arte de escuchar es esencial en la terapia, porque a veces la persona necesita ser escuchada más que aconsejada" `
    const author = 'Carl Rogers'
    return(
        <div title = 'trayectory-wrapper'className="trayectory-wrapper">
             <div title='foto' className='foto'>
                <img src={profilePic} alt="imagen de perfil" />
                <p className='quote'>{quote}</p>
                <p className='author'>{author}</p>
             </div>
             <div className='main-content-wrapper'>
                <div className='main-content-item'>
                    <h2>Estudios</h2>
                    <p>{estudios}</p>
                </div>
                <div className='main-content-item'>
                    <h2>Academia</h2>
                    <p>{academia}</p>

                </div>
                <div className='main-content-item'>
                    <h2>Practica profesional</h2>
                    <p>{practica}</p>
                </div>
             </div>
                  
        </div>
    )
}

export default Trayectory