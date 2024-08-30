import React from 'react';
import video from '../assets/video.mp4';

import { useEffect, useState } from 'react';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Hero = ({ ref }) => {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"]
    });

    const words = ["a Web Developer", "a Web Designer", "an Automation Expert", "an AI Enthusiast", "a Student", "a Teacher"];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [words.length]);

    // Define the variants for each word
    const variants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: -50, opacity: 0 }
    };
    const scaleAnim = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
    return (
        <div
            ref={ref}
            className='flex flex-col items-center justify-center h-[95vh] bg-gray-100 dark:bg-gray-900 z-0'
        >
            <video className='absolute autoplay object-cover w-full h-full opacity-70' width="100%" allowfullscreen="true" muted="muted" autoplay="autoplay" playsinline="playsinline" loop="loop">
                <source src={video} type="video/mp4" />
            </video>
            <motion.div
                style={{
                    mixBlendMode: 'difference',
                    y: scaleAnim,
                }}
                className='ml-10 md:mr-[30%]'
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
                    >I'm&nbsp;
                    </motion.span>
                    <AnimatePresence>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 3 }}
                        >
                            <motion.span
                                key={currentWordIndex}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                style={{ position: 'absolute' }}
                                className='text-6xl underline block md:inline w-full font-bold text-gray-800 dark:text-white md:text-7xl'
                            >
                                {words[currentWordIndex]}
                            </motion.span>
                        </motion.span>
                    </AnimatePresence>
                </h3>
                {/* </motion.div> */}
            </motion.div>
        </div>
    );
};

export default Hero;
