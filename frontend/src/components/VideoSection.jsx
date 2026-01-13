import React, { useEffect, useRef, useState } from "react";

const VideoSection = () => {
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
      <div className={`max-w-7xl mx-auto ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
        <div 
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center rounded-lg overflow-hidden group cursor-pointer"
          style={{
            backgroundImage: "url(https://ebny.co.za/wp-content/uploads/2024/02/video_bg_img.png)"
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#a855f7] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-t-[20px] md:border-t-[24px] border-t-transparent border-l-[32px] md:border-l-[40px] border-l-[#a855f7] border-b-[20px] md:border-b-[24px] border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
