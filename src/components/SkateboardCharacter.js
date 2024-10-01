import React, { useEffect, useRef, useState } from 'react';
import skateboardImage from '../images/skateboard.png'; // Adjust the path if needed


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

  // Set gaps only for mobile view
  const isMobile = window.innerWidth <= 576; // Mobile view threshold

  const leftGap = isMobile ? 58 : 0; // Gap from the left side in pixels (only for mobile)
  const rightGap = isMobile ? 58 : 0; // Gap from the right side in pixels (only for mobile)

  // Calculate the available horizontal space between gaps
  const availableWidth = window.innerWidth - leftGap - rightGap;

  // Calculate the horizontal position based on the scroll position
  const leftPosition = leftGap + ((scrollPosition / maxScroll) * availableWidth);

  // Calculate rotation based on scroll position and increase rotation factor
  const rotationFactor = 7; // Increase this value to rotate more per scroll
  const rotation = (scrollPosition / maxScroll) * 360 * rotationFactor;

  const skateboardContainerStyle = {
    position: 'fixed',
    top: isMobile ? '2.9rem' : '2.8rem', // Adjust for mobile view
    left: `${leftPosition}px`, // Constrain movement between the gaps
    transform: `translate3d(-50%, 0, 0) rotate(${rotation}deg)`, // Center the character and rotate
    width: isMobile ? '1.1rem' : '1.5rem', // Adjust for mobile view
    height: 'auto',
    pointerEvents: 'none',
    zIndex: 1000,
    willChange: 'transform, left',
  };

  const skateboardImageStyle = {
    width: '100%',
    height: 'auto',
    filter: 'invert(1) brightness(0.8)', // Apply filter to turn image to white
  };

  return (
    <div ref={skateboardRef} style={skateboardContainerStyle}>
      <img
        src={skateboardImage}
        alt="Skateboard Character"
        style={skateboardImageStyle}
      />
    </div>
  );
};

export default SkateboardCharacter;
