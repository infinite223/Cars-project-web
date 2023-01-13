import React from 'react'
import './styles.scss'
import { IoReorderThreeOutline } from "react-icons/io5";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import nameApp from '../../assets/nameApp.png'
import linkImage from '../../assets/linkImage.png'

export const PresentationApp:React.FC<{cycleOpen: (value:any) => void}> = ({cycleOpen}) => {
  return (
    <div className='PresentationApp_container'>
        <nav className='PresentationApp_nav'>
            <div className='PresentationApp_nav_hamburger-button' onClick={()=>cycleOpen(true)}>
                <IoReorderThreeOutline size={45} color={'white'}/>
            </div>
            <div className='PresentationApp_nav_right'>
                <img className='PresentationApp_nav_right-logo' src={nameApp}/>
            </div>
        </nav>

        <div className='PresentationApp_main'>
            <div className='PresentationApp_main_content'>
                <motion.h1 viewport={{ once: true }} whileInView={{opacity: [0, .1, .2, .4, .5, .7,  1]}}>
                    Motorization brings people together
                </motion.h1>
                <p>
                 Aplikacja mająca ma za zadanie umożliwić użytkownikom udostępnianie własnych projektów
                 samochodów w tym zdjęcia, podzespoły, historię modyfikacje. Dostępne jest w niej wiele innych funkcji,
                 przykładowo tworzenie szeroko pojętych spotów motoryzacyjnych, spotkań.
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