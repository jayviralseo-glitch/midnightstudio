import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const WhyJoinUs = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Easy to Start Column */}
          <div className={`${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">
              EASY TO START:
            </h3>
            <div className="w-12 h-0.5 bg-[#a855f7] mb-4 lg:mb-6"></div>
            <p className="text-white text-xs md:text-sm lg:text-base leading-relaxed">
              Starting off on your own can be overwhelming, setting up your camming space, personal use of a hassle. Moreover, having all the equipment, the equipment, such as computer, enhanced lighting, etc can be own set of difficulties, and are ensuring it, private and interruption-free. workspace at home can be challenging, impacting your overall productivity. Joining a studio can separates you job from your life.
            </p>
          </div>

          {/* Tech and Admin Support Column */}
          <div className={`${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">
              TECH AND ADMIN SUPPORT:
            </h3>
            <div className="w-12 h-0.5 bg-[#a855f7] mb-4 lg:mb-6"></div>
            <p className="text-white text-xs md:text-sm lg:text-base leading-relaxed">
              We always have expert staff that you can count on to technical help for explanations about of how to use the technology provided and how to work via the website you are working on. Giving you extra peace of mind, so you can focus safely on your performance. You will always have the adequate space and relevant training for you to become a professional model, with a team that will support you and help you improve your virtual performance.
            </p>
          </div>

          {/* Collaboration Column */}
          <div className={`${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">
              COLLABORATION:
            </h3>
            <div className="w-12 h-0.5 bg-[#a855f7] mb-4 lg:mb-6"></div>
            <p className="text-white text-xs md:text-sm lg:text-base leading-relaxed">
              Working in the studio gives you the opportunity to interact with other studio models and industry professionals, ensuring that you are not isolated. You will have access to advice, ideas and support from your peers and colleagues. This is also the way an industry to be in, being in at the studio will give you a sense of co mpionship. You are never alone.
            </p>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className={`flex justify-center mt-10 lg:mt-12 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
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
            className="bg-[#a855f7] hover:bg-[#8b5cf6] text-white font-semibold text-xs md:text-sm lg:text-base px-8 md:px-10 py-2.5 md:py-3 transition-colors duration-300 uppercase tracking-wider inline-block"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
