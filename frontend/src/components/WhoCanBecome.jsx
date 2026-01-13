import React, { useEffect, useRef, useState } from "react";

const WhoCanBecome = () => {
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
    <section ref={sectionRef} className="bg-black py-16 lg:py-20 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              WHO CAN BECOME A WEBCAM MODEL?
            </h2>
            <div className="w-32 h-1 bg-[#a855f7] mb-8"></div>
            
            <p className="text-white text-base md:text-lg leading-relaxed mb-8">
              Becoming a webcam model requires being of legal age (18 or older in most places) and having the confidence and comfort to perform in front of a camera. People from various backgrounds, body types, genders, and orientations can become webcam models. It's more about the ability to engage and entertain an audience online. Many cam sites welcome diversity and cater to different interests and preferences.
            </p>

            <ul className="space-y-4 text-white text-base md:text-lg">
              <li className="flex items-start">
                <span className="text-[#a855f7] mr-3">•</span>
                <span>18 years old and ID Document</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#a855f7] mr-3">•</span>
                <span>Having the confidence and comfort to perform in front of a camera</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#a855f7] mr-3">•</span>
                <span>Ability to engage and entertain an audience online</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#a855f7] mr-3">•</span>
                <span>Beauty and Bubbly</span>
              </li>
            </ul>
          </div>

          {/* Right Images Grid */}
          <div className={`${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              {/* Large image on the left spanning 2 rows */}
              <div className="row-span-2">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://ebny.co.za/wp-content/uploads/2024/02/w1-1.png"
                  alt="Model 1"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Top right image */}
              <div>
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://ebny.co.za/wp-content/uploads/2024/02/w2-1.png"
                  alt="Model 2"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom right image */}
              <div>
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://ebny.co.za/wp-content/uploads/2024/02/w3-2.png"
                  alt="Model 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanBecome;
