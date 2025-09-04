import React from 'react'

function MenuLink(props) {
  return (
    <>
     <a href={props.url} className='hover:bg-neutral-400 px-4 py-2 rounded-lg transition-all duration-300'> {props.linkname} </a>
    </>
  )
}

export default MenuLink