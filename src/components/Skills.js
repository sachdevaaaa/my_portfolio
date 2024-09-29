import React from 'react';
import { FiCode, FiDatabase, FiLayers, FiMonitor, FiSmartphone, FiPenTool } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Import pagination styles
import { Autoplay, Pagination } from 'swiper/modules'; // Correctly import Autoplay and Pagination

const skills = [
  {
    icon: <FiCode size={40} />,
    title: 'Frontend Development',
    description: 'Expert in building responsive and dynamic user interfaces using HTML, CSS, React, and JavaScript.',
  },
  {
    icon: <FiDatabase size={40} />,
    title: 'Backend Development',
    description: 'Skilled in Node.js, Express, and working with databases like MongoDB, MySQL.',
  },
  {
    icon: <FiLayers size={40} />,
    title: 'UI/UX Design',
    description: 'Proficient in designing intuitive and engaging user experiences with Figma and Adobe XD.',
  },
  {
    icon: <FiMonitor size={40} />,
    title: 'Version Control',
    description: 'Experienced with Git for version control and collaborating in teams using GitHub and GitLab.',
  },
  {
    icon: <FiSmartphone size={40} />, 
    title: 'Mobile Development',
    description: 'Experienced in building cross-platform mobile applications using Flutter and React Native.',
  },
  {
    icon: <FiPenTool size={40} />, 
    title: 'Sketching',
    description: 'Part-time artist, I create visual and digital art in various mediums.',
  },
];

const Skills = () => {
  return (
    <section className="pt-24 pb-24 bg-white md:py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>

        {/* Swiper for mobile view */}
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }} // Enable pagination
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay configuration
            modules={[Autoplay, Pagination]} // Use Autoplay and Pagination modules
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg p-6 flex flex-col items-center">
                  <div className="bg-emerald-100 p-4 rounded-full mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-600 mb-20">{skill.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid layout for larger screens */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 ">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
