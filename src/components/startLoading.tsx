import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Speedometer from 'react-speedometer/dist';
import Background from 'react-speedometer/dist/Background';
import Arc from 'react-speedometer/dist/Arc';
import Needle from 'react-speedometer/dist/Needle';
import DangerPath from 'react-speedometer/dist/DangerPath';
import Progress from 'react-speedometer/dist/Progress';
import Marks from 'react-speedometer/dist/Marks';
import { useMediaQuery } from 'react-responsive';

export const StartLoading = () => {
  const [count, setCount] = useState(1)
  const [display, setDisplay] = useState('flex')
  const isMobile = useMediaQuery({ maxWidth: 624 })


  useEffect(() => {
    if(count<8){
        setTimeout(() => {
            setCount((c) => c+.1)
        }, 10)
    }
    if(count>7.8){
        setDisplay('none')
    }
  }, [count])

  return (
    <div style={{zIndex:21, display: display, flexDirection: "column", justifyContent:'center', alignItems: "center", width: '100vw', height:'100vh', backgroundColor:'white', position:'fixed' }}>
      <Speedometer
          value={count}
          max={9}
          fontFamily='squada-one'
          accentColor='rgba(1,1,1,0)'
          width={!isMobile?150:100}
        >
        <Background color='white'/>
        <Arc arcWidth={4} />
        <Needle
          baseOffset={10}
          circleRadius={10}
          color='#293'
        />
        <DangerPath angle={90}/>
        <Progress arcWidth={10} />
        <Marks step={1} />
      </Speedometer>
      <h1 style={{fontSize:!isMobile?'35px':'25px', margin:'20px',opacity:.5, textTransform:'uppercase', letterSpacing:'2px', color:'gray',fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`
        }}>
         Cars designs
       </h1>
    </div>
  );
};