// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import { useNavigate } from "react-router-dom";
// import routes from "routes";

import FormContext from "./HomePageComponents/FormContext";
import FooterThress from "./HomePageComponents/FooterThress";
import CustomNavbar from "./Navbar/Navbar";
import AboutUsBanner from "./AboutUsPageComponents/AboutUsBanner";
import Slider from "./HomePageComponents/logoSlider";
import AboutUsContent from "./AboutUsPageComponents/AboutUsContent";
import AboutUsVision from "./AboutUsPageComponents/AboutUsVision";
import AboutUsLeaderShip from "./AboutUsPageComponents/AboutUsLeaderShip";
import Testimonials from "./HomePageComponents/Testimonials";

function AboutUs() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`); // Navigate to /usecases with the section ID
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <CustomNavbar onNavigate={scrollToSection} />
        <AboutUsBanner />
        <Slider />
        <AboutUsContent />
        <AboutUsVision />
        <AboutUsLeaderShip />
        <div style={{ backgroundColor: "white" }}>
          <Testimonials />
        </div>
        <FormContext />
        <FooterThress />
      </div>
    </>
  );
}

export default AboutUs;
