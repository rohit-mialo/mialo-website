import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage1 from "assets/images/mialo/Generative_AI.png";

const useCasesData = [
  {
    useCaseId: "shopper_demographics",
    title: "Know Your Shoppers",
    subTitle: "Shopper Demographics",
    description1:
      "Understanding who walks into your store is imperative for delivering exceptional, personalized customer experiences. With real-time insights into the age, gender, and other key demographics of your shoppers, you are enabled to anticipate their needs and preferences. ",
    image: bgImage1,
    description2:
      "Retailsense, an AI-powered platform by Mialo empowers you to craft targeted strategies, ensuring every shopper entering your store receives a uniquely tailored experience. Boost engagement and improve loyalty by leveraging detailed data into your customer demographics and empower your business to make informed decisions that perfectly resonate with your shoppers.",
  },
  {
    useCaseId: "shopper_behavioral_analysis",
    title: "Turn 360-Degree Shopper Profiles into Granular, Actionable Insights",
    subTitle: "Shopper Behavioral Analytics",
    description1:
      "Go beyond surface-level data and dig deeper to analyze your shoppers’ behavior with Retailsense by Mialo. Track how shoppers navigate through your store, identify products they engage with the most, and gain detailed insights into how their actions lead to purchases.",
    image: bgImage1,
    description2:
      "Uplift sales at your store by utilizing these insights to optimize the shopping environment for your customers to ensure it not just meets but exceeds their expectations.",
    items: [
      "Identify What Catches the Eyeballs",
      "Predict Buying Behavior",
      "Optimize Store Layout",
    ],
  },
  {
    useCaseId: "footfall_intelligence",
    title: "Optimize Your Space with Intelligent Footfall Analysis",
    subTitle: "Footfall Intelligence",
    description1:
      "Track and analyze the flow of shoppers in real-time with our AI-powered footfall tracking solution. Utilizing CCTV cameras, Retailsense monitors visitor traffic, behavior, peak hours, dwell time, and movement patterns through intuitive heat maps.",
    image: bgImage1,
    description2:
      "Gain actionable insights tailored to your business, helping you drive sales growth and improve operational efficiency.",
    items: [
      "Optimize store layout to enhance customer flow and product visibility",
      "Allocate staff efficiently based on peak traffic times",
      "Position products where they receive the most attention",
    ],
  },
  {
    useCaseId: "shopper_journey_analysis",
    title: "Leverage Heatmaps to Track Shoppers’ In-Store Journeys",
    subTitle: "Shopper Journey Pattern Tracking & Analysis",
    description1:
      "Gain an in-depth understanding of foot traffic and product interaction at your store by tracking and analyzing in-store movements of customers in real-time. Our AI-powered Retailsense platform uses heatmaps to visualize your store’s captivating areas.",
    image: bgImage1,
    description2:
      "Make data-driven decisions to enhance store layouts and uplift sales by improving the overall customer experience.",
    items: [
      "Discover hot spots and dead zones",
      "Strategically place products to maximize visibility and sales",
      "Ensure adequate staffing during peak hours",
    ],
  },
  {
    useCaseId: "service_quality_experience",
    title: "Scale Service Quality & Experience with Multimodal Data & AI",
    subTitle: "Service Quality & Experience",
    description1:
      "Deliver exceptional service that goes beyond just knowing your customers. Utilize Mialo.AI’s data analytics capabilities to gain an in-depth understanding of your customers’ needs, streamline store operations, and make every customer interaction personalized.",
    image: bgImage1,
    description2:
      "Our platform comes packed with advanced capabilities that empower businesses to provide a seamless shopping experience, fostering customer satisfaction and loyalty.",
    items: [
      "Maximize efficiency and customer satisfaction with optimized store layout",
      "Enhance service response time to meet customer needs",
      "Add a touch of personalization in every customer interactions",
    ],
  },
  {
    useCaseId: "automatic_visual_inspection",
    title: "Ensure Adherence to Safety and Operating Standards",
    subTitle: "Automatic Visual Inspection & Compliance ",
    description1:
      "With our cutting-edge, next-generation platform, maintain strict adherence to safety and operating rules. Our platform monitors every aspect of your business, including temperature controls, staff uniforms, store opening hours, and cleanliness.",
    image: bgImage1,
    items: [
      "Ensure Regulatory Compliance and SOPs are met",
      "Streamline processes to Improve Operational Efficiency",
      "Maintain Brand Standards with Real-Time Planogram & Inventory Audits",
    ],
  },
  {
    useCaseId: "queue_analysis_management",
    title: "Eliminate Waiting, Boost Efficiency",
    subTitle: "Queue Management",
    description1:
      "Say goodbye to long queues, dissatisfied customers, and poor customer service with our intelligent Retailsense platform. Designed for retail stores, supermarkets, malls, and more, it enables businesses to precisely track queue traffic and data.",
    image: bgImage1,
    description2:
      "Harness invaluable insights to optimize in-store operations, enhance the customer experience, boost sales, and drive unparalleled success.",
    items: ["Streamline Queue Flow", "Identify Peak Hours", "Reduce Queue Abandonment Rates"],
  },
  {
    useCaseId: "entrance_exit_logs",
    title: "Entry-Exit Monitoring Made Easy",
    subTitle: "Entrance & Exit Logs",
    description1:
      "Enhance system reliability and security with automated and intelligent entry-exit monitoring. Utilizing Automated Number Plate Recognition (ANPR) technology, our platform enables your CCTV cameras or sensors to quickly and accurately capture license plate information. Our all-inclusive e solution with RFID/UHF or QR-based Entry/Exit systems minimizes the need for manual intervention and keeps track of vehicles' entry and exit times.",
    image: bgImage1,
    items: [
      "Ensure only authorized vehicles enter your premises",
      "Keep track of all vehicle movements effortlessly",
      "Make vehicle access processes seamless and convenient",
    ],
  },
  {
    useCaseId: "parking_management",
    title: "Experience Next-Gen Parking Management with Our AI-Powered, Smart Parking Solution",
    subTitle: "Parking Management",
    description1:
      "Make parking hassle-free for your employees and visitors with our AI-backed, smart parking solution. Our intelligent parking management solution provides real-time insights into parking availability, ensures optimal space utilization, and automates pay-and-park processes.",
    image: bgImage1,
    items: [
      "AI-Powered Access Control System",
      "Designed for Corporate, Commercial, and Residential Settings",
      "Automates Vehicle Identification, Monitoring, and Authorization",
      "Seamlessly Integrates with Existing Systems like Boom Barriers, CCTVs, etc.",
    ],
  },
  {
    useCaseId: "vehicle_dwell_time",
    title: "Gain Precise Insights into Dwell Time",
    subTitle: "Dwell Time",
    description1:
      "Track and analyze the duration a person or product stays in one place using advanced AI. Leverage real-time monitoring to identify inefficiencies, reduce delays, and improve overall operational efficiency.",
    image: bgImage1,
    items: ["Enhance Scheduling", "Boost Productivity", "Make Informed Operational Decisions"],
  },
  {
    useCaseId: "vehicle_access_control",
    title: "Simplified Access Management with ANPR-Based Vehicle Access Control System",
    subTitle: "ANPR-Based Vehicle Access Control",
    description1:
      "Manage and regulate the movement of vehicles in and out of designated areas with our ANPR-based parking solution. This advanced Access Control Solution captures and stores real-time data, enabling seamless automation at entry gates.",
    image: bgImage1,
    items: [
      "Round-the-Clock Surveillance for Enhanced Security",
      "Unmatched Recognition of Number Plates with Accuracy",
      "Secure Evidence Storage for All Entries and Exits",
      "Efficient Visitor and Vehicle Management",
      "Powerful Analytics Dashboard to Visualize Comprehensive Data",
    ],
  },
  {
    useCaseId: "anomaly_detection",
    title: "Proactively Identify and Address Odd Activities",
    subTitle: "Anomaly Detection",
    description1:
      "Stay ahead of potential issues with our platform’s advanced computer vision capabilities to detect anomalies. Utilizing sophisticated AI algorithms, our platform continuously monitors a store’s operations to capture unusual patterns and behaviors and instantly trigger alerts.",
    image: bgImage1,
    description2:
      "Safeguard your business by proactively identifying and addressing suspicious activities, ensuring a safe and secure environment.",
    items: [
      "Real-Time Alerts",
      "Minimize Losses",
      "Customizable Detection Parameters",
      "Seamless Integration",
    ],
  },
  {
    useCaseId: "human_identification",
    title: "Enhance Human Recognition and Security with Advanced Identification",
    subTitle: "Human Identification",
    description1:
      "Leverage cutting-edge facial recognition solutions with the Mialo.AI platform to intelligently identify individuals. This solution is highly relevant for businesses, legal entities, or security operations, ensuring accurate identification for compliance, access control, and enhanced security protocols, reducing the risk of unauthorized access or fraud.",
    image: bgImage1,
    items: ["Facial Recognition", "Improved Security", "Data Privacy Compliant"],
  },
  {
    useCaseId: "people_counting",
    title: "Enhance Operational Efficiency with Precise People Counting",
    subTitle: "People Counting",
    description1:
      "Integrate our next-gen, AI-backed platform with existing surveillance systems at your establishment to count people in real-time, providing accurate insights into foot traffic across key areas like entrances, elevators, lobbies, etc. Our advanced, contactless system delivers actionable data on peak hours and bottlenecks without the need for costly hardware or installation.",
    image: bgImage1,
    items: [
      "Accurate Foot Traffic Data",
      "Identify Peak Hours",
      "Detect Bottlenecks",
      "Optimize Space Utilization Based On Footfall",
    ],
  },
  {
    useCaseId: "crowd_monitoring",
    title: "Enhance Crowd Management with Computer Vision",
    subTitle: "Crowd Monitoring",
    description1:
      "Take advantage of next-generation computer vision capabilities of Mialo.AI platform and existing CCTV cameras at your facility to effortlessly monitor and manage crowd density in real-time. Receive instant alerts and detailed, actionable insights to enhance safety and streamline crowd flow.",
    image: bgImage1,
    items: [
      "Real-Time Crowd Density Monitoring",
      "Optimize Crowd Flow Management",
      "Actionable Insights for Enhanced Safety",
    ],
  },
  {
    useCaseId: "visitor_management",
    title: "Unlock Seamless Visitor Management Experience for Visitors and Staff Alike",
    subTitle: "Visitor Management",
    description1:
      "Transform how you manage visitors with Mialo.AI’s smart security solution for advanced vehicle management. Using ANPR (Automatic Number Plate Recognition), FR (Facial Recognition), and QR-based Access Control, the platform simplifies the check-in and check-out process while giving you complete visibility into entry/exit logs and dwell times. If prolonged dwell times are detected, our system triggers real-time alerts, allowing you to take action to maintain a secure and organized environment.",
    image: bgImage1,
  },
  {
    useCaseId: "time_attendance_tracking",
    title: "Attendance with FR: Making It Easy to Keep Track",
    subTitle: "Attendance Tracking",
    description1:
      "Mialo.AI’s Face Recognition solution is suitable for businesses of all types and sizes - small or large to track employees’ attendance. Seamlessly integrated with existing HR, payroll, or access control systems, it offers a contactless solution that takes <5 minutes to set up. Monitoring the first and last recognition of the day, the system automatically tracks working hours, monitors late entries, and helps boost productivity.",
    image: bgImage1,
    items: [
      "Swift & Accurate Face Recognition",
      "Seamless Integration with Existing HR & Access Control Solutions",
      "Multiple Faces Detection Under A Second",
      "Easy to Install & Use",
      "Multi-Location Support",
      "Real-Time Data Syncing",
      "Secure and GDPR Compliant",
      "Automated Alerts for Managers on Late & Absent Employees",
      "Custom Reports & Analytics",
      "Multilingual Capability",
    ],
  },
  {
    useCaseId: "intrusion_detection",
    title: "Enhance Endpoint Security with Mialo.AI’s Advanced Intrusion Detection Capabilities",
    subTitle: "Intrusion Detection",
    description1:
      "Harnessing computer vision and deep learning technologies, our cutting-edge platform, Mialo.AI, detects intrusions in real-time in predefined areas. By analyzing video feeds in real-time from the existing CCTV cameras, the platform pinpoints the exact date, time, and location of the intrusion.",
    image: bgImage1,
    description2:
      "Moreover, it automatically triggers alerts when unauthorized objects or people enter designated areas, ensuing security is upheld. Leveraging edge AI capabilities, Mialo.AI platform delivers scalable, robust, and privacy-preserving perimeter protection, even when the systems are offline.",
  },
  {
    useCaseId: "ergonomic_risk_analysis",
    title: "Transform Workplace Safety with Edge-AI Based Ergonomic Risk Monitoring",
    subTitle: "Ergonomic Risk Analysis",
    description1:
      "Ensure the health and safety of your workforce with real-time ergonomic risk analysis using our platform’s smart security solutions that use advanced video analytics. Our platform seamlessly integrates with your facility’s existing surveillance systems and performs vision-based ergonomic risk analysis to monitor posture of your employees.",
    image: bgImage1,
    description2:
      "Some of the common ergonomic risks that may pose health issues to your workforce include improper posture, repetitive movements, prolonged stationary positions, and more. Our modern, edge AI-based platform performs privacy-preserving image analysis, ensuring that no video is stored locally or sent to the cloud.",
  },
  {
    useCaseId: "authorized_employee_access",
    title: "Enhance Authentication & Authorization with AI",
    subTitle: "Authorized Employee Access",
    description1:
      "Ensure secure entry to a highly confidential office space with Mialo.AI’s FR-based Access Control Solution. Our platform allows you to grant access to only authorized personnel to restricted areas within your business, eliminating the risk of unauthorized entry.",
    image: bgImage1,
    items: ["Accurate Monitoring", "Seamless Integration", "Scalability"],
  },
];

function UseCasesPageComponents() {
  const [useCases] = useState(useCasesData);

  useEffect(() => {
    const hash = window.location.hash; // Get the hash from the URL
    if (hash) {
      const section = document.getElementById(hash.substring(1)); // Remove the '#' and get the section
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll to the section
      }
    }
  }, []);

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
            How To Leverage Use Cases
          </MKTypography>
          <MKTypography variant="body2" color="text">
            Discover how to effectively utilize data insights to drive success and innovation.
          </MKTypography>
        </Grid>

        {useCases.map((useCase, index) => (
          <div key={index}>
            <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }} id={useCase.useCaseId}>
              {index % 2 === 0 ? (
                <>
                  <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
                    <MKBox p={{ xs: 0, lg: 6 }}>
                      <MKBox
                        component="img"
                        src={useCase.image}
                        width="100%"
                        borderRadius="md"
                        shadow="md"
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
                    <MKTypography variant="body2" color="text">
                      {useCase.subTitle}
                    </MKTypography>
                    <MKTypography variant="h3" color="black" pb={2} py={2}>
                      {useCase.title}
                    </MKTypography>
                    <MKTypography variant="body2" color="black" opacity={0.8}>
                      {useCase.description1}
                    </MKTypography>
                    {!useCase.items && <br />}
                    {useCase.items && useCase.items.length > 0 && (
                      <ul style={{ paddingTop: "10px" }}>
                        {useCase.items.map((item, idx) => (
                          <li key={idx}>
                            <MKTypography variant="body2" color="black" opacity={0.8}>
                              {item}
                            </MKTypography>
                          </li>
                        ))}
                      </ul>
                    )}
                    {useCase.description2 && (
                      <MKTypography variant="body2" color="black" opacity={0.8}>
                        {useCase.description2}
                      </MKTypography>
                    )}
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} md={5} sx={{ ml: "auto", mr: { xs: 0, md: 6 } }}>
                    <MKTypography variant="body2" color="text">
                      {useCase.subTitle}
                    </MKTypography>
                    <MKTypography variant="h3" color="black">
                      {useCase.title}
                    </MKTypography>
                    <MKTypography variant="body2" color="black" opacity={0.8}>
                      {useCase.description1}
                    </MKTypography>
                    {useCase.items && useCase.items.length > 0 && (
                      <ul style={{ marginTop: "8px" }}>
                        {useCase.items.map((item, idx) => (
                          <li key={idx}>
                            <MKTypography variant="body2" color="black">
                              {item}
                            </MKTypography>
                          </li>
                        ))}
                      </ul>
                    )}
                    {useCase.description2 && (
                      <MKTypography variant="body2" color="black" opacity={0.8}>
                        {useCase.description2}
                      </MKTypography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ mr: "auto" }}>
                    <MKBox p={{ xs: 0, lg: 6 }}>
                      <MKBox
                        component="img"
                        src={useCase.image}
                        width="100%"
                        borderRadius="md"
                        shadow="md"
                      />
                    </MKBox>
                  </Grid>
                </>
              )}
            </Grid>

            {index < useCases.length - 1 && <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />}
          </div>
        ))}
      </Container>
    </MKBox>
  );
}

export default UseCasesPageComponents;
