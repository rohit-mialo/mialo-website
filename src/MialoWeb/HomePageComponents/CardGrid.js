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
      "Unlock actionable insights into customer behavior, demographics, and buying journeys to optimize retail strategies.",
    route: "/solutions#shopper-analytics",
  },
  {
    image: img3,
    title: "Smart Parking",
    description: (
      <>
        Optimize vehicle management for a seamless and efficient parking experience, eliminating
        hassles and enhancing overall convenience.
      </>
    ),
    route: "/solutions#smart-parking",
  },
  {
    image: img2,
    title: "Generative & Conversational AI",
    description:
      "Enhance interactions by comprehending and processing language nuances, boosting efficiency in real-time communication.",
    route: "/solutions#generative-ai",
  },
  {
    image: img4,
    title: "Smart Security",
    description:
      "Ensure complete security across your premises by monitoring objects and people in real-time and making intelligent, informed decisions using Artificial Intelligence.",
    route: "/solutions#smart-security",
  },
  {
    image: img5,
    title: "Access Control",
    description:
      "Simplify access management for humans and vehicles leveraging Facial Recognition & Number Plate Reading technology, respectively to prevent unauthorized access.",
    route: "/solutions#access-control",
  },
  {
    image: img6,
    title: "AI-Powered Document Processing",
    description:
      "Extract, analyze, and process structured and unstructured data from various types of documents through automation.",
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
