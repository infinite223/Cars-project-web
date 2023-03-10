import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { motion, useCycle } from "framer-motion";
import { LoginForm } from '../../components/loginFrom';
import {
  Outlet,
} from "react-router-dom";
import { RegisterForm } from '../../components/registerForm';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react';


interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

export const StartPage:React.FC<RoutesProps> = ({location}) => {
  const navigate = useNavigate()
  const {user}:any = useAuth()
  const mobileScreen = useMediaQuery({ maxWidth: 624 })

  useEffect(()=> {
    if(mobileScreen) {
      navigate('/')
    }
    navigate('../start')

  }, [mobileScreen])

  return (
    <motion.div className='start_container' animate={{ scale: [1.2, 1]}}>
      
      <div className='start_container_main'>
        <Outlet/>
      </div>
        
        {/* <div className='start_container_main-forms'>
          <MdOutlineArrowBackIosNew size={22} onClick={() => navigate('/')} className='start_container_main-forms-back'/>
          <Outlet />
        </div> */}

      <div className='start_container_rightside'>
        <div className='start_container_rightside-content'>
          <h2>
            Nie masz jeszcze konta?
          </h2>
          <div className='button-nav'>
            Utwórz darmowe konto
          </div>
        </div>
      </div>
    </motion.div>
  )
}
