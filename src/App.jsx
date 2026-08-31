import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Events from './components/Events';
import Achievements from './components/Achievements';
import Leaders from './components/Leaders';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <Events />
      <Leaders />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;