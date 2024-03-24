import React from "react";
import {motion} from "framer-motion"

function Loader() {
  return (
    <motion.div className="loader"
    initial={{y : "0%"  }}
       animate={{y : "-100vh"}}
       transition={{ duration: 1, ease:"linear",
       type: "spring",
       delay:3,
       stiffness: 290,
       damping: 200,}}>
      <motion.div className="purple bg-gradient-to-r from-blue-500 to-blue-600"
       >
        <motion.h1
          initial={{ backgroundSize: "100% 0%" }}
          animate={{ backgroundSize: "100% 100%" }}
          transition={{ duration: 1, ease:"linear",
          type: "spring",
          stiffness: 290,
          damping: 200,}}
        >
          BHARAT BHRAMAN
          <motion.span className="absolute left-0 bottom-0 h-2 rounded-full w-[0%] bg-white"
           initial={{ width: "0%" }}
           animate={{ width: "100%" }}
           transition={{ duration: 1, ease:"linear",
           type: "spring",
           delay:1,
           stiffness: 290,
           damping: 200,}}></motion.span>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
