import React, { HTMLAttributeReferrerPolicy, RefObject } from 'react'
import './styles.scss'

interface customInputProps {
    placeholder:string,
    type:string,
    ref:RefObject<HTMLInputElement>
}

export const CustomInput:React.FC<customInputProps> = ({placeholder, type, ref}) => {
  return (
    <input 
        placeholder={placeholder}
        className='customInput'
        type={type}
        ref={ref}
    />
  )
}