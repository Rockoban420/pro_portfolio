import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
    FaShopify,
    FaDatabase,
    FaCss3,
    FaHtml5,
    FaPython,
    FaFigma,
    FaTable,
    FaGoogle,
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
                        className='bg-red-800 bg-opacity-50 border border-gray-300 my-2 py-[15%] rounded-[20px]'
                    >
                        <div
                            className='flex flex-row justify-between w-full'
                        >
                        <h1
                            className='text-2xl mx-5 font-bold text-gray-800 dark:text-white'
                        >
                            BCI - Bank of Credit and Investments of Chile
                        </h1>
                        <h1
                            className='text-sm mx-5 items-center align-middle text-gray-800 dark:text-white'
                        >
                            UX Analyst, Problem Engineer
                        </h1>
                        </div>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Analyzed user session data and drop-off patterns to systematically optimize core digital banking interfaces. Partnered closely with engineering task forces to diagnose, isolate, and debug critical production-level interface errors, directly reducing user friction.
                        </p>
                        <div
                            className='flex flex-row justify-start mx-5'
                        >
                            <FaTable className='text-white scale-150 m-2' />
                            <FaGoogle className='text-white scale-150 m-2' />

                        </div>
                    </div>
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
                            Architected and deployed responsive user interface layers that directly interact with generative AI models. Translated raw LLM outputs into clean, dynamic clinical dashboards. Implemented smooth interactive animations using Framer Motion and built a client-side retention analytics pipeline via Mixpanel.
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
                            Re-engineered a core enterprise administration dashboard from scratch. Greatly improved UI responsiveness and performance for high-volume catalog data management. Built secure verification forms and dynamic item display cards with robust client-side validation rules.
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
                            Conducted technical code reviews and debugging sessions for engineering students navigating full-stack web development. Unblocked complex logic issues and reinforced clean architectural patterns in React, Node.js, and relational/non-relational database structures.
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
                </div>

            </motion.div>
        </motion.div>
    );
}

export default Work;
