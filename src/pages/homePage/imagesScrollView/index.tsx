import React, { useRef } from 'react'
import './styles.scss'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={`https://th.bing.com/th/id/OIP.sa2Wt3V3YQUHIKs5ULD5NwHaE8?pid=ImgDet&rs=1`} alt="A London skyscraper" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
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


      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}

      <motion.div className="progress" style={{ scaleX }} />
    </div>
  )
}
