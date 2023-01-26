import React from 'react'
import { getColorsCircle } from '../../../../utils/functions/colorsCircle'
import { CarprojectData } from '../../../../utils/types'
import './styles.scss'
import { BsFillShareFill, BsHeart } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

export const Project:React.FC<CarprojectData> = ({car}) => {
    const colors = car.performance && getColorsCircle(car.performance[0].value, car.performance[0].type)
    console.log(colors)
    return (
    <div className='project'>
        <div className='project_nav'>
            <div className='project_nav-data'>
             {(car.performance && colors ) &&<>
                <div className='project_nav-data-model' style={{fontSize:17, marginRight:10, color: getColorsCircle(car.performance[0].value, car.performance[0].type)[0]}}>
                    {car.model}
                </div>
                <div className='project_nav-data-CarMake'>
                    {car.CarMake}
                </div>
                </>}
            </div>

            {(car.performance && colors )&&<div className='project_nav-performance'>
                <div className='project_nav-performance-gradient'
                    style={{background: `linear-gradient(90deg, 
                        ${colors[0]} 0%, 
                        ${colors[1]} 46%,
                        ${colors[2]} 100%)`}}

                    >
                    {car.history.length===0?'STOCK':'STAGE '+car.history.length}
                </div>
            
                <div className='project_nav-performance-data'>
                    <div style={{color: colors[0]}}>
                        {car.performance[0].value}
                    </div>
                    <div className="type">hp</div>
                </div>
                <div className='project_nav-performance-data'>
                    <div style={{color: colors[0]}}>
                        {car.performance[1].value}
                    </div>
                    <div className="type">Nm</div>
                </div>
            </div>}
        </div>

        <img src={car.imagesCar[0].url} className="project_image"/>

        <div className='project_footer'>
            <div className='project_footer-icons'>
                <FiHeart color="white" size={26} className="icon"/>
                <BsFillShareFill color='white' size={24} className="icon"/>
            </div>
            <div className='project_footer-options'></div>
        </div>
    </div>
  )
}
