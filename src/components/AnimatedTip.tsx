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

export const AnimatedTip = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    if(count<8){
      setCount((c) => c+.1)
    }
  }, [count])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  
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
    </div>
  );
};