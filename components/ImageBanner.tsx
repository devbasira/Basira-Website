"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ImageBanner = ({ src, title }: { src: string; title: string }) => {
    const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

    const handleClick = (id: string) => {
        setVisibleTooltip(id);
        setTimeout(() => {
            setVisibleTooltip(null);
        }, 1000);
    };

    return (
        <div className="relative lg:px-[30px] group cursor-pointer">
            <motion.div
                className="relative overflow-hidden" // Ensure the container is positioned relative
                onClick={() => handleClick("iwan")}
            >
                <motion.img
                    src={src}
                    alt={title}
                    className="w-full h-auto object-cover transition-all duration-300"
                    whileHover={{ scale: 1.1 }} // Zoom the image content only
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                />
                {visibleTooltip === "iwan" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-sm px-4 py-2  shadow-lg"
                    >
                        We are still building this section!
                    </motion.div>
                )}
            </motion.div>
            <div className="flex justify-between mt-2">
                <p className="font-semibold text-[16px]">{title}</p>
                <div className="relative hover:cursor-pointer">
                    <a
                        onClick={() => handleClick("iwan")}
                        className="font-medium text-[#4a4a4a] text-[16px] relative group"
                    >
                        View{" "}
                        <img
                            className="w-[20px] h-[20px] inline-block transition-transform duration-300 group-hover:-rotate-45"
                            src="/arrow_forward_dark.svg"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImageBanner;
