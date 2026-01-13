import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ApplyCTA = () => {
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
    <section 
      ref={sectionRef}
      className={`relative py-20 lg:py-32 bg-cover bg-center flex items-center justify-center ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
      style={{
        backgroundImage: "url(https://ebny.co.za/wp-content/uploads/2024/02/Group-125-1-1-1.png)"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Link 
          to="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
            setTimeout(() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 200);
          }}
          className="inline-block px-12 py-4 bg-[#a855f7] text-white text-lg lg:text-xl font-bold hover:bg-[#8b5cf6] transition-colors duration-300"
        >
          Apply here
        </Link>
      </div>
    </section>
  );
};

export default ApplyCTA;
