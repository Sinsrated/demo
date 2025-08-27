import React, { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {name: 'Home', href: '#home'},
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose', href: '#why-choose' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Video Gallery', href: '#video-gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Admission', href: '#admission' },
  ];

  return (
    <header className="bg-[#D6C7B2] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          
          <div className="flex items-center space-x-3">
            <a href='/' className=''>
            <img 
              src="/logo.png" 
              alt=" Ventures Early Learning Centre" 
              className="w-12 h-12 object-contain"
            /></a>
            <div>
              <h1 className="text-2xl font-bold text-gray-500"> Ventures Early Learning Centre</h1>
              {/* <p className="text-sm text-yellow-400 font-medium">Nur & Pri School</p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-500 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-500 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;