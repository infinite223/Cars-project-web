import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './styles.scss'
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

export const AboutLink = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  return (
    <motion.div className='about' animate={{opacity: [.5, 1]}}>
      <h1 className='links_content-header'>
        O aplikacji
      </h1>

      <div className='about_app '>
        Aplikacja Cars designs powstała z myślą stworzenia osobnego miejsca w internecie dla ludzi którzy kochają motoryzacje.
        Stara się ona łączyć ich pasje, umożliwiając dodawanie stworzonych projektów samochodów, tworzenie motoryzacyjnych spotów jak i 
        rozwiązywanie problemów ale tekże po prostu komunikacje.<br/><br/>

        Aby zacząć korzystać korzystać z aplikacji wystraczy utworzyć bezpłatne konto, ważnę jest żeby każdy użytkownik przestrzegał zasad cars designs
        którę są opisane w zakłładce <Link to={'/links'} title="regulamin" >regulamin</Link>.
        <br/>
      </div>

      <h1 className='links_content-header'>
        Dostępność
      </h1>
      <div className='about_app '>
        Aplikacja jest dostępna do pobrania w sklepie play dla urządzeń z androidem, ale także można z niej korzystać w każdej przeglądarce internetowej 
        na laptopie czy komputerze. W przyszłości planowane jest też opublikowanie aplikacji na telefony apple.
      </div>
      <h1 className='links_content-header'>
        Płatność
      </h1>
      <div className='about_app '>
       Cars designs w podstawowej wersji jest całkowicie bezpłatne, jednak gdy użytkownik chciałby dodawać więcej projektów musi on 
       wykupić miesięczną subskrypcje. Więcej informacji w zakładce <Link to={'/premium'} title="premium" >premium cars designs</Link>.
      </div>
    </motion.div>
  )
}
