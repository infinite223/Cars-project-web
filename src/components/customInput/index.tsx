import React, { ChangeEvent, RefObject, SetStateAction, useRef } from 'react'
import './styles.scss'

interface customInputProps {
    placeholder:string,
    type:string,
    setValue: (value:SetStateAction<string>) => void,
    theme?:string
}   

export const CustomInput:React.FC<customInputProps> = ({placeholder, type, setValue, theme }) => {

  return (
    <input 
        placeholder={placeholder}
        className={theme==='dark'?'customInputDark':'customInput'}
        type={type}
        onChange={(text)=>setValue(text.target.value)}
    />
  )
}