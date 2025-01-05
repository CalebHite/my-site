'use client';

import { useEffect, useRef } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
});

function GradientCircle({ className, size, color }) {
  return (
    <div className={`absolute ${size} rounded-full bg-gradient-to-r ${color} opacity-10 blur-3xl`} />
  );
}

export default function About() {
  return (
    <div className={`${montserrat.className} snap-container`} style={{ backgroundColor: '#0a0a0a' }}>
      <div className="fixed inset-0 -z-10">
        <GradientCircle 
          size="w-[600px] h-[600px] left-[-200px] top-[-100px]"
          color="from-purple-500 to-blue-500"
        />
        <GradientCircle 
          size="w-[700px] h-[700px] right-[-200px] bottom-[-150px]"
          color="from-blue-500 to-indigo-500"
        />
      </div>

      <div className="min-h-screen px-40 py-32 relative z-10">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <p className="text-lg text-gray-300">
              I'm a software engineer passionate about building innovative solutions 
              at the intersection of Web3 and artificial intelligence.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Technical Skills",
                    items: ["React", "Node.js", "Solidity", "Python", "Svelte", "C/C++", "C#", "Java", "SQL"]
                  },
                  {
                    title: "Industries",
                    items: ["DeFi", "Web3", "AI/ML", "SaaS"]
                  }
                ].map((section) => (
                  <div 
                    key={section.title} 
                    className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 
                             transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/70 
                             hover:border-gray-700 cursor-pointer"
                  >
                    <h4 className="font-medium mb-2 text-gray-200">{section.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <span key={item} className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800
                          transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/70 
                          hover:border-gray-700 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4 text-white">Current Focus</h3>
              <p className="text-gray-300">
                I'm currently working remotely at an AI startup in Miami, Florida. My projects are focused on leveraging Web3 technology and improving my proficiency of different languages.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800
                          transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/70 
                          hover:border-gray-700 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-300">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to email or connect with me on <a href="https://www.linkedin.com/in/caleb-hite-463214176/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300">LinkedIn</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
