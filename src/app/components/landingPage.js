'use client';

import { useEffect, useRef } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
});

function BlurryBlob({ className, firstBlobColor, secondBlobColor }) {
  return (
    <div className="min-h-52 min-w-52 items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div
          className={`absolute -right-24 -top-28 h-72 w-72 animate-pop-blob rounded-sm opacity-45 mix-blend-multiply blur-3xl filter ${firstBlobColor}`}
        ></div>
        <div
          className={`absolute -left-40 -top-64 h-72 w-72 animate-pop-blob rounded-sm opacity-45 mix-blend-multiply blur-3xl filter ${secondBlobColor}`}
        ></div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const flashlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = flashlightRef.current?.getBoundingClientRect();
      if (!rect || !flashlightRef.current) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        flashlightRef.current.style.backgroundImage = `radial-gradient(
          circle 200px at ${x}px ${y}px, 
          rgba(57, 42, 168, 0.25), 
          rgba(65, 105, 225, 0.05) 40%, 
          transparent 70%
        )`;
      } else {
        flashlightRef.current.style.backgroundImage = 'none';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`${montserrat.className} snap-container`} style={{ backgroundColor: '#111827' }}>
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full">
          <circle
            cx="70%"
            cy="90%"
            r="300"
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />
          <circle
            cx="70%"
            cy="90%"
            r="400"
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />
          <circle
            cx="70%"
            cy="90%"
            r="500"
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />
          <circle
            cx="20%"
            cy="-30%"
            r="300"
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />
          <circle
            cx="20%"
            cy="-30%"
            r="400"
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />
          <circle
            cx="20%"
            cy="-30%"
            r="500"
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div ref={flashlightRef} id="flashlight"></div>
      <div className="relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none">
          <div className="absolute left-[-900px] bottom-[-400px]">
            <BlurryBlob 
              firstBlobColor="bg-[#392aa8]"
              secondBlobColor="bg-[rgba(65,105,225,0.5)]"
            />
          </div>
          
          <div className="absolute right-[-200px] bottom-[-100px]">
            <BlurryBlob 
              firstBlobColor="bg-[#392aa8]"
              secondBlobColor="bg-[rgba(0,122,255,0.7)]"
            />
          </div>
          
          <div className="absolute left-[200px] bottom-[-200px]">
            <BlurryBlob 
              firstBlobColor="bg-[rgba(65,105,225,0.6)]"
              secondBlobColor="bg-[#392aa8]"
            />
          </div>

          <div className="absolute top-[150px] left-[250px] bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/70 hover:border-gray-700">
            <h3 className="text-xl font-semibold text-white">Full Stack Development</h3>
            <p className="text-gray-300 text-sm mt-2 max-w-[200px]">Building scalable applications from front to back</p>
          </div>
          
          <div className="absolute bottom-[200px] right-[100px] bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/70 hover:border-gray-700">
            <h3 className="text-xl font-semibold text-white">Web3 & Blockchain</h3>
            <p className="text-gray-300 text-sm mt-2 max-w-[200px]">Exploring the future of decentralized technology</p>
          </div>
          
          <div className="absolute bottom-[150px] left-[150px] bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/70 hover:border-gray-700">
            <h3 className="text-xl font-semibold text-white">AI/ML</h3>
            <p className="text-gray-300 text-sm mt-2 max-w-[200px]">Using AI agents to solve complex problems</p>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-between h-screen px-40">
        <div className="w-1/2 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/70 hover:border-gray-700">
          <h1 className="text-6xl font-bold text-white">I&apos;m Caleb. A Software Engineer and Web3 Enthusiast.</h1>
          <p className="text-gray-300 mt-4 text-xl">Building the future of web technology with modern tools and frameworks.</p>
        </div>
      </div>
    </div>
  );
}

