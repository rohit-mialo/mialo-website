import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderOne from "./PlatFormPageComponents/Banner";
import Slider from "./HomePageComponents/logoSlider";
import SectionTwo from "./PlatFormPageComponents/SectionTwo";
import CardRaised from "./PlatFormPageComponents/CardRaised";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import routes from "routes";
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
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`); // Navigate to /usecases with the section ID
  };
  return (
    <div>
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-pro-react",
          label: "buy now",
          color: "info",
        }}
        sticky
      /> */}
      <CustomNavbarForPlatformPage onNavigate={scrollToSection} />
      <HeaderOne />
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
      <ContactForPlatform />
      <FooterThress />
    </div>
  );
}

export default Platform;
