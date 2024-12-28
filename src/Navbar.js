import React, { useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">InstaBite</span>
          </Link>

         

          <div className="hidden md:flex items-center space-x-8">
            <a href="#recipes" className="text-gray-600 hover:text-orange-500">Recipes</a>
            <a href="#finder" className="text-gray-600 hover:text-orange-500">Recipe Finder</a>
            <Link 
              to="/about" 
              className={`block px-3 py-2 ${isActive('/about') ? 'text-orange-500' : 'text-gray-700'} hover:text-orange-500`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
              Login / Register
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#recipes" className="block px-3 py-2 text-gray-600 hover:text-orange-500">Recipes</a>
            <a href="#finder" className="block px-3 py-2 text-gray-600 hover:text-orange-500">Recipe Finder</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-orange-500">About</a>
            <button className="w-full text-left px-3 py-2 text-orange-500">Login / Register</button>
          </div>
        </div>
      )}
    </nav>
  );
}