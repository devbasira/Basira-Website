"use client";
import React, { useState, useRef, useEffect } from "react";
import ImageBanner from "./ImageBanner";
import { useInView } from 'react-intersection-observer';
import '../app/globals.css'
import { motion } from 'framer-motion';
import { mergeRefs } from "react-merge-refs";
export default function PortfolioLayout() {
    const [email, setEmail] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [contentHover, setContentHover] = useState(false);
    const contentRef = useRef(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        const handleScrolling = (event) => {
            if (contentRef.current && !contentHover) {
                contentRef.current.scrollTop += event.deltaY;
            }
        };
    
        const handleResize = () => {
            if (window.innerWidth < 768) { // Assuming mobile is less than 768px
                window.removeEventListener("wheel", handleScrolling);
            } else {
                window.addEventListener("wheel", handleScrolling);
            }
        };
    
        handleResize(); // Check on initial render
    
        window.addEventListener("resize", handleResize); // Check on resize
    
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("wheel", handleScrolling);
        };
    }, [contentHover]);



    const variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("");

        if (!/\S+@\S+\.\S+/.test(email)) {
            setStatusMessage("Invalid email address");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.status === 200) {
                setStatusMessage(data.message);
                setEmail("");
            } else {
                setStatusMessage(data.message);
            }
        } catch (error) {
            console.error(error);
            setStatusMessage("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="lg:fixed grid lg:grid-cols-4 lg:w-[1288px] h-screen lg:overflow-y-auto">
            <div
                 className="p-[30px] md:gap-10px lg:pr-[30px] pr-[60px] col-span-1 lg:overflow-y-auto lg:items-start lg:w-[350px] w-screen lg:h-screen flex flex-col justify-between h-[90vh]">
                <motion.div

                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                // className="sticky top-8 z-10 bg-transparent"
                >
                    <img className="lg:overflow-y-auto bg-transparent w-[75px] h-[75px]" src={'/basira_dot.svg'} />
                </motion.div>
                {/* <img className="w-[75px] h-[75px]" src={'/basira_dot.svg'} /> */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.0 }}
                    className="space-y-[15px]">

                    <motion.h2
                        className="text-[22px] lg:text-[24px] font-bold">
                        Make things easy <br />for the people...
                    </motion.h2>
                    <motion.p

                        className="mt-4 font-light lg:text-[16px] text-[16px]  text-[#666666] lg:ml-0 ml-[30px]">
                        At Basira, we believe insight-driven design has the power to elevate brands and transform how they connect with people.
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20, scaleX: 0 }}
                    animate={{ opacity: 1, x: 0, scaleX: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 1.5,
                    }}
                    className="bg-gray-300 lg:w-72 w-full h-[1px] origin-left" // Use `origin-left` to make scaleX expand from left
                />
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.0 }}
                    className=" w-full">

                    <motion.h4
                        // initial={{ opacity: 0, y: 20 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 1.0, ease: "easeOut", delay: 1 }}
                        className="text-[#00667d] mb-1 text-[16px] font-normal bg-transparent">#buildingInPublic</motion.h4>
                    <motion.h2
                        // initial={{ opacity: 0, x: -20 }}
                        // animate={{ opacity: 1, x: 0 }}
                        // transition={{ duration: 1.0, ease: "easeOut" }}
                        className="text-[16px] font-bold text-[#4A4A4A] mb-4 ">
                        We’re Still Building — Join the Process!
                    </motion.h2>
                    <motion.p
                        // initial={{ opacity: 0, x: -20 }}
                        // animate={{ opacity: 1, x: 0 }}
                        // transition={{ duration: 1.0, ease: "easeOut", delay: 0.5 }}
                        className="text-[#666666] font-light mb-6 lg:text-[16px] text-[16px]">
                        Sign up to be part of our journey.
                    </motion.p>
                    <form
                        className="space-y-[15px]" onSubmit={handleSubmit}>
                        <motion.div
                            // initial={{ opacity: 0, y: -20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            // transition={{ duration: 1.0, ease: "easeOut", delay: 1 }}
                            className="flex lg:justify-between h-[50px] items-center ">
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="flex lg:w-56 w-[80vw] h-[50px] px-4 py-2 border-t border-gray-100 border-b border-b-[#4a4a4a] focus:outline-none focus:bg-gray-100 placeholder-gray-500 appearance-none rounded-none"
                                value={email}
                                onChange={handleEmailChange}
                            />

                            {/* <img className='w-[55px] h-[55px]' src={'/Button_default.svg'} alt="" /> */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-shrink-0 w-[45px] h-[45px] lg:ml-0 ml-6 bg-[#4A4A4A] hover:bg-[#00667d] focus:ring-2 focus:outline-none focus:ring-[#B8E1BB] font-medium rounded-full text-sm flex justify-center items-center transition-transform duration-300 hover:-rotate-45"
                            >
                                {loading ? (
                                    <svg
                                        className="animate-spin w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
                                        ></path>
                                    </svg>
                                ) : (
                                    <img
                                        src="/arrow_forward.svg"
                                        alt=""
                                        className="bg-transparent"
                                    />
                                )}
                            </button>
                        </motion.div>
                    </form>

                    {statusMessage && (
                        <div className="mt-4 text-start text-sm text-[#333333]">
                            <p>{statusMessage}</p>
                        </div>
                    )}
                </motion.div>

                <div className="mt-8 image-component">
                    <motion.img
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, ease: "easeOut", }}
                        src={"/Basira_Logo_Color.svg"}
                        alt="Basira Studio Logo"
                        className="w-[204px] h-auto"
                    />
                </div>
            </div>
            <motion.div
                ref={mergeRefs([ref, contentRef])}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                className="lg:overflow-y-auto no-scrollbar flex flex-col items-center col-span-3 lg:p-[30px] p-[25px]">
                <div
                    onMouseEnter={() => { setContentHover(true) }}
                    onMouseLeave={() => { setContentHover(false) }} className="space-y-[40px]">
                    <ImageBanner src="/MacBook_.jpg" title="Funoon" />
                    <ImageBanner src="/Sustenance_tote.jpg" title="Sustenance" />
                    <ImageBanner src="/ILCS_.jpg" title="ILCS" />

                </div>
            </motion.div>
        </div>
    );
}
