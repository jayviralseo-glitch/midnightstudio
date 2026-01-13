import React, { useEffect, useRef, useState } from "react";

const WhatIsWebcamModeling = () => {
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
    <section ref={sectionRef} className="bg-black min-h-screen flex items-center">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-screen">
          {/* Left Content */}
          <div className={`flex flex-col justify-center px-8 lg:px-20 py-16 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              WHAT IS WEBCAM MODELING?
            </h2>
            <div className="w-32 h-1 bg-[#a855f7] mb-8"></div>
            
            <p className="text-[#a855f7] text-base md:text-lg lg:text-xl italic leading-relaxed mb-6">
              A webcam model is a erotic video performer who streams on the Internet with a live webcam broadcast.
            </p>
            
            <p className="text-white text-sm md:text-base leading-relaxed">
              Webcam models often performs erotic acts online in exchange for money. They often sell videos of their performances on Fanclubs and engage with their fans on social media. Once viewed as a small niche in the world of adult entertainment, camming became the engine of the adult industry [<span className="text-[#a855f7]">Wikipedia</span>].
            </p>
          </div>

          {/* Right Image */}
          <div className="h-full">
            <img 
              src="https://ebny.co.za/wp-content/uploads/2024/02/pic-box-5-1.png" 
              alt="Webcam Model" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsWebcamModeling;
