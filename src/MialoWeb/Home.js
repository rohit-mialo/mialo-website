// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import React from "react";
import { useNavigate } from "react-router-dom";
// import routes from "routes";
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
  const scrollToSection = (id) => {
    console.log(`Navigating to: ${id}`);
    navigate(`/usecases#${id}`); // Navigate to /usecases with the section ID
  };

  return (
    <>
      <div style={{ width: "100%" }}>
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
        <CustomNavbar onNavigate={scrollToSection} />
        <div style={{ flex: 1, height: "100vh", backgroundColor: "white" }}>
          <HeaderTwo style={{ flex: 1 }} />
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
        <FormContext />
        <FooterThress />
      </div>
    </>
  );
}

export default Home;
