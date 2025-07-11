import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaDiscord, FaArrowRight } from 'react-icons/fa';


const socialIcons = [
    { icon: <FaFacebookF />, label: 'Facebook', href: 'https://facebook.com' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me' },
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com' },
    { icon: <FaDiscord />, label: 'Discord', href: 'https://discord.com' },
];

const GetinTouch = () => {
    return (
        <div className="bg-white px-4 py-10 sm:py-16">
            <section className="max-w-6xl mx-auto ">
                <h2 className="text-slate-900 font-inter font-semibold text-3xl sm:text-4xl md:text-5xl mb-10 flex items-center gap-2">
                    Get in Touch: We're Here to Help and Chat!
                    <svg aria-hidden="true" className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 7c0 3-3 3-3 0s3-3 3 0zM21 7c0 3-3 3-3 0s3-3 3 0z"></path>
                        <path d="M15 7c0 3-3 3-3 0s3-3 3 0z"></path>
                    </svg>
                </h2>
                <div className="flex flex-col justify-center lg:flex-row gap-8 items-center lg:items-center">
                    {/* 2 ảnh */}
                    <div className="flex flex-row gap-6 flex-1 w-full max-w-2xl">
                        {/* Ảnh trái có overlay */}
                        <div className="relative rounded-2xl overflow-hidden flex-[0.7] min-w-0 h-[320px] group">
                            <img
                                alt="Group of people chatting and smiling in a bright room"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src="https://storage.googleapis.com/a1aa/image/a478cb64-3c92-4a40-2693-f808909ad864.jpg"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5">
                                <h3 className="font-inter font-semibold text-white text-lg sm:text-xl leading-tight">
                                    How Online Courses Can Develop Your Future Career Goals!
                                </h3>
                                <p className="text-xs sm:text-sm text-white mt-1 leading-snug">
                                    Discover how online courses can elevate your skills and open new career opportunities.
                                </p>
                            </div>
                        </div>
                        {/* Ảnh phải không overlay */}
                        <div className="rounded-2xl overflow-hidden flex-[0.3] min-w-0 h-[320px] group">
                            <img
                                alt="Smiling man with backpack outdoors"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src="https://storage.googleapis.com/a1aa/image/9d094071-be8e-4467-5771-ec7acacadd30.jpg"
                            />
                        </div>
                    </div>
                    {/* Khối Join Us Now */}
                    <div className="flex flex-col justify-center items-center bg-[#6C7CFF] rounded-2xl p-8 min-w-[260px] max-w-xs lg:ml-8 shadow-lg self-center h-[320px]">
                        
                        <h3 className="text-white font-inter font-semibold text-lg mb-4">
                            Join Us Now
                        </h3>
                        <div className="flex gap-3 mb-6">
                            {socialIcons.map((item) => (
                                <a
                                    key={item.label}
                                    className="w-9 h-9 rounded-full bg-white flex justify-center items-center text-[#6C7CFF] text-lg hover:bg-[#4F5DFF] hover:text-white transition-all duration-200 shadow"
                                    href={item.href}
                                    aria-label={item.label}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                        <a
                            className="text-[#6C7CFF] border border-indigo-100 bg-white rounded-md px-4 py-2 text-xs font-inter font-semibold flex items-center gap-2 hover:bg-indigo-600 hover:text-white transition-all duration-200"
                            href="/"
                        >
                            Join The Community
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetinTouch;