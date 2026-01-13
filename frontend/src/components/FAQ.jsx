import React, { useState, useEffect, useRef } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
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

  const faqData = [
    {
      question: "WHO CAN BECOME A WEBCAM MODEL?",
      answer: "Any adult girl (18+) with a good knowledge of English can become a webcam model at our studio. Knowledge of other foreign languages is a big plus. We don't have any restrictions by appearance either – we cooperate with models of the most various types and builds. An important condition – love for yourself and no fear of the camera and new acquaintances. Here you can find the 10 most important things you might consider to become a successful webcam model. Everything else will be taught by our team of professionals."
    },
    {
      question: "WHAT ARE THE CONDITIONS IN THE STUDIO?",
      answer: "Our studio provides a professional environment with private rooms, high-quality equipment, and a supportive team to help you succeed."
    },
    {
      question: "WHAT'S MY SCHEDULE GOING TO BE LIKE?",
      answer: "You have complete flexibility to set your own schedule. Work as much or as little as you want, whenever suits you best."
    },
    {
      question: "WHAT ARE THE BONUSES FOR MODELS?",
      answer: "We offer various bonuses including performance incentives, referral bonuses, and special rewards for top performers."
    },
    {
      question: "WILL IT BE POSSIBLE TO COMBINE WORK AND STUDY/HOBBY?",
      answer: "Absolutely! Many of our models successfully balance webcam modeling with their studies, other jobs, or hobbies thanks to flexible scheduling."
    },
    {
      question: "DO YOU HELP WITH RELOCATION?",
      answer: "Yes, we can assist with relocation arrangements for models who want to work from our studio in Cape Town."
    },
    {
      question: "IS IT LEGAL?",
      answer: "Yes, webcam modeling is completely legal in South Africa. We operate within all legal requirements and regulations."
    },
    {
      question: "HOW MUCH CAN I EARN?",
      answer: "Our models earn on average between R15,000 - R30,000 a month depending on their performance. Top models earn more than R50,000 per month."
    },
    {
      question: "WHAT ELSE IS PART OF MY WORK?",
      answer: "Beyond live streaming, you'll create content for fanclubs, engage with fans on social media, and build your personal brand with our support."
    }
  ];

  const leftColumn = faqData.slice(0, 5);
  const rightColumn = faqData.slice(5);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" ref={sectionRef} className={`bg-black py-16 lg:py-20 px-8 lg:px-16 ${
      isVisible ? 'animate-slideInUp' : 'opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            FAQ
          </h2>
          <div className="w-16 h-1 bg-[#a855f7] mx-auto"></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start gap-4 text-left group"
                >
                  <span className={`text-2xl flex-shrink-0 font-bold transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-[#a855f7]'
                  }`}>
                    +
                  </span>
                  <span className="text-white font-semibold text-base lg:text-lg group-hover:text-gray-300 transition-colors">
                    {faq.question}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <div className="ml-10 text-gray-300 text-base lg:text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq, index) => {
              const actualIndex = index + 5;
              return (
                <div key={actualIndex} className="border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full flex items-start gap-4 text-left group"
                  >
                    <span className={`text-2xl flex-shrink-0 font-bold transition-colors duration-300 ${
                      openIndex === actualIndex ? 'text-white' : 'text-[#a855f7]'
                    }`}>
                      +
                    </span>
                    <span className="text-white font-semibold text-base lg:text-lg group-hover:text-gray-300 transition-colors">
                      {faq.question}
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === actualIndex ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <div className="ml-10 text-gray-300 text-base lg:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
