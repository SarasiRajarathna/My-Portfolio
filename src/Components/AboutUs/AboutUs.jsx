import React from 'react'
import profile_img from '../../../src/assets/Profile Pic.jpg'
import { useState } from "react";
import ToolkitLink from '../ToolkitLink/ToolkitLink';

const skillsData = {
  "All Tools": [
    { name: "VS Code" },
    { name: "SQL" },
    { name: "Intellij IDE" }, 
    { name: "Figma" },
    { name: "Illustrator" },
    { name: "Photoshop" },
    { name: "Git" },
    { name: "GitHub" },
  ],
  Development: [
    { name: "VS Code" },
    { name: "SQL" },
    { name: "Intellij IDE" },  
  ],
  "Design Tools": [
    { name: "Figma" },
    { name: "Illustrator" },
    { name: "Photoshop" },
  ],
  "Other Tools": [
    { name: "Git" },
    { name: "GitHub" },
  ],
};

function AboutUs() {
  
  const [selected, setSelected] = useState("All Skills");

  return (
    <div className='flex flex-col items-center justify content-center gap-5 mt-20 mr-24'>
      <div className='relative'>
        <h1 className='pt-0 pr-5 font-semibold text-6xl'>About Me</h1>
      </div>

      <div className='flex gap-20'>
        <div className='about left'>
          <img src={profile_img} alt="Profile" className='"w-64 h-64 object-cover rounded-lg shadow-2xl "'/>
        </div>

       <div className='flex flex-col gap-8 justify-center '> 
        <div className='flex flex-col gap-5 text-base font-medium'>
          <p className="text-lg text-gray-300 leading-relaxed max-w-5xl text-justify">I am an enthusiastic undergraduate currently pursuing a degree in Information Systems at Sabaragamuwa University of Sri Lanka. I am passionate about UI/UX design and frontend development, with a keen interest in creating clean, user-friendly, and visually appealing digital experiences. Alongside my academic studies, I am building skills in modern web technologies, software development, and information systems concepts.</p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-5xl text-justify">My goal is to combine creativity and technical knowledge to design and develop applications that are both functional and engaging, while continuously learning and improving as a future IT professional.</p>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex gap-12 items-center duration-0.3'><p className='w-32 font-semibold'>HTML & CSS</p><hr className='outline-none border-none w-2/4 h-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-yellow-500' style={{width:"75%"}}/></div>
          <div className='flex gap-12 items-center duration-0.3'><p className='w-32 font-semibold'>React JS</p><hr className='outline-none border-none w-2/4 h-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-yellow-500' style={{width:"65%"}}/></div>
          <div className='flex gap-12 items-center duration-0.3'><p className='w-32 font-semibold'>Tailwind CSS</p><hr className='outline-none border-none w-2/4 h-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-yellow-500' style={{width:"65%"}}/></div>
          <div className='flex gap-12 items-center duration-0.3'><p className='w-32 font-semibold'>Boostrap</p><hr className='outline-none border-none w-2/4 h-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-yellow-500' style={{width:"50%"}}/></div>
          <div className='flex gap-12 items-center duration-0.3'><p className='w-32 font-semibold'>JavaScript</p><hr className='outline-none border-none w-2/4 h-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-yellow-500' style={{width:"48%"}}/></div>
          <div className='flex gap-12 items-center duration-0.3'><p className='w-32 font-semibold'>SQL</p><hr className='outline-none border-none w-2/4 h-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-yellow-500' style={{width:"70%"}}/></div>
        </div> 

       </div>

      </div>
    </div>
  )
}

export default AboutUs