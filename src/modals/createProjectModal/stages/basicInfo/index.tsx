import React, { useState } from 'react'
import './styles.scss'
import { CustomInput } from './../../../../components/customInput/index';
import { AiOutlineRight } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { NextStageButton } from '../NextStageButton';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setMessage } from '../../../../reducers/messageSlice';

export const Basicinfo = () => {
    const [model, setModel] = useState('')
    const [carMake, setCarMake] = useState('VW')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')

    const validData = () => {
      if(model.length > 1 && carMake.length > 1){
        navigate('/createProject/performance')
      }
      else {
        dispatch(setMessage({show:true, message: 'Uzupełnij brakujące dane', type: 'ERROR'}))
      }
    }

  return (
    <motion.div className='basicinfo' animate={{opacity: [.5, 1]}}>
        <div className='linkContent-nav'>
            <div> Na początek uzupełnij podstawowe informacje</div>
            <div className='linkContent-nav_number'>Etap 1</div>
        </div>
        <div className='linkContent_inputs-container'>
          <CustomInput fontSize={18} placeholder='Model samochodu' setValue={setModel} type={'text'} theme={'dark'}/>
          <CustomInput fontSize={18}  placeholder='Króti opis projektu' setValue={setDescription} type={'text'} theme={'dark'}/>
        </div>

        
        <NextStageButton goToNextStage={validData} text='Dalej' />
    </motion.div>
  )
}
