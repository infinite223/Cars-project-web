import React from 'react'
import './styles.scss'
import { IoReorderThreeOutline } from "react-icons/io5";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import nameApp from '../../assets/nameApp.png'
import linkImage from '../../assets/linkImage.png'
import useMousePosition from './../../hooks/useMousePosition';

export const PresentationApp:React.FC<{cycleOpen: (value:any) => void}> = ({cycleOpen}) => {
    const mousePosition = useMousePosition()
    console.log(mousePosition)
  return (
    <motion.div className='PresentationApp_container'
        // whileInView={{gradientTransform:  `rotate(120deg)`}}
        style={{background:`linear-gradient(90deg, rgb(18, 18, 19) ${mousePosition.x?mousePosition.x/10:0}%,  rgb(28, 138, 19) ${mousePosition.x?mousePosition.x/10:0}%`}}
    >   
        <nav className='PresentationApp_nav' >
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
                 Chcesz pokazać innym co stworzyłeś? to indealne miejsce dla Ciebie, udostępnij swój projekt reszcie światu i 
                 zaprezentuj siebie. Przeglądaj inne projekty samochodów, inpiruj się, twórz spoty... to jedynie cześć możliwości jakie daje Ci
                 <span> Carsdesign</span>
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
    </motion.div>
  )
}