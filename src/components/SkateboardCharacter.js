import React, { useEffect, useRef, useState } from 'react';
import skateboardImage from '../images/skateboard.png'; // Adjust the path if needed
import { WiDirectionRight } from 'react-icons/wi';

const SkateboardCharacter = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const skateboardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skateboardRef.current) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrollPosition(scrollY);
        });
      }
    };

    const handleResize = () => {
      setMaxScroll(document.body.scrollHeight - window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Set maxScroll on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate rotation based on scroll position and increase rotation factor
  const rotationFactor = 7; // Increase this value to rotate more per scroll
  const rotation = (scrollPosition / maxScroll) * 360 * rotationFactor;

  // Inline styles for the skateboard character
  const skateboardContainerStyle = {
    position: 'fixed',
    top: '2.8rem', // Default position for larger screens
    left: `${(scrollPosition / maxScroll) * 100}%`, // Move horizontally based on scroll
    transform: `translate3d(-50%, 0, 0) rotate(${rotation}deg)`, // Center the character and rotate
    width: '1.5rem',
    height: 'auto',
    pointerEvents: 'none',
    zIndex: 1000, // Ensure it's above other content
    willChange: 'transform, left', // Inform the browser about upcoming changes
  };

  // Mobile view adjustment using media query
  const mobileStyle = {
    '@media (max-width: 576px)': {
      top: '2.4rem',
      width: '1.1rem', // Adjust this value as needed for mobile view
    },
  };

  const combinedStyle = {
    ...skateboardContainerStyle,
    ...(window.innerWidth <= 576 ? mobileStyle['@media (max-width: 576px)'] : {}),
  };

  const skateboardImageStyle = {
    width: '100%',
    height: 'auto',
    filter: 'invert(1) brightness(0.8)', // Apply filter to turn image to white
  };

  return (
    <div ref={skateboardRef} style={combinedStyle}>
      <img
        src={skateboardImage}
        alt="Skateboard Character"
        style={skateboardImageStyle}
      />
    </div>
  );
};

export default SkateboardCharacter;
