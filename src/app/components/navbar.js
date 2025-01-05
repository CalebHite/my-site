'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [prevActiveTab, setPrevActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Home', sectionId: 'landing' },
    { id: 1, label: 'About', sectionId: 'about' },
    { id: 2, label: 'Projects', sectionId: 'projects' },
  ];

  const handleTabClick = (tabId) => {
    setPrevActiveTab(activeTab);
    setActiveTab(tabId);
    
    // Scroll to the corresponding section
    const section = document.getElementById(tabs[tabId].sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full bg-gray-900/50 backdrop-blur-sm shadow-lg z-50 fixed top-0 border-b border-gray-800 p-6">
      <div className="max-w-96 mx-auto px-4">
        <div className="relative flex space-x-2 overflow-hidden rounded-full bg-gray-800/50 p-1.5">
          <AnimatePresence initial={false}>
            <motion.div
              className="absolute inset-y-0 my-1 rounded-full"
              initial={{ x: `${prevActiveTab * 100}%` }}
              animate={{ x: `${activeTab * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ 
                width: `calc(${100 / tabs.length}% - 4px)`,
                border: '1px solid #334052',
                left: '7px'
              }}
            />
          </AnimatePresence>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative z-10 flex w-full items-center justify-center px-3 py-2 text-sm font-medium transition-colors duration-300
                ${activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
