import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Skills from './components/Skills';
import ProgressBar from './components/SkateboardCharacter';
import SkateboardCharacter from './components/SkateboardCharacter';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
   <> 
   <SkateboardCharacter /> 
   <Header/>
   <Hero/>
   < Portfolio />
   <About />
   <Services />
   
   < Skills />
   <Contact />
   <Footer />
  
   
  </>
  )
}

export default App;
