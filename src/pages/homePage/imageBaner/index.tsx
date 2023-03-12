import React, { useState } from 'react'
import './styles.scss'
import googlePlayImage from './../../../assets/linkImage.png'
import googlePlayIcon from './../../../assets/google-play-icon.png'
import { motion } from 'framer-motion';

export const ImageBaner = () => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className='imageBaner'>
      <div className='blackTransitionTop'/>
      <div className='blackTransitionBottom'/>
      <div className='imageBaner__content'>
        <motion.div viewport={{ once: true }} whileInView={{opacity: [.5, 1]}} className='imageBaner__content-info'>
          <div className='imageBaner__content-info-data'>
            8 użytkowników
          </div>
          <div className='imageBaner__content-info-data'>
            5 projektów
          </div>
        </motion.div>
        
        <motion.h1 viewport={{ once: true }} whileInView={{opacity: [.5, 1], scale:[.8, 1]}} transition={{duration:1, delay:.15}}>
          Dołącz do reszty i pobierz aplikacjie
        </motion.h1>
        {/* <img className='imageBaner__content-image' src={googlePlayImage}/> */}
        <motion.div className='imageBaner__content-link' onHoverStart={() => setShowInfo(true)}  onHoverEnd={() => setShowInfo(false)}>
          <img src={googlePlayIcon} className='googlePlayicon'/>
            Pobierz ze sklepy play
            {(showInfo)&&
            <div className='info'>
                Aplikacja jest w trakcie budowy... okres publikacji jest przewidywany na koniec lipca 2023 roku
            </div>
            }
        </motion.div>
      </div>
    </div>
  )
}
