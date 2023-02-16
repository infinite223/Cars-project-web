import React, { useState } from 'react'
import './styles.scss'
import { CustomInput } from './../../../../components/customInput/index';

export const Performance = () => {
    const [model, setModel] = useState('')
    const [description, setDescription] = useState('')

  return (
    <div className='performance'>
        <div className='performance-nav'>
            <div>Osiągi samochodu</div>
            <div className='performance-nav_number'>Etap 2</div>
        </div>
        <CustomInput fontSize={18} placeholder='Podaj model samochodu' setValue={setModel} type={'text'} theme={'dark'}/>
        <CustomInput fontSize={18} placeholder='Krótko opisz projekt' setValue={setDescription} type={'text'} theme={'dark'}/>
    </div>
  )
}
