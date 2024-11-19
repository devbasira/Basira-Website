"use client";
import React, { useState} from "react";
import ImageBanner from "./ImageBanner";
import '../app/globals.css'
import { motion } from 'framer-motion';

export default function PortfolioLayout() {
    const [email, setEmail] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };


    const handleSubmit = async (e: React.FormEvent) => {
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
                setStatusMessage(data.message); // Success message
                setEmail(""); // Reset email field
            } else {
                setStatusMessage(data.message); // Error message
            }
        } catch (error) {
            console.error(error);
            setStatusMessage("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid lg:grid-cols-4 lg:w-[1288px] h-screen">
            <div className="container p-[30px] md:gap-10px lg:pr-[30px] pr-[60px]  col-span-1 lg:overflow-y-auto lg:items-start lg:w-[350px] w-screen lg:h-screen flex flex-col justify-between h-[90vh]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                >
                    <img className="w-[75px] h-[75px]" src={'/basira_dot.svg'} />
                </motion.div>
                {/* <img className="w-[75px] h-[75px]" src={'/basira_dot.svg'} /> */}
                <div className="space-y-[15px]">

                    <h2 className="text-[24px] font-bold">
                        &quot;Make things easy for the people,...&quot;
                    </h2>
                    <p className="mt-4 font-light lg:text-[16px] text-[18px]  text-[#666666]">
                        At Basira Studio, we believe in the power of thoughtful design to
                        transform everyday experiences. Our vision is to create intuitive,
                        uplifting, and inclusive solutions that make life simpler and more
                        joyful.
                    </p>

                </div>
                <div className="bg-gray-300 lg:w-72 w-full h-[1px]" />
                <div className=" w-full">
                    <h4 className="text-[#666666] font-extralight">#buildingInPublic</h4>
                    <h2 className="text-[16px] font-bold text-[#4A4A4A] mb-4">
                        We’re Still Building — Join the Process!
                    </h2>
                    <p className="text-[#666666] font-light mb-6 lg:text-[16px] text-[18px]">
                        Sign up to be part of our journey.
                        <br />Let’s create something amazing together.
                    </p>
                    <form className="space-y-[15px]" onSubmit={handleSubmit}>
                        <div className="flex lg:justify-between h-[50px] items-center ">
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="flex-grow h-[50px] px-4 py-2 border-t border-gray-100 border-b border-b-[#4a4a4a] focus:outline-none focus:bg-gray-100 placeholder-gray-500 appearance-none rounded-none"
                                value={email}
                                onChange={handleEmailChange}
                            />

                            {/* <img className='w-[55px] h-[55px]' src={'/Button_default.svg'} alt="" /> */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-shrink-0 w-[45px] h-[45px] lg:ml-0 ml-5 w-[50px] h-[50px] bg-[#4A4A4A] hover:bg-[#b10439] focus:ring-2 focus:outline-none focus:ring-[#B8E1BB] font-medium rounded-full text-sm flex justify-center items-center transition-transform duration-300 hover:-rotate-45"
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
                        </div>
                    </form>

                    {statusMessage && (
                        <div className="mt-4 text-start text-sm text-[#333333]">
                            <p>{statusMessage}</p>
                        </div>
                    )}
                </div>

                <div className="mt-8 image-component">
                    <img
                        src={"/Basira_Logo_Color.svg"}
                        alt="Basira Studio Logo"
                        className="w-[204px] h-auto"
                    />
                </div>
            </div>
            <div className="lg:overflow-y-auto no-scrollbar flex flex-col items-center col-span-3 lg:p-[30px] p-[25px]">
                <div className="space-y-[40px]">
                    <ImageBanner src="/MacBook_.jpg" title="Funoon" />
                    <ImageBanner src="/Sustenance_tote.jpg" title="Sustenance" />
                    <ImageBanner src="/ILCS_.jpg" title="ILCS" />
                </div>
            </div>
        </div>
    );
}
