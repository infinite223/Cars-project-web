import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './styles.scss'
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const news = [{
  header: "Organizuj spoty",
  description: "Twórz motoryzacyjne spotkania i zapraszaj innych użytkowników cars designs do udziału",
  date: new Date()
},
{
  header: "Zareklamuj swoją firmę",
  description: "Jeżeli posiadasz firmę tuningową możesz udostępniać w aplikacji zrealizowane projekty i zachęcić innych do skorzystania ze swoich usług",
  date: new Date()
}
]

const futurePlans = [{
  header: "Problemy",
  description: "Dodawaj napotkane problemy w branży motoryzacyjnej jak i pomagaj innym je rozwiązywać",
  date: new Date()
},
{
  header: "Szybki zapis pdf",
  description: "Jednym kliknięciem zapisz dowolny projekt do pdf-a",
  date: new Date()
}
]

export const NewsLink = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  return (
    <motion.div className='news' animate={{opacity: [.5, 1]}}>
      <h1 className='links_content-header' style={{marginLeft:'30px'}}>
        Nowości
      </h1>

      <div className='news__list'>
        {news.map(({date, description, header}) => {
          return (
            <div className='news__item'>
              <div className='news__item-info'>
                <h1>{header}</h1>
                <p>{description}</p>
              </div>
              <div className='rightInfo'>
                <div className='rightInfo-text'>dostępne od </div>
                <div className='rightInfo-date'>04.04.2023</div>
              </div>
            </div>
          )
        })}
      </div>

      <h1 className='links_content-header' style={{marginLeft:'30px'}}>
        Plany na przyszłość w aplikacji
      </h1>
      <div className='news__list'>
        {futurePlans.map(({date, description, header}) => {
          return (
            <div className='futurePlans news__item'>
              <div className='news__item-info'>
                <h1>{header}</h1>
                <p>{description}</p>
              </div>
              <div className='rightInfo'>
                <div className='rightInfo-text'>przewidywane na </div>
                <div className='rightInfo-date'>12.07.2023</div>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
