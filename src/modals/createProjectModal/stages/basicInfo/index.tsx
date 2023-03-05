import React, { useState, useEffect } from 'react'
import './styles.scss'
import { CustomInput } from './../../../../components/customInput/index';
import { AiOutlineRight } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { NextStageButton } from '../NextStageButton';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setMessage } from '../../../../reducers/messageSlice';
import Select from 'react-select'
import { getMakes } from '../../../../utils/functions/getMakes';
import { InputProject } from '../../../../components/inputProject';
import { PreViewButton } from '../../PreViewButton';

export const Basicinfo = () => {
    const [model, setModel] = useState('')
    const [makesCategory, setMakesCategory] = useState<{key:number, value:string}[]>([])
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

    useEffect(() => {
      getMakes(setMakesCategory)
    }, [])

  return (
    <motion.div className='basicinfo' animate={{opacity: [.5, 1]}}>
        <div className='linkContent-nav'>
            <div> Na początek uzupełnij podstawowe informacje</div>
            <div className='linkContent-nav_number'>Etap 1</div>
        </div>
        <div className='linkContent_inputs-container'>
          <InputProject 
            infoText='np. S4, M3, Passat ...' 
            fontSize={18} 
            placeholder='Model samochodu' 
            setValue={setModel} type={'text'} 
          />
          <InputProject 
            fontSize={18}  
            placeholder='Króti opis projektu' 
            setValue={setDescription} 
            type={'text'}
          />
        </div>
        <NextStageButton goToNextStage={validData} text='Dalej' />
    </motion.div>
  )
}
