import React, { useState } from 'react'
import './index.css'
import { TiFlash } from "react-icons/ti";
import { LuAudioLines } from "react-icons/lu";
import { HiOutlineSlash } from "react-icons/hi2";
import images from './assets/images';
import { TbCopyCheckFilled, TbTrash } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { TbCopy } from "react-icons/tb";

const Template = () => {

    const storedTheme = localStorage.getItem('darkTheme') === 'true';
    const storedReadable = localStorage.getItem('makeReadable') === 'true';

    const [darkTheme, setDarkTheme] = useState(storedTheme || false);
    const [makeReadable, setMakeReadable] = useState(storedReadable || false);
    const [isCopied, setIsCopied] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        localStorage.setItem('darkTheme', !darkTheme);
    }

    const toggleReadable = () => {
        setMakeReadable(!makeReadable);
        localStorage.setItem('makeReadable', !makeReadable);
    }

    const LinkData = [
        {
            title: "Docs",
            links: [
                {
                    name: "React Docs",
                    url: "https://react.dev/learn"
                },
                {
                    name: "Tailwind Docs",
                    url: "https://tailwindcss.com/docs"
                }
            ]
        },
        {
            title: "Portfolio",
            links: [
                {
                    name: "Developer Portfolio",
                    url: "https://thinakaranmanokaran.netlify.app/"
                },
                {
                    name: "Package",
                    url: "https://www.npmjs.com/package/vt-tw/"
                },
                {
                    name: "Website",
                    url: "https://vt-tw.vercel.app/"
                }
            ]
        }
    ]

    const LinkTag = ({ link, text }) => {
        return (
            <a href={link} target='_blank' className={`${darkTheme ? "bg-white text-dark" : "bg-dark text-white"} w-fit px-8 py-4 pt-5 rounded-full font-para group text-xl cursor-pointer flex flex-col max-h-16 overflow-hidden transition-all duration-500`}>
                <div className='transform transition-all duration-500 group-hover:-translate-y-14'>{text}</div>
                <div className='mt-8 transform transition-all duration-500 group-hover:-translate-y-15 '>{text}</div>
            </a>
        )
    }

    function CopyCode() {
        const code = "npx vt-tw";
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 3000);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }

    return (
        <div className={`h-full w-full overflow-x-hidden bg-cover bg-center ${darkTheme ? "bg-dark bg-[url(./assets/images/PatternDark.svg)]" : "bg-white bg-[url(./assets/images/Pattern.svg)]"} relative`}>
            <div className='h-full md:h-screen w-screen relative md:overflow-y-hidden'>
                <div className='p-6 md:flex items-center justify-between w-full '>
                    <div className='md:w-4/6'>
                        <div className={`font-title text-4xl md:text-8xl tracking-normal ${darkTheme ? "text-white" : "text-dark"}`}>Streamlined UI Development Starts Here — <span className={`${darkTheme ? "bg-[#ffffff15] " : "bg-dark "} p-2 md:px-6 md:py-0 rounded-xl md:rounded-3xl inline-flex md:inline-block`}><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500' >React</span><span className='inline-block border-none md:border-4 md:mx-4 text-2xl md:text-6xl  rounded-full text-white mt-2 md:mt-0 '><TiFlash /></span><span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 '>Tailwind</span></span> </div>
                    </div>
                    <div>
                        <div className={`md:w-100 ${darkTheme ? "bg-[#ffffff10] text-white" : "bg-[#00000010]"} p-3 md:p-6 rounded-xl md:rounded-4xl mt-4 md:mt-0 space-y-2 md:space-y-4 backdrop-blur-2xl shadow-lg`}>
                            <div className='flex items-center justify-between w-full'>
                                <div className='md:text-2xl font-para'>Dark Theme</div>
                                <div className={`w-11 md:w-20 h-7 md:h-12 ${darkTheme ? "bg-white" : "bg-dark"} rounded-full relative cursor-pointer`} onClick={toggleTheme}>
                                    <div className={`w-6 md:w-10 h-6 md:h-10 rounded-full absolute top-0.5 md:top-1 ${darkTheme ? "bg-dark" : "bg-white"} transform transition-transform duration-500 ease-in-out ${darkTheme ? "translate-x-4.5 md:translate-x-9" : "translate-x-0.5 md:translate-x-1"}`}></div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-full'>
                                <div className='md:text-2xl font-para'>Increase Visibility</div>
                                <div className={`w-11 md:w-20 h-7 md:h-12 ${darkTheme ? "bg-white" : "bg-dark"} rounded-full relative cursor-pointer`} onClick={toggleReadable}>
                                    <div className={`w-6 md:w-10 h-6 md:h-10 rounded-full absolute top-0.5 md:top-1 ${darkTheme ? "bg-dark" : "bg-white"} transform transition-transform duration-500 ease-in-out ${makeReadable ? "translate-x-4.5 md:translate-x-9" : "translate-x-0.5 md:translate-x-1"}`}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:flex md:absolute bottom-4 justify-between w-full items-end px-6'>
                    <div className='md:w-3/7 h-full '>
                        <div className='mb-8 flex justify-center md:justify-start'>
                            <div className={`text-lg md:text-xl font-mono w-fit p-4 px-12 rounded-2xl ${darkTheme ? "text-white bg-[#ffffff20]" : "text-dark bg-[#00000020]"} flex items-center backdrop-blur-xl space-x-4 relative`}><div>npx vt<HiMiniMinusSmall className="inline-block -mx-1" />tw </div> <button className='absolute right-2 p-2 text-2xl hover:scale-110 transition-all duration-300 cursor-pointer ' onClick={CopyCode}>{isCopied ? <TbCopyCheckFilled /> : <TbCopy />}</button></div>
                        </div>
                        <div>
                            {
                                LinkData.map((Link, index) => (
                                    <div className='flex md:flex-row flex-col items-center gap-2 mt-2'>
                                        {
                                            Link.links.map((SubLink, i) => (
                                                <LinkTag key={i} link={SubLink.url} text={SubLink.name} />
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='md:w-4/7 mt-4'>
                        <div className={`md:text-3xl text-lg font-para text-center rounded-4xl p-6 py-8 ${makeReadable ? (darkTheme ? "bg-dark text-white" : "bg-white text-dark") : ""} ${!makeReadable ? (darkTheme ? "text-white" : "text-dark") : ""}`}>✨ Say hello to vt<HiMiniMinusSmall className="inline-block -mx-1" />tw — your new best friend for starting projects with Vite <GoPlus className='inline-block' /> Tailwind CSS ⚡️ No more manual setup, just run one command and dive straight into building 🚀 🎨 Clean, fast, and beginner<HiMiniMinusSmall className="inline-block -mx-1" />friendly — perfect for devs who love smooth workflows 💻💖</div>
                    </div>
                </div>
            </div>
            <div className="h-full px-2 overflow-y-hidden">
                <div>
                    <h1 className={`text-6xl md:text-8xl font-title text-center pt-4 ${darkTheme ? "text-white" : "text-dark"}`}>Guide <LuAudioLines className='inline-flex ' /></h1>
                </div>
                <div className='md:flex justify-between w-full md:space-x-4 py-4 space-y-4 md:space-y-0'>
                    <div className='md:w-1/2'>
                        <div className=' relative border-1 bg-white p-2 md:p-4 rounded-4xl w-fit text-dark'>
                            <div className='flex md:flex-col'>
                                <div className='font-para md:text-lg my-3 ml-4 w-2/3 md:w-full '>Edit The <span className="font-bold  ml-1">Project<HiOutlineSlash className='inline-block -mx-1 ' />src<HiOutlineSlash className='inline-block -mx-1' />App.jsx</span></div>
                                <div className='text-8xl font-number md:absolute right-3 top-0 '>01</div>
                            </div>
                            <img src={images.Snap01} alt="" srcset="" className='rounded-3xl relative z-20' />
                            <div className='font-para md:text-lg mt-2 ml-2 '>If you Did this, You cannot see this page</div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:flex md:flex-col justify-center space-y-4'>
                        <div className=' relative border-1 bg-white p-2 md:p-4 rounded-4xl w-fit text-dark'>
                            <div className='flex md:flex-col'>
                                <div className='font-para md:text-lg my-3 ml-4 w-2/3 md:w-full'>Delete The <span className="font-bold text-red-500 ">.temp </span>folder</div>
                                <div className='text-8xl font-number md:absolute right-3 top-0 '>02</div>
                            </div>
                            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'>
                                <img src={images.Snap02} alt="" srcset="" className='rounded-3xl relative z-20 w-full md:w-fit' />
                                <TbTrash className='size-10 hidden md:block' />
                                <img src={images.Del} alt="" srcset="" className='rounded-3xl relative z-20' />
                            </div>
                        </div>
                        <div className=' relative border-1 bg-white p-2 md:p-4 rounded-4xl w-fit text-dark'>
                            <div className='flex md:flex-col '>
                                <div className='font-para md:text-lg my-3 ml-4 w-2/3 md:w-full'>Start you Work form <span className="font-bold  ml-1">Project<HiOutlineSlash className='inline-block -mx-1 ' />src<HiOutlineSlash className='inline-block -mx-1' />pages<HiOutlineSlash className='inline-block -mx-1' />Home.jsx</span></div>
                                <div className='text-8xl font-number md:absolute right-3 top-0 '>03</div>
                            </div>
                            <img src={images.Snap03} alt="" srcset="" className='rounded-3xl relative z-20' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template