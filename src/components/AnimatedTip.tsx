import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const RPM_MAX = 9000;
const RPM_SCALE = 120; // każda jednostka RPM odpowiada 1 stopniowi obrotomierza

const RotatingPointer = ({ rpm }:any) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setAngle(rpm / RPM_SCALE * 360); // oblicz kąt obrotu dla danego RPM
  }, [rpm]);

  return (
    <motion.div
      style={{
        width: "0",
        height: "0",
        borderLeft: "20px solid transparent",
        borderRight: "20px solid transparent",
        borderBottom: "60px solid #333",
        transform: `rotate(${0}deg)`,
        transformOrigin: "bottom center",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
};

const RotatingRPM = ({ rpm, animate }:any) => {
  const [pointerRpm, setPointerRpm] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (animate) {
      controls.start({
        rotate: rpm / RPM_MAX * 270,
        transition: { type: "spring", stiffness: 200, damping: 20 },
      });

      if (rpm > pointerRpm) {
        const increment = Math.ceil((rpm - pointerRpm) / 10);
        const intervalId = setInterval(() => {
          setPointerRpm((pointerRpm) => Math.min(pointerRpm + increment, rpm));
        }, 50);
        return () => clearInterval(intervalId);
      } else {
        setPointerRpm(rpm);
      }
    } else {
      controls.stop();
    }
  }, [rpm, animate, pointerRpm, controls]);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: "black",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -100%)",
        }}
        animate={controls}
      >
        <RotatingPointer rpm={pointerRpm} />
      </motion.div>
    </div>
  );
};

export const AnimatedTip = () => {
  const [rpm, setRpm] = useState(0);
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const handleRpmChange = (event:any) => {
    setRpm(Number(event.target.value));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Rotating RPM Gauge</h1>

      <div style={{ width: "400px", height: "400px", backgroundColor: "silver", marginTop: "20px" }}>
        <RotatingRPM rpm={rpm} />
      </div>
    </div>
  );
};