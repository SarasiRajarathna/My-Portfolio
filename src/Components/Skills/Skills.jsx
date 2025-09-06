import React from 'react'

const SkillsData = [
    {id: "01", title: "Web Design"},
    {id: "02", title: "App Design"},
    {id: "03", title: "Graphic Design"},
    {id: "04", title: "UI/UX Design"},
    {id: "05", title: "Social Media"},
    {id: "06", title: "Content Writing"}
]

function Skills() {

  let description="Web development is the process of building and maintaining websites to ensure they are functional, user-friendly, and visually appealing.";  
  let btt="Read More"

  return (
    <div className='flex flex-col items-center justify content-center gap-20 mx-20 my-40'>
        <div className='relative'>
            <h1 className='pt-0 pr-5 font-semibold text-6xl'>My Skills</h1>
        </div>

        <div className="grid grid-cols-3 gap-10">
         {SkillsData.map((Skill) => (
          <div key={Skill.id} className="p-6 border rounded-lg shadow-md hover:scale-110 transition-all duration-300">
            <h3 className="text-xl font-bold">{Skill.id}</h3>
            <h2 className='text-3xl font-bold'>{Skill.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{description}</p>
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-yellow-500 text-white rounded-lg hover:scale-110 transition-all duration-300">
              {btt}
            </button>
          </div>
         ))}
        </div>
        
    </div>
  )
}

export default Skills