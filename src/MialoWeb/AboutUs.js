import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`); // Navigate to /usecases with the section ID
  };

  const testimonialsRef = useRef(null);
  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      const targetPosition =
        testimonialsRef.current.getBoundingClientRect().top + window.scrollY + 250; // Adjust 100px based on header height
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        {isMobile ? (
          <DefaultNavbar
            routes={routes}
            action={{
              type: "external",
              route: "#",
              label: "TALK TO US",
              color: "info",
              onclick: scrollToTestimonials,
            }}
            sticky
          />
        ) : (
          <CustomNavbar onNavigate={scrollToSection} onButtonClick={scrollToTestimonials} />
        )}
        <AboutUsBanner />
        <Slider />
        <AboutUsContent />
        <AboutUsVision />
        <AboutUsLeaderShip />
        <div style={{ backgroundColor: "white" }}>
          <Testimonials />
        </div>
        <div ref={testimonialsRef}>
          <FormContext />
        </div>
        <FooterThress />
      </div>
    </>
  );
}

export default AboutUs;
