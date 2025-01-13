import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "./Navbar/Navbar";
import SolutionPageBanner from "./SolutionPageComponets/SolutionPageBanner";
import SolutionPageContent from "./SolutionPageComponets/SolutionPageContent";
import FooterOne from "./HomePageComponents/FooterForService";
import Slider from "./HomePageComponents/logoSlider";
import FormContext from "./HomePageComponents/FormContext";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

function Solutions() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed
  const [clickCount, setClickCount] = useState(0); // Track the number of clicks
  const testimonialsRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`); // Navigate to /usecases with the section ID
  };

  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      const targetPosition =
        testimonialsRef.current.getBoundingClientRect().top + window.scrollY + (clickCount === 0 ? 250 : 100);
      
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setClickCount(prevCount => prevCount + 1); // Increment the click count after each click
    }
  };

  return (
    <div>
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
      <SolutionPageBanner onButtonClick={scrollToTestimonials} />
      <Slider />
      <SolutionPageContent />
      <div ref={testimonialsRef}>
        <FormContext />
      </div>
      <FooterOne />
    </div>
  );
}

export default Solutions;
