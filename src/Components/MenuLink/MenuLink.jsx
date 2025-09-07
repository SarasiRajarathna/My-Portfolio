import React from 'react'

function MenuLink(props) {
  
  return (
    <>
     <a href={props.url} className='border-2 border-transparent p-2 rounded-xl hover:border-fuchsia-600 hover:text-white hover:scale-105 transition-all duration-300'> {props.linkname} </a>
    </>
  )
}

export default MenuLink