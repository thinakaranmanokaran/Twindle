import React, { useState } from 'react'
import './index.css'
import { TiFlash } from "react-icons/ti";
import { LuAudioLines } from "react-icons/lu";

const Template = () => {

    const [darkTheme, setDarkTheme] = useState(false);
    const [makeReadable, setMakeReadable] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        localStorage.setItem('darkTheme', !darkTheme);
    }

    const toggleReadable = () => {
        setMakeReadable(!makeReadable);
        localStorage.setItem('makeReadable', !makeReadable);
    }

    return (
        <div className={`h-full w-full bg-[url(./assets/images/Pattern.svg)] overflow-x-hidden bg-cover bg-center ${darkTheme ? "bg-dark" : "bg-white"} relative`}>
            <div className='h-screen w-screen relative'>
                <div className='p-6 flex items-center justify-between w-full '>
                    <div className='w-4/6'>
                        <div className={`font-title text-8xl tracking-normal ${darkTheme ? "text-white" : "text-dark"}`}>Streamlined UI Development Starts Here — <span className={`${darkTheme ? "bg-[#ffffff15] " : "bg-dark "} px-6 rounded-3xl`}><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500' >React</span><span className='inline-block border-4 mx-4 text-6xl rounded-full text-white '><TiFlash /></span><span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 '>Tailwind</span></span> </div>
                    </div>
                    <div>
                        <div className='w-100 bg-[#00000010] p-6 rounded-4xl space-y-4 backdrop-blur-2xl shadow-lg'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-2xl font-para '>Dark Theme</div>
                                <div className={`w-20 h-12 ${darkTheme ? "bg-white" : "bg-dark"} rounded-full relative`} onClick={toggleTheme}>
                                    <div className={`w-10 h-10  rounded-full absolute top-1 ${darkTheme ? "right-1 bg-dark" : "left-1 bg-white"} transition-transform duration-500`}></div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-full'>
                                <div className='text-2xl font-para '>Increase Visiblity</div>
                                <div className={`w-20 h-12 ${darkTheme ? "bg-white" : "bg-dark"} rounded-full relative`} onClick={toggleReadable}>
                                    <div className={`w-10 h-10  rounded-full absolute top-1 ${makeReadable ? "right-1 " : "left-1 "} ${darkTheme ? "bg-dark" : "bg-white"} transition-transform duration-500`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex absolute bottom-4 justify-between w-full  items-end px-6'>
                    <div className='w-3/7'>
                        <div className='flex items-center space-x-2'>
                            <div className='bg-dark text-white w-fit px-8 py-4 pt-5 rounded-full font-para text-xl cursor-pointer '>React Docs</div>
                            <div className='bg-dark text-white w-fit px-8 py-4 pt-5 rounded-full font-para text-xl cursor-pointer'>Tailwind Docs</div>
                        </div>
                        <div className='flex items-center space-x-2 mt-2'>
                            <div className='bg-dark text-white w-fit px-8 py-4 pt-5 rounded-full font-para text-xl cursor-pointer '>Developer Portfolio</div>
                            <div className='bg-dark text-white w-fit px-8 py-4 pt-5 rounded-full font-para text-xl cursor-pointer'>Package</div>
                            <div className='bg-dark text-white w-fit px-8 py-4 pt-5 rounded-full font-para text-xl cursor-pointer'>React Icons</div>
                        </div>
                    </div>
                    <div className='w-4/7'>
                        <div className={`text-3xl font-para text-center rounded-4xl p-6 py-8  ${makeReadable ? "bg-white" : ""}`}>This ⚡️starter kit is a modern React + Tailwind CSS template for fast, efficient UI development 🚀. It features a smooth dark/light theme toggle 🌙☀️ with no Tailwind config needed. With gradient text, responsive layout, and animated switch ✨, it’s perfect for quick, stylish projects 💻🎨.</div>
                    </div>
                </div>
            </div>
            <div className="h-screen">
                <div>
                    <h1 className='text-8xl font-title text-center pt-4 '>Guide <LuAudioLines className='inline-flex ' /></h1>
                </div>
                <div>
                    <div>
                        
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Template