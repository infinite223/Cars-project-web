import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { useCycle } from "framer-motion";

import { LookApp } from '../../components/lookApp/LookApp';
import { WhatOffers } from '../../components/whatoffers/Whatoffers';
import { Footer } from '../../components/footer/Footer';


export const StartPage = () => {
  const [open, cycleOpen] = useCycle(false, true);
  
  return (
    <div className='start_container'>
        ulllala
    </div>
  )
}
