import React, { useState } from 'react'
import { motion } from "framer-motion";
const ImageBanner = ({src, title} : {src : string, title : string}) => {
    const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

    const handleClick = (id: string) => {
        setVisibleTooltip(id);
        setTimeout(() => {
            setVisibleTooltip(null);
        }, 3000);
    };
    return (
        <div className="relative lg:px-[30px]">
        <img className='lg:w-[790px] lg:h-[80vh] w-full h-[50vh] fill object-cover ' src={src} alt="" />
        <div className="flex justify-between mt-2">
            <p className="font-semibold text-[16px]">{title}</p>
            <div className="relative hover:cursor-pointer">
                <a
                    onClick={() => handleClick("iwan")}
                    className="font-medium text-[#4a4a4a] text-[16px] relative group"
                >
                    View <img className=" w-[20px] h-[20px] inline-block transition-transform duration-300 group-hover:-rotate-45" src="/arrow_forward_dark.svg" alt="" />
                </a>
                {visibleTooltip === "iwan" && (
                   <motion.div
                   initial={{ y: 10, opacity: 0 }} 
                   animate={{ y: 0, opacity: 1 }}  
                   exit={{ y: 10, opacity: 0 }}    
                   transition={{ duration: 0.3 }}  
                   className="w-[200px] absolute bottom-full right-0 mb-3 bg-black text-white text-sm px-4 py-2 rounded-full shadow-lg"
                 >
                   We are still building this!
                 </motion.div>
                )}
            </div>
        </div>
    </div>
    )
}

export default ImageBanner