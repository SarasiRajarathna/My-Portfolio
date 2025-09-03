import React from 'react'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {
  return (
    <div id='navcontent' className='bg-black text-white p-4 flex items-center justify-between'>
        <a href="#logo" className="text-2xl font-bold">
          <img src="" alt="" /> </a>

        <div className='flex space-x-10'>
            <MenuLink linkname="Home" url="#Home"/>
            <MenuLink linkname="About" url="#About"/>
            <MenuLink linkname="Projects" url="#Projects"/>
            <MenuLink linkname="Skills" url="#Skills"/>
            <MenuLink linkname="Contact" url="#Contact"/>

            <a
             href="#contact"
              className="ml-4 bg-amber-400 hover:bg-neutral-400 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
              >
             Hire Me
            </a>
        </div>
    </div>
  )
}

export default HeaderContent