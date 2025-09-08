import React from 'react'
import Project1_img from '../../../src/assets/Project 1.jpg'
import Project2_img from '../../../src/assets/Project 2.jpg'
import Project3_img from '../../../src/assets/Project 3.jpg'
import Project4_img from '../../../src/assets/Project 4.jpg'
import Project5_img from '../../../src/assets/Project 5.jpg'
import Project6_img from '../../../src/assets/Project 6.jpg'

const myProjects = [
    {id: "01", title: "Calculator Hub (HTML, CSS, & Js)", p_img:Project1_img},
    {id: "02", title: "Vita-Derma (HTML & CSS)", p_img:Project2_img},
    {id: "03", title: "Interior Design (HTML & CSS)", p_img:Project3_img},
    {id: "04", title: "Coffee Bliss (HTML, CSS, & Js)", p_img:Project4_img},
    {id: "05", title: "Simple Calculator (React.Js & Boostrap)", p_img:Project5_img},
    {id: "06", title: "My Portfolio (React.Js & Tailwind CSS)", p_img:Project6_img}
]

function Projects() {
  return (
    <div id='Projects' className='flex flex-col items-center justify content-center gap-20 mx-40 my-20'>
        <div className='relative'>
            <h1 className='px-7 py-0 text-6xl font-semibold'>My Featured Projects</h1>
            <div className="h-1 w-40 mx-auto mt-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-yellow-600"></div>
        </div>

        <div className='grid grid-cols-3 gap-10'>
          {myProjects.map((project) => (
          <img className='box-border border-2 border-transparent w-96 h-64 hover:border-fuchsia-600 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer'
            key={project.id} 
            src={project.p_img || "/placeholder.png"} 
            alt={project.title} 
          />
        ))}
        </div>
        <div className='flex gap-2 rounded-lg border-2 px-4 py-4 border-white text-lg font-medium mb-0 hover:border-fuchsia-600 hover:scale-110 transition-all duration-300 cursor-pointer'>
          <p className='text-gray-400 hover:text-white'>Show More</p>
        </div>
    </div>
  )
}

export default Projects