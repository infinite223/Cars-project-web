import React from 'react'
import './styles.scss'
import { IoReorderThreeOutline } from "react-icons/io5";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import nameApp from '../../assets/iconTest.png'
import linkImage from '../../assets/linkImage.png'
import useMousePosition from './../../hooks/useMousePosition';
import backgroundImage from '../../assets/carOnBackground_.png'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


export const PresentationApp:React.FC<{cycleOpen: (value:any) => void}> = ({cycleOpen}) => {
    const mousePosition = useMousePosition()
    const {user}:any = useAuth()
    const navigate = useNavigate()

    return (
    <motion.div className='PresentationApp_container'
        // whileInView={{gradientTransform:  `rotate(120deg)`}}
        style={{
            // background:`linear-gradient(90deg, rgb(28, 138, 19) ${mousePosition.x?mousePosition.x/10:0}%,  rgb(18, 18, 19)  ${mousePosition.x?mousePosition.x/10:0}%`
            // background:`linear-gradient(90deg, rgb(28, 138, 19) 0%,  rgb(18, 18, 19) 0%`
        }}
    >   
        <nav className='PresentationApp_nav' >
            <div className='PresentationApp_nav_hamburger-button' onClick={()=>cycleOpen(true)}>
                <IoReorderThreeOutline size={45} color={'black'}/>
            </div>
            <div className='PresentationApp_nav_right'>
                <img className='PresentationApp_nav_right-logo' src={nameApp}/>
                {user&&<div className='PresentationApp_nav_right-loginUser'>{user?.name}</div>}
            </div>
        </nav>

        <div className='PresentationApp_main'>
            <motion.div className='PresentationApp_main_content' viewport={{ once: true }} whileInView={{opacity: [0, .1, .2, .4, .5, .7,  1]}}>
                <motion.h1>
                    Motorization brings people together
                </motion.h1>
                <p>
                
                 {/* Chcesz pokazać innym jak   i projekt samochodu stworzyłeś? */}
                  Kochasz motoryzacje?
                  to indealne miejsce dla Ciebie!  
                 więc skorzystaj z Cars designs 
                </p>
                <div className='PresentationApp_main_content-buttons'>
                    <div className='button-about' onClick={() => navigate('/links/about')}>
                        O aplikacji
                    </div>
                    <div className='button-start' onClick={() => navigate('/start')}>
                        Zacznij
                    </div>
                </div>    

                {/* <p>
                 Chcesz pokazać innym co stworzyłeś? to indealne miejsce dla Ciebie, udostępnij swój projekt samochodu reszcie światu i 
                 zaprezentuj siebie. Przeglądaj inne projekty, inspiruj się, twórz spoty... a to jedynie cześć możliwości jakie daje Ci
                 <div className='appName'>Cars designs</div>
                </p> */}
                <footer>
                    {/* <img className='PresentationApp_main_content-linkImage' src={linkImage}/> */}
                    {/* <p>
                        Cars designs available on Google play
                    </p> */}
                </footer>
            </motion.div>

            <div className='PresentationApp_main-images'>
                {/* <img className='PresentationApp_main-image-img' src={backgroundImage}/> */}
            </div>
        </div>
    </motion.div>
  )
}