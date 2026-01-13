import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatIsWebcamModeling from "../components/WhatIsWebcamModeling";
import JobAttractive from "../components/JobAttractive";
import BenefitsGrid from "../components/BenefitsGrid";
import MoneyIsGood from "../components/MoneyIsGood";
import WhoCanBecome from "../components/WhoCanBecome";
import VideoSection from "../components/VideoSection";
import WhatItTakes from "../components/WhatItTakes";
import BenefitsWithUs from "../components/BenefitsWithUs";
import ApplyCTA from "../components/ApplyCTA";

const BenefitsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section 
        ref={sectionRef}
        className="relative min-h-screen bg-cover bg-center pt-24 lg:pt-32 px-8 lg:px-20"
        style={{
          backgroundImage: "url(https://ebny.co.za/wp-content/uploads/2024/02/New-Project-1-1.jpg)"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 whitespace-nowrap">
                Webcam Modelling Explained
              </h1>
              <div className="w-32 h-1 bg-black mb-8"></div>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                Webcam Models entertain customers online in adult video chat session, it is the safest form of adult work and for Webcam Models an opportunity to make easy money in a growing online industry. At EBNY Studios you will learn how to become a Webcam Model and how to make money online.
              </p>
            </div>

            {/* Right Logo */}
            <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              <img 
                src="/midnight-studio-logo.png" 
                alt="Midnight Studio" 
                className="w-40 md:w-56 lg:w-72 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatIsWebcamModeling />

      <JobAttractive />

      <BenefitsGrid />

      <MoneyIsGood />

      <WhoCanBecome />

      <VideoSection />

      <WhatItTakes />

      <BenefitsWithUs />

      <ApplyCTA />

      <Footer />
    </div>
  );
};

export default BenefitsPage;
