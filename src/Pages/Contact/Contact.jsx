import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact(){
    
    const form = useRef()

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_wd04e3j', "id_contact_form", form.current, '7NspTMH9mI7skH4vJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    
    return(
        <div data-testid= 'contact-wrapper'className="contact-wrapper">
             <h2>Contacto</h2>
             <form data-testid='contact-form'  ref= {form} onSubmit={sendEmail} className="form">
           
                <div data-testid ='input-grid'  className="input-grid">
                    <input name="from_firstname" className="contact-input" type="text" placeholder="Nombre"/>
                    <input name="from_lastname" className="contact-input" type="text" placeholder="Apellidos"/>
                    <input name="from_email"className="contact-input" type="email" placeholder="Correo electronico"/>
                    <input name="company"className="contact-input" type="text" placeholder="Tipo de asunto"/>

                </div>
                <textarea name="message" className="contact-message" placeholder="Escriba su mensaje" ></textarea>
                <button className="button"  id="contact-button">
                    SEND MESSAGE
                </button>
                  
                    
                    
            </form>
                  
        </div>
    )
}

export default Contact