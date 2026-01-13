import React, { useEffect, useRef, useState } from "react";

const WhatItTakes = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems([0, 1, 2]);
        }
      },
      { threshold: 0.1 }
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

  const items = [
    {
      number: "1",
      title: "Confidence",
      description: "Being comfortable in your skin and having confidence in your abilities to entertain and engage with an audience is crucial"
    },
    {
      number: "2",
      title: "Consistency",
      description: "Maintain a regular schedule for your broadcasts to build and retain an audience. Consistency helps in establishing a loyal fan base."
    },
    {
      number: "3",
      title: "Professionalism",
      description: "Treat your webcam modelling as a business. Be professional in your dealings, maintain boundaries, and adhere to the rules and regulations of the platform you're using."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-black min-h-screen py-16 lg:py-20 px-8 lg:px-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            DO YOU HAVE WHAT IT TAKES?
          </h2>
          <div className="w-32 h-1 bg-[#a855f7] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {items.map((item, index) => (
            <div
              key={index}
              className={`text-center ${
                visibleItems.includes(index) ? 'animate-slideInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#a855f7] flex items-center justify-center">
                  <span className="text-white text-3xl lg:text-4xl font-bold">{item.number}</span>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white text-sm lg:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatItTakes;
