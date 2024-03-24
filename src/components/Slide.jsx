import React from 'react'
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import {motion}  from 'framer-motion';

function Slide() {
    const info = [
        {
          "id": 0,
          "img": "/assets/Taj_Mahal.jpg",
          "title": "Taj Mahal",
          "class": "TajMahal",
          "href": "#"
        },
        {
          "id": 1,
          "img": "/assets/Chittorgarh_fort.jpg",
          "title": "Chittorgarh Fort",
          "class": "ChittorgarhFort",
          "href": "#"

        },
        {
          "id": 2,
          "img": "/assets/Hampi.jpg",
          "title": "Hampi Sculpture",
          "class": "HampiSculpture",
          "href": "#"

        },
        {
          "id": 3,
          "img": "/assets/Sun_Temple.jpg",
          "title": "Sun Temple",
          "class": "SunTemple",
          "href": "#"
        
        },
        {
          "id": 4,
          "img": "/assets/Chhatrapati_shivaji_Maharaj_terminus.jpg",
          "title": "Chhatrapati Shivaji Maharaj Terminus",
          "class": "ChhatrapatiShivajiMaharajTerminus",
          "href": "#"

        },
        
      ];
  return (
      <div className="min-h-screen pt-20 md:pt-48">
          <div className="text pb-12">
                <h2 className='text-5xl  py-6 font-bold'>Let's bring these places to life! Explore them in stunning 3D.</h2>
                <p className='text-xl  py-2'>Ditch the travel brochures and flat photos! Unfurl the wonders of the world before your very eyes. Explore these iconic destinations in breathtaking, immersive 3D.  Feel the rise and fall of the terrain, the grandeur of towering structures, and the intricate details that come alive in this revolutionary way of seeing. It's like stepping right into the heart of these legendary landmarks – all from the comfort of your screen.</p>
            </div>
                <div className="grid-layout">
                    {
                        info.map((i)=>{
                            return (
                                <motion.div 
                                initial={{y:10,opacity:0}}
                                whileInView={{y:0,opacity:1}}
                                transition={{duration:2,type:"spring",}}
                                key={i.id} 
                                className={`${i.class} max-w-[100%] relative`}  >
                                    <img loading="lazy" src={i.img} alt={`${i.title}`}/>
                                    <span className={`${i.class}-span absolute left-2 bottom-2`}>{i.title}</span>
                                    <Link className={`${i.class}-button`} to={`/${i.class}`}>  
                                       <GoArrowUpRight className='wrapper  absolute right-2 bottom-2' color="#1A76D1" size={36} />
                                    </Link>                                                        
                                </motion.div>
                            )
                        })
                    }
              </div>
      </div>
  )
}

export default Slide