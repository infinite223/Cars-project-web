import React, { useRef } from 'react'
import './styles.scss'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

const sections = [
  {img: ['https://th.bing.com/th/id/OIP.sa2Wt3V3YQUHIKs5ULD5NwHaE8?pid=ImgDet&rs=1','https://th.bing.com/th/id/OIP.sa2Wt3V3YQUHIKs5ULD5NwHaE8?pid=ImgDet&rs=1'], description:"Dodawaj projekty samochodów"},
  {img: ['https://th.bing.com/th/id/OIP.sa2Wt3V3YQUHIKs5ULD5NwHaE8?pid=ImgDet&rs=1','https://th.bing.com/th/id/OIP.sa2Wt3V3YQUHIKs5ULD5NwHaE8?pid=ImgDet&rs=1'], description:"Dołączaj do motoryzacyjnych spotów"},
  {img: ['https://th.bing.com/th/id/OIP.sa2Wt3V3YQUHIKs5ULD5NwHaE8?pid=ImgDet&rs=1','https://th.bing.com/th/id/OIP.sa2Wt3V3YQUHIKs5ULD5NwHaE8?pid=ImgDet&rs=1'], description:"Przeglądaj znanę firmy"}
]

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, description, images }: { id: number, description:string, images:string[] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section style={id%2==0?{flexDirection:'row-reverse'}:{}}>
      <div ref={ref}>
        {images.map((src, idImg)=> 
          <motion.img 
            whileInView={{scale: [.6, .8+idImg*0.05],opacity: [0, 1],
               x:id%2==0?[100, -100*idImg]:[-150, 100*idImg]
              }} 
            transition={{duration:1, delay:.6 * idImg}}
            src={`https://th.bing.com/th/id/OIP.sa2Wt3V3YQUHIKs5ULD5NwHaE8?pid=ImgDet&rs=1`} 
            alt="Images" />
        )}
      </div>
      <motion.h2 style={{ y, textAlign: id%2==0?'left':'right' }} animate={{y:400}}>{description}</motion.h2>
    </section>
  );
}

export const ImagesScrollView = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className='imagesScrollView'>
      {sections.map(({img, description}, id) => (
        <Image images={img} description={description} id={id}/>
      ))}

      {/* <motion.div className="progress" style={{ scaleX }} /> */}
    </div>
  )
}
