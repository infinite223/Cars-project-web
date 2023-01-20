import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { useCycle } from "framer-motion";
import { isBrowser, isMobile } from 'react-device-detect';


export const AppPage = () => {
  const [open, cycleOpen] = useCycle(false, true);
    console.log(isMobile)
  return (
    <div className='app_container'>
        {isMobile&& <>
            <h1>Wesja przeglądarkowa aplikacji jest dostępna tylko na urządzenia z większym ekranem....</h1>
            <p>Zalecamy pobranie darmowej aplikacji Cars designs</p>
        </>}
    </div>
  )
}
