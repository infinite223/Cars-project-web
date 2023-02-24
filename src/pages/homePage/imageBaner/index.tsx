import React from 'react'
import './styles.scss'
import googlePlayImage from './../../../assets/linkImage.png'
import googlePlayIcon from './../../../assets/google-play-icon.png'
import { motion } from 'framer-motion';

export const ImageBaner = () => {
  return (
    <div className='imageBaner'>
      <div className='blackTransition'/>
      <div className='imageBaner__content'>
        <motion.div viewport={{ once: true }} whileInView={{opacity: [.5, 1]}} className='imageBaner__content-info'>
          <div className='imageBaner__content-info-data'>
            15 użytkowników
          </div>
          <div className='imageBaner__content-info-data'>
            12 projektów
          </div>
        </motion.div>
        
        <motion.h1 viewport={{ once: true }} whileInView={{opacity: [.5, 1], scale:[.8, 1]}} transition={{duration:1, delay:.15}}>
          Dołącz do reszty i pobierz aplikacjie
        </motion.h1>
        {/* <img className='imageBaner__content-image' src={googlePlayImage}/> */}
        <div className='imageBaner__content-link'>
          <img src={googlePlayIcon} className='googlePlayicon'/>
          Pobierz ze sklepy play
        </div>
      </div>
    </div>
  )
}
