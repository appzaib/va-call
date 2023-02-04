import { FaEnvelope, FaMobileAlt, FaLocation, FaLocationArrow, FaRegClosedCaptioning, FaSearchLocation, FaEnvelopeOpen, } from "react-icons/fa";
import { useState } from "react";



export default function Contact(){


    return(
        <>
        <div className="w-full text-center">
            <h1 className="text-5xl py-40 font-semibold text-sky-900">Contact Us</h1>
            <h1 className="text-4xl pt-20 font-semibold text-sky-900">Get In Touch</h1>
        </div>
        <div className="container mx-auto px-4  max-w-full flex flex-wrap items-center text-center py-10">
     <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 hover:translate-x-20 duration-1000 hover:cursor-pointer inline-flex mx-auto">
        <div className="items-center justify-center inline-flex ">
        <FaEnvelopeOpen className="text-6xl text-sky-900"/>
        <div>
        <h1 className="uppercase text-lg font-semibold text-sky-800">email address</h1>
        <p cslassName="py-3">Abdullah@123</p>
        </div>
        </div>
    </div>
    
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 hover:translate-x-20 duration-1000 hover:cursor-pointer inline-flex mx-auto">
        <div className="items-center justify-center inline-flex text-center py-4">
        <FaMobileAlt className="text-6xl text-sky-900"/>
        <div>
        <h1 className="uppercase text-lg font-semibold text-sky-800">Phone No</h1>
        <p cslassName="py-3">03123456789</p>
        </div>
        </div>
    </div>
     <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 hover:translate-x-20 duration-1000 hover:cursor-pointer inline-flex mx-auto">
        <div className="items-center justify-center inline-flex ">
        <FaSearchLocation className="text-6xl text-sky-900"/>
        <div className="px-2">
        <h1 className="uppercase text-lg font-semibold text-sky-800">our address</h1>
        <p cslassName="py-3">Street 1 Rafyl <br /> bank London</p>
        </div>
        </div>
    </div>
</div>


        <div class="justify-center flex">
<div class="w-full my-5 mx-auto flex flex-col items-center md:flex-row bg-cyan-400">
    <div class="items-center w-full h-full  text-white lg:mx-52 p-10"> <span>
            <h1 class="text-3xl font-semibold text-center mb-4 text-yellow-300">Contact Us</h1>
            <p class="text-xs font-normal mt-2 text-center">Contact us by filling this contact form So we shell be in touch with you.</p>
        </span>
        <div class="mt-6 leading-7 text-center"> <input type="text" name="" placeholder="Full Name" id=""
                class="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-cyan-400 focus:outline-none"/>
            <input type="email" name="" placeholder="Email Address" id=""
                class="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-cyan-400 focus:outline-none"/>
            <input type="tel" name="phone" placeholder="Phone Number" id="phone"
                class="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-cyan-400 focus:outline-none"/>
            <textarea id="message" name="message" placeholder="Write us a message"
                class="w-[80%] bg-cyan-400 border-2 border-white h-44 text-sm outline-none placeholder:text-white placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg"></textarea>
            <button
                class="block m-auto w-[60%] md:w-[50%] text-center border bg-yellow-300 rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-yellow-400">Send</button>
        </div>
    </div>
   
</div>
</div>
        </>
    )
}