import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <span className="text-xl font-bold">Jyoti Jadhav</span>
        <div className="space-x-4">
          <a href="#skills" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Skills
          </a>
          <a href="#experience" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Experience
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Projects
          </a>
          <a href="#training" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Training & Certifications
          </a>
          <a href="#languages" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Language
          </a>
          <a href="#education" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Education
          </a>
          <a href="#honours" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Honours & Awards
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
