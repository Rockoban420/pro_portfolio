import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Patbot from './work/Patbot';

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
            className='flex flex-col items-center justify-center md:h-screen bg-gray-100 dark:bg-gray-900 z-40'
        >
            <motion.h1
                className='text-4xl text-white font-bold mt-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: -20 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <h1>
                    Work
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
                        <button
                            className='flex flex-col'
                            onClick={() => setCurrentTab('Patbot')}
                        >
                        <h1
                            className='text-2xl mx-5 font-bold text-gray-800 dark:text-white'
                        >
                            Parente AI
                        </h1>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Startup project that uses AI to help parents with their children's mental health.
                        </p>
                        </button>
                    </div>
                    <div
                        className='bg-black bg-opacity-50 border border-gray-300 my-2 py-[15%] rounded-[20px]'
                    >
                        <h1
                            className='text-2xl font-bold text-gray-800 dark:text-white mx-5'
                        >
                            Pocket Menu
                        </h1>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Online solution for restaurants to create digital menus for their customers to order from on site.
                        </p>
                    </div>
                    <div
                        className='bg-orange-400 bg-opacity-50 border border-gray-300 my-2 py-[15%] rounded-[20px]'
                    >
                        <h1
                            className='text-2xl font-bold text-gray-800 dark:text-white mx-5'
                        >
                            Collaboration Station
                        </h1>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Web app that allows users to collaborate on projects in real time.
                        </p>
                    </div>
                    <div
                        className='bg-slate-400 bg-opacity-50 border border-gray-300 my-2 py-[15%] rounded-[20px]'
                    >
                        <h1
                            className='text-2xl font-bold text-gray-800 dark:text-white mx-5'
                        >
                            UC Berkeley Coding Bootcamp
                        </h1>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Full stack web development program that teaches the MERN/MEARN stack.
                        </p>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
}

export default Work;
