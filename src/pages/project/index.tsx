import React from 'react'
import './styles.scss'
import { useCycle, motion } from "framer-motion";
import useAuth from '../../hooks/useAuth';
import { Outlet, useLocation, useNavigate, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CarprojectData } from '../../utils/types';
import { IoIosArrowBack } from 'react-icons/io'
import { getColorsCircle } from '../../utils/functions/colorsCircle';

export const ProjectPage = () => {
  const { logout, user }:any =  useAuth()  
  const navigate = useNavigate()
  const location = useLocation();

  const {car, id, place, createdAt, author} = location.state as CarprojectData;
  const colors = car.performance && getColorsCircle(car.performance[0].value, car.performance[0].type)

  return (
    <div className='projectPage'>
        <nav className='projectPage__nav'>
          <IoIosArrowBack onClick={() => navigate(-1)} size={30} style={{padding:'10px', marginLeft:'10px'}}/>
          <div className='projectPage__nav-carMake'>{car.CarMake}</div>
          {colors && <div className='projectPage__nav-model' style={{color: colors[0]}}>{car.model}</div>}
        </nav>
        <div className='projectPage__main'>
          <motion.div className='projectPage__main_info projectSection'
            whileHover={{
              width: '40%'
            }}
          >
            <h1>Podstawowe informacjie</h1>
          </motion.div>
          <motion.div className='projectPage__main_photos projectSection'
            whileHover={{
              width: '40%'
            }}
          >
            <h1>Zdjęcia</h1>
          </motion.div>
          <motion.div className='projectPage__main_history projectSection'
            whileHover={{
              width: '40%'
            }}
          >
            <h1>Przebieg modyfikacji</h1>
            <p>sadsd</p>
          </motion.div>
        </div>
        <footer className='projectPage__footer'></footer>
    </div>
  )
} 
