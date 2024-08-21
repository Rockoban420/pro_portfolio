import React from 'react';

import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Samantha T',
            title: 'Behavioral Technician/Full-Stack Web Developer',
            date: 'March 22, 2024',
            recommendation: `Thrilled to recommend Lautaro, an exceptional full-stack developer that I had the pleasure of meeting and working with in our UC Berkeley coding bootcamp. His commitment to excellence is evident in everything he does, and it was a pleasure to have him lead our group projects. Lau's mastery of backend development and tireless work ethic ensured our projects were of the highest quality. Any team would be fortunate to have him onboard!`,
        },
        {
            name: 'Mike Germain',
            title: 'Business Executive | CPA | CFA | Private Equity | Venture Capital | CFO +',
            date: 'February 27, 2024',
            recommendation: `Lau is undoubtedly one of the most skilled coders I've had the pleasure of knowing. His coding prowess seems almost innate, effortlessly tackling complex problems. As a highly technical team member during our time at the UC Berkeley Extension Coding Bootcamp, Lau played a pivotal role in debugging numerous coding issues across various projects. His expertise and dedication greatly contributed to our collective success.`,
        },
    ];

    return (
        <div className='flex flex-col w-full items-center h-auto bg-gray-100 dark:bg-gray-900 pb-10'>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h1 className='text-4xl text-white font-bold mt-5'>Testimonials</h1>
            </motion.div>
            <div className='mt-10 w-11/12 lg:w-3/4'>
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div key={index} className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg my-4'>
                            <h2 className='text-2xl font-semibold'>{testimonial.name}</h2>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>{testimonial.title}</p>
                            <p className='text-sm text-gray-500 dark:text-gray-500'>{testimonial.date}</p>
                            <p className='mt-4'>{testimonial.recommendation}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
