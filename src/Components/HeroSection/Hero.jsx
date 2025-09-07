import React from 'react'
import profile_img from '../../../src/assets/Profile Pic.jpg'

function Hero() {
  return (
    <div id='Home' className='flex items-center flex-col gap-9'>
        <img src={profile_img} alt="Profile" className='mt-32 w-64 h-64 md:w-75 md:h-75 lg:w-90 lg:h-90 rounded-full object-cover shadow-2xl border-2 hover:scale-105 transition-transform duration-300'/>
        <h1 className='w-2/4 text-center text-4xl font-semibold'> <span className='bg-gradient-to-r from-fuchsia-600 to-yellow-500 bg-clip-text text-transparent'>I'm Sarasi Rajarathna</span>, passionate UI/UX designer and frontend developer based in Sri Lanka.</h1>
        <p className='w-2/4 text-center text-lg leading-10'>I'm currently studying BSc(Hons) in Information Systems at Faculty of Computing at Sabaragamuwa University of Sri Lanka.</p>
        <div className='flex items-center gap-5 text-xl font-medium mb-0'>
            <div className='w-full sm:w-auto px-4 py-3 bg-gradient-to-r from-fuchsia-600 to-yellow-500 hover:scale-105 text-white font-semibold rounded-full hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer'>Connect with me</div>
            <div className='w-full sm:w-auto px-8 py-3 border-2 border-white text-gray-400 font-semibold rounded-full hover:border-fuchsia-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer'>My resume</div>
        </div>
    </div>
  )
}

export default Hero