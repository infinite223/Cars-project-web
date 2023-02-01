import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './styles.scss'
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

export const PolicyLink = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  return (
    <motion.div className='policy' animate={{opacity: [.5, 1]}}>
      <h1 className='links_content-header'>
        Polityka prywatności
      </h1>
    </motion.div>
  )
}
