import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Pages/Appointment/Appointment.css'



const SignIn= (props)=>{


const remoteServer = process.env.REACT_APP_REMOTE_SERVER
const localServer = process.env.REACT_APP_LOCAL_SERVER
const navigate = useNavigate();
// recibe props
const setIsAuthenticated = props.setIsAuthenticated
const setIsLoginOpen = props.setIsLoginOpen


//store user input info into state variables
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errorMessage, setErrorMessage] = useState('missing credentials')
const [isLoginFailed, setIsLoginFailed] = useState(false)

//function definitions
const validateInputs = (uEmail, uPassword) =>{
   
    if(uEmail == '' || password == ''){
        setErrorMessage('missing a required field')
        return false
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uEmail)){
        setErrorMessage('invalid email format')
        return false
    }
    if(uPassword.length > 10){
        setErrorMessage('password cant be longer than 10 characters')
        return false
    }
    // Check if the password contains at least one capital letter, one number, and one special character
    if (!/(?=.*[A-Z])(?=.*\d)(?=.*[/,@?_-])/.test(uPassword)) {
        setErrorMessage('password must contain at least one capital letter, one number, and one special character (/,@?_-)');
        return false;
    }
    return true
}
const submitLoginForm = async(e)=>{
  e.preventDefault()
  //unsuccesfull login
  if(!validateInputs(email, password)) {
     setIsLoginFailed(true)
     setTimeout(()=>{setIsLoginFailed(false)}, 2000)
     return 
   }   
   try {
       const body = {email, password}
       const response = await  fetch(`${remoteServer}/users/login`,{
           method:'POST',
           headers:{'content-type':'application/json'},
           body: JSON.stringify(body)
        })
        const loggedUser = await response.json()
        console.log(loggedUser)
        if(loggedUser.code != 200){
            if(loggedUser.code === 400){
                if(loggedUser.message === 'missing_credentials')setErrorMessage('email and password are required fields')
                else if(loggedUser.message === 'invalid_email') setErrorMessage('invalid_email_format')
            }
            else if(loggedUser.code === 401){
                if(loggedUser.message ==='user_not_found') setErrorMessage('The email is incorrect')
                else if(loggedUser.message === 'incorrect_password') setErrorMessage('the password is incorrect')
                
            }
            setEmail('')
            setPassword('')
            setIsLoginFailed(true)
            setTimeout(()=>{setIsLoginFailed(false)}, 2000)
            
            return loggedUser
        }
        //successful login
        console.log('sucessful login')
        console.log(loggedUser)
        localStorage.setItem('token', loggedUser.data.token)
        setIsAuthenticated(true)
        navigate('/dashboard')

  
   } 
   catch (error) {
    console.log(error)
   }
}

const goToSignUp = ()=>{
    setIsLoginOpen(false)
}


    return (
        <>
            
            <div data-testid='auth-wrapper' className='auth-wrapper'>

            <h3 className='auth-header'>Entrar a mi cuenta</h3>
            
            <form data-testid='auth-form'className="auth-form" onSubmit={submitLoginForm}>
                <input type="email"
                  placeholder="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  className="auth-input"/>
                  
                <input 
                type="password" 
                 placeholder="password"
                 value={password}
                 onChange={e=>setPassword(e.target.value)}
                 className="auth-input"/>
                <button title='sign-in' className="auth-button">Sign in</button>
            </form> 
            {isLoginFailed && 
             <div data-testid='error-message-div'>
                <p data-testid='error-message-p'>{errorMessage}</p>
            </div>
           }
           
            <div className='goTo-container'>
                <div className='goTo-item'> 
                    <p className='goTo-p'>Todavia no tienes cuenta?</p>
                    <button className='goTo-button'onClick={goToSignUp}>Sign up</button>
                </div>
                
                
            </div>
        </div>
        </>
        
            
        
    )
}
export default SignIn