import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';
import Events from './components/Events';
import Admission from './components/Admission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Gallery />
      <VideoGallery />
      <Events />
      <Admission />
      <Footer />
    </div>
  );
}

export default App;