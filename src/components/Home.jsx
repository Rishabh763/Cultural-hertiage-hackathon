import { AnimatePresence, motion } from "framer-motion";
import React,{useState} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Slide from './Slide'
import Cards from './Cards'
import Loader from './Loader'
import { GiBrain } from "react-icons/gi";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import CrowdFunding from "./CrowdFunding";
import UserReview from "./UserReview";
import Collection from "./Collection";


const Home = () => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
      })
      const [isOpen, setIsOpen] = useState(false);
     
  const pcPage = [0,1,2,3,4];
  return (
      <ReactLenis root>
      <div className=' bg-slate-100 content-grid text-center'>
        <div className="progress-bar full-width"></div>
        <Loader/>
       <Navbar/>
        <Hero/>
        <Slide/>
        <Collection/>
        <div className='pb-20'>
          <p></p><br />
          <button onClick={() => setIsOpen(true)} className='border-solid border-[#1A76D1] border-2 bg-transparent text-[#1A76D1] text-xl capitalize px-8 py-2 rounded-full hover:bg-[#1A76D1] hover:text-white transition-colors duration-300'>take quiz</button>
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
          {/* <Collection/> */}
          <Cards pcPage={pcPage} />
          <CrowdFunding/>

          <section id="explore" className='py-10'>
            <center><h1 className='text-5xl'> Locate top heritage sites in India!</h1></center> 
            <br/>
            <center><p><h4>This map depicts the top ten historical sites in India in terms of their geographical location.<br/> Click on any pointer to learn more about the place and to appreciate the diversity!</h4></p></center>
            <br/><center> <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rWVL7-ObutJZd9PlLtzqS4kounhEzHg&ehbc=2E312F" width="60%" height="480"></iframe></center>
           </section>
          <UserReview/>
       
        
      </div>
    </ReactLenis>
  )
}

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg"}}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br bg-[#1A76D1] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <GiBrain className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-[#1A76D1] grid place-items-center mx-auto">
                <GiBrain />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Indian Cultural Heritage Quiz
              </h3>
              <p className="text-center mb-6">
              "Dive into India's cultural heritage with our quiz! Explore iconic landmarks, traditional festivals, and art forms that define India's rich tapestry. Test your knowledge and discover the treasures of India!"
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Not Now
                </button>
                <a className="w-[100%]" href="https://hacksparrow-quiz.vercel.app/">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-[#1A76D1] font-semibold w-full py-2 rounded"
                  >
                    Let's Go
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home