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
import WhatsAppButton from "../components/WhatsAppButton";

const WebcamModellingPage = () => {
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

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#webcam_modelling_benefits') {
      const benefitsSection = document.getElementById('webcam_modelling_benefits');
      if (benefitsSection) {
        setTimeout(() => {
          benefitsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } else {
      // If no hash, ensure we're at the top
      window.scrollTo(0, 0);
    }
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
                WEBCAM MODELLING
              </h1>
              <div className="w-32 h-1 bg-[#a855f7] mb-8"></div>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed mb-4">
                Are you looking for a new career or just some extra income?
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                If you're based in South Africa and are open-minded, confident, and keen to make good money from the comfort of your own home or in our professional studio, read on.
              </p>
            </div>

            {/* Right Logo */}
            <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              <img 
                src="/midnight-studio-logo.png" 
                alt="Midnight Studio" 
                className="w-64 md:w-80 lg:w-96 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatIsWebcamModeling />

      {/* Benefits Section with ID for anchor navigation */}
      <div id="webcam_modelling_benefits">
        <JobAttractive />
        <BenefitsGrid />
      </div>

      <MoneyIsGood />

      <WhoCanBecome />

      <VideoSection />

      <WhatItTakes />

      <BenefitsWithUs />

      <ApplyCTA />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WebcamModellingPage;
