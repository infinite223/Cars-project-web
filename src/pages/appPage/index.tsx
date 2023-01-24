import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { useCycle } from "framer-motion";
import { isBrowser, isMobile } from 'react-device-detect';
import useAuth from '../../hooks/useAuth';
import { Outlet, useNavigate, } from 'react-router-dom';
import { useEffect } from 'react';
import nameApp from './../../assets/nameApp.png'


export const AppPage = () => {
  const { logout, user }:any =  useAuth()  
  const navigate = useNavigate()

  return (
    <div className='app'>
      <button className='logout' onClick={()=> { navigate('/'); logout() }}>log out</button>
        {isMobile&& <>
            <h1>Wesja przeglądarkowa aplikacji jest dostępna tylko na urządzenia z większym ekranem....</h1>
            <p>Zalecamy pobranie darmowej aplikacji Cars designs</p>
        </>}

      <nav className='app_left-main_navigation'>
          <img src={nameApp} className="app_left-main_navigation-logo"/>
          <div className='app_left-main_navigation_links'>   
            <div className='link'>
              Wiadomości
            </div>
            <div className='link'>
              Mój profil
            </div>
            <div className='link'>
              Dodaj projekt
            </div>
            <div className='link'>
              Projekty
            </div>
            <div className='link'>
              Szukaj projektów
            </div>
            <div className='link'>
              Spoty
            </div>
            <div className='link'>
              Ustawienia
            </div>
          </div>
      </nav>

      <div className='app_content'>
          <nav className='app_content-top_navigatin'></nav>
          <Outlet/>
      </div>

    </div>
  )
}
