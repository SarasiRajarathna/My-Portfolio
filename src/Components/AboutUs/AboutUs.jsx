import React from 'react'
import profile_img from '../../../src/assets/Profile Pic.jpg'
import { useState } from "react";

const skills = [
  { title: "HTML & CSS", level: "75%" },
  { title: "React JS", level: "65%" },
  { title: "Tailwind CSS", level: "65%" },
  { title: "Bootstrap", level: "50%" },
  { title: "JavaScript", level: "48%" },
  { title: "SQL", level: "70%" },
  { title: "Java", level: "50%" },
];

const skillsData = {
  "All Tools": [
    { name: "VS Code" },
    { name: "SQL" },
    { name: "Intellij IDE" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "jOuery" }, 
    { name: "Figma" },
    { name: "Illustrator" },
    { name: "Photoshop" },
    { name: "Canva" },
    { name: "Git" },
    { name: "GitHub" }
  ],
  Development: [
    { name: "VS Code" },
    { name: "SQL" },
    { name: "Intellij IDE" },
     { name: "HTML5" },
    { name: "CSS3" },
    { name: "jOuery" }
  ],
  "Design Tools": [
    { name: "Figma" },
    { name: "Illustrator" },
    { name: "Photoshop" },
    { name: "Canva" }
  ],
  "Other Tools": [
    { name: "Git" },
    { name: "GitHub" }
  ],
};

function AboutUs() {
  
  const [selected, setSelected] = useState("All Tools");

  return (
    <div id='about' className='flex flex-col items-center justify content-center gap-20 mx-20 my-40'>
      <div className='relative'>
        <h1 className='px-7 py-0 font-semibold text-6xl'>About Me</h1>
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

        <div className="flex flex-col gap-5">
         {skills.map((skill) => (
          <div>
            <h3 className="w-32 font-semibold">
              {skill.title}
            </h3>

            <div className="w-full rounded-full h-3 overflow-hidden">
              <div
                className="outline-none border-none w-2/4 h-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-yellow-500 hover:scale-110 transition-all duration-300"
                style={{ width: skill.level }}>
              </div>
            </div>
          </div>
         ))}
        </div>
       </div>
      </div>

      <div className='items-center justify content-center'>
        <h2 className='px-0 py-8 items-center justify-center font-medium text-4xl'>Technical <span className='bg-gradient-to-r from-fuchsia-600 to-yellow-600 bg-clip-text text-transparent'>Toolkit</span></h2>
        <p className='text-gray-400 max-w-6xl mx-auto mb-6'>A comprehensive set of proficiencies, from core programming languages
        and robust frameworks to essential development tools and creative design
        platforms.</p>

       <div className="flex justify-center gap-4 mb-8">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selected === category
                ? "bg-gradient-to-r from-fuchsia-600 to-yellow-500 text-black"
                : "bg-gray-800 hover:bg-gradient-to-r from-fuchsia-600 to-yellow-500"
            }`}
          >
            {category}
          </button>
        ))}
       </div>

       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skillsData[selected].map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition"
          >
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
       </div>

      </div>

      
     
    </div>
    
  )
}

export default AboutUs