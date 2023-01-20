import React, { ChangeEvent, RefObject, SetStateAction, useRef } from 'react'
import './styles.scss'

interface customInputProps {
    placeholder:string,
    type:string,
    setValue: (value:SetStateAction<string>) => void
}   

export const CustomInput:React.FC<customInputProps> = ({placeholder, type, setValue }) => {

  return (
    <input 
        placeholder={placeholder}
        className='customInput'
        type={type}
        onChange={(text)=>setValue(text.target.value)}
    />
  )
}