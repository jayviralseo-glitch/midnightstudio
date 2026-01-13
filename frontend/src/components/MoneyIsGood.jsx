import React, { useEffect, useRef, useState } from "react";

const MoneyIsGood = () => {
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
          {/* Left Image */}
          <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="border-4 border-[#a855f7] overflow-hidden">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_520,h_360/https://ebny.co.za/wp-content/uploads/2024/02/money-1.png"
                alt="Money"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              THE MONEY IS GOOD
            </h2>
            <div className="w-16 h-1 bg-[#a855f7] mb-6"></div>
            
            <p className="text-white text-base md:text-lg leading-relaxed mb-4">
              Like with any job, the longer you work then the more you get paid. You will grow your fanbase and
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed">
              find regular users. A webcam model working on a full-time basis can expect to earn an average R 25.000 per month and even much more depending on their performance. Our best models earn more than R50.000 per month. If you want to know how to become a successful webcam model, take a look on our <span className="text-[#a855f7]">tips and tricks</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyIsGood;
