import React from 'react'
import './styles.scss'
import { IoReorderThreeOutline } from "react-icons/io5";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import nameApp from '../../assets/nameApp.png'
import project_image from '../../assets/project_image.jpg'

export const LookApp:React.FC<{}> = () => {
  return (
    <div className='LookApp_container'>
       <img className='LookApp_container-image' src={project_image}/> 

       <div className='LookApp_container_info'>
        <h1>How it works?</h1>
        <ul>
          <li>Załóż konto</li>
          <li>Dodawaj projekty</li>
          <li>Twórz spoty!</li>
          <li>Pisz do kogo chcesz</li>
        </ul>
       </div>
    </div>
  )
}