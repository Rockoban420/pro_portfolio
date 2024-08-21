import React from 'react';
// Import the relevant icons
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <h1 className='text-4xl text-black font-bold mt-5'>Contact</h1>

            {/* Contact Info */}
            <div className='mt-10 w-11/12 lg:w-3/4 flex flex-col items-center'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='w-11/12 lg:w-3/4 flex flex-col items-center'
                >
                    <div className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg w-full'>
                        <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
                        <div className='flex items-center mb-2'>
                            <FaEnvelope className='text-gray-600 dark:text-gray-400 mr-3' />
                            <p>lautaro.avellaneda@gmail.com</p>
                        </div>
                        <div className='flex items-center'>
                            <FaWhatsapp className='text-green-600 dark:text-green-400 mr-3' />
                            <p>+54 911 6958-7526</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Social Media Links */}

            <div className='mt-10 w-11/12 lg:w-3/4 flex flex-col items-center'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='w-11/12 lg:w-3/4 flex flex-col items-center'
                >
                    <div className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg mb-4 shadow-lg w-full'>
                        <h2 className='text-2xl font-semibold mb-4'>Connect with Me</h2>
                        <div className='flex space-x-6'>
                            <a href='https://www.linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'
                                className='flex items-center text-blue-700 hover:text-blue-500'>
                                <FaLinkedin className='mr-2' /> LinkedIn
                            </a>
                            <a href='https://www.instagram.com/yourprofile' target='_blank' rel='noopener noreferrer'
                                className='flex items-center text-pink-500 hover:text-pink-300'>
                                <FaInstagram className='mr-2' /> Instagram
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
