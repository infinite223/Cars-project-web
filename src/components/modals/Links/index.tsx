import React from 'react'
import { Outlet } from 'react-router-dom'
import './styles.scss'
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

export const Links = () => {
  const navigate = useNavigate()
  return (
    <div className='links'>
      <nav>
        <motion.div whileHover={{color:'#293'}} className="links_nav_back">
          <IoIosArrowBack onClick={() => navigate(-1)} size={30} style={{padding:'10px', marginLeft:'10px'}}/>
        </motion.div>
      </nav>

      <div className='links_content'>
        <Outlet/>
      </div>
    </div>
  )
}
