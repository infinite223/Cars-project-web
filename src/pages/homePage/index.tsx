import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { useCycle } from "framer-motion";
import { Navigation } from './navigation';
import { LookApp } from '../../components/lookApp/LookApp';
import { WhatOffers } from '../../components/whatoffers/Whatoffers';
import { Footer } from '../../components/footer/Footer';
import { ImagesCharts } from './imagesCharts';
import { ImageBaner } from './imageBaner';
import { ImagesScrollView } from './imagesScrollView';


export const HomePage = () => {
  const [open, cycleOpen] = useCycle(false, true);
  
  return (
    <div className='' style={{width:'100%'}}>
        <Navigation cycleOpen={cycleOpen} open={open}/>

        <section>
          <PresentationApp cycleOpen={cycleOpen}/>
        </section>

        {/* <section style={{height:'auto'}}  >
          <LookApp/>
        </section> */}

        {/* <section style={{height:'auto', maxWidth:'100vw'}}> */}
          {/* <ImagesCharts/> */}
        {/* </section> */}

        {/* <section>
          <WhatOffers/>
        </section> */}
        <ImagesScrollView/>


        <ImageBaner/>

        <section style={{height:'auto'}}>
         <Footer scrollType='center'/>
        </section>
    </div>
  )
}
