import React from "react";
import { FaTwitter, FaInstagram, FaTiktok, FaLink } from "react-icons/fa";

const Footer = () => {
  const studioLinks = [
    "About Us",
    "Benefit",
    "Webcam Modelling",
    "FAQ",
    "Contact us",
    "Apply"
  ];

  const usefulLinks = [
    "About Webcam Modelling",
    "Tips to succeed as Webcam Model",
    "Tips for Chaturbate",
    "Job Information",
    "Privacy and Safety",
    "Testimonials Webcam Models",
    "Privacy Policy"
  ];

  const moreLinks = [
    "Tips and Tricks from Our Models",
    "Best Cam Sites",
    "Equipment for Webcam Models",
    "How to choose a webcam Studio",
    "Get Hired as Webcam Model",
    "Tips on Reddit",
    "Useful Forum"
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="px-8 lg:px-16 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Studio Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">STUDIO LINKS</h3>
            <div className="w-12 h-0.5 bg-[#a855f7] mb-6"></div>
            <ul className="space-y-3">
              {studioLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-[#a855f7] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
            <div className="w-12 h-0.5 bg-[#a855f7] mb-6"></div>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-[#a855f7] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">MORE LINKS</h3>
            <div className="w-12 h-0.5 bg-[#a855f7] mb-6"></div>
            <ul className="space-y-3">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-[#a855f7] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo and Social */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-6">
              <img 
                src="/midnight-studio-logo.png" 
                alt="Midnight Studio" 
                className="w-48 h-auto"
              />
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-[#a855f7] hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-[#a855f7] hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#a855f7] hover:text-white transition-colors">
                <FaTiktok size={24} />
              </a>
              <a href="#" className="text-[#a855f7] hover:text-white transition-colors">
                <FaLink size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#a855f7] py-4">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <p className="text-center text-white text-sm">
            Copyright © 2024 Midnight Studio. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
