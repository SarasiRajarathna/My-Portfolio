import React from 'react'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {
  return (
    <div className='bg-black text-white p-4 flex items-center justify-between ml-28'>
        <a href="#logo" className="text-2xl font-bold">
          <img src="" alt="" /> </a>

      <div className='flex-1 flex justify-center'>
        <div className='flex space-x-10'>
            <MenuLink linkname="Home" url="#Home"/>
            <MenuLink linkname="About Me" url="#About Me"/>
            <MenuLink linkname="Projects" url="#Projects"/>
            <MenuLink linkname="Skills" url="#Skills"/>
            <MenuLink linkname="Contact" url="#Contact"/>
        </div>
      </div>  
            <a
             href="#contact"
              className="mr-4 bg-gradient-to-r from-fuchsia-600 to-yellow-500 hover:scale-105 text-white px-4 py-2 rounded-3xl shadow-md transition duration-300"
              >
             Connect With Me
            </a>
        
    </div>
  )
}

export default HeaderContent