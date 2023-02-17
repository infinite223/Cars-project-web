import React, { FC } from 'react'
import { BiChevronRight } from 'react-icons/bi';

interface Props {
    text:string, 
    goToNextStage: () => void,
}

export const NextStageButton:FC<Props> = ({goToNextStage, text}) => {
  return (
    <div className='linkContent-next_stage' onClick={goToNextStage}>
        <div>
            {text}
        </div>
        <BiChevronRight size={28}/>
    </div>
  )
}
