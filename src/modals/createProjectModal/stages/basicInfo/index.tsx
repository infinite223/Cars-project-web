import React, { useState } from 'react'
import './styles.scss'
import { CustomInput } from './../../../../components/customInput/index';

export const Basicinfo = () => {
    const [model, setModel] = useState('')
    const [description, setDescription] = useState('')

  return (
    <div className='basicinfo'>
        <div className='performance-nav'>
            <div> Na początek uzupełnij podstawowe informacje</div>
            <div className='performance-nav_number'>Etap 1</div>
        </div>
        <CustomInput fontSize={18} placeholder='Model samochodu' setValue={setModel} type={'text'} theme={'dark'}/>
        <CustomInput fontSize={18}  placeholder='Króti opis projektu' setValue={setDescription} type={'text'} theme={'dark'}/>
    </div>
  )
}
