import React, { useEffect, useRef, useState } from "react";

const WebcamModelling = () => {
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
    <section ref={sectionRef} className="">
      <div className="px-0">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Content with Black Background */}
          <div className="bg-black px-12 lg:px-16 xl:px-20 py-16 lg:py-20 flex flex-col justify-center relative">
            {/* Decorative curve element - left side */}
            <div className="absolute left-0 top-0 bottom-0 w-24 overflow-hidden">
              <svg viewBox="0 0 100 800" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M 0 0 Q 80 400 0 800"
                  stroke="#a855f7"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>

            {/* Content wrapper with animation */}
            <div className={`${
              isVisible ? 'animate-slideInLeft' : 'opacity-0'
            }`}>
              {/* Heading */}
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                ABOUT WEBCAM MODELLING
              </h2>

              {/* Yellow Underline */}
              <div className="w-16 h-0.5 bg-[#a855f7] mb-5"></div>

              {/* Paragraphs */}
              <p className="text-white text-sm lg:text-base leading-relaxed mb-4">
                Webcam Modelling is the safest form of adult work and for Webcam
                Models an opportunity to make easy money in a growing industry.
                Confident and beautiful models stream live and entertain users from all
                over the world online.
              </p>

              <p className="text-white text-sm lg:text-base leading-relaxed mb-4">
                A webcam model often performs erotic acts online in exchange for money.
                They also create content for their Fanclubs and engage with their fans on
                social media.
              </p>

              <p className="text-white text-sm lg:text-base leading-relaxed mb-6">
                Once viewed as a small niche in the world of adult entertainment, camming
                became the engine of the adult industry{" "}
                <a
                  href="#"
                  className="text-[#a855f7] hover:underline"
                >
                  [Wikipedia]
                </a>
                .
              </p>


            {/* Two Column Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* More About The Job */}
              <div>
                <h3 className="text-[#a855f7] text-lg lg:text-xl font-semibold mb-3">
                  More About The Job
                </h3>
                <div className="flex items-center mb-3">
                  <img
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_264,h_162/https://ebny.co.za/wp-content/uploads/2024/02/Mask-group-3.png"
                    alt="More About The Job"
                    className="w-32 h-auto"
                  />
                </div>
                <p className="text-white text-sm">
                  You can learn more about the job and how to get started{" "}
                  <a href="#" className="text-[#a855f7] hover:underline">
                    here
                  </a>
                  .
                </p>
              </div>

              {/* Best Practice */}
              <div>
                <h3 className="text-[#a855f7] text-lg lg:text-xl font-semibold mb-3">
                  Best Practice
                </h3>
                <div className="flex items-center mb-3">
                  <img
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_254,h_163/https://ebny.co.za/wp-content/uploads/2024/02/Group-81-1.png"
                    alt="Best Practice"
                    className="w-32 h-auto"
                  />
                </div>
                <p className="text-white text-sm">
                  We also have compiled the latest industry insight{" "}
                  <a href="#" className="text-[#a855f7] hover:underline">
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            {/* Video Element */}
            <video
              className="w-full h-full object-cover min-h-[500px] lg:min-h-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://ebny.co.za/wp-content/uploads/2024/03/About-Webcam-Modelling-1080-medium.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebcamModelling;
