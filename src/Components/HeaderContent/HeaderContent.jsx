import React, { useState } from 'react'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {

  const [menu,setmenu]= useState("Home")
  return (
    <div className='fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md text-white p-4 flex items-center justify-between z-50 shadow-lg'>
        <a href="#logo" className="text-2xl font-bold"> </a>

      <div className='flex-1 flex justify-center'>
        <div className='flex space-x-10'>
            <MenuLink linkname="Home" url="#Home" onClick={() => setMenu("Home")}/>
            <MenuLink linkname="About Me" url="#About Me" onClick={() => setMenu("About Me")}/>
            <MenuLink linkname="Skills" url="#Skills" onClick={() => setMenu("Skills")}/>
            <MenuLink linkname="Projects" url="#Projects" onClick={() => setMenu("Projects")}/>
            <MenuLink linkname="Contact" url="#Contact" onClick={() => setMenu("Contact")}/>
        </div>
      </div>  
            <a
             href="#contact"
              className="mr-4 bg-gradient-to-r from-fuchsia-600 to-yellow-600 hover:scale-105 text-white px-4 py-2 rounded-3xl shadow-md transition duration-300"
              >
             Connect With Me
            </a>
        
    </div>
  )
}

export default HeaderContent