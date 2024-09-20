import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    laptopImg: require('../images/laptop1.png'), // Replace with correct image path
    phoneImg: require('../images/phone11.png'),  // Replace with correct image path
  },
  {
    laptopImg: require('../images/laptop2.png'), // Replace with correct image path
    phoneImg: require('../images/phone22.png'),  // Replace with correct image path
  },
];

const Portfolio = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const containerRef = useRef(null);

  // Switch testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden -mt-28"
      ref={containerRef}
      style={{ zIndex: 1 }} // Ensure the section is behind the navbar
    >
      <div className="relative w-full max-w-6xl h-auto flex justify-center items-center mb-8">
        {/* Laptop Image - Hidden on small screens */}
        <div className="relative z-10 flex justify-center items-center">
          <img
            src={testimonials[currentTestimonial].laptopImg}
            alt="Laptop showcasing the testimonial"
            className="object-cover transition-transform transition-opacity duration-1000 ease-in-out hidden sm:block"
            style={{
              width: '160%', // Slightly increased size for the laptop
              maxWidth: '1400px', // Limit size on large screens
              height: 'auto', // Maintain aspect ratio
            }}
          />
        </div>

        {/* Phone Image - Hidden on large screens */}
        <div className="absolute z-20 sm:w-1/3 w-full flex justify-center sm:justify-end">
          <img
            src={testimonials[currentTestimonial].phoneImg}
            alt="Phone showing testimonial"
            className="object-cover transition-transform transition-opacity duration-1000 ease-in-out"
            style={{
              width: '150%', // Larger size for the phone
              maxWidth: '650px', // Ensure phone doesn't grow excessively
              height: 'auto',
              position: 'absolute',
              right: '-520px',
              bottom: '-570px',
              transform: 'translateY(-50%)', // Maintain centering on large screens
            }}
          />
        </div>

        {/* Phone Image for Small Screens (Centered) */}
    {/* Phone Image for Small Screens (Centered) */}
{/* Phone Image for Small Screens (Centered) */}
{/* Phone Image for Small Screens (Centered) */}
{/* Phone Image for Small Screens (Centered) */}
{/* Phone Image for Small Screens (Centered) */}
{/* Phone Image for Small Screens (Centered) */}
{/* Phone Image for Small Screens (Centered) */}
{/* Phone Image for Small Screens (Centered) */}
<div className="flex justify-center items-center sm:hidden w-full mb-24"> {/* Added mb-4 for margin */}
  <img
    src={testimonials[currentTestimonial].phoneImg}
    alt="Phone showing testimonial"
    className="object-cover transition-transform transition-opacity duration-1000 ease-in-out"
    style={{
      width: '100%', // Full width
      height: '90vh', // Set a large height
      maxHeight: 'none', // Remove any max height constraints
    }}
  />
</div>









      </div>

      {/* Heading with Upward Arrow */}
      <div className="absolute bottom-10 w-full text-center">
        <div className="flex justify-center items-center text-center flex-col sm:flex-row">
          <h2 className="text-2xl sm:text-3xl mb-2 font-semibold text-gray-500">
            Some glimpses from my past work
          </h2>
          {/* SVG Arrow next to the heading */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 ml-2 animate-bounce"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M12 5c-4.67 0-8 1.5-8 4.5C4 12 7.33 13.5 12 13.5s8-1.5 8-4.5c0-3-3.33-4.5-8-4.5z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
