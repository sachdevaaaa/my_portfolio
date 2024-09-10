import React from 'react';
import { FiCode, FiDatabase, FiLayers, FiMonitor, FiSmartphone, FiPenTool } from 'react-icons/fi';

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
    icon: <FiSmartphone size={40} />, // New icon for Mobile Development
    title: 'Mobile Development',
    description: 'Experienced in building cross-platform mobile applications using Flutter and React Native.',
  },
  {
    icon: <FiPenTool size={40} />, // Sketching & Painting
    title: 'Sketching',
    description: 'Part-time artist, I creat visual and digital art in various mediums.',
  },
];

const Skills = () => {
  return (
    <section className="py-32 bg-white md:py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
