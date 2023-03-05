import React from 'react'
import './styles.scss'
import { FC } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../reducers/loadingSlice';
import { setMessage } from '../../reducers/messageSlice';
import { Car, User } from '../../utils/types';
import { IoMdClose, IoIosArrowBack } from 'react-icons/io';
import useAuth from '../../hooks/useAuth';
import { CustomInput } from '../../components/customInput';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { PreViewButton } from './PreViewButton';

interface Props {
    // showModal: boolean,
    // setShowModal: (value:boolean) => void,
}

export const CreateProjectModal:FC<Props> = ({}) => {
    const dispatch = useDispatch()
    const { user }:any = useAuth()
    const { pathname } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
      if(!user){
        navigate('../../start')
      }
    }, [user])

  return (
    <AnimatePresence>
         <motion.div 
            className='createProject' 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
          <div className='createProject-mainNav'>
            <IoIosArrowBack onClick={() => navigate('/start')} size={30} style={{padding:'0px 10px'}} className="back-icon"/>
            <h1>Dodawanie projektu do Cars designs</h1>
          </div>
          <div className='createProject-container'>
            <nav>
              <div className='links-container'> 
                <div className='link' onClick={() => navigate('/createProject')} style={pathname==='/createProject'?{color: '#2d3'}:{}}>
                  Podstawowe informacje
                </div>
                <div className='link' onClick={() => navigate('/createProject/performance')} style={pathname==='/createProject/performance'?{color: '#2d3'}:{}}>
                  Osiągi samochodu
                </div>
                <div className='link' style={pathname==='/createProject/photos'?{color: '#2d3'}:{}}>
                  Zdjęcia
                </div>
                <div className='link' style={pathname==='/createProject/photos'?{color: '#2d3'}:{}}>
                  Przebieg modyfikacji
                </div>
              </div>

              <PreViewButton />

            </nav>
            <div className='createProject-container_content'>
              <Outlet/>
              {/* i w tle będzie pokazuwało aktualny stan projektu, jak wygląda wersja na PC i może mobilna xD */}
            </div>
          </div>
        </motion.div>
    </AnimatePresence>
  )
}
