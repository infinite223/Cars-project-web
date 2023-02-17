import React, { useState } from 'react'
import './styles.scss'
import { CustomInput } from './../../../../components/customInput/index';
import { AiOutlineRight } from 'react-icons/ai';
import { NextStageButton } from '../NextStageButton';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setMessage } from '../../../../reducers/messageSlice';

export const Performance = () => {
    const [carPerformance, setCarPerformance]  = useState({
      power:0,
      torque:0,
      _0_100: 0,
      _100_200:0
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validData = () => {
      if(
          (carPerformance.power > 10 && carPerformance.power < 10050)   &&
          (carPerformance.torque > 10 && carPerformance.torque < 10050) &&
          (carPerformance._0_100 > 1 && carPerformance._0_100 < 50) &&
          (carPerformance._100_200 > 1.5 && carPerformance._100_200 < 100) 
       )
       {
        dispatch(setMessage({show:true, message: 'GIT', type: 'SUCCESS'}))
        // navigate('/createProject/performance')
       }
       else {
        dispatch(setMessage({show:true, message: 'Nieprawidłowe dane samochodu', type: 'ERROR'}))
       }
    }

  return (
    <motion.div className='performance' animate={{opacity: [.5, 1]}}>
        <div className='linkContent-nav'>
            <div>Osiągi samochodu</div>
            <div className='linkContent-nav_number'>Etap 2</div>
        </div>
        <div className='linkContent_inputs-container'>
          <CustomInput 
            fontSize={18} 
            placeholder='Podaj moc (km)' 
            setValue={(text)=>setCarPerformance({...carPerformance, power:parseFloat(text.toString())})} 
            type={'number'} 
            theme={'dark'}
          />
          <CustomInput 
            fontSize={18}  
            placeholder='Podaj moment obrotowy (Nm)' 
            setValue={(text)=>setCarPerformance({...carPerformance, torque:parseFloat(text.toString())})}
            type={'number'} 
            theme={'dark'}
          />
          <CustomInput 
            fontSize={18} 
            placeholder='Przyśpieszenie 0-100km/h (s)' 
            setValue={(text)=>setCarPerformance({...carPerformance, _0_100:parseFloat(text.toString())})}
            type={'number'} 
            theme={'dark'}
          />
          <CustomInput 
            fontSize={18} 
            placeholder='Przyśpieszenie 100-200km/h (s)' 
            setValue={(text)=>setCarPerformance({...carPerformance, _100_200:parseFloat(text.toString())})}
            type={'number'} 
            theme={'dark'}
          />
        </div>

        <NextStageButton goToNextStage={validData} text='Dalej' />
    </motion.div>
  )
}
