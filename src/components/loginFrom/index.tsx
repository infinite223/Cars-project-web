import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../firebase/account/login'
import { CustomInput } from '../customInput'
import './styles.scss'
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

  return (
    <div className='loginForm'>
        <h3>Witaj ponownie!</h3>
        <div style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
            <h2>Zaloguj się do Cars Designs</h2>
            <form onSubmit={(e)=>login(e, email, password, navigate)
              .then((message)=>console.log(message))
              .catch((error)=>console.log(error))
              }>
                <CustomInput setValue={setEmail} placeholder='E-mail' type='email'/>
                <CustomInput setValue={setPassword} placeholder='Password' type='password'/>
                
                <button>Zaloguj</button>
            </form>
            <p>Nie masz konta? <Link to={'/start/register'} className="loginForm-link"> Zarejestruj się</Link></p>
        </div>

    </div>
  )
}   
