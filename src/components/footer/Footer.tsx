import './styles.scss'

import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Footer:FC<{scrollType: 'none' | 'center'}> = ({ scrollType }) => {

    const navigate = useNavigate()
    
  return (
    <footer className='footer_conteiner' style={{scrollSnapAlign: scrollType}}>
        <div>
        <div className='footer_conteiner_main'>
            <motion.div viewport={{ once: true }} className='footer_conteiner_main_section' whileInView={{opacity: [.1, 1], y:[-100, 0]}} transition={{duration:1}}>
                <h2>
                    O nas
                </h2>
                <p>
                   Czym jest Cars designs?
                </p>

                <p>
                    O autorze
                </p>
            </motion.div>

            <motion.div viewport={{ once: true }} className='footer_conteiner_main_section' whileInView={{opacity: [.1, 1], y:[-100, 0]}} transition={{duration:1, delay:.15}}>
                <h2>
                    Kontakt
                </h2>

                <p>
                    Email: carsprojectapp@gmail.com
                </p>
                <p>
                    Na instagramie: Cars_designs
                </p>
                </motion.div>

            <motion.div viewport={{ once: true }} className='footer_conteiner_main_section' whileInView={{opacity: [.1, 1], y:[-100, 0]}} transition={{duration:1, delay:.3}}>
                <h2>
                    Nowości
                </h2>
                <p>
                    Pisanie z innymi
                </p>
                <p>
                    Możliwość aktualizowania swoich projektów
                </p>
                <p>
                    Wyszukiwanie projektu po modelu lub marcę
                </p>
                </motion.div>

            <motion.div viewport={{ once: true }} className='footer_conteiner_main_section' whileInView={{opacity: [.1, 1], y:[-100, 0]}} transition={{duration:1, delay:.4}}>
                <h2>
                    Dostępność
                </h2>

                <p>
                    Android
                </p>
                <p>
                    Przeglądarka 
                </p>
                <p>
                    W przyszłości IOS
                </p>
                </motion.div>
        </div>
            <motion.div viewport={{ once: true }} className='footer_conteiner_links' whileInView={{opacity: [.1, 1]}} transition={{duration:1, delay:.4}}>
                <div className='link' onClick={() => navigate('../links')}>
                    Regulamin
                </div>
                <div className='link' onClick={() => navigate('../links/policy')}>
                    Polityka prywatności
                </div>
                <div className='link' onClick={() => navigate('../links/news')}>
                    Nowości
                </div>
            </motion.div>
        </div>
    </footer>
  )
}
