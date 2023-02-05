import './styles.scss'

import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Footer = () => {

    const navigate = useNavigate()
    
  return (
    <footer className='footer_conteiner'>
        <div className='footer_conteiner_main'>
            <div className='footer_conteiner_main_section'>
                <h2>
                    O nas
                </h2>
                <p>
                   Czym jest Cars designs?
                </p>

                <p>
                    O autorze
                </p>
            </div>

            <div className='footer_conteiner_main_section'>
                <h2>
                    Kontakt
                </h2>

                <p>
                    Email: carsprojectapp@gmail.com
                </p>
                <p>
                    Na instagramie: Cars_designs
                </p>
            </div>

            <div className='footer_conteiner_main_section'>
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
            </div>

            <div className='footer_conteiner_main_section'>
                <h2>
                    Zapisz mnie
                </h2>

                <p>
                   Dostawaj powiadomienia o nowościach
                </p>
                <form>
                    <input placeholder='Twoje imię'/>
                    <input placeholder='Email' type={'email'}/>

                    <button>Wyślij</button>
                </form>

            </div>
        </div>

        <div className='footer_conteiner_links'>
            <div className='link' onClick={() => navigate('links')}>
                Regulamin
            </div>
            <div className='link' onClick={() => navigate('links/policy')}>
                Polityka prywatności
            </div>
            <div className='link' onClick={() => navigate('links/news')}>
                Nowości
            </div>
        </div>
    </footer>
  )
}
