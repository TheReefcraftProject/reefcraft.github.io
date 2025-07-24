import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Science from './components/Science';
import GetInvolved from './components/GetInvolved';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Science />
      <GetInvolved />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;