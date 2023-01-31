import React from 'react'
import './styles.scss'
import { useCycle, motion } from "framer-motion";
import useAuth from '../../hooks/useAuth';
import { Outlet, useLocation, useNavigate, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CarprojectData } from '../../utils/types';
import { IoIosArrowBack } from 'react-icons/io'
import { getColorsCircle } from '../../utils/functions/colorsCircle';
import { BsFillShareFill, BsThreeDotsVertical } from 'react-icons/bs'
import { FiSend, FiHeart } from 'react-icons/fi'
import { CircleGradient } from './circle';

export const ProjectPage = () => {
  const { logout, user }:any =  useAuth()  
  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    if(!user){
      navigate('../../start')
    }
  }, [user])

  const {car, id, place, createdAt, author} = location.state as CarprojectData;
  const colors = car.performance && getColorsCircle(car.performance[0].value, car.performance[0].type)
  console.log(user)
  return (
    <motion.div className='projectPage' animate={{opacity:[0.6, 1]}}>
        <nav className='projectPage__nav'>
          <div className='projectPage__nav-main'>
            <motion.div whileHover={colors?{color: colors[0]}:{}}>
              <IoIosArrowBack onClick={() => navigate(-1)} size={30} style={{padding:'10px', marginLeft:'10px'}}/>
            </motion.div>
            <div className='projectPage__nav-carMake'>{car.CarMake}</div>
            {colors && <div className='projectPage__nav-model' style={{color: colors[0]}}>{car.model}</div>}
          </div>
          
          <BsThreeDotsVertical style={{padding:'0 10px'}} color='white' size={24} className="icon"/>
        </nav>
        <div className='projectPage__main'>
          <motion.div className='projectPage__main_photos projectSection'
            style={colors?{borderColor: colors[0]}:{}}
            initial={{width:'500px'}}
            whileHover={{
              width: '600px'
            }}
          >
            <h1>Zdjęcia</h1>
            <div className='images'>
              {car.imagesCar.map((image) => <img className='image' src={image.url}/>)}
            </div>
          </motion.div>
          <motion.div className='projectPage__main_info projectSection'
            whileHover={{
             // width: '450px'
            }}
          >
            <h1>Podstawowe informacjie</h1>
            <div className='projectPage__main_info-circles'>
              {car.performance?.map((data, i) => {
                return (
                  <>
                    {data?.value&&<CircleGradient key={i} type={data?.type} value={data?.value}/>}
                  </>       
                )
              })}
      
            </div>
           
            <p>{car.description}</p>

          </motion.div>
          <motion.div className='projectPage__main_history projectSection'
            style={colors?{borderColor: colors[0]}:{}}
            initial={{width:'500px'}}
            whileHover={{
              width: '600px'
            }}
          >
            <h1>Przebieg modyfikacji</h1>

          </motion.div>
        </div>
        <motion.footer className='projectPage__footer'>
          <div className='projectPage__footer-icons'>
            <motion.div whileHover={colors?{color: colors[0]}:{}}>
              <FiSend size={22} className="icon"/>
            </motion.div>
            <motion.div whileHover={colors?{color: colors[0]}:{}}>
              <BsFillShareFill  size={22} className="icon"/>
            </motion.div>
            <motion.div whileHover={colors?{color: colors[0]}:{}}>
              <FiHeart size={24} className="icon"/>
            </motion.div>
            {car.likes.length}
          </div>

          <motion.div className='projectPage__footer-author' whileHover={{color: 'white'}}>
            <div className='authorText'>{author.name}</div>
            <img src={author.imageUri} className="authorImg"/>
          </motion.div>
        </motion.footer>
    </motion.div>
  )
} 
