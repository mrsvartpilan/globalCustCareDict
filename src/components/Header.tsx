import React from 'react';
import { Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            Global Customer Care Directory
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;