import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import WhyJoinUs from "../components/WhyJoinUs";
import WhatsAppButton from "../components/WhatsAppButton";

const AboutUsPage = () => {
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
      
      {/* Hero Section with Overlapping Images */}
      <section ref={sectionRef} className="relative overflow-hidden">
        <div className="relative w-full h-screen flex items-center justify-center px-4">
          {/* Background Team Image */}
          <div className={`absolute inset-0 flex items-center justify-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <img 
              src="https://ebny.co.za/wp-content/uploads/2024/02/Group-159-2.png" 
              alt="EBNY Studios Team" 
              className="w-full max-w-7xl h-auto"
            />
          </div>
          
          {/* Overlapping Content Image - Centered */}
          <div className={`relative z-10 w-[90%] sm:w-[85%] lg:w-[80%] max-w-5xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://ebny.co.za/wp-content/uploads/2024/02/New-Project-14.png" 
              alt="About EBNY Studios" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <Mission />

      <WhyJoinUs />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUsPage;
