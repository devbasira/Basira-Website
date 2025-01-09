"use client"
import React, { useState } from 'react'
import { CirclePlus } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(prev => !prev);
    }

    const isMobile = window.innerWidth <= 768;

    return (
        <div className='h-screen overflow-y-auto max-w-container w-full flex flex-col items-center justify-center'>
            <nav className='flex justify-start items-center w-full h-32 px-6'>
                {isExpanded &&
                    <motion.img
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 0.6, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ opacity: 1 }}
                        alt='Logo'
                        src={'/Basira_Logo_Black.svg'}
                        width={200}
                        height={100}
                        className='z-100'
                    />
                }
            </nav>
            <motion.div
                className="main bg-transparent flex flex-col justify-center font-bold items-start h-full max-w-grid w-full px-4 sm:px-8 lg:px-40"
                animate={{
                    y: isExpanded ? -100 : 0,
                    gap: isExpanded ? 0 : 20, // Animate the gap dynamically
                    transition: { duration: 0.5 },
                }}
                style={{
                    gap: isExpanded ? "100px" : "20px",

                }}
            >
                <motion.h1
                    className='text-[40px] lg:text-[100px] bg-transparent'
                    animate={{
                        scale: isExpanded ? 0.7 : 1, // Scale instead of changing fontSize
                        transition: { duration: 0.5 }
                    }}
                    style={{
                        transformOrigin: "left top",
                        marginTop : isExpanded? "50px" : "0px"
                    }}
                >
                    make things easy
                </motion.h1>
                <motion.div
                    onClick={handleClick}
                    animate={{
                        scale: isExpanded ? 0.8 : 1,
                        rotate: isExpanded ? 45 : 0,
                        transition: { duration: 0.3 }
                    }}
                >
                    <CirclePlus width={50} height={50} color='gray' />
                </motion.div>
                {
                    isExpanded && (
                        <motion.div
                            className='inner flex flex-col'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className='text-yellow-500 text-xl sm:text-2xl'>
                                curiosity is our compass.
                            </h3>
                            <p className='font-light text-sm sm:text-base'>
                                Curiosity is the driving force behind everything we do. We constantly ask “why”—challenging assumptions, questioning processes, and exploring possibilities. Before we share what we stand for, we believe it’s important to understand why our principles matter.
                                <br />
                                Principles, to us, are more than ideals. They are actionable frameworks that shape our decisions and behaviors, even in the face of complexity or change. They provide a steady foundation that keeps us grounded while enabling adaptability.

                                <br />
                                But principles don’t just guide—they simplify. They transform complexity into clarity, chaos into order, and big challenges into achievable goals.

                                <br />
                                At Basira, this commitment to simplicity is rooted in one unwavering belief: Make things easy for everyone. This principle shapes everything we do—from the strategies we develop to the solutions we deliver—ensuring they are clear, practical, and impactful.
                            </p>
                        </motion.div>
                    )
                }
            </motion.div>
        </div>
    )
}

export default HomePage
