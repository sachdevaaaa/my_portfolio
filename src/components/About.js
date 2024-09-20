import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const About = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadVanta = () => {
      const VANTA = window.VANTA;
      if (VANTA && VANTA.FOG && !vantaEffect.current) {
        vantaEffect.current = VANTA.FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          highlightColor: 0xa6f5d9,
          midtoneColor: 0xa6f5d9,
          lowlightColor: 0xc2ff,
          baseColor: 0xf2ecec,
          speed: 5.0,
        });
      } else {
        console.error('VANTA or VANTA.FOG is not available.');
      }
    };

    const handleScriptLoadError = (event) => {
      console.error('Error loading VANTA FOG script:', event);
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js';
    script.async = true;
    script.onload = () => {
      if (window.VANTA && window.VANTA.FOG) {
        loadVanta();
      } else {
        console.error('VANTA library or VANTA.FOG is not available after script load.');
      }
    };
    script.onerror = handleScriptLoadError;
    document.body.appendChild(script);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section id="about"
      ref={vantaRef}
      className="min-h-[90vh] flex items-center justify-center bg-gray-100 overflow-hidden"
    >
      <div className="relative flex flex-col md:flex-row items-center bg-emerald-50 rounded-xl max-w-5xl mx-auto p-6  text-center">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/3 mb-0">
          <img
            src={require('../images/profilepic2.png')}
            alt="Divyam Naveen Sachdeva"
            className="rounded-lg object-cover w-full md:-mb-6 xs:-mb-6 -ml-6"
          />
        </div>

        {/* Right: Card Section */}
        <div className="w-full md:w-2/3 p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hi, I'm Divyam Naveen Sachdeva
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I help growing companies like yours convert more customers and make more sales by combining your goals with your user's needs.
          </p>
          <a
            href="#contact"
            className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-lg font-semibold"
          >
            Let's book a call
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
