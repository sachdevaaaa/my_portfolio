// src/components/Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>My Work</h2>
      <div className="portfolio-items">
        {/* Map over your projects */}
        <div className="portfolio-item">
          <img src="path/to/project-image" alt="Project" />
          <h3>Project Title</h3>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
