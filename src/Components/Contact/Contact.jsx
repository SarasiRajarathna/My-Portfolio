import React from 'react'
import mail_icon from '../../assets/Mail.svg'
import phone_icon from '../../assets/Phone.svg'
import location_icon from '../../assets/Location.svg'

function Contact() {
  return (
    <div id='Contact' className='flex flex-col items-center justify content-center gap-20 mx-20 mt-40 mb-20'>
        <div className='relative'>
            <h1 className='px-7 py-0 mt- text-6xl font-semibold'>Get in touch</h1>
            <div className="h-1 w-40 mx-auto mt-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-yellow-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-fuchsia-600 to-yellow-600 bg-clip-text text-transparent">Let's Talk</h1>
            <p className="text-gray-300 leading-relaxed">I’m currently available for new projects. If you have an idea or opportunity you’d like to discuss, feel free to reach out—I’d be happy to connect.</p>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4">
                <img src={mail_icon} alt="Mail" /><p className="text-gray-200">rajarathnasarasi@gmail.com</p>
              </div>
               <div className="flex items-center gap-4">
                <img src={phone_icon} alt="Call" /><p className="text-gray-200">+94 716303309</p>
              </div>
               <div className="flex items-center gap-4">
                <img src={location_icon} alt="Location" /><p className="text-gray-200">Sabaragamuwa University of Sri Lanka</p>
              </div>
            </div>
          
          </div>

          <form  className="flex flex-col gap-5 bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800">
            <label htmlFor="" className="text-sm font-medium">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"/>

            <label htmlFor="" className="text-sm font-medium">Your E-mail</label>
            <input type="email" placeholder='Enter your email' name='email' className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"/>

            <label htmlFor="" className="text-sm font-medium">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"></textarea>

            <button type='submit' className='contact-sumbit mt-4 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-yellow-600 text-white font-semibold rounded-lg hover:opacity-90 transition'>Submit Now</button>
          </form>

        </div>
    </div>
  )
}

export default Contact