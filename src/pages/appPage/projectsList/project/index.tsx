import React from 'react'
import { CarprojectData } from '../../../../utils/types'

export const Project:React.FC<CarprojectData> = ({car}) => {
  return (
    <div className='projects'>
        <div className='projects_nav'>
            <div className='projects_nav-data'>
                <div className='projects_nav-data-model'>
                    {car.model}
                </div>
                <div className='projects_nav-data-CarMake'>
                    {car.CarMake}
                </div>
            </div>
        </div>

        <img src={car.imagesCar[0].url} className="projects_image"/>

        <div className='projects_footer'>
            <div className='projects_footer-icons'></div>
            <div className='projects_footer-options'></div>
        </div>
    </div>
  )
}
