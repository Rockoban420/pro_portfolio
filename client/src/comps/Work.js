import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Work({ref}) {
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
            className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900'
        >
            <motion.h1
                className='text-4xl text-white font-bold'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8, y: -20 }}
            >
                    Work
            </motion.h1>
            <motion.div>
                <div
                    className="grid gap-x-4 gap-y-2 grid-cols-2 mx-5"
                >
                    <div
                        className='bg-slate-400 py-[15%] rounded-[20px]'
                    >
                        <h1
                            className='text-2xl mx-5 font-bold text-gray-800 dark:text-white'
                        >
                            Project 1
                        </h1>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla nec purus efficitur ultricies. Sed sit amet.
                        </p>
                    </div>
                    <div
                        className='bg-slate-400 py-[15%] rounded-[20px]'
                    >
                        <h1
                            className='text-2xl font-bold text-gray-800 dark:text-white mx-5'
                        >
                            Project 2
                        </h1>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla nec purus efficitur ultricies. Sed sit amet.
                        </p>
                    </div>
                    <div
                        className='bg-slate-400 py-[15%] rounded-[20px]'
                    >
                        <h1
                            className='text-2xl font-bold text-gray-800 dark:text-white mx-5'
                        >
                            Project 3
                        </h1>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla nec purus efficitur ultricies. Sed sit amet.
                        </p>
                    </div>
                    <div
                        className='bg-slate-400 py-[15%] rounded-[20px]'
                    >
                        <h1
                            className='text-2xl font-bold text-gray-800 dark:text-white mx-5'
                        >
                            Project 4
                        </h1>
                        <p
                            className='text-gray-800 dark:text-white mx-5'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla nec purus efficitur ultricies. Sed sit amet.
                        </p>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
}

export default Work;
