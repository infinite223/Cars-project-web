import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CustomInput } from '../customInput'
import './styles.scss'

export const LoginForm = () => {
    
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <div className='loginForm'>
        <h3>Witaj ponownie!</h3>
        <div style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
            <h2>Zaloguj się do Cars Designs</h2>
            <form>
                <CustomInput ref={emailRef} placeholder='E-mail' type='email'/>
                <CustomInput ref={passwordRef} placeholder='Password' type='password'/>
                
                <button>Zaloguj</button>
            </form>
            <p>Nie masz konta? <Link to={'/start/register'} className="loginForm-link"> Zarejestruj się</Link></p>
        </div>

    </div>
  )
}   
