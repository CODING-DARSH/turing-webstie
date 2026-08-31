import Navbar from './components/Navbar';
import NotificationBar from './components/NotificationBar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Events from './components/Events';
import UpcomingEvents from './components/UpcomingEvents';
import Achievements from './components/Achievements';
import Leaders from './components/Leaders';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <NotificationBar />
      <Hero />
      <About />
      <WhatWeDo />
      <Events />
      <UpcomingEvents />
      <Achievements />
      <Leaders />
      <Footer />
    </div>
  );
}

export default App;