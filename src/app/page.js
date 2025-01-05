'use client';

import LandingPage from './components/landingPage';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/project';
import './globals.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111827] snap-y snap-mandatory overflow-x-hidden">
      <Navbar />
      <div className="relative">
        <div id="landing" className="snap-start">
          <LandingPage />
        </div>
        <div id="about" className="snap-start">
          <About />
        </div>
        <div id="projects" className="snap-start">
          <Projects />
        </div>
      </div>
    </main>
  );
}
