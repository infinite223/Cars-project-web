import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './styles.scss'
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

export const Links = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  console.log(pathname)

  return (
    <div className='links'>
      <nav>
        <motion.div whileHover={{color:'#293'}} className="links_nav_back">
          <IoIosArrowBack onClick={() => navigate('/')} size={30} style={{padding:'10px', marginLeft:'0px'}}/>
        </motion.div>

        <div className='links_nav-links'>
          <div className='link' onClick={()=> navigate('news')} style={pathname==='/links/news'?{color: '#2a3', fontWeight:'600'}:{}}>
            Nowości
          </div>
          <div className='link' onClick={()=> navigate('about')} style={pathname==='/links/about'?{color: '#2a3', fontWeight:'600'}:{}}>
            O aplikacji
          </div>
          <div className='link' onClick={()=> navigate('')} style={pathname==='/links'?{color: '#2a3', fontWeight:'600'}:{}}>
            Regulamin
          </div>
          <div className='link' onClick={()=> navigate('policy')} style={pathname==='/links/policy'?{color: '#2a3', fontWeight:'600'}:{}}>
            Polityka prywatności
          </div>
      
        </div>
      </nav>

      <div className='links_content'>
       <Outlet/>
      </div>
    </div>
  )
}
