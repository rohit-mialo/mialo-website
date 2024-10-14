import React from "react";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "./Navbar/Navbar";
import SolutionPageBanner from "./SolutionPageComponets/SolutionPageBanner";
import SolutionPageContent from "./SolutionPageComponets/SolutionPageContent";
import FooterOne from "./HomePageComponents/FooterThress";
import Slider from "./HomePageComponents/logoSlider";

function Solutions() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`); // Navigate to /usecases with the section ID
  };
  return (
    <div>
      <CustomNavbar onNavigate={scrollToSection} />
      <SolutionPageBanner />
      <Slider />
      <SolutionPageContent />
      <FooterOne />
    </div>
  );
}

export default Solutions;
