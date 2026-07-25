import React from 'react';
import profileImage from '../assets/me.jpeg';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div
                className='flex flex-col items-center mt-5 justify-center md:h-auto'
            >
                <h1 className="text-4xl font-bold justify-center">About</h1>
            </div>
            <div className='flex flex-col'>
                <div className="flex flex-col items-center justify-center w-[80%] mx-10 md:mx-20 md:flex-row md:items-start md:space-x-8 px-4 md:px-8 lg:px-16 py-12">
                    <div className="flex justify-center items-center mt-7 mb-8">
                        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full shadow-lg overflow-hidden">
                            <img
                                src={profileImage}
                                alt="Lautaro Avellaneda - Profile"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="text-left align-middle items-center h-[100%] mt-5 md:mt-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg text-gray-700">
                            </p>
                        </motion.div>
                        <br />
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg w-[100%] text-gray-700 mb-4">
                                I am a Front End Engineer specialized in building performant, scalable, and user-centric web applications. My expertise lies at the intersection of AI pipelines and clinical/consumer user interfaces. I bridge the gap between complex backend logic and smooth, conversion-focused frontend experiences.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg block text-gray-700">
                                Having worked with fast-paced Silicon Valley tech startups like Parente AI, I thrive in Agile environments where turning complex Figma layouts into pixel-perfect, production-ready React components is the daily standard. I focus on clean code, robust state management, and fluid animations that enhance—rather than distract from—the user experience.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
