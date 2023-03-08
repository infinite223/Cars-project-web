import React from 'react'
import { getColorsCircle } from '../../../utils/functions/colorsCircle'
import './styles.scss'
import { motion } from 'framer-motion';

interface CircleGradientProps { 
    value:number,
    type:string,
}

export const CircleGradient:React.FC<CircleGradientProps> = ({value, type}) => {

    const colors = performance && getColorsCircle(value, type)
    const displayType = type==='hp'?'hp':type==='nm'?"Nm":type==='_0_100'?'0-100km/h':'100-200km/h'
    // console.log(a)
  return (
    <motion.div className='circleGradient'
        animate={{}}
        style={{background: `linear-gradient(90deg, 
        ${colors[0]} 0%, 
        ${colors[1]} 46%,
        ${colors[3]} 100%)`}}>
        <div className='data'>
            <div className='data-value'>{value}
                {(type==='_0_100' || type === '_100_200')&&'s'}
            </div>
            <div className='data-type'>{displayType}</div>
        </div> 
    </motion.div>
  )
}
