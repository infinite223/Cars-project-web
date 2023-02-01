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
}]

export const NewsLink = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  return (
    <motion.div className='news' animate={{opacity: [.5, 1]}}>
      <h1 className='links_content-header'>
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
    </motion.div>
  )
}
