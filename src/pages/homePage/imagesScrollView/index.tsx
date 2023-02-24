import React, { useRef } from 'react'
import './styles.scss'
import spot_image from '../../../assets/spot_image.jpg'
import addProject from '../../../assets/addProject.jpg'
import project_image from '../../../assets/project_image.jpg'

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { useMediaQuery } from 'react-responsive'

const sections = [
  {img: [project_image, addProject], description:"Dodawaj i przeglądaj projekty samochodów"},
  {img: [spot_image, project_image], description:"Bierz udział w motoryzacyjnych spotach"},
  {img: [addProject, spot_image], description:"Pomagaj innym, udzielaj się w dyskusjach "}
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

function Image({ id, description, images }: { id: number, description:string, images:string[] }) {
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
            whileInView={{scale: [.4, .5+idImg*0.2], opacity: [0, 1],
               x:!isMobile?(id%2==0?[150, -150*idImg]:[100, (-150*idImg)+100]):
                [-50, -40+idImg*50],
               rotate:[0, idImg%2==0?-15:15],

            }} 
            variants={variants}
            transition={{duration:1, delay:1.2 * idImg}}
            whileHover="hover"
            src={src} 
            viewport={{ once: true }}
            alt="Images" />
        )}
      </motion.div>
      <motion.h2 viewport={{ once: true }} 
      style={!isMobile?{ y,
         textAlign: id%2==0?'left':'right' 
        }:{}} 
      initial={{y:250}}
      >{description}</motion.h2>
    </section>
  );
}

export const ImagesScrollView = () => {
  const carouselRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: carouselRef});
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className='imagesScrollView' ref={carouselRef}>
      {sections.map(({img, description}, id) => (
        <Image images={img} description={description} id={id}/>
      ))}

      {/* <motion.div className="progress" style={{ scaleX }} /> */}
    </div>
  )
}
