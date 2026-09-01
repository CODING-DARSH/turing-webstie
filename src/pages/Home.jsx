import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';
import Events from '../components/Events';
import UpcomingEvents from '../components/UpcomingEvents';
import Achievements from '../components/Achievements';
import Leaders from '../components/Leaders';

export default function Home() {
  const location = useLocation();

  // scroll to the section matching the URL hash whenever it changes
  // (covers both landing here fresh from another page, and clicking a
  // nav link while already on this page)
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Events />
      <UpcomingEvents />
      <Achievements />
      <Leaders />
    </>
  );
}