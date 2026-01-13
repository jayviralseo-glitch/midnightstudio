import React, { useEffect, useRef, useState } from "react";

const Partners = () => {
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

  const partners = [
    {
      name: "Chaturbate",
      logo: "https://via.placeholder.com/200x80/6c757d/ffffff?text=Chaturbate"
    },
    {
      name: "LiveJasmin",
      logo: "https://via.placeholder.com/200x80/000000/ffffff?text=LiveJasmin"
    },
    {
      name: "Streamate",
      logo: "https://via.placeholder.com/200x80/6c757d/ffffff?text=Streamate"
    },
    {
      name: "Stripchat",
      logo: "https://via.placeholder.com/200x80/000000/ffffff?text=Stripchat"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-black py-16 lg:py-20 px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative wavy lines - top right */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M 0 100 Q 50 50 100 100 T 200 100"
            stroke="#a855f7"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 0 120 Q 50 70 100 120 T 200 120"
            stroke="#a855f7"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            OUR PARTNERS
          </h2>
          <div className="w-16 h-1 bg-[#a855f7] mx-auto"></div>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[150px] lg:max-w-[200px] h-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className={`flex justify-center items-center gap-2 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <button className="w-3 h-3 rounded-full bg-[#a855f7]"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400"></button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
