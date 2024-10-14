import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage1 from "assets/images/examples/color1.jpg";
import bgImage2 from "assets/images/examples/color3.jpg";

const solutionsData = [
  {
    title: "Shopper Analytics",
    description:
      "Unlock actionable insights into customer behavior, demographics, and buying journeys to optimize retail strategies.",
    image: bgImage1,
    items: [
      "Shopper Demographics",
      "Shopper Behavioral Analysis",
      "Footfall Intelligence",
      "Shopper Journey Analysis",
      "Service Quality & Experience",
      "Automatic Visual Inspection & Compliance",
      "Store Security",
      "Queue Analysis & Management",
    ],
  },
  {
    title: "Smart Parking",
    description:
      "Streamline vehicle management for a smoother, hassle-free more efficient parking management experience.",
    image: bgImage2,
    items: [
      "Entrance & Exit Logs",
      "Parking Management",
      "Vehicle Dwell Time",
      "Vehicle Access Control",
      "Anomaly Detection",
    ],
  },
  {
    title: "Smart Security",
    description:
      "Ensure complete security across your premises by monitoring objects and people in real-time and making intelligent, informed decisions using Artificial Intelligence.",
    image: bgImage1,
    items: [
      "Human Identification",
      "People Counting",
      "Crowd Monitoring",
      "Theft & Fraud Detection",
      "Visitor Management",
      "Time & Attendance Tracking",
      "Threat Detection & Response",
      "Intrusion Detection",
      "Access Control",
      "Anomaly Detection",
      "Speed Monitoring",
      "Dwell Time Monitoring",
      "Ergonomic Risk Analysis",
    ],
  },
  {
    title: "Access Control",
    description:
      "Simplify access management for humans and vehicles leveraging Facial Recognition & Number Plate Reading technology, respectively to prevent unauthorized access.",
    image: bgImage2,
    items: [
      "Authorized Employee Access",
      "Time & Attendance Tracking",
      "Visitor Management",
      "Facial Recognition",
    ],
  },
  {
    title: "AI-Powered Document Processing",
    description:
      "Extract, analyze, and process structured and unstructured data from various types of documents through automation.",
    image: bgImage1,
    items: [
      "Document Pre-processing",
      "Invoice Processing & Management",
      "Document Classification",
      "Automated Data Extraction & Parsing",
      "Document Review & Analysis",
      "Fraud Detection",
      "Financial Statement Analysis",
    ],
  },
  {
    title: "Generative & Conversational AI",
    description:
      "Enhance interactions by comprehending and processing language nuances, boosting efficiency in real-time communication.",
    image: bgImage2,
    items: ["Wake-Word Recognition", "Speech-to-Text", "Summary Generation", "Smart Chatbot"],
  },
];

function SolutionPageContent() {
  const [solutions] = useState(solutionsData);
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={10}
          lg={5}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h3" mt={3}>
            How To Handle Them
          </MKTypography>
          <MKTypography variant="body2" color="text">
            We&apos;re constantly trying to express ourselves and actualize our dreams. Don&apos;t
            stop.
          </MKTypography>
        </Grid>

        {solutions.map((solution, index) => (
          <div key={index}>
            <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
              {/* Condition to alternate image and text position */}
              {index % 2 === 0 ? (
                <>
                  <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
                    <MKBox p={{ xs: 0, lg: 6 }}>
                      <MKBox
                        component="img"
                        src={solution.image}
                        width="100%"
                        borderRadius="md"
                        shadow="md"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
                    <MKTypography variant="h3" color="black">
                      {solution.title}
                    </MKTypography>
                    <MKTypography variant="body2" color="black" opacity={0.8}>
                      {solution.description}
                    </MKTypography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      {solution.items.map((item, idx) => (
                        <Grid item xs={6} key={idx}>
                          <MKBox display="flex" alignItems="center">
                            <CheckCircleIcon color="info" sx={{ mr: 1 }} />
                            <MKTypography variant="body2" color="black">
                              {item}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} md={5} sx={{ ml: "auto", mr: { xs: 0, md: 6 } }}>
                    <MKTypography variant="h3" color="black">
                      {solution.title}
                    </MKTypography>
                    <MKTypography variant="body2" color="black" opacity={0.8}>
                      {solution.description}
                    </MKTypography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      {solution.items.map((item, idx) => (
                        <Grid item xs={6} key={idx}>
                          <MKBox display="flex" alignItems="center">
                            <CheckCircleIcon color="info" sx={{ mr: 1 }} />
                            <MKTypography variant="body2" color="black">
                              {item}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ mr: "auto" }}>
                    <MKBox p={{ xs: 0, lg: 6 }}>
                      <MKBox
                        component="img"
                        src={solution.image}
                        width="100%"
                        borderRadius="md"
                        shadow="md"
                      />
                    </MKBox>
                  </Grid>
                </>
              )}
            </Grid>

            {index < solutions.length - 1 && <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />}
          </div>
        ))}
      </Container>
    </MKBox>
  );
}

export default SolutionPageContent;
