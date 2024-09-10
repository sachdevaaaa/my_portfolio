import React from 'react';
import { FiHome, FiBriefcase, FiUser, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';  // Import Link from react-scroll

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-3 shadow-lg fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2 text-xl font-bold md:justify-start justify-center w-full md:w-auto">
          <img src={require('../images/favicon.ico')} alt="Logo" className="w-8 h-8 md:block" />
          {/* <a href="#about" className="hover:text-gray-400">divyam </a> */}
          <Link to="about" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Divyam</Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 text-lg">
          <li>
            <Link to="hero" smooth={true} duration={500} className="block py-2 hover:text-gray-400 cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} className="block py-2 hover:text-gray-400 cursor-pointer">Portfolio</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="block py-2 hover:text-gray-400 cursor-pointer">About</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="block py-2 hover:text-gray-400 cursor-pointer">Contact Me</Link>
          </li>
        </ul>
      </nav>

      {/* Updated Mobile Menu with Rounded Corners and Margins */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-amber-100 text-gray-800 rounded-2xl shadow-lg py-2 md:hidden">
        <ul className="flex justify-around items-center">
          <li className="text-center">
            <Link to="hero" smooth={true} duration={500} className="block py-1 text-sm hover:text-gray-600 flex flex-col items-center cursor-pointer">
              <FiHome className="text-lg mb-0.5" />
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link to="portfolio" smooth={true} duration={500} className="block py-1 text-sm hover:text-gray-600 flex flex-col items-center cursor-pointer">
              <FiBriefcase className="text-lg mb-0.5" />
              Portfolio
            </Link>
          </li>
          <li className="text-center">
            <Link to="about" smooth={true} duration={500} className="block py-1 text-sm hover:text-gray-600 flex flex-col items-center cursor-pointer">
              <FiUser className="text-lg mb-0.5" />
              About
            </Link>
          </li>
          <li className="text-center">
            <Link to="contact" smooth={true} duration={500} className="block py-1 text-sm hover:text-gray-600 flex flex-col items-center cursor-pointer">
              <FiMail className="text-lg mb-0.5" />
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
