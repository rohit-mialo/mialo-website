// @mui material components
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Fade } from "@mui/material";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import RaisedBlogCard from "examples/Cards/BlogCards/RaisedBlogCard";
//images
import img1 from "assets/images/mialo/Shopper_Anaytics.png";
import img2 from "assets/images/mialo/Generative_AI.png";
import img3 from "assets/images/mialo/Smart_Parking.png";
import img4 from "assets/images/mialo/Smart_Security.png";
import img5 from "assets/images/mialo/Access_Control.png";
import img6 from "assets/images/mialo/Document_Processing.png";

// Sample card data
const cardData = [
  {
    image: img1,
    title: "Shopper Analytics",
    description:
      "Unlock actionable insights into customer behavior, demographics, and buying journeys to optimize retail strategies.",
    route: "/sections/page-sections/general-cards",
  },
  {
    image: img2,
    title: "Smart Parking",
    description: (
      <>
        Optimize vehicle management for a seamless and efficient parking experience, eliminating
        hassles and enhancing overall convenience.
      </>
    ),

    route: "/sections/page-sections/general-cards",
  },
  {
    image: img3,
    title: "Generative & Conversational AI",
    description:
      "Enhance interactions by comprehending and processing language nuances, boosting efficiency in real-time communication.",
    route: "/sections/page-sections/general-cards",
  },
  {
    image: img4,
    title: "Smart Security",
    description:
      "Ensure complete security across your premises by monitoring objects and people in real-time and making intelligent, informed decisions using Artificial Intelligence.",
    route: "/sections/page-sections/general-cards",
  },
  {
    image: img5,
    title: "Access Control",
    description:
      "Simplify access management for humans and vehicles leveraging Facial Recognition & Number Plate Reading technology, respectively to prevent unauthorized access.",
    route: "/sections/page-sections/general-cards",
  },
  {
    image: img6,
    title: "AI-Powered Document Processing",
    description:
      "Extract, analyze, and process structured and unstructured data from various types of documents through automation.",
    route: "/sections/page-sections/general-cards",
  },
  // Add more cards as needed
];

function CardGrid() {
  const [visibleCards, setVisibleCards] = useState(3); // Start with 3 cards

  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 3); // Load 3 more cards
  };

  return (
    <div style={{ backgroundColor: "black", paddingTop: "50px", paddingBottom: "50px" }}>
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <MKBox pt={6} pb={3} px={3}>
          <h2 style={{ textAlign: "center", color: "white", marginBottom: "100px" }}>
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
                        }}
                        sx={{
                          height: "100%", // Ensure the card takes full height of the container
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
