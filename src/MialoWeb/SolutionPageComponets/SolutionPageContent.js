import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
// import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import img1 from "assets/images/mialo/Shopper_Anaytics2.png";
import img2 from "assets/images/mialo/Generative_AI2.png";
import img3 from "assets/images/mialo/Smart_Parking.png";
import img4 from "assets/images/mialo/Smart_Security2.png";
import img5 from "assets/images/mialo/Access_Control2.png";
import img6 from "assets/images/mialo/Document_Processing2.png";
// import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const solutionsData = [
  {
    title: "Shopper Analytics",
    id: 'shopper-analytics',
    description:
      "Unlock actionable insights into customer behavior, demographics, and buying journeys to optimize retail strategies.",
    image: img1,
    items: [
      {
        label: "Shopper Demographics",
        route: "usecases#shopper_demographics",
      },
      {
        label: "Behavioral Analysis",
        route: "usecases#shopper_behavioral_analysis",
      },
      {
        label: "Footfall Intelligence",
        route: "usecases#footfall_intelligence",
      },
      {
        label: "Shopper Journey Analysis",
        route: "usecases#shopper_journey_analysis",
      },
      {
        label: "Customer Experience",
        route: "usecases#customer_experience",
      },
      {
        label: "Inspection & Compliance",
        route: "usecases#inspection_compliance",
      },
      {
        label: "Store Security",
        route: "usecases#store_security",
      },
      {
        label: "Queue Analysis",
        route: "usecases#queue_analysis",
      },
    ],
  },
  {
    title: "Smart Parking",
    id: 'smart-parking',
    description:
      "Streamline vehicle management for a smoother, hassle-free more efficient parking management experience.",
    image: img3,
    items: [
      {
        label: "Entrance & Exit Logs",
        route: "usecases#entrance_exit_logs",
      },
      {
        label: "Parking Management",
        route: "usecases#parking_management",
      },
      {
        label: "Vehicle Dwell Time",
        route: "usecases#vehicle_dwell_time",
      },
      {
        label: "Vehicle Access Control",
        route: "usecases#vehicle_access_control",
      },
      {
        label: "Anomaly Detection",
        route: "usecases#anomaly_detection_parking",
      },
    ],
  },
  {
    title: "Smart Security",
    id: 'smart-security',
    description:
      "Ensure complete security across your premises by monitoring objects and people in real-time and making intelligent, informed decisions using Artificial Intelligence.",
    image: img4,
    items: [
      {
        label: "Human Identification",
        route: "usecases#human_identification",
      },
      {
        label: "People Counting",
        route: "usecases#people_counting",
      },
      {
        label: "Crowd Monitoring",
        route: "usecases#crowd_monitoring",
      },
      {
        label: "Theft & Fraud Detection",
        route: "usecases#theft_fraud_detection",
      },
      {
        label: "Visitor Management",
        route: "usecases#visitor_management",
      },
      {
        label: "Time & Attendance",
        route: "usecases#time_attendance_security",
      },
      {
        label: "Threat Detection",
        route: "usecases#threat_detection",
      },
      {
        label: "Intrusion Detection",
        route: "usecases#intrusion_detection",
      },
      {
        label: "Access Control",
        route: "usecases#access_control_security",
      },
      {
        label: "Anomaly Detection",
        route: "usecases#anomaly_detection_security",
      },
      {
        label: "Speed Monitoring",
        route: "usecases#speed_monitoring",
      },
      {
        label: "Dwell Time Monitoring",
        route: "usecases#dwell_time_monitoring_security",
      },
      {
        label: "Ergonomic Risk Analysis",
        route: "usecases#ergonomic_risk_analysis",
      },
    ],
  },
  {
    title: "Access Control",
    id: 'access-control',
    description:
      "Simplify access management for humans and vehicles leveraging Facial Recognition & Number Plate Reading technology, respectively to prevent unauthorized access.",
    image: img5,
    items: [
      {
        label: "ANPR & FR Based Access Control",
        route: "usecases#anpr_fr_based_access_control",
      },
      {
        label: "Authorized Access",
        route: "usecases#authorized_employee_access",
      },
      {
        label: "Time & Attendance",
        route: "usecases#time_attendance_tracking",
      },
      {
        label: "Visitor Management",
        route: "usecases#visitor_management",
      },
      {
        label: "Facial Recognition",
        route: "usecases#facial_recognition",
      },
    ],
  },
  {
    title: "AI-Powered Document Processing",
    id: 'document-processing',
    description:
      "Extract, analyze, and process structured and unstructured data from various types of documents through automation.",
    image: img6,
    items: [
      {
        label: "Document Pre-processing",
        route: "usecases#document_pre_processing",
      },
      {
        label: "Invoice Processing",
        route: "usecases#invoice_processing",
      },
      {
        label: "Document Classification",
        route: "usecases#document_classification",
      },
      {
        label: "Data Extraction",
        route: "usecases#data_extraction",
      },
      {
        label: "Review & Analysis",
        route: "usecases#review_analysis",
      },
      {
        label: "Fraud Detection",
        route: "usecases#fraud_detection_document_processing",
      },
      {
        label: "Financial Statement Analysis",
        route: "usecases#financial_statement_analysis",
      },
    ],
  },
  {
    title: "Generative & Conversational AI",
    id: 'generative-ai',
    description:
      "Enhance interactions by comprehending and processing language nuances, boosting efficiency in real-time communication.",
    image: img2,
    items: [
      {
        label: "Wake-Word Recognition",
        route: "usecases#wake_word_recognition",
      },
      {
        label: "Speech-to-Text",
        route: "usecases#speech_to_text",
      },
      {
        label: "Summary Generation",
        route: "usecases#summary_generation",
      },
      {
        label: "Smart Chatbot",
        route: "usecases#smart_chatbot",
      },
    ],
  },
];

function SolutionPageContent() {
  const navigate = useNavigate();

  const navbarHeight = 90;

  const scrollToSection = (id) => {
    // Check if 'usecases' is part of the id and extract only the part after it
    const sectionId = id.includes("solutions#") ? id.split("solutions#")[1] : id;
 
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - navbarHeight, // Adjust for the navbar height
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash; // Get the hash from the URL
    if (hash) {

      const id = hash.substring(1); // Remove the '#' from the hash
      setTimeout(() => {
        scrollToSection(id); // Scroll to the section after a short delay
      }, 0); // Ensure it runs after the page has rendered
    }
  }, []); // Run this effect on component mount



  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  console.log(isMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <MKTypography className="content-header"
            variant="h3" mt={3} color="black">
            Customized AI Solutions for Every Industry
          </MKTypography>
        </Grid>

        {solutions.map((solution, index) => (
          <div key={index} id={solution.id}>
            <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
              {/* Condition to alternate image and text position */}
              {index % 2 === 0 ? (
                <>
                  <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
                    <MKBox>
                      <MKBox
                        component="img"
                        src={solution.image}
                        width="100%"
                        borderRadius="md"
                        shadow="md"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
                    <MKTypography className="content-sub-header" variant="h4" color="black">
                      {solution.title}
                    </MKTypography>
                    <MKTypography className="content-body" variant="body2" color="black" opacity={0.8}>
                      {solution.description}
                    </MKTypography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      {solution.items.map((item, idx) => (
                        <Grid item xs={6} key={idx}>
                          <MKBox display="flex" alignItems="center">
                            <CheckCircleIcon color="info" sx={{ mr: 1 }} />
                            {/* Make item a clickable link */}
                            <MKTypography
                              className="content-body"
                              variant="body2"
                              color="black"
                              onClick={() => {
                                const route = `/usecases#${item.route.replace("usecases#", "")}`;
                                navigate(route);
                              }}
                              sx={{ cursor: "pointer" }}
                            >
                              {item.label}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} md={6} sx={{ ml: "auto", mr: { xs: 0, md: 6 } }}>
                    <MKTypography className="content-sub-header" variant="h4" color="black">
                      {solution.title}
                    </MKTypography>
                    <MKTypography className="content-body" variant="body2" color="black" opacity={0.8}>
                      {solution.description}
                    </MKTypography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      {solution.items.map((item, idx) => (
                        <Grid item xs={6} key={idx}>
                          <MKBox display="flex" alignItems="center">
                            <CheckCircleIcon color="info" sx={{ mr: 1 }} />
                            <MKTypography
                            className="content-body"
                              variant="body2"
                              color="black"
                              onClick={() => {
                                const route = `/usecases#${item.route.replace("usecases#", "")}`;
                                navigate(route);
                              }}
                              sx={{ cursor: "pointer" }}
                            >
                              {item.label}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ mr: "auto" }}>
                    <MKBox>
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
