import { FaEnvelope, FaMobileAlt, FaLocation, FaLocationArrow, FaRegClosedCaptioning, FaSearchLocation, } from "react-icons/fa";
import { useState } from "react";



export default function Contact(){

    const [isHovered,setIsHovered]= useState(false)

    return(
        <>
        <div className="w-full text-center">
            <h1 className="text-5xl py-40 font-semibold text-sky-900">Contact Us</h1>
            <h1 className="text-4xl pt-20 font-semibold text-sky-900">Get In Touch</h1>
        </div>
        <div className="container px-20 py-20 flex flex-wrap ">
            <div className={`flex h-20 md:w-full md:my-5 lg:w-1/3 flex-wrap ${isHovered ? 'hover:pt-5 duration-300 hover:cursor-pointer' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <FaEnvelope className="text-6xl text-sky-900"/>
                <div className="pl-3">
                <h1 className="flex-col uppercase text-lg font-semibold text-sky-800">email address</h1>
                <p className="py-3">Abdullah@123</p>
                </div>
            </div>
            <div className={`flex h-20 md:w-full md:my-5 lg:w-1/3 flex-wrap ${isHovered ? 'hover:pt-5 duration-300 hover:cursor-pointer' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <FaMobileAlt className="text-6xl text-sky-900"/>
                <div className="pl-3">
                <h1 className="flex-col uppercase text-lg font-semibold text-sky-800">mobile no</h1>
                <p className="py-3">03123456789</p>
                </div>
            </div>
            <div className={`h-20 flex md:w-full md:my-5 lg:w-1/3 flex-wrap ${isHovered ? 'hover:pt-5 duration-300 hover:cursor-pointer' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <FaSearchLocation className="text-6xl text-sky-900"/>
                <div className="pl-3">
                <h1 className="flex-col uppercase text-lg font-semibold text-sky-800">our address</h1>
                <p className="py-3">Rafyl the bank London</p>
                </div>
            </div>
        </div>
        </>
    )
}