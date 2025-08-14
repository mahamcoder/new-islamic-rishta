import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       {/* Footer */}
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-9 mt-12 mr-5">
          <div className="flex justify-center sm:justify-start items-center">
            <img 
              src="./images/nMM.png" 
              alt="Logo" 
              className="w-40 sm:w-32 md:w-56 -mt-12 sm:ml-10 h-auto mb-4 object-contain" 
            />
          </div>
          {/* Logo Section - mobile: left, big image; desktop: normal */}
          <div className="flex flex-col items-start mb-6 md:mb-0 px-4 sm:px-6 md:px-0">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10  rounded-full flex items-center justify-center mr-2 overflow-hidden">
                <img src={logo} alt="Heart MM Logo" className="w-16 h-16  rounded-full object-contain"/>
              </div>
              <h3 className='text-xl font-bold'>MarryingMuslims</h3>
            </div>
            <p className="text-gray-400 text-left text-sm leading-relaxed max-w-xs">
              Connecting Muslim hearts worldwide with dignity and respect.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-start px-4 sm:px-6 md:px-0">
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#howitworks" className="text-gray-400 hover:text-white text-base transition-colors">How It Works</a></li>
              <li><a href="#successstories" className="text-gray-400 hover:text-white text-base transition-colors">Our Vision</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white text-base transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start px-4 sm:px-6 md:px-0">
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to={'/privacy-policy'} className="text-gray-400 hover:text-white text-base transition-colors">Privacy Policy</Link></li>
              <li><Link to={'/termsandconditions'} className="text-gray-400 hover:text-white text-base transition-colors">Terms & Conditions</Link></li>
              <li><Link to={'/cookie-policy'} className="text-gray-400 hover:text-white text-base transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start px-4 sm:px-6 md:px-0">
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <div className="space-y-1 text-base text-gray-400 text-left w-full">
              <a className='mb-4' href="mailto:help@marryingmuslims.com">helpmarryingmuslims.com</a>
               <h3 className="text-white font-semibold ">Address:</h3>
              <p>JPJ7+7GM,At-Thamiri street</p>
              <p>Ad-Dirah,Riyadh</p>
              <p>Kingdom of Saudi Arabia (KSA)</p>
            </div>
          </div>
        </div>

  {/* Copyright */}
  <div className="border-t border-gray-800 mt-8 pt-6 text-center px-4 sm:px-6 md:px-0">
          <p className="text-gray-400 text-xs sm:text-sm">© 2025 MarryingMuslims. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer