import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../firebase/account/register'
import { CustomInput } from '../customInput'
import './styles.scss'

export const RegisterForm = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const repeatPasswordRef = useRef<HTMLInputElement>(null)

  return (
    <div className='registerForm'>
        <h3>Dobry wybór!</h3>
        <div style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
            <h2>Utwórz konto w Cars Designs</h2>
            <form onSubmit={(e)=>register(e, emailRef.current?.value, passwordRef.current?.value, repeatPasswordRef.current?.value)}>
                <CustomInput ref={emailRef} placeholder='E-mail' type='email'/>
                <CustomInput ref={passwordRef} placeholder='Password' type='password'/>
                <CustomInput ref={repeatPasswordRef} placeholder='Repeat password' type='password'/>

                <button type='submit'>Utwórz</button>
            </form>
            <p>Masz już konto<Link to={'/start/login'} className="registerForm-link"> Zaloguj się</Link></p>
        </div>

    </div>
  )
}   
