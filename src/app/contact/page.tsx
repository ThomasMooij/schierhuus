import Head from 'next/head';
import React from 'react';
import type { Metadata } from "next";
import {MotionHeader1} from '../components/frames/MotionHeader1';
import { MotionParagraph } from '../components/frames/MotionParagraph';
import { MotionDiv } from '../components/frames/MotionDiv';
import { ContactInfo, SocialIcons } from '../components/Icons';


export const metadata: Metadata = {
  title: "Neem contact met ons op!",
  description: "Contact page",
};


export default function Contact() {
    const icons = SocialIcons.map(({ Icon, href }, index) => (
        <a key={index} href={href} className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
            <Icon size="24px" className="m-1" />
        </a>
    ));

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-amber-200">
            <Head>
                <title>Contact Us</title>
                <meta property="og:title" content="Contact" key="landing" />
            </Head>
            <div className="text-white">
  
                <MotionHeader1 
                    initial ={{opacity: 0, y: -50 }}
                    animate= {{opacity: 1, y: 0 }}
                    transition= {{duration: 0.5 }}
                    className= "text-blue-500 text-3xl font-bold"
                    title ="Contact us"
                />
                    
                <MotionParagraph 
                   initial ={{opacity: 0, y: -50 }}
                   animate= {{opacity: 1, y: 0 }}
                   transition= {{duration: 0.5 }}
                   className= "text-blue-500 text-3xl font-bold"
                /> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col items-center md:items-start">
                        {ContactInfo.map(({ Icon, text }, index) => (
                            <MotionDiv
                                key={index}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                                className="flex items-center mt-4 text-gray-400"
                            >
                                <Icon className="mr-2" />
                                <span>{text}</span>
                            </MotionDiv>
                        ))}
                        <MotionDiv
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: ContactInfo.length * 0.1 + 0.4 }}
                            className="mt-8 flex justify-center md:justify-start"
                        >
                            {icons}
                        </MotionDiv>
                    </div>
                    <MotionDiv
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <form className="w-full max-w-md">
                            <div className="mb-4">
                                <label htmlFor="name" className="mb-2 text-gray-500">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    required
                                    className="p-2 bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:border-blue-500 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="mb-2 text-gray-500">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    required
                                    className="p-2 bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:border-blue-500 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="mb-2 text-gray-500">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    placeholder="How can we assist you?"
                                    rows={4}
                                    className="p-2 bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:border-blue-500 w-full"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition-colors duration-300"
                            >
                                Send message
                            </button>
                        </form>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
}
