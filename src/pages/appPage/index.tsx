import React, { useMemo } from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import useAuth from '../../hooks/useAuth';
import { Outlet, useLocation, useNavigate, } from 'react-router-dom';
import { useEffect, useState, FC } from 'react';
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
import { useChats } from './../../hooks/useChats';
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from './../../reducers/chatsSlices';

const IconItem:FC<{size:number}> = ({size}) => {
  return (
    <FaChartLine size={size}/>
  )
}

const links = [
  {name: 'Projekty', Icon: <FaChartLine size={20} style={{marginLeft: '15px'}}/>, navigateTo: '', _pathname: '/start/a' },
  {name: 'Szukaj projektów', Icon: <FiSearch size={20} style={{marginLeft: '15px'}}/>, navigateTo: 'searchProjects' ,  _pathname: '/start/searchProjects' },
  {name: 'Spoty',  Icon: <BsPeople size={20} style={{marginLeft: '15px'}}/>, navigateTo: '',  _pathname: '/....' },
  {name: 'Problemy',  Icon: <MdOutlineSyncProblem size={20} style={{marginLeft: '15px'}}/>, navigateTo: '' ,  _pathname: '/...' },
  {name: 'Czaty',  Icon: <BsChatSquareText size={20} style={{marginLeft: '15px'}}/>, navigateTo: 'chat' ,  _pathname: '/start/chat' },
  {name: 'Mój profil',  Icon: <IoPersonCircleOutline size={20} style={{marginLeft: '15px'}}/>, navigateTo: '' ,  _pathname: '/...' },
]

export const AppPage = () => {
  const { logout, user, userType }:any =  useAuth()  
  const [showCreateProject, setShowCreateProject] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = useLocation();

  // const { loadingChats } = useMemo(() => useChats(user.uid, dispatch), []);
  const { chats } = useSelector(selectChats)

  useEffect(() => {
    if(!user){
      window.history.replaceState(null, '', "/");
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
            <div className='link' style={{marginLeft: '20px'}}>
              <img className='link_imageProfile' src={user.imageUri}/>
              <div>{user.name}</div>
            </div>

            {links.map(({name, navigateTo, Icon, _pathname}, id) => (
               <div 
                key={id.toString()}
                className='link' 
                onClick={()=> navigateTo==='chat'
                  ?navigate(`chat/:${chats[0].id}`,  {state:chats[0]})
                  :navigate(navigateTo)
                } 
                style={pathname.includes(_pathname)?{color: 'white', fontWeight:'600', backgroundColor: '#273'}:{}}
               >  
                {Icon}
               <div>{name}</div>
             </div>
            ))}

             
            <div className='link' onClick={()=>{signOut(auth); window.history.replaceState(null, '', "/")}}>
              <div style={{marginLeft:'15px'}}>Wyloguj</div>
            </div>
          </div>

          <div className='link'>
            <CiSettings size={26} style={{marginLeft:'15px'}}/>
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
