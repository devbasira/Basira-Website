"use client"
import React, { useState } from 'react';
import ImageBanner from './ImageBanner';

export default function PortfolioLayout() {
    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // useEffect(() => {
    //     const getTest = async () => {
    //         const res = await axios.get('/api/register')
    //         console.log(res);
    //     }
    //     getTest()
    // })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage('');

        if (!/\S+@\S+\.\S+/.test(email)) {
            setStatusMessage('Invalid email address');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.status === 200) {
                setStatusMessage(data.message); // Success message
                setEmail(''); // Reset email field
            } else {
                setStatusMessage(data.message); // Error message
            }
        } catch (error) {
            console.error(error);
            setStatusMessage('Something went wrong, please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid lg:grid-cols-4 lg:w-[1288px] h-screen">
            <div className="p-[30px] lg:pr-[30px] pr-[60px] bg-white col-span-1 lg:overflow-y-auto lg:items-start lg:w-[350px] w-screen lg:h-screen flex flex-col justify-between h-[90vh]">
                <div className="space-y-[15px]">
                    <h2 className="text-[24px] font-bold">&quot;Make things easy for the people,...&quot;</h2>
                    <p className="mt-4 font-light text-[16px] text-[#666666]">
                        At Basira Studio, we believe in the power of thoughtful design to transform everyday experiences. Our vision is to create intuitive, uplifting, and inclusive solutions that make life simpler and more joyful.
                    </p>
                </div>
                <div className="bg-white w-full">
                    <h4 className='text-[#666666] font-extralight'>#buildingInPublic</h4>
                    <h2 className="text-[16px] font-bold text-[#2226bc] mb-4">
                        We’re Still Building — Join the Process!
                    </h2>
                    <p className="text-[#666666] font-light mb-6 text-[16px]">
                        Sign up to be part of our journey.<br /> Get updates, behind-the-scenes peeks, and early access to our launch. Let’s create something amazing together.
                    </p>
                    <form className="space-y-[15px]" onSubmit={handleSubmit}>
                        <div className='flex lg:justify-between items-center'>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-auto h-[50px] px-4 py-2 border-t border-gray-100 border-b border-b-black focus:outline-none focus:bg-gray-100 placeholder-gray-500"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {/* <img className='w-[55px] h-[55px]' src={'/Button_default.svg'} alt="" /> */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="lg:ml-0 ml-5 w-[55px] h-[55px] text-white bg-[#0033A0] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-5 text-center items-center"
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
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
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

                <div className="mt-8">
                    <img
                        src={'/logo.png'}
                        alt="Basira Studio Logo"
                        className="w-[204px] h-auto"
                    />
                </div>
            </div>
            <div className="lg:overflow-y-auto no-scrollbar flex flex-col items-center col-span-3 p-[30px]">
                <div className="space-y-[40px]">
                    <ImageBanner src='/MacBook_.jpg' title='Ivan' />
                    <ImageBanner src='/Sustenance_tote.jpg' title='Sustenance' />
                    <ImageBanner src='/ILCS_.jpg' title='ETS Contracts' />
                </div>
            </div>
        </div>
    );
}
