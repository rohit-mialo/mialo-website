import React, { useState, useEffect, useRef } from "react";
import FooterOne from "./HomePageComponents/FooterThress";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { useNavigate, useLocation } from "react-router-dom";
import UseCasesPageBanner from "./UseCasesBasedIndustry/UseCasesIndustryBanner";
import Slider from "./HomePageComponents/logoSlider";
import UseCasesPageComponents from "./UseCasesBasedIndustry/UseCasesIndustryPage";
import CustomNavbar from "./Navbar/Navbar";

function Industries() {
  const targetDivRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  const searchParams = new URLSearchParams(location.search);
  const industry = searchParams.get("industry");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById("test");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`); // Navigate to /usecases with the section ID
  };

  return (
    <>
      {isMobile ? (
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "#",
            label: "TALK TO US",
            color: "info",
          }}
          sticky
        />
      ) : (
        <CustomNavbar onNavigate={scrollToSection} />
      )}
      <UseCasesPageBanner />
      <Slider />
      <div ref={targetDivRef}></div>
      <UseCasesPageComponents industry={industry} />
      <FooterOne />
    </>
  );
}

export default Industries;
