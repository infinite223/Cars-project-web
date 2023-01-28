import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../firebase/account/register'
import useAuth from '../../hooks/useAuth'
import { CustomInput } from '../customInput'
import './styles.scss'
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [repeatPassword, setRepeatPassword] = useState('')
   const navigate = useNavigate()

  return (
    <div className='registerForm'>
        <h3>Dobry wybór!</h3>
        <div style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
            <h2>Utwórz konto w Cars Designs</h2>
            <form onSubmit={(e)=>register(e, email, password, repeatPassword, navigate)}>
                <CustomInput setValue={setEmail} placeholder='E-mail' type='email'/>
                <CustomInput setValue={setPassword} placeholder='Password' type='password'/>
                <CustomInput setValue={setRepeatPassword} placeholder='Repeat password' type='password'/>

                <button type='submit'>Utwórz</button>
            </form>
            <p>Masz już konto<Link to={'/start'} className="registerForm-link"> Zaloguj się</Link></p>
        </div>

    </div>
  )
}   
