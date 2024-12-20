import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
        {/* Logo or Title */}
        <a
          href="http://localhost:3000"
          className="text-2xl md:text-3xl sm:text-lg font-bold tracking-wide"
        >
          Student Management System
        </a>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-end items-center mt-4 md:mt-0 space-y-2 md:space-y-0 space-x-0 md:space-x-4 w-full md:w-auto">
          <a
            href="/"
            className="text-sm md:text-lg font-medium hover:underline hover:text-gray-200 transition block md:inline-block"
          >
            Home
          </a>
          <a
            href="/students"
            className="text-sm md:text-lg font-medium hover:underline hover:text-gray-200 transition block md:inline-block"
          >
            Students
          </a>
          <a
            href="/about"
            className="text-sm md:text-lg font-medium hover:underline hover:text-gray-200 transition block md:inline-block"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-sm md:text-lg font-medium hover:underline hover:text-gray-200 transition block md:inline-block"
          >
            Contact
          </a>
          <button className="bg-white text-blue-600 font-semibold text-sm md:text-base px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition w-full md:w-auto">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
