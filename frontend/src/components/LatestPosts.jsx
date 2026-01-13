import React, { useEffect, useRef, useState } from "react";

const LatestPosts = () => {
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
    <section ref={sectionRef} className="bg-black py-16 lg:py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            LATEST POST
          </h2>
          <div className="w-16 h-1 bg-[#a855f7] mx-auto"></div>
        </div>

        {/* Blog Posts Grid - Empty for now */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Placeholder for blog posts */}
        </div>

        {/* Load More Button */}
        <div className={`flex justify-center ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold text-sm lg:text-base px-8 py-3 transition-colors duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
