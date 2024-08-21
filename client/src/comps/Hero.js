import React from 'react';
import video from '../assets/video.mp4';

import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ref}) => {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"]
    });
    const scaleAnim = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
    return (
        <div
            ref={ref}
            className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 z-0'
        >
            <video
                className='absolute object-cover w-full h-full opacity-70'
                autoPlay
                loop
                muted
                src={video}
            />
            <motion.div
                style={{
                    mixBlendMode: 'difference',
                    y: scaleAnim,
                }}
                className='mr-[30%]'
            >
                {/* <motion.div
                    animate={{ y: -1000}}
                    transition={{ duration: 2, delay: 6 }}
                > */}
                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='text-6xl font-bold text-gray-800 dark:text-white md:text-7xl'
                >
                    Hey
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='text-6xl font-bold text-gray-800 dark:text-white md:text-7xl'
                > my name is
                </motion.h1>

                <div
                    className='inline-block'
                >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                <h1
                    className='text-6xl inline font-bold text-gray-800 dark:text-white md:text-7xl'
                >Lautaro&nbsp;
                </h1>
                </motion.div>
                </div>

                <div
                    className='inline-block'
                >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                <h1
                    className='text-6xl inline font-bold text-gray-800 dark:text-white md:text-7xl'
                >
                    Avellaneda
                </h1>
                </motion.div>
                </div>

                <h3>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.5 }}
                        className='text-6xl font-bold text-gray-800 dark:text-white md:text-7xl'
                    >I'm a&nbsp;
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 3 }}
                        className='text-6xl underline font-bold text-gray-800 dark:text-white md:text-7xl'
                    >Full Stack Developer
                    </motion.span>
                </h3>
                {/* </motion.div> */}
            </motion.div>
        </div>
    );
};

export default Hero;
