import React, { useState } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import img1 from "assets/images/mialo/Derive_Insights_from_Images.png";
import img2 from "assets/images/mialo/Object_Detection_&_Tracking.png";
import img3 from "assets/images/mialo/Image_Classification.png";
import img4 from "assets/images/mialo/Anomaly_Detection.png";
import img5 from "assets/images/mialo/Scene_understading.png";
import img6 from "assets/images/mialo/Facial_Recognition.png";

function CardRaised() {
  const cardData = [
    {
      image: img1,
      title: "Derive Insights from Images",
      description:
        "Extract actionable insights from images to make informed decisions with computer vision and AI-powered video analytics. ",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img2,
      title: "Object Detection & Tracking",
      description:
        "Detect and track objects in images or videos, enabling real-time AI surveillance, anomaly detection, and security analytics. ",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img3,
      title: "Image Classification",
      description:
        "Enhance facial recognition, automated identity verification, and AI-powered security analytics with deep learning. ",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img4,
      title: "Anomaly Detection",
      description:
        "Identify unusual patterns in visual data, allowing businesses to detect and mitigate potential issues before they escalate using AI-driven video surveillance. ",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img5,
      title: "Scene Understanding",
      description:
        "Interpret the content and context of scenes with AI-powered video analytics for smart cities, security, and automation. ",
      route: "/sections/page-sections/general-cards",
    },
    {
      image: img6,
      title: "Facial Detection & Recognition",
      description:
        "Enhance security, access control, and personalized customer experiences using AI-powered facial recognition technology. ",
      route: "/sections/page-sections/general-cards",
    },
    // Add more card data as needed
  ];

  const [visibleCards, setVisibleCards] = useState(3);

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 3);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <MKBox component="section" py={6}>
          <Container>
            {/* Section Header */}
            <Grid
              container
              item
              xs={12}
              lg={6}
              justifyContent="center"
              mx="auto"
              textAlign="center"
            >
              <MKTypography className="content-header" variant="h2" mb={2} color="black">
                Make Sense of Data by Leveraging
                <br />
                Multimodal AI
              </MKTypography>
            </Grid>

            {/* Cards Section */}
            <Grid container spacing={3} mt={8} alignItems="stretch">
              {cardData.slice(0, visibleCards).map((card, index) => (
                <Grid
                  item
                  xs={12}
                  md={8}
                  lg={4}
                  mb={2}
                  className="card-container"
                  key={index}
                  style={{ display: "flex" }}
                > 
                  <DefaultReviewCard
                    color="light"
                    image={card.image}
                    name={card.title}
                    review={card.description}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Load More Button */}
            {visibleCards < cardData.length && (
              <MKBox mt={3} display="flex" justifyContent="center">
                <MKButton color="info" onClick={handleLoadMore}>
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

export default CardRaised;
