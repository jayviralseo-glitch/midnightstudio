import React, { useEffect, useRef, useState } from "react";

const BenefitsGrid = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems([0, 1, 2, 3, 4, 5]);
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
      icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_108/https://ebny.co.za/wp-content/uploads/2024/02/amicon1.png",
      title: "You can be your own boss",
      description: "As a webcam model you are always in control, and nobody can tell you what to do. This means that you never, ever have to do anything that you are not comfortable with. Your room, your rules!"
    },
    {
      icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_108/https://ebny.co.za/wp-content/uploads/2024/02/amicon2.png",
      title: "Flexible working hours",
      description: "You are free from mandatory schedules with the work of a webcam model. Choose your own hours when you feel comfortable working. Arrange the number of holidays according to your preferences. Our studio operates 24 hours a day, 5 days a week."
    },
    {
      icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_108/https://ebny.co.za/wp-content/uploads/2024/02/amicon3.png",
      title: "Working with fantastic people",
      description: (
        <>
          You'll get the opportunity to connect with a wide range of people. And not just your clients, as you'll also get to know our <span className="text-[#a855f7]">expert admins</span> and our other webcam models.
        </>
      )
    },
    {
      icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_108/https://ebny.co.za/wp-content/uploads/2024/02/amicon4.png",
      title: "It's safe",
      description: "Unlike many other forms of adult work, webcam modelling means never having to meet your clients face to face. Camming with your clients on your terms, from the comfort of your own, is a really safe way to work. Just make sure that you never reveal any personal details to the clients about yourself, and keep your personal life separate."
    },
    {
      icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_108/https://ebny.co.za/wp-content/uploads/2024/02/Group-171.png",
      title: "Privacy",
      description: (
        <>
          Most cam sites allow you to block countries, areas or users to access your content. Don't you wish you could just block that hateful cow at work? Well when you're working as a webcam model, you can do exactly that! See what <span className="text-[#a855f7]">privacy features</span> our studio offers and what we do to keep you safe.
        </>
      )
    },
    {
      icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_108/https://ebny.co.za/wp-content/uploads/2024/02/amicon6.png",
      title: "Build up a following",
      description: "Once you've been camming for a while you'll find that you'll start getting regular clients, particularly if you specialise in a particular niche. You can then increase your following by setting up your alter ego and actively posting on social media. Some of our webcam models build up such a following that they end up becoming influencers."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-black py-16 lg:py-20 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`text-center ${
                visibleItems.includes(index) ? 'animate-slideInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  className="w-24 h-24 lg:w-28 lg:h-28"
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

export default BenefitsGrid;
