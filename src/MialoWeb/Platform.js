import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeaderOne from "./PlatFormPageComponents/Banner";
import Slider from "./HomePageComponents/logoSlider";
import SectionTwo from "./PlatFormPageComponents/SectionTwo";
import CardRaised from "./PlatFormPageComponents/CardRaised";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Faq from "./PlatFormPageComponents/Faq";
import Industries from "./PlatFormPageComponents/Industries";
import FooterThress from "./HomePageComponents/FooterThress";
import Gallery from "./PlatFormPageComponents/Gallery";
import ContactForPlatform from "./PlatFormPageComponents/ContactForPlatform";
import NumberSection from "./HomePageComponents/NumberSection";
import CardList from "./HomePageComponents/CardList";
import CardGrid from "./HomePageComponents/CardGrid";
import Testimonials from "./HomePageComponents/Testimonials";
import AiBlocks from "./PlatFormPageComponents/AiBlocks";
import CustomNavbarForPlatformPage from "./Navbar/NavbarForPlatformPage";

function Platform() {
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
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`); // Navigate to /usecases with the section ID
  };

  const testimonialsRef = useRef(null);
  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
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
        <CustomNavbarForPlatformPage
          onNavigate={scrollToSection}
          onButtonClick={scrollToTestimonials}
        />
      )}
      <HeaderOne onButtonClick={scrollToTestimonials} />
      <Slider />
      <NumberSection />
      <SectionTwo />
      <Faq />
      <CardList />
      <CardRaised />
      <AiBlocks />
      <CardGrid />
      <div style={{ backgroundColor: "white" }}>
        <Industries />
      </div>
      <Gallery />
      <div style={{ backgroundColor: "white" }}>
        <Testimonials />
      </div>
      <div ref={testimonialsRef}>
        <ContactForPlatform />
      </div>
      <FooterThress />
    </div>
  );
}

export default Platform;
