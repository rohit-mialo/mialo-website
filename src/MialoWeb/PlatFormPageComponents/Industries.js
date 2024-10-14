// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import InfoBackgroundCard from "examples/Cards/BackgroundCards/InfoBackgroundCard";
import { useState } from "react";

//image
import img1 from "assets/images/mialo/BFSI.png";
import img2 from "assets/images/mialo/Agriculture.png";
import img3 from "assets/images/mialo/Security.png";
import img4 from "assets/images/mialo/Hospitality.png";
import img5 from "assets/images/mialo/Logistics.png";
import img6 from "assets/images/mialo/Infrastructure.png";
import img7 from "assets/images/mialo/Manufacturing.png";
import img8 from "assets/images/mialo/Healthcare.png";
import img9 from "assets/images/mialo/Retail.png";
import MKButton from "components/MKButton";

// Sample data for dynamic content
const industryData = [
  {
    image: img9,
    icon: "import_contacts",
    title: "Retail",
    label: "257 spots",
  },
  {
    image: img1,
    icon: "festival",
    title: "BFSI",
    label: "117 spots",
  },
  {
    image: img6,
    icon: "festival",
    title: "Infrastructure",
    label: "117 spots",
  },
  {
    image: img5,
    icon: "volunteer_activism",
    title: "Logistics",
    label: "363 spots",
  },
  {
    image: img3,
    icon: "theater_comedy",
    title: "Security",
    label: "215 spots",
  },
  {
    image: img8,
    icon: "star",
    title: "Healthcare",
    label: "120 spots",
  },
  {
    image: img4,
    icon: "sports_soccer",
    title: "Hospitality",
    label: "85 spots",
  },
  {
    image: img2,
    icon: "sports_soccer",
    title: "Agriculture",
    label: "85 spots",
  },
  {
    image: img7,
    icon: "sports_soccer",
    title: "Manufacturing",
    label: "85 spots",
  },
  // Add more items as needed
];

function Industries() {
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 cards

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more cards
  };

  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
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
                {/* <MKBox
                width="4rem"
                height="4rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                variant="gradient"
                bgColor="info"
                color="white"
                shadow="md"
                borderRadius="lg"
                mx="auto"
              >
                <Icon fontSize="medium">person</Icon>
              </MKBox> */}
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
                  <InfoBackgroundCard image={industry.image} title={industry.title} />
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
