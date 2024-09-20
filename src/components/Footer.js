// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div  id="footer" className="bg-gray-800">
    <footer className="flex justify-center items-center py-4 text-white ml-4 mr-4"> {/* Removed margin */}
      <p className="mr-4">© {new Date().getFullYear()} Divyam Naveen Sachdeva. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/art.devta/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/divyam-naveen-b4a32a25b/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  </div>
  
  
  

  );
}

export default Footer;
