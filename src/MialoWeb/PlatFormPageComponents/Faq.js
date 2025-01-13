import React, { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Sections components
import FaqCollapse from "pages/Support/HelpCenter/components/FaqCollapse";
import bg1 from "assets/images/mialo/Agile.png";
import bg2 from "assets/images/mialo/low_code.jpg";
import bg3 from "assets/images/mialo/Multimodal AI.png";
import bg4 from "assets/images/mialo/Real-time_Edge_computing.jpg";
import bg5 from "assets/images/mialo/faster_and.png";
import bg6 from "assets/images/mialo/Responsible_AI.png";
import bg7 from "assets/images/mialo/privacy.png";
// Sample JSON data for FAQs
const faqData = [
  {
    title: "Agile & Extensible",
    content:
      "Unlock new opportunities for innovation and growth by leveraging platform’s flexibility and customization capabilities to meet specific business needs.",
    image: bg1,
  },
  {
    title: "Low-Code Platform",
    content:
      "Boost development and ease deployment with a low-code interface that enables rapid solution creation, reducing the need for complex coding.",
    image: bg2,
  },
  {
    title: "Multimodal AI",
    content:
      "Process multiple data inputs to produce more accurate, sophisticated outcomes and make informed, intelligent business decisions.",
    image: bg3,
  },
  {
    title: "Real-Time Edge Computing",
    content:
      "Enable instant decision-making with enhanced security by processing data locally, reducing delays and minimizing transmission risks.",
    image: bg4,
  },
  {
    title: "Faster & Secure",
    content:
      "Scale to ‘n’ number of records while ensuring top-notch security, bring down analysis time from weeks to hours, enabling quicker decision-making.",
    image: bg5,
  },
  {
    title: "Responsible AI",
    content:
      "Keeping transparency, privacy, responsibility, and fairness at its core, Mialo.AI upholds the highest ethical standards.",
    image: bg6,
  },
  {
    title: "Privacy-Preserving AI",
    content:
      "Effortlessly design tailored models using drag-and-drop AI blocks to solve a variety of use cases while ensuring that sensitive data is protected.",
    image: bg7,
  },
];

function Faq() {
  const [collapse, setCollapse] = useState(false);
  const [selectedImage, setSelectedImage] = useState(bg1); // Initialize with the static image

  const handleClick = (index, image) => {
    if (collapse === index + 1) {
      setCollapse(false);
      setSelectedImage(bg1); // Reset to static image
    } else {
      setCollapse(index + 1);
      setSelectedImage(image);
    }
  };

  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Container>
        <MKTypography className="content-header" variant="h2" align="center" color="black" fontWeight="bold" gutterBottom>
          Features that Make Mialo.AI Different
        </MKTypography>
        <MKBox mb={2}>
          <MKTypography className="content-body" variant="body2" align="center" color="text">
            Discover the key features that set Mialo.AI apart in the realm of Artificial
            Intelligence.
          </MKTypography>
        </MKBox>
        <Grid container justifyContent="center" spacing={2}>
          {/* Left Section: Dynamic Image */}
          <Grid item xs={12} md={6} my={6}>
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              paddingRight="50px"
            >
              <MKBox
                component="img"
                src={selectedImage} // Change to dynamic image
                alt="Dynamic Illustration"
                width="100%"
                height="400px"
                borderRadius="8px"
              />
            </MKBox>
          </Grid>

          {/* Right Section: Collapse Menu */}
          <Grid item xs={12} md={6} my={6}>
            {faqData.map((faq, index) => (
              <FaqCollapse
                key={index}
                title={faq.title}
                open={collapse === index + 1}
                onClick={() => handleClick(index, faq.image)} // Pass the image
              >
                {faq.content}
              </FaqCollapse>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
