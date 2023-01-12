import React from 'react'
import './style.scss'
import { IoReorderThreeOutline } from "react-icons/io5";
import nameApp from '../../assets/nameApp.png'
import linkImage from '../../assets/linkImage.png'

export const PresentationApp = () => {
  return (
    <div className='PresentationApp_container'>
        <nav className='PresentationApp_nav'>
            <div className='PresentationApp_nav_hamburger-button'>
                <IoReorderThreeOutline size={45} color={'white'}/>
            </div>
            <div className='PresentationApp_nav_right'>
                <img className='PresentationApp_nav_right-logo' src={nameApp}/>
            </div>
        </nav>

        <div className='PresentationApp_main'>
            <div className='PresentationApp_main_content'>
                <h1>
                    Motorization brings people together
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam, optio exercitationem quidem est quae debitis excepturi nostrum delectus, non incidunt? 
                </p>
                <footer>
                    <img className='PresentationApp_main_content-linkImage' src={linkImage}/>
                    <p>
                        Cars project available on Google play
                    </p>
                </footer>
            </div>

            <div className='PresentationApp_main-images'>

            </div>
        </div>
    </div>
  )
}