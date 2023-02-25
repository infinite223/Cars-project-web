import React from 'react'
import { Footer } from '../../components/footer/Footer'
import './styles.scss'

const servicesWithNormal = [
    {text: 'limit 2 projektów'},
    {text: 'limit 2 spotów'},
    {text: 'max 10 zdjęć na projekt'},
    {text: 'brak limitów dodanych "problemów"'},
    // {text: 'limit 2 projektów'},
] 

const servicesWithPremium = [
    {text: 'limit 20 projektów'},
    {text: 'limit 10 spotów'},
    {text: 'max 20 zdjęć na projekt'},
    {text: 'możliwość reklamowania firmy'},
    {text: 'brak limitów dodanych "problemów"'},
    {text: 'brak reklam'}
] 

export const StartPremiumPage = () => {

  return (
    <div className='startPremiumPage'>
        <div className='startPremiumPage__content'>
            <header>
                <h1>
                    Płatności
                </h1>
                <p>Zobacz co może Ci oferować Cars designs</p>
            </header>

            <div className='startPremiumPage__content-container'>
                <div className='normalVersion box'>
                    <div>
                        <h2>
                            Free version
                        </h2>
                        
                        <div className='services'>
                            {servicesWithNormal.map(({text}) => 
                                <div className='services__item'>
                                    {text}
                                </div>
                            )}
                        </div>
                    </div>
                
                    {/* <h3>FREE</h3> */}
            
                </div>
                <div className='premiumVersion box'>
                    <h2>
                        Premium version
                    </h2>
              
                    <div className='services'>
                        {servicesWithPremium.map(({text}) => 
                            <div className='services__item'>
                                {text}
                            </div>
                        )}
                    </div>

                    <h3>19.99zł/miesiąc</h3>
                </div>
            </div>
        </div>

        <div className='startPremiumPage__baner'>
            <h1>Cars designs</h1>
            <p>Stwórz darmowe konto i zacznij korzystać</p>
            <div className='startPremiumPage__baner-button'>Zacznij</div>
        </div>

        <Footer scrollType='none'/>
    </div>
  )
}
