import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../firebase/account/register'
import useAuth from '../../hooks/useAuth'
import { CustomInput } from '../customInput'
import './styles.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../reducers/loadingSlice'
import { setMessage } from '../../reducers/messageSlice'


export const RegisterForm = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [repeatPassword, setRepeatPassword] = useState('')
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const tryRegister = (e:any) => {
    e.preventDefault();

    dispatch(setLoading(true))
    if(repeatPassword === password){
      if(password.length>5){
        register(e, email, password, navigate)
        .then((message)=> {
          dispatch(setMessage({show:true, type: "SUCCESS", message:'Success'}))
          dispatch(setLoading(false))
        })
        .catch((error)=>{ 
          dispatch(setMessage({show:true, type: "ERROR", message:error}))
          dispatch(setLoading(false))
        })    
      }
      else{
        dispatch(setMessage({show:true, type: "ERROR", message:'Hasła jest za krutkie'}))
        dispatch(setLoading(false))
      }
     
    }
    else {
      dispatch(setMessage({show:true, type: "ERROR", message:'Hasła są różne'}))
      dispatch(setLoading(false))

    }
 
  }

  return (
    <div className='registerForm'>
        <h3>Dobry wybór!</h3>
        <div style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
            <h2>Utwórz konto w Cars Designs</h2>
            <form onSubmit={tryRegister}>
                <CustomInput setValue={setEmail} placeholder='E-mail' type='email'/>
                <CustomInput setValue={setPassword} placeholder='Password' type='password'/>
                <CustomInput setValue={setRepeatPassword} placeholder='Repeat password' type='password'/>

                <button type='submit'>Utwórz</button>
            </form>
            {/* <p>Masz już konto<Link to={'/start'} className="registerForm-link"> Zaloguj się</Link></p> */}
        </div>

    </div>
  )
}   
