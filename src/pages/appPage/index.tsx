import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import useAuth from '../../hooks/useAuth';
import { Outlet, useLocation, useNavigate, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsBarChart, BsBarChartLine, BsChatSquareText, BsPeople } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { AiOutlinePlus } from 'react-icons/ai'
import { CiSettings } from 'react-icons/ci'
import nameApp from './../../assets/nameApp_white.png'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { MdOutlineSyncProblem } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';
import { GrLineChart } from 'react-icons/gr'
import { IoPersonCircleOutline, IoPersonCircleSharp } from 'react-icons/io5';
import { IoMdCreate } from 'react-icons/io';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { CreateProjectModal } from './../../modals/createProjectModal/index';


export const AppPage = () => {
  const { logout, user, userType }:any =  useAuth()  
  const [showCreateProject, setShowCreateProject] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation();
  console.log(user)
  useEffect(() => {
    if(!user){
      navigate('../../start')
    }

    if(user && userType === 'normalAuth') {
      navigate('/start/firststart')
    }
  }, [user])

  return (
    <div className='app'>
      {/* <CreateSpotModal/> */}
        {/* {isMobile&& <>
            <h1>Wesja przeglądarkowa aplikacji jest dostępna tylko na urządzenia z większym ekranem....</h1>
            <p>Zalecamy pobranie darmowej aplikacji Cars designs</p>
        </>} */}
      <nav className='app-top_navigatin'>
          <img src={nameApp} className="app-navigation-logo"/>

        <div className='app-navigation-buttons'>
          <div className='nav-button' onClick={()=> navigate('../createProject')}>
           <BiMessageSquareAdd size={20}/> 
           <div>projekt</div>
           </div>
          <div className='nav-button'>
            <IoMdCreate size={20}/> 
            <div>spot</div> 
          </div>
        </div>
      </nav>
      <div className='app-main'>
      <nav className='app_left-main_navigation'>
          <div className='app_left-main_navigation_links'>   
            <div className='topNav'>
            <div className='link'>
              <img className='link_imageProfile' src={user.imageUri}/>
              <div>{user.name}</div>
            </div>
              <div className='link' onClick={()=> navigate('')} 
                style={pathname==='/start'?{color: 'white', fontWeight:'500'}:{}}
              >
                <BsBarChart size={20} color={pathname==='/start'?'#2a3':'gray'}/>
                <div>Projekty</div>
              </div>
              <div className='link' onClick={()=> navigate('searchProjects')} style={pathname==='/app/searchProjects'?{color: 'white', fontWeight:'600'}:{}}>
                <FiSearch size={20} color={pathname==='/start/searchProjects'?'#2a3':'gray'}/>
                <div>Szukaj projektów</div>
              </div>
              <div className='link'>
                <BsPeople size={20}/>
                <div>Spoty</div>
              </div>
              <div className='link'>
                <MdOutlineSyncProblem size={24}/>
               <div>Problemy</div>
              </div>
              <div className='line'/>
            <div className='link'onClick={()=> navigate('chat/0')} style={pathname.includes('/start/chat/')?{color: 'white', fontWeight:'600'}:{}}>
              <BsChatSquareText size={20} color={pathname.includes('/start/chat/')?'#2a3':'gray'}/>
              <div>Wiadomości</div>
            </div>
            <div className='link'>
              <IoPersonCircleOutline  size={24}/>
              <div>Mój profil</div>
            </div>
            <div className='link' onClick={()=>{signOut(auth); navigate('/start')}}>
              <div>Wyloguj</div>
            </div>
            {/* <div className='link add-link'>
              <AiOutlinePlus size={22} />
              <div>Dodaj projekt</div>
            </div>   */}
          </div>

          <div className='link'>
            <CiSettings size={26}/>
            <div>Ustawienia</div>
            </div>
          </div>
      </nav>

      <div className='app_content'>
          <Outlet/>
      </div>
      </div>
    </div>
  )
} 
