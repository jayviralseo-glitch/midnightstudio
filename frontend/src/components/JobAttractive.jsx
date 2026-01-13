import React, { useEffect, useRef, useState } from "react";

const JobAttractive = () => {
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
      <div className={`max-w-5xl mx-auto text-center ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          <span className="inline-block relative pb-2">
            WHAT
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-[#a855f7]"></span>
          </span>{" "}
          MAKES THIS JOB SO ATTRACTIVE?
        </h2>
        
        <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed mt-8">
          More and more people are signing up to become a webcam model, and it's not difficult to see why when you think about the benefits that working in the webcam industry offers. Here are just some of the benefits for you to think about.
        </p>
      </div>
    </section>
  );
};

export default JobAttractive;
