'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    return (
      <div 
        className={`h-full bg-gray-900 text-white p-5 transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Bouton de toggle */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Contenu avec une transition d'opacité */}
        <div className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
            <ul>
                <li className="mb-3">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="mb-3">
                    <Link href="/about">À propos</Link>
                </li>
                <li className="mb-3">
                    <Link href="/career">Parcours professionnel</Link>
                </li>
                <li className="mb-3">
                    <div className="flex items-center justify-between">
                        <Link href="/projects">Projets réalisés</Link>
                        <button 
                            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                            className="ml-2 focus:outline-none"
                        >
                            <svg 
                                className={`w-4 h-4 transform transition-transform duration-300 ${
                                  isProjectsOpen ? "rotate-180" : ""
                                }`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isProjectsOpen ? "max-h-40" : "max-h-0"}`}>
                        <ul className="ml-5 mt-2 space-y-2">
                            <li>
                                <Link href="/projects/ft_transcendence">ft_transcendence</Link>
                            </li>
                            <li>
                                <Link href="/projects/ft_irc">ft_irc</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mb-3">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
      </div>
    );
};

export default Sidebar;
