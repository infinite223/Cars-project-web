import React from 'react'
import { getColorsCircle } from '../../../../utils/functions/colorsCircle'
import { CarprojectData } from '../../../../utils/types'
import './styles.scss'
export const Project:React.FC<CarprojectData> = ({car}) => {
  return (
    <div className='project'>
        <div className='project_nav'>
            <div className='project_nav-data'>
             {car.performance&&<>
                <div className='project_nav-data-model' style={{fontSize:17, marginRight:10, color: getColorsCircle(car.performance[0].value, car.performance[0].type)[0]}}>
                    {car.model}
                </div>
                <div className='project_nav-data-CarMake'>
                    {car.CarMake}
                </div>
                </>}
            </div>

            {car.performance&&<div className='project_nav-performance'>
                <div className='project_nav-performance-gradient'>{car.history.length===0?'STOCK':'STAGE '+car.history.length}</div>
            
                <div className='project_nav-performance-data'>
                    <div style={{color: getColorsCircle(car.performance[0].value, car.performance[0].type)[0]}}>
                        {car.performance[0].value}
                    </div>
                    <div className="type">hp</div>
                </div>
                <div className='project_nav-performance-data'>
                    <div style={{color: getColorsCircle(car.performance[0].value, car.performance[0].type)[0]}}>
                        {car.performance[1].value}
                    </div>
                    <div className="type">Nm</div>
                </div>
            </div>}
        </div>

        <img src={car.imagesCar[0].url} className="project_image"/>

        <div className='project_footer'>
            <div className='project_footer-icons'></div>
            <div className='project_footer-options'></div>
        </div>
    </div>
  )
}
