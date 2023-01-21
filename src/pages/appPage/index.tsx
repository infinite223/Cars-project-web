import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { useCycle } from "framer-motion";
import { isBrowser, isMobile } from 'react-device-detect';
import useAuth from '../../hooks/useAuth';
import { useNavigate, } from 'react-router-dom';
import { useEffect } from 'react';


export const AppPage = () => {
  const { logout, user }:any =  useAuth()  
  const navigate = useNavigate()

  return (
    <div className='app'>
      <button onClick={()=> { navigate('/'); logout() }}>log out</button>
        {isMobile&& <>
            <h1>Wesja przeglądarkowa aplikacji jest dostępna tylko na urządzenia z większym ekranem....</h1>
            <p>Zalecamy pobranie darmowej aplikacji Cars designs</p>
        </>}

      <nav className='app_left-main_navigation'>

      </nav>

      <div className='app_content'>
          <nav className='app_content-top_navigatin'></nav>
      </div>

    </div>
  )
}
