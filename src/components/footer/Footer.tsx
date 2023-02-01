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
                    About Us
                </h2>
                <p>
                    What is Cars designs?
                </p>

                <p>
                    About author
                </p>
            </div>

            <div className='footer_conteiner_main_section'>
                <h2>
                    Contact
                </h2>

                <p>
                    Email: carsprojectapp@gmail.com
                </p>
                <p>
                    On instagram: Cars_designs
                </p>
            </div>

            <div className='footer_conteiner_main_section'>
                <h2>
                    Features
                </h2>
                <p>
                    Chating
                </p>
                <p>
                    Updating projects
                </p>
                <p>
                    Searching by model and car make
                </p>
            </div>

            <div className='footer_conteiner_main_section'>
                <h2>
                    Subscribe
                </h2>

                <p>
                    Subscribe Us to getting news on your email
                </p>
                <form>
                    <input placeholder='Twoje imię'/>
                    <input placeholder='Email' type={'email'}/>

                    <button>Subscribe</button>
                </form>

            </div>
        </div>

        <div className='footer_conteiner_links'>
            <div className='link' onClick={() => navigate('links')}>
                Regulamin
            </div>
            <div className='link'>
                Polityka prywatności
            </div>
            <div className='link'>
                Nowości
            </div>
        </div>
    </footer>
  )
}
