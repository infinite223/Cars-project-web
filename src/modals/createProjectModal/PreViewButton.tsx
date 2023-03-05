import React, { FC } from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';
import { useNavigation } from 'react-router-dom';

interface Props {
   
}

export const PreViewButton:FC<Props> = ({}) => {
    const navigate:any = useNavigation()
  return (
    <div className='linkContent-pre-View' onClick={() =>navigate('Project') }>
        <div>
            Podgląd projektu
        </div>
        <BsEye size={22} style={{marginLeft:'10px'}}/>
    </div>
  )
}
