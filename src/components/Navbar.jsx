import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  



  return (
    <div className="navbar px-4 md:px-12 py-2 text-2xl">
      <div className="logo">
        <img src="/assets/BB_transparent.png" alt="Logo" />
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''} z-1000`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
        <div className={`masker ${isOpen ? 'open' : ''} z-998`}></div>
      <ul className={`menu ${isOpen ? 'open' : ''} z-999 bg-black text-white grid place-content-center min-h-[100vh]`}>
        <div className="  flex flex-col items-start gap-8 flex-wrap">

            <motion.li initial={{x:"100%",opacity:0}} whileInView={{x:0,opacity:1, transition: { duration: 0.3  ,delay:0}}} ><a href="#home">Home</a></motion.li>
            <motion.li initial={{x:"100%",opacity:0}} whileInView={{x:0,opacity:1, transition: { duration: 0.3  ,delay:0.3}}} ><a >Login</a></motion.li>
            <Link to={"/LiveStream"}><motion.li initial={{x:"100%",opacity:0}} whileInView={{x:0,opacity:1,transition: { duration: 0.3 ,delay:0.6}}} ><a >Live Stream</a></motion.li></Link>
            <Link to={"/ContactUs"}><motion.li initial={{x:"100%",opacity:0}} whileInView={{x:0,opacity:1,transition: { duration: 0.3 ,delay:0.9}}} ><a >Contact</a></motion.li></Link>
            <motion.li initial={{x:"100%",opacity:0}} whileInView={{x:0,opacity:1,transition: { duration: 0.3 ,delay:1.2}}} ><a >About</a></motion.li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
