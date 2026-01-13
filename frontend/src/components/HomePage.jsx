import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import WebcamModelling from "./WebcamModelling";
import Benefits from "./Benefits";
import FAQ from "./FAQ";
import Partners from "./Partners";
import LatestPosts from "./LatestPosts";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WebcamModelling />
      <Benefits />
      <FAQ />
      <Partners />
      <LatestPosts />
      <ContactUs />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
