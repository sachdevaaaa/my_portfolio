import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-scroll'; // Import Link

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "I am a Web Developer.",
        "I am a Designer.",
        "I am an Artist.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}
    >
      <div className="text-black">
        <p className="text-2xl mb-2 font-semibold">Design. Build. Improve.</p>
        <h1 className="text-4xl font-semibold sm:text-5xl sm:font-bold lg:text-6xl mb-6 mt-6 max-w-5xl">
          I create beautiful websites your users will love
        </h1>
        <p className="text-2xl">
          <span ref={typedRef}></span>
        </p>
        {/* Use Link component for smooth scrolling */}
        <Link to="contact" smooth={true} duration={500}>
          <button className='bg-emerald-300 hover:text-black font-semibold py-3 px-8 rounded-lg mt-8'>
            Let's Connect
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
