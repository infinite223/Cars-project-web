import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomInput } from '../customInput'
import './styles.scss'

export const LoginForm = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='loginForm'>
        <h3>Witaj ponownie!</h3>
        <div style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
            <h2>Zaloguj się do Cars Designs</h2>
            <form>
                <CustomInput setValue={setEmail} placeholder='E-mail' type='email'/>
                <CustomInput setValue={setPassword} placeholder='Password' type='password'/>
                
                <button>Zaloguj</button>
            </form>
            <p>Nie masz konta? <Link to={'/start/register'} className="loginForm-link"> Zarejestruj się</Link></p>
        </div>

    </div>
  )
}   
