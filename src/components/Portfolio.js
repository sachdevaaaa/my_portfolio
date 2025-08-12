// import React, { useState, useEffect, useRef } from 'react';

// const testimonials = [
//   {
//     laptopImg: require('../images/laptop1.png'), // Replace with correct image path
//     phoneImg: require('../images/phone11.png'),  // Replace with correct image path
//   },
//    {
//     laptopImg: require('../images/laptop3.png'), // Replace with correct image path
//      phoneImg: require('../images/phone33.png'),  // Replace with correct image path
//   },
//   {
//     laptopImg: require('../images/laptop2.png'), // Replace with correct image path
//     phoneImg: require('../images/phone22.png'),  // Replace with correct image path
//   },
 

// ];

// const Portfolio = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const containerRef = useRef(null);

//   // Switch testimonials every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="portfolio"
//       className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden -mt-30"
//       ref={containerRef}
//       style={{ zIndex: 1 }} // Ensure the section is behind the navbar
//     >
//       <div className="relative w-full max-w-6xl h-auto flex justify-center items-center mb-8">
//         {/* Laptop Image - Hidden on small screens */}
//         <div className="relative z-10 flex justify-center items-center">
//           <img
//             src={testimonials[currentTestimonial].laptopImg}
//             alt="Laptop showcasing the testimonial"
//             className="object-cover transition-transform transition-opacity duration-1000 ease-in-out hidden sm:block"
//             style={{
//               width: '160%', // Slightly increased size for the laptop
//               maxWidth: '1400px', // Limit size on large screens
//               height: 'auto', // Maintain aspect ratio
//             }}
//           />
//         </div>

//         {/* Phone Image - Hidden on large screens */}
//         <div className="absolute z-20 sm:w-1/3 w-full flex justify-center sm:justify-end">
//           <img
//             src={testimonials[currentTestimonial].phoneImg}
//             alt="Phone showing testimonial"
//             className="object-cover transition-transform transition-opacity duration-1000 ease-in-out"
//             style={{
//               width: '150%', // Larger size for the phone
//               maxWidth: '650px', // Ensure phone doesn't grow excessively
//               height: 'auto',
//               position: 'absolute',
//               right: '-520px',
//               bottom: '-570px',
//               transform: 'translateY(-50%)', // Maintain centering on large screens
//             }}
//           />
//         </div>

//         {/* Phone Image for Small Screens (Centered) */}
//     {/* Phone Image for Small Screens (Centered) */}
// {/* Phone Image for Small Screens (Centered) */}
// {/* Phone Image for Small Screens (Centered) */}
// {/* Phone Image for Small Screens (Centered) */}
// {/* Phone Image for Small Screens (Centered) */}
// {/* Phone Image for Small Screens (Centered) */}
// {/* Phone Image for Small Screens (Centered) */}
// {/* Phone Image for Small Screens (Centered) */}
// <div className="flex justify-center items-center sm:hidden w-full mb-24"> {/* Added mb-4 for margin */}
//   <img
//     src={testimonials[currentTestimonial].phoneImg}
//     alt="Phone showing testimonial"
//     className="object-cover transition-transform transition-opacity duration-1000 ease-in-out"
//     style={{
//       width: '100%', // Full width
//       height: '90vh', // Set a large height
//       maxHeight: 'none', // Remove any max height constraints
//     }}
//   />
// </div>









//       </div>

//       {/* Heading with Upward Arrow */}
//       <div className="absolute bottom-10 w-full text-center">
//         <div className="flex justify-center items-center text-center flex-col sm:flex-row">
//           <h2 className="text-2xl sm:text-3xl mb-2 font-semibold text-gray-500">
//             Some glimpses from my past work
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;


// Portfolio.jsx
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const testimonials = [
  { laptopImg: require("../images/laptop1.png"), phoneImg: require("../images/phone11.png") },
  { laptopImg: require("../images/laptop3.png"), phoneImg: require("../images/phone33.png") },
  { laptopImg: require("../images/laptop2.png"), phoneImg: require("../images/phone22.png") },
];

const Portfolio = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const projects = [
    { name: "Credit Risk Model", url: "https://finance-divyam.up.railway.app/" },
    { name: "Automated Scraper (Login System)", url: "https://automated-scraper.up.railway.app/" },
  ];

  // Cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((p) => (p + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Position dropdown relative to button (uses fixed positioning via portal)
  const positionDropdown = () => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const top = rect.bottom + 8; // 8px gap under the button
    const left = rect.left + rect.width / 2; // we center horizontally and use transform to shift -50%
    setDropdownPos({ top, left });
  };

  // open dropdown and ensure it's positioned
  const toggleDropdown = () => {
    setIsOpen((v) => {
      const newVal = !v;
      if (!v) {
        // opening - position the dropdown next tick
        setTimeout(positionDropdown, 0);
      }
      return newVal;
    });
  };

  // Close on outside click or on Escape, and reposition on scroll/resize
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleScrollResize = () => {
      if (isOpen) positionDropdown();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKey);
    window.addEventListener("scroll", handleScrollResize, true);
    window.addEventListener("resize", handleScrollResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("scroll", handleScrollResize, true);
      window.removeEventListener("resize", handleScrollResize);
    };
  }, [isOpen]);

  // Portal element existence guard
  const canPortal = typeof document !== "undefined" && document.body;

  return (
    <section
      id="portfolio"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden -mt-30"
      ref={containerRef}
      // avoid artificially lowering the stacking context of this section
    >
      <div className="relative w-full max-w-6xl h-auto flex justify-center items-center mb-8">
        {/* Laptop Image */}
        <div className="relative z-0 flex justify-center items-center">
          <img
            src={testimonials[currentTestimonial].laptopImg}
            alt="Laptop showcasing the testimonial"
            className="object-cover transition-transform transition-opacity duration-1000 ease-in-out hidden sm:block"
            style={{ width: "160%", maxWidth: "1400px", height: "auto" }}
          />
        </div>

        {/* Phone Image - Large screens */}
        <div className="absolute z-0 sm:w-1/3 w-full flex justify-center sm:justify-end">
          <img
            src={testimonials[currentTestimonial].phoneImg}
            alt="Phone showing testimonial"
            className="object-cover transition-transform transition-opacity duration-1000 ease-in-out"
            style={{
              width: "150%",
              maxWidth: "650px",
              height: "auto",
              position: "absolute",
              right: "-520px",
              bottom: "-570px",
              transform: "translateY(-50%)",
            }}
          />
        </div>

        {/* Phone Image - Small screens */}
        <div className="flex justify-center items-center sm:hidden w-full mb-24">
          <img
            src={testimonials[currentTestimonial].phoneImg}
            alt="Phone showing testimonial"
            className="object-cover transition-transform transition-opacity duration-1000 ease-in-out"
            style={{ width: "100%", height: "90vh", maxHeight: "none" }}
          />
        </div>
      </div>

      {/* Heading with dropdown trigger */}
      <div className="absolute bottom-10 w-full text-center">
        <div className="flex justify-center items-center flex-col sm:flex-row">
          <div className="relative inline-block text-left">
            <button
              ref={buttonRef}
              onClick={toggleDropdown}
              className="text-2xl sm:text-3xl mb-2 font-semibold text-gray-500 hover:text-gray-700 transition duration-300 flex items-center"
              aria-expanded={isOpen}
              aria-haspopup="menu"
            >
              Some glimpses from my past work
              <svg
                className={`ml-2 h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown rendered via portal so it cannot be clipped by other stacking contexts */}
      {isOpen && canPortal &&
        createPortal(
          <div
            ref={dropdownRef}
            // use fixed so it isn't clipped by parent overflow; center horizontally using transform(-50%)
            style={{
              position: "fixed",
              top: `${dropdownPos.top}px`,
              left: `${dropdownPos.left}px`,
              transform: "translateX(-50%)",
              zIndex: 2147483647, // extremely high to be safe
            }}
            className="w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
          >
            <div className="py-2">
              {projects.map((project, i) => (
                <a
                  key={i}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition duration-200"
                  role="menuitem"
                >
                  {project.name}
                </a>
              ))}
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Portfolio;
