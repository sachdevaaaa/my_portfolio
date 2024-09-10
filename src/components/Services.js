import React from 'react';
import { FiSearch, FiLayout, FiSettings, FiCode, FiClipboard, FiHeadphones } from 'react-icons/fi';

const services = [
  {
    icon: <FiSearch size={40} />,
    title: 'Website Review',
    description: 'I make sure your website is performing its best by thoroughly reviewing it before making any changes.',
  },
  {
    icon: <FiLayout size={40} />,
    title: 'Business Strategy',
    description: 'We discuss what you are trying to achieve, and place goals on your website planning how to achieve that.',
  },
  {
    icon: <FiSettings size={40} />,
    title: 'User Experience Design',
    description: 'I design your website to be as easy to use as possible while guiding users towards the end goal.',
  },
  {
    icon: <FiCode size={40} />,
    title: 'Tailored Development',
    description: 'I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.',
  },
  {
    icon: <FiClipboard size={40} />,
    title: 'Rigorous Testing',
    description: 'I ensure your website is of excellent quality by thoroughly testing using multiple approaches.',
  },
  {
    icon: <FiHeadphones size={40} />,
    title: 'Ongoing Support',
    description: 'Your website is always growing. Whether you’re adding new features or making improvements I’m here to help.',
  },
];

const Services = () => {
  return (
    <section className="py-32 bg-white md:py-12">
      <div className="max-w-7xl mx-auto px-4 text-center ">
        <h2 className="text-4xl font-bold mb-24">Everything you need for a perfect website</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
