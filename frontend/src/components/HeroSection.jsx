import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20 lg:pt-24">
        <div className="px-8 lg:px-16">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] mb-6 opacity-0 animate-fadeInUp">
              Webcam Model Studio and Training Center in Johannesburg
            </h1>

            {/* Yellow Underline */}
            <div
              className="w-24 lg:w-28 h-1 bg-[#a855f7] mb-7 opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            ></div>

            {/* Description */}
            <p
              className="text-white text-sm sm:text-base lg:text-base leading-relaxed mb-9 max-w-sm lg:max-w-xl pr-4 lg:pr-8 opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              A new way to earn a living. Our Webcam Model Studio empowers
              webcam models by offering a safe and comfortable environment to
              gain financial freedom. Learn about the job and how to become a
              successful webcam model.
            </p>

            {/* CTA Button */}
            <button
              className="bg-[#a855f7] hover:bg-[#8b5cf6] text-white font-semibold text-sm lg:text-base px-8 lg:px-10 py-3 lg:py-4 transition-colors duration-300 rounded-sm opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.7s" }}
            >
              About us
            </button>
          </div>
        </div>
      </div>

      {/* Midnight Studio Image Overlay (right side) */}
      <div
        className="absolute right-12 lg:right-20 xl:right-32 top-1/2 -translate-y-1/2 z-20 hidden lg:block opacity-0 animate-slideInRight"
        style={{ animationDelay: "0.9s" }}
      >
        <img
          src="/midnight-studio-logo.png"
          alt="Midnight Studio"
          className="w-48 xl:w-56 2xl:w-64 select-none"
        />
      </div>
    </section>
  );
};

export default HeroSection;
