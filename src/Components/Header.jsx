import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
        {/* Logo or Title */}
        <a
          href="http://localhost:3000"
          className="text-2xl sm:text-xl md:text-3xl font-bold tracking-wide mb-4 sm:mb-2 md:mb-0"
        >
          Student Management System
        </a>

        {/* Navigation and Buttons */}
        <div className="flex flex-wrap justify-center md:justify-end items-center w-full md:w-auto">
          <nav className="flex flex-col sm:flex-row sm:space-x-4 text-center md:text-left w-full md:w-auto">
            <a
              href="/"
              className="text-sm md:text-lg font-medium hover:underline hover:text-gray-200 transition py-1 sm:py-0"
            >
              Home
            </a>
            <a
              href="/students"
              className="text-sm md:text-lg font-medium hover:underline hover:text-gray-200 transition py-1 sm:py-0"
            >
              Students
            </a>
            <a
              href="/about"
              className="text-sm md:text-lg font-medium hover:underline hover:text-gray-200 transition py-1 sm:py-0"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm md:text-lg font-medium hover:underline hover:text-gray-200 transition py-1 sm:py-0"
            >
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto mt-4 md:mt-0 md:ml-4">
            <button className="bg-white text-blue-600 font-semibold text-sm md:text-base px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition w-full sm:w-auto">
              Login
            </button>
            <button className="bg-gray-300 text-gray-800 font-semibold text-sm md:text-base px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition w-full sm:w-auto">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
