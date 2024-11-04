import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./HomePageComponents/logoSlider";
import NumberSection from "./HomePageComponents/NumberSection";
import AboutPlatform from "./HomePageComponents/AboutPlatfrom";
import CardList from "./HomePageComponents/CardList";
import CardGrid from "./HomePageComponents/CardGrid";
import Testimonials from "./HomePageComponents/Testimonials";
import FormContext from "./HomePageComponents/FormContext";
import FooterThress from "./HomePageComponents/FooterThress";
import Industries from "./PlatFormPageComponents/Industries";
import CustomNavbar from "./Navbar/Navbar";

function Home() {
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
        <div style={{ flex: 1, height: "100vh", backgroundColor: "white" }}>
          <HeaderTwo style={{ flex: 1 }} onButtonClick={scrollToTestimonials} />
        </div>

        <Slider />
        <NumberSection />
        <AboutPlatform />
        <CardList />
        <CardGrid />
        <Industries />
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

export default Home;
