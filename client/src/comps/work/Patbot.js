import React from 'react';
import ParenteAI from '../../assets/ParenteAI.png';
import Pat from '../../assets/Pat.png';
import Image2 from '../../assets/image2.jpg';
import { motion } from 'framer-motion';

const Patbot = ({setCurrentTab}) => {
    return (
        <div>
            <button
                onClick={() => setCurrentTab('home')}
            >
                return
            </button>
            <div
                style={{
                    height: '60vh'
                }}
                className='flex flex-col items-center justify-center bg-slate-300'
            >
                <img src={Pat} alt='Parente AI' className='w-100 h-full'/>
            </div>
            <div
                style={{
                    height: '27vh'
                }}
                className='flex flex-row justify-around mt-10'
            >
                <h1
                    className='text-xl text-gray-500 font-bold'
                >
                    My Role
                    <p
                        className='text-xl text-black font-normal'
                    >
                        Frontend Developer <br/>
                        Analytics
                    </p>
                </h1>
                <p
                    className='text-xl text-gray-500 font-bold'
                >
                    The Team
                    <p
                    className='text-xl text-black font-normal'
                >
                    3 Developers <br/>
                    1 Designer
                </p>
                </p>
            </div>
            <div
                style={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '10%'
                }}
                className='text-gray-500 font-bold text-4xl mt-10 border-2 border-gray-500 rounded-lg p-5'
            >
                <h1>
                    What is PAT?
                </h1>
                <p
                    className='text-lg text-center text-black font-normal mt-5'
                >
                    Parente AI started at the University of Palo Alto as a research project to help parents with their children's mental health. <br/>
                    The project was later spun off into a startup company called Parente AI which recieved funding from the University. <br />
                    PAT is a Parent Assistant Tool chatbot that helps parents with their children's mental health. <br />
                </p>
            </div>
            <div
                className='mt-10'
            >
                <img src={ParenteAI}></img>
            </div>
            <div
                style={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                className='text-gray-500 font-bold text-4xl'
            >
                <div
                    className=''
                >
                    <img
                        src={Image2}
                        alt='Parente AI'
                    >
                    </img>
                </div>
                <div>
                <h1
                    className='text-4xl text-gray-500 font-bold mt-10'
                >
                    The Problem
                </h1>
                <p
                    className='text-lg text-center text-black font-normal mt-5'
                >
                    Understanding the development of mental health conditions is crucial. From birth to age 3, we often encounter neurodevelopmental issues, such as autism, that can significantly impact a child's growth. <br />
                    Identifying these signs early is vital for effective intervention. As children grow into school age, we see a shift toward behavioral conditions like ADHD and oppositional defiant disorder. <br />
                    Adolescence brings its own set of challenges: anxiety, bullying, depression, substance use, eating disorders, and an increased risk of suicide.
                    <br />
                    <br />
                    Mental health has become a privilige. Most families can barely keep up with day to day expenses and when you're talking about <br />
                    adding regular meetings with mental health professionals it can get expensive fast. So most end up never getting the coaching they need
                </p>
                </div>
            </div>
            <div
                style={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '10%'
                }}
                className='text-gray-500 font-bold text-4xl mt-10 border-2 border-gray-500 rounded-lg p-5'
            >
                <h1>
                    The Solution
                </h1>
                <p
                    className='text-lg text-center text-black font-normal mt-5'
                >
                    The answer lies in effective parenting interventions, particularly those addressing disruptive behaviors—defiance, hyperactivity, <br />
                    and difficulty following instructions at home or school. Conditions like ADHD and Oppositional Defiant Disorder (ODD) are often at the core of these challenges. <br />
                    Research shows that while universal interventions may offer benefits to all, targeted support for at-risk groups yields a significant, measurable impact. <br />
                    Many studies back the effectiveness of these interventions: the more focused the approach (such as indicated prevention for at-risk youth), the greater the effect size, ranging from moderate to substantial. <br />
                    The takeaway is clear—we're confident that tailored parenting interventions can make a real difference in managing disruptive behaviors. <br />
                    Every child deserves the opportunity to thrive, and with the right strategies, we can help pave their way to a brighter, more balanced future.
                </p>
            </div>
        </div>
    );
};

export default Patbot;
