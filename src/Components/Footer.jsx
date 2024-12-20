import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto text-center space-y-6 px-4 sm:px-6">
        {/* Description */}
        <p className="text-base sm:text-lg font-semibold">
          Empowering Education with the Student Management System  </p>


        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
          <a
            href="/privacy-policy"
            className="text-sm sm:text-base text-gray-400 hover:text-white transition"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-sm sm:text-base text-gray-400 hover:text-white transition"
          >
            Terms of Service
          </a>
          <a
            href="/support"
            className="text-sm sm:text-base text-gray-400 hover:text-white transition"
          >
            Support
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-6 py-2 rounded-lg shadow-lg transition">
            Contact Us
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm sm:text-base px-6 py-2 rounded-lg shadow-lg transition">
            Join Our Newsletter
          </button>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Student Management System. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
