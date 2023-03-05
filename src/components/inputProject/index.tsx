import React, { ChangeEvent, RefObject, SetStateAction, useRef } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import './styles.scss'
import { motion } from 'framer-motion';
import { useState } from 'react';

interface InputProjectProps {
    placeholder:string,
    type:string,
    setValue: (value:SetStateAction<string>) => void,
    required?:boolean,
    infoText?:string,
    fontSize?:number,
    performance?:boolean

}   

export const InputProject:React.FC<InputProjectProps> = ({placeholder, infoText, type, fontSize, performance, setValue, required }) => {

    const [showInfo, setShowInfo] = useState(false)
    const [localValue, setLocalValue] = useState(0)
    const borderColor = 'rgba(45, 44, 44, .3)'

  return (
    <div className='inputProject__container' style={{ borderColor: borderColor}}>
        <input 
            placeholder={placeholder}
            className={'inputProject'}
            type={type}
            onChange={(text)=> {
                setValue(text.target.value)
                setLocalValue(parseInt(text.target.value))
            }}
            required={required}
            style={{fontSize:fontSize}}
        />
        <motion.div onHoverStart={() => setShowInfo(true)} onHoverEnd={() => setShowInfo(false)}>
            <AiOutlineInfoCircle className='info-icon' size={22} />
        </motion.div>
        {(showInfo && infoText)&&
            <div className='info'>
                {infoText? infoText : ''}
            </div>
        }
    </div>
  )
}