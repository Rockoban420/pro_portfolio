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
            <div className="mb-8 bg-cover bg-center items-center mt-7 rounded-full shadow-lg"
            >
                <img
                src={profileImage}
                alt="Profile"
                className="rounded-full items-center mt-5 w-[15rem] h-[20rem] md:w-[65rem] md:h-[15rem] lg:w-[40rem] lg:h-[17rem]"
                />
            </div>
            <div className="text-left align-middle items-center h-[100%] mt-5 md:mt-8">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                <p className="text-lg text-gray-700">
                    I'm a <span className="font-bold text-blue-600">Web Designer</span> and <span className="font-bold text-blue-600">Automation Specialist</span> based in Buenos Aires, Argentina. After completing a coding bootcamp at UC Berkeley with flying colors, supported by incredible friends and collaborators, I returned to my hometown driven by a deep love for its culture and community.
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
                    My mission is simple: to empower small businesses and individuals by making their lives easier and their businesses more successful. I focus on providing personalized tech support, helping my clients work smarter, not harder, while they focus on what they do best.
                </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                <p className="text-lg block text-gray-700">
                    Passionate about travel, I aim to bring my services to businesses around the world, ensuring they thrive in an increasingly digital landscape.
                </p>
                </motion.div>
            </div>
        </div>
        </div>
        </motion.div>
    );
};

export default About;
