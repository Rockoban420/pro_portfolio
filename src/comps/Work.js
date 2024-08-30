import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Patbot from './work/Patbot';
import {
    FaReact,
    FaNodeJs,
    FaShopify,
    FaDatabase,
    FaCss3,
    FaHtml5,
    FaPython,
    FaJs,
    FaGithub,
    FaJava,
    FaFigma,
} from 'react-icons/fa';

import { RiTailwindCssFill, } from 'react-icons/ri';

import {
    SiApollographql,
    SiMongodb,
    SiMixpanel
 } from "react-icons/si";

function Work({ref, currentTab, setCurrentTab}) {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const scaleAnim = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <motion.div
            ref={ref}
            style = {{
                y: -scaleAnim
            }}
            className='flex flex-col items-center justify-center md:h-auto bg-gray-100 dark:bg-gray-900 z-40'
        >
            <motion.h1
                className='text-4xl text-white font-bold mt-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -20 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <h1>
                    Experience
                </h1>
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div
                    className="grid gap-x-4 gap-y-2 md:grid-cols-2 mx-5 mb-10 grid-cols-1"
                >
                    <div
                        className='bg-blue-400 bg-opacity-50 border shadow-lg my-2 py-[15%] rounded-[20px]'
                    >
                        {/* <button
                            className='flex flex-col'
                            onClick={() => setCurrentTab('Patbot')}
                        > */}
                        <div
                            className='flex flex-row justify-between w-full'
                        >
                        <h1
                            className='text-2xl mx-5 font-bold text-gray-800 dark:text-white'
                        >
                            Parente AI
                        </h1>
                        <h1
                            className='text-sm mx-5 items-center align-middle text-gray-800 dark:text-white'
                        >
                            Front End - Back End - Analytics
                        </h1>
                        </div>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Startup project that uses AI to help parents with their children's mental health.
                        </p>
                        <div
                            className='flex flex-row justify-start mx-5'
                        >
                            <FaReact className='text-white scale-150 m-2' />
                            <RiTailwindCssFill className='text-white scale-150 m-2' />
                            <FaHtml5 className='text-white scale-150 m-2' />
                            <FaCss3 className='text-white scale-150 m-2' />
                            <FaNodeJs className='text-white scale-150 m-2' />
                            <FaDatabase className='text-white scale-150 m-2'/>
                            <FaPython className='text-white scale-150 m-2' />
                            <SiMixpanel className='text-white scale-150 m-2' />
                        </div>
                        {/* </button> */}
                    </div>
                    <div
                        className='bg-black bg-opacity-50 border border-gray-300 my-2 py-[15%] rounded-[20px]'
                    >
                        <div
                            className='flex flex-row justify-between w-full'
                        >
                        <h1
                            className='text-2xl mx-5 font-bold text-gray-800 dark:text-white'
                        >
                            Pocket Menu
                        </h1>
                        <h1
                            className='text-sm mx-5 items-center align-middle text-gray-800 dark:text-white'
                        >
                            Front End Developer
                        </h1>
                        </div>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Online solution for restaurants to create digital menus for their customers to order from on site.
                        </p>
                        <div
                            className='flex flex-row justify-start mx-5'
                        >
                            <FaReact className='text-white scale-150 m-2' />
                            <RiTailwindCssFill className='text-white scale-150 m-2' />
                            <FaCss3 className='text-white scale-150 m-2' />
                        </div>
                    </div>
                    <div
                        className='bg-green-800 bg-opacity-50 border border-gray-300 my-2 py-[15%] rounded-[20px]'
                    >
                        <div
                            className='flex flex-row justify-between w-full'
                        >
                        <h1
                            className='text-2xl font-bold text-gray-800 dark:text-white mx-5'
                        >
                            UC Berkeley Instructional Staff
                        </h1>
                        <h1
                            className='text-sm mx-5 items-center align-middle text-gray-800 dark:text-white'
                        >
                            Teacher Assistant
                        </h1>
                        </div>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            After finishing bootcamp I applied to be a Teacher Assistant and was accepted. I helped students with their projects and homework.
                            Also tutored friends and family in coding.
                        </p>
                        <div
                            className='flex flex-row justify-start mx-5'
                        >
                            <FaReact className='text-white scale-150 m-2' />
                            <FaHtml5 className='text-white scale-150 m-2' />
                            <FaCss3 className='text-white scale-150 m-2' />
                            <FaNodeJs className='text-white scale-150 m-2' />
                            <FaDatabase className='text-white scale-150 m-2'/>
                            <SiApollographql className='text-white scale-150 m-2' />
                            <SiMongodb className='text-white scale-150 m-2' />
                        </div>
                    </div>
                    <div
                        className='bg-blue-600 bg-opacity-50 border border-gray-300 my-2 py-[15%] rounded-[20px]'
                    >
                        <div
                            className='flex flex-row justify-between w-full'
                        >
                        <h1
                            className='text-2xl font-bold text-gray-800 dark:text-white mx-5'
                        >
                            Cannablue
                        </h1>
                        <h1
                            className='text-sm mx-5 items-center align-middle text-gray-800 dark:text-white'
                        >
                            Work
                        </h1>
                        </div>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Delivery service for cannabis products in the Bay Area and South Lake Tahoe. I helped with the website and the app.
                            Trained new employees for driver, inventory and dispatcher/ customer service roles.
                        </p>
                    </div>
                    <div
                        className='bg-orange-400 bg-opacity-50 border border-gray-300 my-2 py-[15%] rounded-[20px]'
                    >
                        <div
                            className='flex flex-row justify-between w-full'
                        >
                        <h1
                            className='text-2xl mx-5 font-bold text-gray-800 dark:text-white'
                        >
                            Collaboration Station
                        </h1>
                        <h1
                            className='text-sm mx-5 items-center align-middle text-gray-800 dark:text-white'
                        >
                            Full Stack - Personal Project
                        </h1>
                        </div>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Web app that allows users to collaborate on projects in real time.
                        </p>
                        <div
                            className='flex flex-row justify-start mx-5'
                        >
                            <FaReact className='text-white scale-150 m-2' />
                            <RiTailwindCssFill className='text-white scale-150 m-2' />
                            <FaNodeJs className='text-white scale-150 m-2' />
                            <FaDatabase className='text-white scale-150 m-2'/>
                            <FaFigma className='text-white scale-150 m-2' />
                        </div>
                    </div>
                    <div
                        className='bg-green-400 bg-opacity-50 border border-gray-300 my-2 py-[15%] rounded-[20px]'
                    >
                        <div
                            className='flex flex-row justify-between w-full'
                        >
                        <h1
                            className='text-2xl font-bold text-gray-800 dark:text-white mx-5'
                        >
                            Shopify Projects
                        </h1>
                        <h1
                            className='text-sm mx-5 items-center align-middle text-gray-800 dark:text-white'
                        >
                            Personal Project
                        </h1>
                        </div>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Created 2 different Shopify stores for personal AI generated products with Printify.
                        </p>
                        <div
                            className='flex flex-row justify-start mx-5'
                        >
                            <FaShopify className='text-white scale-150 m-2' />
                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
}

export default Work;
