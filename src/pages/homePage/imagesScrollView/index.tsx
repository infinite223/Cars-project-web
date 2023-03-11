import React, { useRef } from 'react'
import './styles.scss'
import spotView from '../../../assets/phone/spotView.jpg'
import createSpot from '../../../assets/phone/createSpot.jpg'
import projectView from '../../../assets/phone/projectView.jpg'
import projects from '../../../assets/phone/projects.jpg'
import rightBar from '../../../assets/phone/rightBar.jpg'
import stagesView from '../../../assets/phone/stagesView.jpg'
import stagesAdd from '../../../assets/phone/stagesAdd.jpg'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'  

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { useMediaQuery } from 'react-responsive'
import { PhoneFrame } from '../../../components/phoneFrame'

const sections = [
  {img: [projects, projectView], description:"Dodawaj i przeglądaj projekty samochodów", header: 'Projekty'},
  {img: [createSpot, spotView], description:"Bierz udział w motoryzacyjnych spotach", header: 'Spoty'},
  {img: [stagesAdd, stagesView], description:"Dodawaj wykresu i pokazuj etapy swojego projektu", header: 'Pomoc'}
]

const variants = {
  hover: {

  },
  focus: {
    scale: 1.2
  }
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance , distance]);
}

function Image({ id, description, images, header }: { id: number, description:string, images:string[], header: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

  return (
    <section style={id%2==0?{flexDirection:'row-reverse'}:{}}>
      <motion.div ref={ref}>
        <motion.div style={id%2==0?{}:{left:0}} className='greenBackground' viewport={{ once: true }} whileInView={{opacity: [0, 1], height: [0, 450], transition: {duration: 2, delay:.5}}}/>
        {images.map((src, idImg)=> 
          <motion.img 
            whileInView={{scale: [.4, .5+idImg*0.2], opacity:!isMobile?[0, 1]:[0, 1, idImg*.4],
              height: [0, 620], width: [0, 300],
               x:!isMobile?(id%2==0?[100, -100*idImg]:[100, (-100*idImg)+100]):
                [],
            }} 
            variants={variants}
            transition={{duration:2, delay:1.2 * idImg}}
            whileHover="hover"
            src={src} 
            viewport={{ once: true }}
            alt="Images" />
        )}
        {/* <PhoneFrame/> */}
      </motion.div>
      <div className='text__container'>
        <motion.h2 viewport={{ once: true }} 
        style={!isMobile?{ y,
          textAlign: id%2==0?'left':'right' 
          }:{  textAlign: id%2==0?'left':'right' }} 
        initial={{y:250}}
        >{description}</motion.h2>
        <motion.div 
          className='header__Text' 
          style={{alignSelf: id%2==0?'flex-start':'flex-end', 
          flexDirection:id%2==0?'row':'row-reverse'}}
        >
          {header} 
          <motion.div 
            className='icon__container'
            animate={{
            scale: [0, 1], 
            opacity: [0, 1] , transition: {duration:2, repeat: Infinity,  repeatType: 'loop', repeatDelay:1 }}}
          >
            {id%2==0?<HiOutlineArrowRight style={{marginLeft:'15px'}} size={35}/>:<HiOutlineArrowLeft  size={35} style={{marginRight:'15px'}}/> }
          </motion.div>   
        </motion.div>
      </div>
    </section>
  );
}

export const ImagesScrollView = () => {
  const carouselRef = useRef(null)
 
  return (
    <div className='imagesScrollView' ref={carouselRef}>
      {sections.map(({img, description, header}, id) => (
        <Image header={header} images={img} description={description} id={id}/>
      ))}
    </div>
  )
}
