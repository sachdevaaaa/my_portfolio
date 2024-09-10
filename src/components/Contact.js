import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import emailjs from 'emailjs-com';
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm('service_4q5r6qv', 'template_ipejuyx', e.target, 'WekgSjmRFdvRvPLkc');
      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={vantaRef} // Add Vanta background to this section
      className="min-h-[60vh] bg-white py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col gap-y-12 md:flex-row md:gap-x-12">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
          <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-emerald-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {successMessage && <p className="text-green-600">{successMessage}</p>}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center text-gray-900">
              <EnvelopeIcon className="h-6 w-6 text-emerald-600 mr-4" />
              <a href="mailto:divyamsachdevaa@gmail.com" className="text-lg hover:underline">
                divyamsachdevaa@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-900">
              <DevicePhoneMobileIcon className="h-6 w-6 text-emerald-600 mr-4" />
              <a href="tel:+919310176862" className="text-lg hover:underline">
                +91 9310176862
              </a>
            </div>
            <div className="flex items-center text-gray-900">
              <MapPinIcon className="h-6 w-6 text-emerald-600 mr-4" />
              <p className="text-lg">New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
