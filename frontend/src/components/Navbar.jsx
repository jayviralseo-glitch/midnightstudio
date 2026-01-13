import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black shadow-lg" : "bg-transparent"
    }`}>
      <div className="px-8 lg:px-16 py-5 flex items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/midnight-studio-logo.png"
            alt="Midnight Studio"
            className="h-11 lg:h-[52px]"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center ml-16 space-x-9">
          <Link
            to="/about-us"
            className={`text-[13px] font-semibold hover:text-gray-300 transition-colors tracking-wide uppercase ${
              location.pathname === '/about-us' ? 'text-[#a855f7]' : 'text-white'
            }`}
          >
            ABOUT US
          </Link>
          <Link
            to="/webcam-modelling#webcam_modelling_benefits"
            onClick={(e) => {
              if (location.pathname === '/webcam-modelling') {
                e.preventDefault();
                const element = document.getElementById('webcam_modelling_benefits');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className={`text-[13px] font-semibold hover:text-gray-300 transition-colors tracking-wide uppercase ${
              location.hash === '#webcam_modelling_benefits' ? 'text-[#a855f7]' : 'text-white'
            }`}
          >
            BENEFITS
          </Link>
          <Link
            to="/webcam-modelling"
            onClick={(e) => {
              if (location.pathname === '/webcam-modelling') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`text-[13px] font-semibold hover:text-gray-300 transition-colors tracking-wide uppercase ${
              location.pathname === '/webcam-modelling' && location.hash !== '#webcam_modelling_benefits' ? 'text-[#a855f7]' : 'text-white'
            }`}
          >
            WEBCAM MODELLING
          </Link>
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                const element = document.getElementById('faq');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                setTimeout(() => {
                  const element = document.getElementById('faq');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }
            }}
            className="text-white text-[13px] font-semibold hover:text-gray-300 transition-colors tracking-wide uppercase"
          >
            FAQ
          </Link>
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }
            }}
            className="text-white text-[13px] font-semibold hover:text-gray-300 transition-colors tracking-wide uppercase"
          >
            APPLY NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white ml-auto">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
