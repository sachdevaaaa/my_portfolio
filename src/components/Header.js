import React, { useEffect, useState } from 'react';
import { FiHome, FiBriefcase, FiUser, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Header = () => {
  const [isBottomNavbarVisible, setIsBottomNavbarVisible] = useState(true);

  const handleScroll = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      setIsBottomNavbarVisible(footerRect.top > window.innerHeight); // Hide bottom navbar only
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="bg-gray-800 text-white py-3 shadow-lg fixed z-20 left-0 right-0 mx-[50px] mt-2 rounded-xl opacity-90 max-w-[calc(100%-100px)] sm:mx-0 sm:max-w-full sm:rounded-none sm:mt-0">


  
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2 text-xl font-bold md:justify-start justify-center w-full md:w-auto">
            <img src={require('../images/favicon.ico')} alt="Logo" className="w-8 h-8 md:block" />
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
      </header>

      {/* Mobile Menu */}
      {isBottomNavbarVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-teal-100 text-gray-800 rounded-2xl shadow-lg py-2 md:hidden z-10">
          <ul className="flex justify-around items-center">
            <li className="text-center">
              <Link to="hero" smooth={true} duration={500} className="block py-1 text-sm hover:text-gray-600 flex flex-col items-center cursor-pointer">
                <FiHome className="text-lg mb-0.5" />
                <span className="text-xs">Home</span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="portfolio" smooth={true} duration={500} className="block py-1 text-sm hover:text-gray-600 flex flex-col items-center cursor-pointer">
                <FiBriefcase className="text-lg mb-0.5" />
                <span className="text-xs">Portfolio</span>
              </Link>
            </li>
            {/* Logo in the center */}
            <li className="text-center">
              <Link to="about" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                <img src={require('../images/favicon.ico')} alt="Logo" className="w-8 h-8" />
                <span className="text-xs"></span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="about" smooth={true} duration={500} className="block py-1 text-sm hover:text-gray-600 flex flex-col items-center cursor-pointer">
                <FiUser className="text-lg mb-0.5" />
                <span className="text-xs">About</span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="contact" smooth={true} duration={500} className="block py-1 text-sm hover:text-gray-600 flex flex-col items-center cursor-pointer">
                <FiMail className="text-lg mb-0.5" />
                <span className="text-xs">Contact Me</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
