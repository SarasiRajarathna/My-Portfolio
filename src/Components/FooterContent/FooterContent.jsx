import React from 'react'
import user_icon from '../../assets/User icon.svg'

function FooterContent() {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12">
   
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 max-w-6xl mx-auto">
        
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
            Sarasi Rajarathna
          </h2>
          <p className="leading-relaxed text-gray-400">
            I am a passionate UI/UX designer and frontend developer from Sri Lanka, 
            currently pursuing my Information Systems degree at 
            Sabaragamuwa University of Sri Lanka.
          </p>
        </div>

       
        <div className="flex items-center gap-3 bg-gray-800 rounded-full px-4 py-2 w-full lg:w-auto">
          <img src={user_icon} alt="User Icon" className="w-5 h-5 opacity-70" />
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
          />
          <button className="bg-gradient-to-r from-fuchsia-600 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>

     
      <hr className="border-gray-500 my-8" />

      
      <div className="flex flex-col md:flex-row justify-between items-center text-sm max-w-6xl mx-auto gap-4">
        <p className="text-gray-500">
          © 2025 Sarasi Rajarathna. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-purple-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition">Connect with me</a>
        </div>
      </div>
    </footer>
  )
}

export default FooterContent
