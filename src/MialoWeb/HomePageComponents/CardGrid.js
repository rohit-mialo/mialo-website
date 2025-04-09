import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Fade } from "@mui/material";
import React from "react";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

import RaisedBlogCard from "examples/Cards/BlogCards/RaisedBlogCard";

import img1 from "assets/images/mialo/Shopper_Anaytics2.png";
import img2 from "assets/images/mialo/Generative_AI2.png";
import img3 from "assets/images/Smart_Parking.png";
import img4 from "assets/images/mialo/Smart_Security2.png";
import img5 from "assets/images/mialo/Access_Control2.png";
import img6 from "assets/images/mialo/Document_Processing2.png";
import { Link } from "react-router-dom";

const cardData = [
  {
    image: img1,
    title: "Shopper Analytics",
    description:
      "Gain AI-powered retail insights with customer behavior tracking, footfall analysis, and demographic analytics to optimize marketing and sales strategies.",
    route: "/solutions#shopper-analytics",
  },
  {
    image: img3,
    title: "Smart Parking",
    description: (
      <>
        Optimize urban mobility and vehicle management with AI-powered smart parking solutions that eliminate congestion and enhance efficiency.
      </>
    ),
    route: "/solutions#smart-parking",
  },
  {
    image: img2,
    title: "Generative & Conversational AI",
    description:
      "Improve customer interactions and business automation with AI-powered chatbots, NLP-driven assistants, and real-time voice recognition.",
    route: "/solutions#generative-ai",
  },
  {
    image: img4,
    title: "Smart Security",
    description:
      "Ensure AI-driven security monitoring with computer vision-based object detection, intrusion detection, and facial recognition AI for real-time surveillance solutions.",
    route: "/solutions#smart-security",
  },
  {
    image: img5,
    title: "Access Control",
    description:
      "Strengthen building security and perimeter access management with AI-powered facial recognition, number plate recognition (LPR), and automated access control.",
    route: "/solutions#access-control",
  },
  {
    image: img6,
    title: "AI-Powered Document Processing",
    description:
      "Automate data extraction, text analytics, and intelligent document processing to streamline financial, healthcare, and enterprise workflows. ",
    route: "/solutions#document-processing",
  },
];

function CardGrid() {
  const [visibleCards, setVisibleCards] = useState(3);

  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return (
    <div style={{ backgroundColor: "black", paddingTop: "50px", paddingBottom: "50px" }}>
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <MKBox pt={6} pb={3} px={3}>
          <h2
            style={{ textAlign: "center", color: "white", marginBottom: "100px" }}
            className="content-header"
          >
            Drive Value from Every Insight with
            <br />
            Mialo.AI&apos;s Dynamic Solutions
          </h2>
          <Grid container spacing={3}>
            {cardData.slice(0, visibleCards).map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Fade in timeout={500}>
                  <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ flex: 1, marginBottom: "20px" }}>
                      <RaisedBlogCard
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        action={{
                          type: "internal",
                          route: card.route,
                          color: "info",
                          label: "Learn more",
                          component: Link,
                        }}
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      />
                    </div>
                  </div>
                </Fade>
              </Grid>
            ))}
          </Grid>
          {visibleCards < cardData.length && (
            <MKBox mt={3} display="flex" justifyContent="center">
              <MKButton variant="contained" color="info" onClick={loadMoreCards}>
                Load More
              </MKButton>
            </MKBox>
          )}
        </MKBox>
      </div>
    </div>
  );
}

export default CardGrid;
