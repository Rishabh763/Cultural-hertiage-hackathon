import { motion, AnimatePresence, animate } from 'framer-motion';
import React,{useState} from 'react';
import {data} from "../data"
import { RxCross2 } from "react-icons/rx";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Cards = ({pcPage}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [indexData,setIndexData] = useState(data[0]);
  const [index,setIndex] = useState(0);

  return (
    <div className=" py-12 bg-[#1A76D1]  full-width">
        <motion.div className="">
          <div className="layout-grid gap-8 ">
            {indexData.map((item) => (
                
              <motion.div 
              initial={{y:10,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:2,type:"spring",}}
              >
                <motion.div
                className={`card bg-white rounded-lg shadow-md cursor-pointer p-8 transform transition-transform duration-500 hover:scale-105 ${
                  selectedId === item.sr_no ? 'card-selected' : ''
                }`}
                layoutId={`card-container-${item.sr_no}`}
                onClick={() => setSelectedId(item.sr_no)}
                key={item.sr_no}
                initial={{ scale: 1 }}
                animate={{ scale: selectedId === item.sr_no ? 1.1 : 1 }} // Increase scale on selected card
                transition={{ duration: 0.3 }}
              >
                <div className="card-content flex flex-col md:flex-row  gap-2 items-center">
                  <img loading="lazy" className='aspect-square  curve' src={item.image_link} alt={`${item.name}`} />
                      
                          <motion.h2 className="text-xl font-bold mb-2 text-[#1A76D1] text-wrap text-left truncate">{item.name}</motion.h2>
                  
                  
                </div>
              </motion.div>
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center  justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {indexData.map((item) => (
                  item.sr_no === selectedId && (
                    <motion.div
                      className="bg-white rounded-lg p-4 shadow-md max-w-[95%] md:max-w-3xl relative mx-auto z-100"
                      layoutId={`card-container-${item.sr_no}`}
                      key={item.sr_no}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >

                      <motion.div className="relative">
                      <img loading="lazy" className='rounded-md aspect-square  curve-rectangle' src={item.image_link} alt={`${item.name}`} />
                        <motion.button
                          className="absolute bottom-2 right-2  p-2 text-center text-white bg-red-600 aspect-square rounded-full  md:top-2 md:bottom-auto"
                          onClick={() => setSelectedId('')}
                        >
                          <RxCross2 />
                        </motion.button>
                        <motion.h2 className="text-xl font-bold mb-2 text-[#1A76D1]">{item.name}</motion.h2>
                        <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.period}</motion.h5>
                        <motion.p className="text-md text-gray-700 mb-4 text-justify">{item.description}</motion.p>
                        <motion.p
                          className="text-md text-gray-700 flex justify-between"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <p>{item.site_type}</p>
                          <p>{item.enlistment_year}</p>
                          <p>{item.location}</p>
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  )
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <div className='flex gap-x-2 gap-y-4 flex-wrap justify-between py-8 text-2xl z-0'>
            <button className={`${index > 0 ? 'opacity-100' : 'opacity-30'} page-link px-3 rounded flex items-center gap-2`} onClick={()=>{if(index > 0){setIndex(index-1); setIndexData(data[index-1]);} }} > <FaArrowAltCircleLeft />Prev </button>
            <div   className='flex gap-4 mx-5' >

            {
                pcPage.map((i)=>{
                    // console.log(i," ");
                    return (<button key={i} onClick={()=>{setIndexData(data[i]); setIndex(i);}} className={`${i === index ? 'opacity-100 active' : 'opacity-50'}   truncate aspect-square w-10 rounded`} > {i+1} </button>)
                })
            }
            </div>
            <div className="flex  w-[100%] md:w-fit justify-end"><button className={`${index < 4  ? 'opacity-100' : 'opacity-30'} page-link px-3 rounded flex items-center gap-2 justify-items-end` } onClick={()=>{console.log(index+1); setIndex(index+1); setIndexData(data[index+1]);} }> Next <FaArrowAltCircleRight /></button></div>
        </div>
    </div>
  );
};

export default Cards;