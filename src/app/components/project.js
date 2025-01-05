'use client';

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

export default function Projects() {
  const projects = [
    {
      title: "ETHGambit",
      description: "A chess betting platform built on the Ethereum blockchain. Users can stake ETH to bet they will win a game of chess. Built for ETHGlobal SF 2024.",
      tech: ["React", "Solidity", "Flask", "Flow"],
      link: "https://ethglobal.com/showcase/ethgambit-y8v9e"
    },
    {
      title: "Gemini Helper",
      description: "A research assistant built on Gemini's LLM API. It can help you with your research and answer questions. Built for Google AI Hackathon 2024.",
      tech: ["React", "Gemini"],
      link: "https://devpost.com/software/gemini-helper?ref_content=my-projects-tab&ref_feature=my_projects"
    },
    {
      title: "Travel Tracker",
      description: "A trip planner built using Gemini's LLM API. It can help you plan your trips and save them to IPFS.",
      tech: ["Next.js", "Gemini", "Pinata", "IPFS"],
      link: "https://github.com/CalebHite/Travel-Tracker"
    },
    {
      title: "Crowdblock",
      description: "A decentralized crowdfunding platform built on the Ethereum blockchain. Users can create campaigns and raise funds for their projects. Built for Kansas Blockchain Fellowship 2024.",
      tech: ["Svelte", "Solidity"],
      link: "https://github.com/CalebHite/Crowdblock"
    }
  ];

  return (
    <div className={`${montserrat.className} snap-container`} style={{ backgroundColor: '#111827' }}>
      <div className="fixed inset-0">
        <GradientCircle 
          size="w-[800px] h-[800px] left-[-300px] top-[-200px]"
          color="from-emerald-500 to-teal-500"
        />
        <GradientCircle 
          size="w-[600px] h-[600px] right-[-100px] bottom-[-100px]"
          color="from-teal-500 to-cyan-500"
        />
      </div>

      <div className="min-h-screen px-40 py-32 relative">
        <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800
                         transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/70 
                         hover:border-gray-700 cursor-pointer space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                className="inline-block mt-4 text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
