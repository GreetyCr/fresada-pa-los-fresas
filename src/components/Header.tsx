import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-6 px-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="hidden sm:block">
            <img 
              src="/images/assets/logo.jpeg" 
              alt="Fresada pa' los fresas Logo" 
              className="h-12 w-12 object-cover rounded-full border-2 border-red-600"
            />
          </div>
          
          {/* Brand title */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Fresada pa' los fresas
            </h1>
            <p className="text-gray-300 text-sm mt-1">
              Catálogo de Gorras Premium
            </p>
          </div>
        </div>
        
        {/* Theme toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
