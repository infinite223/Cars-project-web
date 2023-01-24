import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { useCycle } from "framer-motion";
import { isBrowser, isMobile } from 'react-device-detect';
import useAuth from '../../hooks/useAuth';
import { Outlet, useNavigate, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsChatSquareText } from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'
import { AiOutlinePlus } from 'react-icons/ai'
import { CiSettings } from 'react-icons/ci'
import nameApp from './../../assets/nameApp.png'


export const AppPage = () => {
  const { logout, user }:any =  useAuth()  
  const [location, setLocation] = useState('projects')
  const navigate = useNavigate()

  console.log(user)

  useEffect(()=>{
    if(user){
      navigate(`/app/${location}`)
      setLocation(`${location}`)

    }
    else {
      navigate('/')
    }

  }, [location])

  return (
    <div className='app'>
      <button className='logout' onClick={()=> { navigate('/'); logout() }}>log out</button>
        {/* {isMobile&& <>
            <h1>Wesja przeglądarkowa aplikacji jest dostępna tylko na urządzenia z większym ekranem....</h1>
            <p>Zalecamy pobranie darmowej aplikacji Cars designs</p>
        </>} */}

      <nav className='app_left-main_navigation'>
          <img src={nameApp} className="app_left-main_navigation-logo"/>
          <div className='app_left-main_navigation_links'>   
            <div className='topNav'>
              <div className='link' onClick={()=> setLocation('projects')} style={location==='projects'?{color: '#2f3', fontWeight:'600'}:{}}>
                Projekty
              </div>
              <div className='link' onClick={()=> setLocation('searchProjects')} style={location==='searchProjects'?{color: '#2f3', fontWeight:'600'}:{}}>
                Szukaj projektów
              </div>
              <div className='link'>
                Spoty
              </div>
              <div className='line'/>
            <div className='link'>
              <BsChatSquareText size={20}/>
              <div>Wiadomości</div>
            </div>
            <div className='link'>
              <RxPerson  size={24}/>
              <div>Mój profil</div>
            </div>
            <div className='link'>
              <AiOutlinePlus size={22} />
              <div>Dodaj projekt</div>
            </div>  
          </div>

          <div className='link'>
            <CiSettings size={26}/>
            <div>Ustawienia</div>
            </div>
          </div>
      </nav>

      <div className='app_content'>
          <nav className='app_content-top_navigatin'>
            <div className='app_content-top_navigatin-person'>
              <div className='app_content-top_navigatin-person-name'>Dawid</div>
              <img className='app_content-top_navigatin-person-image' src={'https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png'}/>
            </div>       
          </nav>
          <Outlet/>
      </div>

    </div>
  )
} 
