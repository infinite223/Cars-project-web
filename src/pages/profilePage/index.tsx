import './styles.scss'

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { getColorsCircle } from '../../utils/functions/colorsCircle';
import { CarprojectData } from '../../utils/types';

export const ProfilePage = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [showOptions, setShowOptions] = useState(false)
    const {car, id, place, createdAt, author} = location.state as CarprojectData;
    const colors = car.performance && getColorsCircle(car.performance[0].value, car.performance[0].type)

  return (
    <div className='profilePage'>
        <nav className='projectPage__nav'>
          <div className='projectPage__nav-main'>
            <motion.div whileHover={colors?{color: colors[0]}:{}}>
              <IoIosArrowBack onClick={() => navigate(-1)} size={30} style={{padding:'0px 10px', marginLeft:'10px', marginTop:'5px'}}/>
            </motion.div>
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:'0px'}}>
              <div className='projectPage__nav-carMake'>{car.CarMake}</div>
              {colors && <div className='projectPage__nav-model' style={{color: colors[0]}}>{car.model}</div>}
            </div>
          </div>
          
          <BsThreeDotsVertical onClick={() => setShowOptions(true)} style={{padding:'0 10px'}} color='white' size={24} className="icon"/>
        </nav>
    </div>
  )
}
