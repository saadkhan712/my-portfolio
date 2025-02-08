import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import postman from '../assets/postman.webp'
import html from '../assets/html.webp'
import css from '../assets/css3.webp'
import java from '../assets/java.webp'
import javascript from '../assets/javascript.webp'
import mongodb from '../assets/mongodb.webp'
import tailwind from '../assets/tailwind-css.webp'
import react from '../assets/react.webp'
import brave from '../assets/brave-icon.webp'
import chrome from '../assets/chrome.webp'
import chatpt from '../assets/chatgpt.webp'
import git from '../assets/github.webp'
import node from '../assets/js.webp'
import vs from '../assets/vscode.webp'
import myimg from '../assets/my-imageeeeeee_enhanced.png'
import backgroundImage from '../assets/back.jpg'
import deepseek from '../assets/deepseek.png'
import project from '../assets/Capture.jpg'
import project3 from '../assets/Capture3.png'
import project2 from '../assets/capture1.png'
export const Home = () => {
    return (
        <>
            <div className="w-full h-auto md:h-[90vh] flex flex-col md:flex-row bg-black px-4 md:px-20 py-8 md:py-0">
                <div className="w-full md:w-1/2 h-[300px] md:h-full order-1 md:order-none">
                    <img src={myimg} alt="my-image" className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-full md:w-1/2 pt-6 lg:pt-40 md:pt-40 text-center md:text-right order-2 md:order-none">
                    <h1 className='text-white text-4xl md:text-[80px]'>
                        Hi I am <span className='font-semibold'>Saad Khan</span>
                    </h1>
                    <p className='font-thin text-lg md:text-[30px] text-gray-400 mt-10 p-0 m-2 leading-8'>
                        Aspiring MERN Stack Developer | BCA Student | Passionate About Web Development
                    </p>
                    <NavLink to="/contact">
                        <button className='lg:h-20 text-lg md:text-[30px] bg-red-600 text-white p-4 md:p-3 w-full md:w-1/2 mt-4 md:mt-5 rounded-md hover:bg-white hover:text-black transition-all duration-300'>
                            Contact Me
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className='border-t border-b border-gray-500 bg-gray-950 flex flex-col md:flex-row justify-between items-center p-5 md:p-20'>
                <div>
                    <h1 className='text-white text-[30px] md:text-[50px]'>About Me</h1>
                    <p className='text-gray-400 text-[18px] md:text-[30px] font-thin'>
                        A BCA-holding MERN Stack Developer with React, Node.js, Express.js, and MongoDB expertise.
                        Competent in database administration, backend API, authentication, and frontend development
                        (Redux, Tailwind CSS, Material UI). Knowledgeable about DevOps (Docker, CI/CD), cloud services
                        (AWS, Firebase), and Git. Excellent problem-solving abilities and a love for working in Agile
                        teams and creating scalable online apps.
                    </p>
                    <NavLink to="about-saadkhan">
                        <button className='text-[20px] md:text-[30px] bg-white text-black p-2 md:p-3 w-1/2 md:w-1/3 mt-5'>Know more</button>
                    </NavLink>
                </div>
            </div>
            <div className='h-auto items-center'>
                <div className='h-full p-5 md:p-20'>
                    <h1 className='text-[40px] md:text-[65px] font-semibold text-center pt-8 text-gray-400 border-b-8 border-red-600'>My Skills & My helpful tools, software</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                        {[
                            { name: "HTML 5", src: html },
                            { name: "CSS 3", src: css },
                            { name: "Tailwind", src: tailwind },
                            { name: "Java", src: java },
                            { name: "JavaScript", src: javascript },
                            { name: "React", src: react },
                            { name: "MongoDB", src: mongodb },
                            { name: "Node", src: node },
                            { name: "Git", src: git },
                            { name: "Deepseek", src: deepseek },
                            { name: "ChatGPT", src: chatpt },
                            { name: "Chrome", src: chrome },
                            { name: "Brave", src: brave },
                            { name: "Postman", src: postman },
                            { name: "VS Code", src: vs },
                        ].map((icon, index) => (
                            <div key={index} className="flex flex-col items-center pt-8">
                                <img className="h-20 m-8 mb-0" src={icon.src} alt={icon.name} />
                                <p className="mt-2 text-center text-[15px] md:text-[25px] font-medium text-gray-400">{icon.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='p-10 sm:m-10 md:m-28 bg-gray-900'>
            <h1 className='text-[50px] sm:text-[75px] font-semibold text-gray-400 text-center'>My Projects</h1>
            <p className='text-[25px] sm:text-[35px] font-thin text-gray-400'>Some of my chosen works</p>
            <p className='text-[20px] sm:text-[30px] font-semibold text-blue-400'>
                Please visit my GitHub account to see my work in extra detail   
                <SocialIcon target="_blank" url="https://github.com/saadkhan712" />
            </p>
            {[ 
                { img: project, title: "Shipify", desc: "This is the new look of porter.in that I have been working on." },
                { img: project2, title: "Weather App", desc: "Weather app, which allows you to know the weather of different locations. Created using an API key." },
                { img: project3, title: "Quiz Application", desc: "10 questions, quiz application to measure your knowledge in the developer field." }
            ].map((proj, index) => (
                <div key={index} className='lg:p-0 flex flex-col sm:flex-row h-auto sm:h-[40vh] p-5 sm:p-10 md:p-20 mb-10 bg-slate-950 border-b border-gray-400 overflow-hidden'>
                    <img src={proj.img} alt="" className='h-full w-full sm:w-auto' />
                    <p className='lg:m-10 text-[18px] sm:text-[25px] text-gray-400 font-thin mt-5 sm:mt-0 sm:ml-5 break-words'>
                        <span className='font-semibold'>{proj.title} </span> {proj.desc}
                    </p>
                </div>
            ))}
        </div>
            <div
            className="h-auto flex flex-col md:flex-row w-full bg-cover bg-center items-center md:items-start text-center md:text-left overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            >
            <motion.h1
                initial={{ x: window.innerWidth < 768 ? -50 : -200, opacity: 0 }} // Less movement on small screens
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[80px] sm:text-[80px] md:text-[225px] font-semibold w-full md:w-1/2 leading-none p-10 md:p-40 pt-0 pb-0 text-white max-w-full"
            >
                Lets Grow Together
            </motion.h1>

            <NavLink to="/contact" className="w-full flex justify-center md:block">
                <motion.button
                initial={{ x: window.innerWidth < 768 ? 50 : 200, opacity: 0 }} // Less movement on small screens
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="h-14 md:h-28 bg-black text-white w-full md:w-[500px] mt-10 md:mt-80 mb-10 rounded-xl text-[20px] md:text-[40px] flex items-center justify-center mx-5 max-w-full"
                >
                Click Here
                </motion.button>
            </NavLink>
            </div>
            <div className="bg-black text-gray-300 py-10 px-5 ">
                <h2 className="text-center text-[45px] md:text-[85px] font-semibold mb-10">My Skills & Achievements</h2>
                <div className="relative border-l-4 border-red-500 mx-auto max-w-4xl">
                    <div className="mb-10 ml-8">
                        <div className="absolute w-6 h-6 bg-red-500 rounded-full -left-3"></div>
                        <div className="bg-slate-950 p-5 rounded-lg shadow-md border-b">
                            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                            <p className="text-sm text-gray-400">June 2022 - Present</p>
                            <ul className="list-disc list-inside mt-3 text-[15px] md:text-[25px] font-thin">
                                <li>Advanced skills in HTML and CSS for dynamic UI creation.</li>
                                <li>Proficient in state management with Redux.</li>
                                <li>Experienced in building reusable components.</li>
                                <li>Skilled in Tailwind CSS</li>
                                <li>Have the ability to write handle & one submit to write in React.js</li>
                                <li>I also have the <NavLink to='/certificates'><span className='text-[15px] md:text-[25px] text-blue-400'>Certification</span></NavLink> in Web Designing using HTML & CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-10 ml-8">
                        <div className="absolute w-6 h-6 bg-red-500 rounded-full -left-3"></div>
                        <div className="bg-slate-950 p-5 rounded-lg shadow-md border-b">
                            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                            <p className="text-sm text-gray-400">Dec 2022 - Present</p>
                            <ul className="list-disc list-inside mt-3 text-[15px] md:text-[25px] font-thin">
                                <li>Building RESTful and GraphQL APIs to efficiently handle data communication between the backend and Vite-powered React applications.</li>
                                <li>Proficiency in working with databases like MongoDB, MySQL, or PostgreSQL, including schema design and query optimization.</li>
                                <li>Implementing robust user authentication using JWT or OAuth, ensuring data encryption and secure API endpoints.</li>
                                <li>Experience with Node.js, Express, or similar frameworks to create fast, scalable backend services tailored for modern React applications.</li>
                                <li>MERN Full Stack Development <NavLink to='/certificates'><span className='text-[15px] md:text-[25px] text-blue-400'>Certification</span></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-10 ml-8">
                        <div className="absolute w-6 h-6 bg-red-500 rounded-full -left-3"></div>
                        <div className="bg-slate-950 p-5 rounded-lg shadow-md border-b">
                            <h3 className="text-xl font-bold mb-2">Other Technical Skills</h3>
                            <p className="text-sm text-gray-400">Jan 2023 - Present</p>
                            <ul className="list-disc list-inside mt-3 text-[15px] md:text-[25px] font-thin">
                                <li>Proficiency in languages like C, Java, and Python, covering core programming concepts and problem-solving techniques.</li>
                                <li>Understanding software development life cycle (SDLC), agile methodologies, and debugging tools for efficient application development.</li>
                                <li>In-depth knowledge of data structures like arrays, linked lists, stacks, and algorithms for optimized problem-solving.</li>
                                <li>Basics of operating system concepts, including process management, memory management, and file systems.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}