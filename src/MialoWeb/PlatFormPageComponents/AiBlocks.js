// @mui material components
import Grid from "@mui/material/Grid";
import React from "react";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import anpr from "assets/images/mialo/anprRotate.png";
import fr from "assets/images/mialo/frRotate.png";
import peopleFlow from "assets/images/mialo/peopleflowRotate.png";
import wake from "assets/images/mialo/wakeRotate.png";
import document from "assets/images/mialo/documentRotate.png";
import llm from "assets/images/mialo/LLM.png";
// import bgFront from "assets/images/mialo/frRotate.png";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import MKTypography from "components/MKTypography";

// Example card data (this can come from an API or props)
const cardData = [
  {
    frontImage: anpr,
    icon: "touch_app",
    title: "Automatic Number  Plate Recognition",
    description:
      "All the MUI components that you need in development have been re-designed with the new look.",
    backImage: anpr,
    backTitle: "Discover More",
    backDescription:
      "Automatic Number Plate Recognition technology used to identify and track vehicles by reading license plates.",
    action: { type: "internal", route: "/", label: "start with header" },
  },
  {
    frontImage: fr,
    icon: "touch_app",
    title: "Facial  Recognition",
    description: "Group CEO, Basket Option Pvt. Ltd.",
    backImage: fr,
    backTitle: "Explore More",
    backDescription:
      "AI-based technology that detects and identifies faces to enhance security and improve user interactions.",
    action: { type: "internal", route: "/", label: "learn more" },
  },
  {
    frontImage: peopleFlow,
    icon: "touch_app",
    title: "People  Flow",
    description:
      "All the MUI components that you need in development have been re-designed with the new look.",
    backImage: peopleFlow,
    backTitle: "Explore More",
    backDescription:
      "Analytics technology that tracks and analyzes the movement and patterns of people within a specific area.",
    action: { type: "internal", route: "/", label: "learn more" },
  },
  {
    frontImage: wake,
    icon: "touch_app",
    title: "Wake Word Engine",
    description:
      "All the MUI components that you need in development have been re-designed with the new look.",
    backImage: wake,
    backTitle: "Explore More",
    backDescription:
      "A system that listens for a specific keyword or phrase to activate voice-controlled devices or applications.",
    action: { type: "internal", route: "/", label: "learn more" },
  },
  {
    frontImage: document,
    icon: "touch_app",
    title: "Document   Parsing",
    description:
      "All the MUI components that you need in development have been re-designed with the new look.",
    backImage: document,
    backTitle: "Explore More",
    backDescription:
      "Gain valuable insights and real-time outcomes by transforming your voice data into actionable information.",
    action: { type: "internal", route: "/", label: "learn more" },
  },
  {
    frontImage: llm,
    icon: "touch_app",
    title: "Large  Language Model",
    description:
      "All the MUI components that you need in development have been re-designed with the new look.",
    backImage: llm,
    backTitle: "Explore More",
    backDescription:
      "Drive applications such as chatbots, text generation, and more to significantly enhance natural language processing capabilities.",
    action: { type: "internal", route: "/", label: "learn more" },
  },
  // Add as many objects as needed here
];

function AiBlocks() {
  return (
    <>
      <div style={{ paddingTop: "50px" }}>
        <div style={{ maxWidth: "1440px", margin: "auto" }}>
          <MKTypography className="content-header" variant="h2" align="center" color="black" fontWeight="bold" gutterBottom>
            Build. Scale. Innovate.
            <br />
            Faster with AI
          </MKTypography>
          <MKTypography className="content-body" variant="body2" color="black" align="center">
            No more complicated development processes! Harness the power of our No-Code Platform
            built on easy to deploy AI Blocks.
          </MKTypography>
          <MKBox pt={6} pb={3} px={3}>
            <Grid container spacing={3} justifyContent="center">
              {cardData.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={card.frontImage}
                      icon={card.icon}
                      title={
                        <>
                          {card.title.split(" ").slice(0, 2).join(" ")} <br />
                          {card.title.split(" ").slice(2).join(" ")}
                        </>
                      }
                      // description={card.description}
                    />
                    <RotatingCardBack
                      // image={card.backImage}
                      // title={card.backTitle}
                      description={card.backDescription}
                    />
                  </RotatingCard>
                </Grid>
              ))}
            </Grid>
          </MKBox>
        </div>
      </div>
    </>
  );
}

export default AiBlocks;
