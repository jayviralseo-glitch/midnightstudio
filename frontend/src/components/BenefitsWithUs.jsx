import React, { useEffect, useRef, useState } from "react";

const BenefitsWithUs = () => {
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

  const benefits = [
    {
      icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_111/https://ebny.co.za/wp-content/uploads/2024/02/easy-to-start.png",
      title: "Easy to start:",
      description: "Starting off on your own can be overwhelming, setting up these services for personal use can be a bit of a hassle. Moreover, managing all the technology equipment, such as computers, advanced cameras and lightning, may present its own set of difficulties. Additionally, ensuring a private and interruption-free workspace at home can be a concern, impacting overall productivity. Joining a studio separates your job from your life."
    },
    {
      icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_111/https://ebny.co.za/wp-content/uploads/2024/02/support.png",
      title: "Tech and Admin Support:",
      description: "We always have expert staff that you can count on technical support for explanations of how to use the technology provided and how to work on the website you are working on. Giving you extra peace of mind, so you can focus solely on your performance. You will always have the adequate space and relevant training for you to become a professional model, with a team that will support you and help you improve your virtual performance."
    },
    {
      icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_111/https://ebny.co.za/wp-content/uploads/2024/02/support.png",
      title: "Collaboration:",
      description: "Working in the studio gives you the opportunity to interact with other industry professionals, ensuring that you are not isolated. You will have access to advice, ideas and support from your peers and colleagues. This is also not an easy industry to be in, being in the studio will give you a sense of co mpanionship. You are never alone."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-black py-16 lg:py-20 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            BENEFITS WITH US
          </h2>
          <div className="w-32 h-1 bg-[#a855f7] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                visibleItems.includes(index) ? 'animate-slideInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start mb-6">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  className="w-20 h-20 lg:w-28 lg:h-28"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-white text-sm lg:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsWithUs;
