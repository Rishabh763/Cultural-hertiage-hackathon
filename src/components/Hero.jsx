import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const container = containerRef.current;
      const x = event.clientX;
      const y = event.clientY;
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;
      const offsetX = ((x - middleX) / middleX) * 30;
      const offsetY = ((y - middleY) / middleY) * 30;
      container.style.setProperty("--rotateX", -1 * offsetY + "deg");
      container.style.setProperty("--rotateY", offsetX + "deg");
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hero min-h-screen full-width grid place-items-center" id="home">
      <div className="imgcontainer" ref={containerRef}>
        <div className="shadow"></div>
        <div className="bg"></div>
        <img src="/assets/download.jpeg" alt="indian flag" />
      </div>
      <video
        className="full-width z-0"
        muted
        loop
        autoPlay
      > 
      {/* <source src="/assets/v1.mp4" type="video/mp4" media="all and (min-width: 480px)"/>  */}
      <source  src="/assets/v1_Trim (2).mp4" type="video/mp4"/>

      </video>
      <div className="text z-[999] text-white text-7xl font-bold text-wrap">
        <Typewriter
          options={{
            strings: [
              "Incredible !ndia", "Dekho Apna Desh!", " Explore the Indian Culture and Heritage."
            ],
            autoStart: true,
            loop: true,
          }}
        /> 
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 30 }}
        exit={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 290,
          damping: 20,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.3,
        }}
        className="explore"
      >
        <img
          className="max-w-[60px]"
          src="/assets/down_arrow.png"
          alt="DownArrow"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
