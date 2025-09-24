import React, { useState } from "react";
 import { Link } from "react-router";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile dropdown

  return (
    <>
      {/* 🔹 Top Headline Bar (hidden on mobile) */}
      <div className="hidden md:block bg-[#F5801E] text-black text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left side */}
          <div className="flex space-x-6">
            <span>📞 042 37378086</span>
            <span>✉️ almateenengineers@gmail.com</span>
          </div>
          {/* Right side */}
          <div>
            <span>📍60 - Railway Road, Lahore, Pakistan</span>
          </div>
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className="bg-gradient-to-r from-white via-[#fcd9b5] to-[#F5801E] text-black shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-40 h-auto"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center font-medium">
              <Link to="/" className="hover:text-[#F5801E]">Home</Link>
              <Link to="/about" className="hover:text-[#F5801E]">About</Link>

              {/* Services (hover on desktop) */}
              <div className="relative group">
                <button className="flex items-center hover:text-[#F5801E] focus:outline-none">
                  Services
                  <svg
                    className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {/* Dropdown on hover */}
                <div className="absolute left-0 bg-white text-black shadow-lg mt-2 rounded-lg w-48 hidden group-hover:block">
                  <Link
    to="/civil"
    className="block px-6 py-2 hover:bg-gray-200 hover:text-[#F5801E]"
  >
    Civil Contractor
  </Link>
  <Link
    to="/electrical"
    className="block px-6 py-2 hover:bg-gray-200 hover:text-[#F5801E]"
  >
    Electrical Contractor
  </Link>
  <Link
    to="/mechanical"
    className="block px-6 py-2 hover:bg-gray-200 hover:text-[#F5801E]"
  >
    Mechanical Contractor
  </Link>
  <Link
    to="/lpg"
    className="block px-6 py-2 hover:bg-gray-200 hover:text-[#F5801E]"
  >
    LPG Contractor
  </Link>
                </div>
              </div>

              <Link to="/products" className="hover:text-[#F5801E]">Products</Link>
               <Link to="/contact" className="hover:text-[#F5801E]">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white text-black animate-fadeIn">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F5801E]">Home</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F5801E]">About</a>

            {/* Mobile Dropdown */}
            <div className="border-t border-gray-200">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
              >
                Services
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {servicesOpen && (
               

<div className="bg-gray-50 animate-fadeIn">
  <Link
    to="/civil"
    className="block px-6 py-2 hover:bg-gray-200 hover:text-[#F5801E]"
  >
    Civil Contractor
  </Link>
  <Link
    to="/electrical"
    className="block px-6 py-2 hover:bg-gray-200 hover:text-[#F5801E]"
  >
    Electrical Contractor
  </Link>
  <Link
    to="/mechanical"
    className="block px-6 py-2 hover:bg-gray-200 hover:text-[#F5801E]"
  >
    Mechanical Contractor
  </Link>
  <Link
    to="/lpg"
    className="block px-6 py-2 hover:bg-gray-200 hover:text-[#F5801E]"
  >
    LPG Contractor
  </Link>
</div>

              )}
            </div>

            <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F5801E]">Products</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F5801E]">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
