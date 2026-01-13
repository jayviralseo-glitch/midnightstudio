import React, { useEffect, useRef, useState } from "react";

const Mission = () => {
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
    <section ref={sectionRef} className="bg-black py-16 lg:py-20 px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative SVG - Top */}
      <div className="absolute top-0 left-0 w-32 lg:w-48 opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 718 1028">
          <path d="M100 0 Q 200 150 100 300 T 100 600 Q 200 750 100 900" stroke="#a855f7" strokeWidth="3" fill="none" />
          <path d="M200 50 Q 300 200 200 350 T 200 650 Q 300 800 200 950" stroke="#a855f7" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Decorative SVG - Bottom */}
      <div className="absolute bottom-0 right-0 w-32 lg:w-48 opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 718 1028">
          <path d="M600 100 Q 500 250 600 400 T 600 700 Q 500 850 600 1000" stroke="#a855f7" strokeWidth="3" fill="none" />
          <path d="M500 150 Q 400 300 500 450 T 500 750 Q 400 900 500 1050" stroke="#a855f7" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
            OUR MISSION
          </h2>

          {/* Golden/Orange Text */}
          <div className="mb-4 lg:mb-6">
            <p className="text-[#a855f7] text-sm md:text-base lg:text-lg leading-relaxed italic">
              At EBNYstudios we've established a safe space where creativity, individuality, and security flourish. Our foremost commitment is to provide an environment where webcam models feel supported, respected, and in control of their journey.
            </p>
          </div>

          {/* Blue Text Paragraphs */}
          <div className="space-y-4 lg:space-y-6 text-white">
            <p className="text-xs md:text-sm lg:text-base leading-relaxed">
              We prioritise the well-being of our models by free training, integrating the latest techniques in online entertainment and ensuring a secure job. Our cutting-edge studio and our dedicated team work tirelessly to maintain a safe and empowering space for every model associated with us.
            </p>

            <p className="text-xs md:text-sm lg:text-base leading-relaxed">
              At Midnight Studio we believe that success should be rewarding. That's why we're dedicated to providing avenues for our models to earn a stable and lucrative income. Through free training, professional guidance, marketing support, and our extensive network, we aim to secure not only job opportunities but also showcase about the bright future of the industry, we aim to empower individuals, respecting their boundaries and choices.
            </p>

            <p className="text-xs md:text-sm lg:text-base leading-relaxed">
              We invite you to be a part of our family, where your ambitions and wellbeing are at the heart of everything we do.
            </p>

            <p className="text-xs md:text-sm lg:text-base leading-relaxed font-semibold">
              Welcome to <span className="text-[#a855f7]">Midnight Studio</span>, where your comfort is Prioritized!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
