import { SocialIcon } from 'react-social-icons'
import { NavLink } from "react-router-dom";
import html from '../assets/html.webp'
import postman from '../assets/postman.webp'
import css from '../assets/css3.webp'
import java from '../assets/java.webp'
import javascript from '../assets/javascript.webp'
import mongodb from '../assets/mongodb.webp'
import tailwind from '../assets/tailwind-css.webp'
import react from '../assets/react.webp'
import brave from '../assets/brave-icon.webp'
import chrome from '../assets/chrome.webp'
import chatgpt from '../assets/chatgpt.webp'
import git from '../assets/github.webp'
import node from '../assets/js.webp'
import vs from '../assets/vscode.webp'
import express from '../assets/express.png'
import redux from '../assets/redux.png'
import project from '../assets/Capture.jpg'
import deepseek from '../assets/deepseek.png'
import project3 from '../assets/Capture3.png'
import project2 from '../assets/capture1.png'

export const Resume = () => { 
    return (
        <>
          <div className="bg-black p-10 sm:p-10 md:p-20 lg:p-40 pt-0 pb-0 lg:pt-0">
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-400 pb-10 text-center'>My Resume</h1>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold text-red-700 pb-10'>My Skills</h1>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 pb-5'>I now know a lot more about these subjects.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:p-0'>
            {[
                { img: html, text: "Using HTML to create the structure of web pages." },
                { img: css, text: "Using CSS as an external stylesheet for styling." },
                { img: tailwind, text: "Using Tailwind CSS for rapid and responsive styling." },
                { img: java, text: "Using Java for backend development and application logic." },
                { img: javascript, text: "Using JavaScript to add interactivity and dynamic behavior." },
                { img: react, text: "Using React.js for building dynamic and component-based UIs." },
                { img: express, text: "Using Express.js for building fast and scalable backend APIs." },
                { img: redux, text: "Using Redux for state management in large React applications." },
                { img: mongodb, text: "Using MongoDB as a NoSQL database for storing application data." },
                { img: node, text: "Using Node.js for server-side development with JavaScript." },
                { img: postman, text: "Using Postman for API testing and debugging." },
                { img: brave, text: "Using Brave browser for development and secure browsing." },
                { img: chrome, text: "Using Chrome browser with DevTools for debugging and testing." },
                { img: deepseek, text: "Using DeepSeek AI for research and data analysis." },
                { img: chatgpt, text: "Using ChatGPT for AI-powered coding assistance and learning." },
                { img: vs, text: "Using Visual Studio Code as the primary code editor." },
                { img: git, text: "Using Git for version control and collaboration." }
              ].map((item, index) => (
                <div key={index} className='h-80 bg-slate-950 flex flex-col items-center text-center text-lg text-gray-500 border border-gray-500 rounded-lg p-5 transition-transform duration-300 hover:scale-105'>
                  <img src={item.img} alt="" className='h-40 m-auto mt-5' /> 
                  <p className='m-4'>{item.text}</p>
                </div>
              ))}
            </div>
            <div className='pt-5 pb-0 text-gray-400'>
            <h1 className='text-[65px] font-semibold  '>My Frontend Skills</h1>
            <ul className="list-disc list-inside mt-3 text-[30px] font-thin ">
              <li>Advanced skills in HTML and CSS for dynamic UI creation.</li>
              <li>Proficient in state management with Redux.</li>
              <li>Experienced in building reusable components.</li>
              <li>Skilled in Tailwind CSS</li>
              <li>Have the ability to write handle & one submit to write in React.ja</li>
              <li>I also have the <NavLink to='/certificates'><span  className='text-[25px] text-blue-400'>Certification</span></NavLink>in Web Designing using HTML & CSS</li>
            </ul>
            </div> 
            <div className='  pt-5 pb-0 text-gray-400'>
            <h1 className='text-[65px] font-semibold  '>My Backend Skills</h1>
            <ul className="list-disc list-inside mt-3 text-[30px] font-thin ">
            <li> Building RESTful and GraphQL APIs to efficiently handle data communication between the backend and Vite-powered React applications.</li>
              <li>Proficiency in working with databases like MongoDB, MySQL, or PostgreSQL, including schema design and query optimization..</li>
              <li> Implementing robust user authentication using JWT or OAuth, ensuring data encryption and secure API endpoints.</li>
              <li>Experience with Node.js, Express, or similar frameworks to create fast, scalable backend services tailored for modern React applications.</li>
              <li>MERN Full Stack Development <NavLink to='/certificates'><span  className='text-[25px] text-blue-400'>Certification</span></NavLink></li>
            </ul>
            </div>
            <div className=' mt-5 pb-10 mb-0 text-gray-400  border-b border-gray-200'>
            <h1 className='text-[65px] font-semibold  '>My other Technical Skills</h1>
            <ul className="list-disc list-inside mt-3 text-[30px] font-thin ">
            <li>Proficiency in languages like C, Java, and Python, covering core programming concepts and problem-solving techniques.</li>
              <li>Understanding software development life cycle (SDLC), agile methodologies, and debugging tools for efficient application development.</li>
              <li>In-depth knowledge of data structures like arrays, linked lists, stacks, and algorithms for optimized problem-solving.</li>
              <li> Basics of operating system concepts, including process management, memory management, and file systems.</li>
            </ul>
            </div>
            <div className='pt-10 border-b border-gray-200 '>
                <h1 className='text-[50px] sm:text-[75px] font-semibold text-red-700'>My Projects</h1>
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
                    <div key={index} className='lg:p-0 flex flex-col sm:flex-row h-auto sm:h-[40vh] p-5 sm:p-10 md:p-20 mb-10 bg-slate-900 border-b border-gray-400 overflow-hidden'>
                        <img src={proj.img} alt="" className='h-full w-full sm:w-auto' />
                        <p className='lg:m-10 text-[18px] sm:text-[25px] text-gray-400 font-thin mt-5 sm:mt-0 sm:ml-5 break-words'>
                            <span className='font-semibold'>{proj.title} </span> {proj.desc}
                        </p>
                    </div>
                ))}
            </div>
            <div className=' mt-0 mb-0 pb-10 border-b border-gray-200'>
            <h1 className='text-[70px]  font-semibold text-red-700'>My Education</h1>
            <h1 className='font-bold text-[50px] text-gray-400'>GOEL INSTITUTE OF HIGHER STUDIES, LUCKNOW, INDIA</h1>
            <h2 className='text-[30px] font-thin text-gray-400 '>BCA (Bachelor of Computer Applications)</h2>
            <h6 className='text-[20px] font-thin text-gray-500 '>June 2022 - July 2025
            </h6>
            <p className='text-[35px] font-thin text-gray-400 text-left '>A BCA-holding MERN Stack Developer with React, Node.js, Express.js, and MongoDB expertise. Competent in database administration, backend API, authentication, and frontend development (Redux, Tailwind CSS, Material UI). Knowledgeable about DevOps (Docker, CI/CD), cloud services (AWS, Firebase), and Git. Excellent problem-solving abilities and a love for working in Agile teams and creating scalable online apps.
            </p>
            <h1 className='font-bold text-[50px] text-gray-400'>Young Stream Academy Inter College, Barabanki, INDIA</h1>
            <h2 className='text-[30px] font-thin text-gray-400 '>12th Standed (UP Board)</h2>
            <h6 className='text-[20px] font-thin text-gray-400 '>March 2022</h6>
            <h2 className='text-[30px] font-thin text-gray-400 '>10th Standed (UP Board)</h2>
            <h6 className='text-[20px] font-thin text-gray-400 pb-10'>March 2020</h6>
            </div>
            <div className=' mt-0 mb-0 pb-10 border-b border-gray-200'>
            <h1 className='text-[75px]  font-semibold text-red-700'>Hobbies & Interest</h1> 
            <h2 className='font-bold text-[50px] text-gray-400'> Playing Chess</h2>
            <p  className='text-[35px] font-thin text-gray-400 text-left '>Strategic thinker with strong analytical skills, honed through competitive chess playing, enhancing problem-solving, decision-making, and foresight</p> 
            <a className='text-[25px] font-thin text-blue-600 text-left ' href="https://www.chess.com/member/saadkhan712" target='_blank'>see my chess preformance here</a>
            <h2 className='font-bold text-[50px] text-gray-400'>Watching Movies</h2>
            <p  className='text-[35px] font-thin text-gray-400 text-left '>Enjoy analyzing films for storytelling, cinematography, and character development, enhancing creativity, critical thinking, and cultural awareness.</p>
            <p className='text-[35px] font-thin text-gray-400 text-left '><span className='text-[40px] text-red-500 font-semibold'>Some of my Favorite Movies are</span>: Inception, Interstellar, The Dark Knight, The Shawshank Redemption, The Godfather.</p>
            </div>
          </div>
        </>
    )
}; 
