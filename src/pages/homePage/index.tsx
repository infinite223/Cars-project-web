import React, { useEffect, useState } from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { useCycle, motion } from "framer-motion";
import { Navigation } from './navigation';
import { LookApp } from '../../components/lookApp/LookApp';
import { WhatOffers } from '../../components/whatoffers/Whatoffers';
import { Footer } from '../../components/footer/Footer';
import { ImagesCharts } from './imagesCharts';
import { ImageBaner } from './imageBaner';
import { ImagesScrollView } from './imagesScrollView';
import { AnimatedTip } from '../../components/AnimatedTip';
import ReactSpeedometer from "react-d3-speedometer"
import Speedometer from 'react-speedometer/dist';
import Background from 'react-speedometer/dist/Background';
import Arc from 'react-speedometer/dist/Arc';
import Needle from 'react-speedometer/dist/Needle';
import DangerPath from 'react-speedometer/dist/DangerPath';
import Progress from 'react-speedometer/dist/Progress';
import Marks from 'react-speedometer/dist/Marks';
import { StartLoading } from './../../components/startLoading';
import { FaArrowDown } from 'react-icons/fa';

export const HomePage = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [count, setCount] = useState(1)

  useEffect(() => {
    if(count<8){
      setCount((c) => c+.1)
    }
  }, [count])
  
  return (
    <div className='' style={{width:'100%'}}>
        <StartLoading/>
        <Navigation cycleOpen={cycleOpen} open={open}/>

        <section>
          <PresentationApp cycleOpen={cycleOpen}/>
        </section>
        <section>
          <div className='startMobile_presentation'>
          <div className='text'>upcoming...</div>

            <h1>Cars designs</h1>
            <h2>Zobacz ile może Ci zoferować</h2>
            <FaArrowDown size={45} color='#293'/>
          </div>
        </section>
        {/* <section>
            <Speedometer
              value={count}
              max={9}
              fontFamily='squada-one'
              accentColor='rgba(1,1,1,0)'
            >
            <Background color='white'/>
            <Arc arcWidth={4} />
            <Needle
              baseOffset={40}
              circleRadius={10}
              color='red'
            />
            <DangerPath angle={90}/>
            <Progress arcWidth={10} />
            <Marks step={1} />
          </Speedometer>
        </section> */}

        {/* <section style={{height:'auto'}}  >
          <LookApp/>
        </section> */}

        <section style={{height:'auto', maxWidth:'100vw'}}>
          {/* <ImagesCharts/> */}
        </section>

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
