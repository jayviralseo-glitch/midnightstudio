import React, { useEffect, useRef, useState } from "react";

const AboutUs = () => {
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
    <section ref={sectionRef} className="bg-black py-16 lg:py-20">
      <div className="w-full">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-full">
          {/* Left Column - Image with accents 
             - h-[400px] on mobile (customizable)
             - lg:h-auto + lg:min-h-full: Ensures it stretches to match the Right Column's height exactly.
          */}
          <div className={`relative flex h-[400px] lg:h-auto lg:min-h-full transition-opacity ${
            isVisible ? 'opacity-0 animate-slideInLeft' : 'opacity-0'
          }`}>
            {/* Image Wrapper 
                - relative flex-1: Takes up all width except the side bar
            */}
            <div className="relative flex-1">
              {/* Image 
                  - absolute inset-0: This creates the "background" behavior. 
                  - It fills the wrapper completely without forcing a specific height.
              */}
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_900/https://ebny.co.za/wp-content/uploads/2024/02/Why-webcam-1-1-1.webp"
                alt="EBNY Studios Team"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Yellow accent bar - bottom 
                  - z-10 ensures it sits on top of the image
              */}
              <div className="absolute bottom-0 left-0 w-full h-8 bg-[#a855f7] z-10"></div>
            </div>

            {/* Yellow accent bar - right side (outside image) 
                - This remains a flex item, so it sits to the right
                - Because the parent is now stretched to match the text column, h-[70%] calculates correctly.
            */}
            <div className="w-8 h-[70%] bg-[#a855f7] self-end flex-shrink-0"></div>
          </div>

          {/* Right Column - Content */}
          <div className={`bg-black px-8 lg:px-12 xl:px-16 py-12 lg:py-16 flex flex-col justify-center transition-opacity relative ${
            isVisible ? 'opacity-0 animate-slideInRight' : 'opacity-0'
          }`}>
            {/* Decorative Image - Top Right Corner */}
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_557,h_372/https://ebny.co.za/wp-content/uploads/2024/02/Asset-1.png"
              alt="Decorative Element"
              className="absolute -top-12 right-0 w-56 lg:w-64 xl:w-80 opacity-60 pointer-events-none"
            />
            
            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              ABOUT US
            </h2>

            {/* Yellow Underline */}
            <div className="w-24 h-1 bg-[#a855f7] mb-8"></div>

            {/* Paragraphs */}
            <p className="text-white text-base lg:text-lg leading-relaxed mb-6">
              The webcam modelling industry is growing, and this is an
              opportunity to take back control of your life.
            </p>

            <p className="text-white text-base lg:text-lg leading-relaxed mb-6">
              We empower webcam models by offering them a safe and comfortable
              environment to gain financial freedom.
            </p>

            <p className="text-white text-base lg:text-lg leading-relaxed mb-6">
              and support our models to reach their full potential. Have a look
              at our team portrait of expert studio managers and rooms. We offer
              our model peace of mind, while we take care of business.
              Ultimately, we are here to open doors to talented, beautiful and
              independent women that are looking for a new way to earn a living.
            </p>

            {/* Italic text */}
            <p className="text-white text-base lg:text-lg leading-relaxed mb-8 italic">
              Have a look at our team portrait of expert studio managers and
              rooms.
            </p>

            {/* CTA Button */}
            <div>
              <button className="bg-[#a855f7] hover:bg-[#8b5cf6] text-white font-semibold text-sm lg:text-base px-10 py-4 transition-colors duration-300">
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
