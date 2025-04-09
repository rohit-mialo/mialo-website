// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom";
// import Icon from "@mui/material/Icon";
import React,{useEffect} from "react";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import InfoBackgroundCard from "examples/Cards/BackgroundCards/InfoBackgroundCard";
import { useState } from "react";

//image
// import img1 from "assets/images/mialo/BFSI.png";
import img2 from "assets/images/mialo/Agriculture.png";
import img3 from "assets/images/mialo/Security.png";
import img4 from "assets/images/mialo/Hospitality.png";
import img5 from "assets/images/mialo/Logistics.png";
import img6 from "assets/images/mialo/Infrastructure.png";
import img7 from "assets/images/mialo/Manufacturing.png";
import img8 from "assets/images/mialo/Healthcare.png";
// import img9 from "assets/images/mialo/Retail.png";
import mg11 from "assets/images/mialo/bfsi.png"
import img10 from "assets/images/mialo/video-analytics-software-how-retailers-should-use-cameras.jpg"
import MKButton from "components/MKButton";

/// Updated industryData with links
const industryData = [
  {
    image: img10,
    icon: "import_contacts",
    title: "Retail",
    label: "257 spots",
    link: "#/IndustriesUseCase?industry=Retail", // Link to the Retail page
  },
  {
    image: mg11,
    icon: "festival",
    title: "BFSI",
    label: "117 spots",
    link: "#/IndustriesUseCase?industry=BFSI", // Link to the BFSI page
  },
  {
    image: img6,
    icon: "festival",
    title: "Infrastructure",
    label: "117 spots",
    link: "#/IndustriesUseCase?industry=Infrastructure",
  },
  {
    image: img5,
    icon: "volunteer_activism",
    title: "Logistics",
    label: "363 spots",
    link: "#/IndustriesUseCase?industry=Logistics",
  },
  {
    image: img3,
    icon: "theater_comedy",
    title: "Security",
    label: "215 spots",
    link: "#/IndustriesUseCase?industry=Security",
  },
  {
    image: img8,
    icon: "star",
    title: "Healthcare",
    label: "120 spots",
    link: "#/IndustriesUseCase?industry=Healthcare",
  },
  {
    image: img4,
    icon: "sports_soccer",
    title: "Hospitality",
    label: "85 spots",
    link: "#/IndustriesUseCase?industry=Hospitality",
  },
  {
    image: img2,
    icon: "sports_soccer",
    title: "Agriculture",
    label: "85 spots",
    link: "#/IndustriesUseCase?industry=Agriculture",
  },
  {
    image: img7,
    icon: "sports_soccer",
    title: "Manufacturing",
    label: "85 spots",
    link: "#/IndustriesUseCase?industry=Manufacturing",
  },
  // Add more items as needed
];

function Industries() {
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 cards

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more cards
  };


  // const navbarHeight = 90; // Adjust this value to match your navbar height

  // const scrollToSection = (id) => {
  //   // Check if 'usecases' is part of the id and extract only the part after it
  //   const sectionId = id.includes("usecases#") ? id.split("usecases#")[1] : id;

  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  //     window.scrollTo({
  //       top: sectionTop - navbarHeight, // Adjust for the navbar height
  //       behavior: "smooth",
  //     });
  //   }
  // };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <div id="Contact-Form" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <MKBox component="section" py={2}>
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={6}
              flexDirection="column"
              justifyContent="center"
              mx="auto"
              mb={6}
            >
              <MKBox py={2} px={3} textAlign="center">
                <MKTypography variant="h2" mt={2} mb={1} color="black">
                  Enabling Decision Intelligence
                  <br /> Across Industries
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid container spacing={3} mb={6}>
              {industryData.slice(0, visibleCount).map((industry, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  {" "}
                  {/* 3 items per row */}
                  <a href={industry.link} style={{ textDecoration: "none" }}>
                    <InfoBackgroundCard image={industry.image} title={industry.title} />
                  </a>
                </Grid>
              ))}
            </Grid>
            {visibleCount < industryData.length && (
              <MKBox mt={3} display="flex" justifyContent="center">
                <MKButton variant="contained" color="info" onClick={handleLoadMore}>
                  Load More
                </MKButton>
              </MKBox>
            )}
          </Container>
        </MKBox>
      </div>
    </div>
  );
}

export default Industries;
