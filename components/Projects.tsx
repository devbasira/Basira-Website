import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BOX_SIZE = 320; // Change this to control all box sizes from one place

const Projects = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!showComponent) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-4 sm:px-8 lg:px-0 h-full flex flex-col gap-[35px]"
    >
      {/* First row */}
      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: `${BOX_SIZE}px 20px ${BOX_SIZE}px 20px ${BOX_SIZE}px`,
          height: `${BOX_SIZE}px`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="bg-black h-full flex col-span-1 rounded-t-full"
        ></motion.div>
        <div></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="bg-black h-full flex col-span-3 rounded-r-full"
        ></motion.div>
      </div>

      {/* Second row */}
      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: `${BOX_SIZE}px 20px ${BOX_SIZE}px 20px ${BOX_SIZE}px`,
          height: `${BOX_SIZE}px`,
        }}
      >
        {[...Array(3)].map((_, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              className="bg-black h-full flex col-span-1"
            ></motion.div>
            {index !== 2 && <div />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
