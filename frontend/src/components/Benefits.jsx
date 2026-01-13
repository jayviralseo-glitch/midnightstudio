import React, { useEffect, useRef, useState } from "react";

const Benefits = () => {
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
    <section ref={sectionRef} className="">
      <div className="px-0">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Image with Golden Border */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-full">
              {/* Golden Border Frame */}
              <div className="absolute inset-0 border-[20px] lg:border-[30px] border-[#a855f7] z-10"></div>
              
              {/* Image */}
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_901,h_643/https://ebny.co.za/wp-content/uploads/2024/02/image-8.png"
                alt="Webcam Model"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`bg-black px-8 lg:px-12 xl:px-16 py-12 lg:py-16 flex flex-col justify-center transition-opacity relative ${
            isVisible ? 'animate-slideInRight' : 'opacity-0'
          }`}>
            {/* Decorative grid pattern - top right */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a855f7" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#grid)" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3">
              WHY WEBCAM MODELLING?
            </h2>

            {/* Yellow Underline */}
            <div className="w-20 h-1 bg-[#a855f7] mb-8"></div>

            {/* Dollar Icon */}
            <div className="flex justify-center mb-6">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://ebny.co.za/wp-content/uploads/2024/02/us-dollar-gold-1.png"
                alt="Dollar Icon"
                className="w-20 h-20 lg:w-24 lg:h-24"
              />
            </div>

            {/* Sub Heading */}
            <h3 className="text-lg lg:text-xl font-bold text-white text-center mb-6 leading-snug">
              FINANCIAL INDEPENDENCE - CONSISTENTLY INCREASING YOUR EARNING POTENTIAL!
            </h3>

            {/* Description */}
            <p className="text-white text-sm lg:text-base text-center leading-relaxed mb-8">
              The Money is good, our models earn on average between R15,000 - R30,000 a
              month depending on their performance, our Topmodels earn more than R50,000
              per month.
            </p>

            {/* Pagination and Navigation */}
            <div className="flex justify-center items-center gap-8">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                <button className="w-3 h-3 rounded-full bg-[#a855f7]"></button>
                <button className="w-3 h-3 rounded-full bg-[#a855f7]"></button>
                <button className="w-3 h-3 rounded-full bg-[#a855f7]"></button>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border-2 border-[#a855f7] text-[#a855f7] flex items-center justify-center hover:bg-[#a855f7] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-[#a855f7] text-[#a855f7] flex items-center justify-center hover:bg-[#a855f7] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
