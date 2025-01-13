import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import shopper_demographics from "assets/images/mialo/shopper_demographics.png";
import shopper_behavior_analysis from "assets/images/mialo/shopper_behavior_analysis.png";
import footfall_intelligence from "assets/images/mialo/footfall_intelligence.png";
import shopper_journey_pattern_analysis from "assets/images/mialo/shopper_journey_pattern_analysis.png";
import customer_experience from "assets/images/mialo/customer_experience.png";
import automatic_visual_inspection_compliance from "assets/images/mialo/automatic_visual_inspection_compliance.png";
import store_security from "assets/images/mialo/store_security.png";
import queue_management from "assets/images/mialo/queue_management.png";
import entry_exit_logs from "assets/images/mialo/entry_exit_logs.png";
import vehicle_dwell_time from "assets/images/mialo/vehicle_dwell_time.png";
import anomaly_detection from "assets/images/mialo/anomaly.png";
import people_counting from "assets/images/mialo/people_counting.png";
import Smart_Parking from "assets/images/mialo/Smart_Parking.png";
import anpr_based from "assets/images/mialo/anpr_based.png";
import crowd_monitoring from "assets/images/mialo/crowd_monitoring.png";
import visitor_management from "assets/images/mialo/visitor_management.png";
import attendance_tracking from "assets/images/mialo/attendance_tracking.png";
import threat_detection from "assets/images/mialo/threat_detection.png";
import intrusion_detection from "assets/images/mialo/intrusion_detection.png";
import access_control_FR_and_ANPR_based from "assets/images/mialo/access_control_FR_and_ANPR_based.png";
import speed_monitoring from "assets/images/mialo/speed_monitoring.png";
import dwell_time_monitoring from "assets/images/mialo/dwell_time_monitoring.png";
import ergonomic_risk_analysis from "assets/images/mialo/ergonomic_risk_analysis.jpeg";
import facial_recognition from "assets/images/mialo/facial.png";
import authorized_employee_access from "assets/images/mialo/authorized_employee_access.png";
import document_preprocessing from "assets/images/mialo/document_preprocessing.png";
import Invoice_processing_and_management from "assets/images/mialo/Invoice_processing_and_management.png";
import document_classification from "assets/images/mialo/document_classification.png";
import data_extraction from "assets/images/mialo/data_extraction.png";
import Document_Review_and_analysis from "assets/images/mialo/Document_Review_and_analysis.png";
import Fraud_detection from "assets/images/mialo/Fraud_detection.png";
import Financial_Statement_Analysis from "assets/images/mialo/Financial_Statement_Analysis.png";
import Wake_word_recognition from "assets/images/mialo/Wake_word_recognition.png";
import Speech_to_text_ from "assets/images/mialo/Speech_to_text_.png";
import summary_generation from "assets/images/mialo/summary_generation.png";
import Smart_Assistance from "assets/images/mialo/Smart_Assistance.png";
import Human_Identification from "assets/images/mialo/Human_Identification.png";
import PropTypes from "prop-types";

const industryBasedUseCases = [
  {
    industry: "Retail",
    useCasesId: [
      "shopper_demographics_retail",
      "shopper_behavioral_analysis_retail",
      "footfall_intelligence_retail",
      "shopper_journey_analysis",
      "service_quality_experience_retail",
      "automatic_visual_inspection",
      "store_security_retail",
      "queue_analysis_management_retail",
      "entrance_exit_logs",
      "parking_management",
      "anomaly_detection_retail",
      "human_identification",
      "people_counting",
      "crowd_monitoring",
      "fraud_detection",
      "time_attendance_tracking",
      "threat_detection_response",
      "vehicle_access_control",
      "authorized_employee_access",
      "facial_recognition",
      "invoice_processing_management",
      "financial_statement_analysis", 
      "summary_generation",
    ],
  },
  {
    industry: "BFSI",
    useCasesId: [
      "entrance_exit_logs_BFSI",
      "vehicle_dwell_time_BFSI",
      "vehicle_access_control",
      "human_identification_BFSI",
      "fraud_detection",
      "time_attendance_tracking",
      "threat_detection_response",
      "vehicle_access_control",
      "vehicle_dwell_time",
      "authorized_employee_access",
      "facial_recognition",
      "document_pre_processing_BFSI",
      "invoice_processing_management",
      "document_classification",
      "automated_data_extraction_BFSI",
      "document_review_analysis",
      "fraud_detection",
      "financial_statement_analysis_BFSI",
      "summary_generation_BFSI",
      "smart_chatbot",
    ],
  },
  {
    industry: "Infrastructure",
    useCasesId: [
      "entrance_exit_logs_infra",
      "parking_management",
      "vehicle_dwell_time_infra",
      "anpr_fr_based_access_control_infra",
      "anomaly_detection",
      "human_identification_infra",
      "people_counting",
      "crowd_monitoring",
      "fraud_detection",
      "visitor_management_infra",
      "time_attendance_tracking",
      "threat_detection_response",
      "intrusion_detection_infra",
      "authorized_employee_access_infra",
      "visitor_management",
      "facial_recognition_infra",
      "document_pre_processing_infra",
      "invoice_processing_management_infra",
      "document_classification",
      "automated_data_extraction",
      "document_review_analysis",
      "fraud_detection",
      "financial_statement_analysis",
    ],
  },
  {
    industry: "Logistics",
    useCasesId: [
      "entrance_exit_logs",
      "parking_management_logi",
      "vehicle_dwell_time",
      "vehicle_access_control_logi",
      "human_identification",
      "people_counting",
      "fraud_detection",
      "visitor_management_logi",
      "time_attendance_tracking",
      "threat_detection_response_logi",
      "intrusion_detection_logi",
      "speed_monitoring",
      "vehicle_dwell_time",
      "ergonomic_risk_analysis_logi",
      "authorized_employee_access_logi",
      "visitor_management",
      "facial_recognition",
      "invoice_processing_management_logi",
      "document_classification",
      "automated_data_extraction_logi",
      "document_review_analysis",
      "fraud_detection",
      "financial_statement_analysis",
      "summary_generation_logi",
    ],
  },
  {
    industry: "Security",
    useCasesId: [
      "human_identification_security",
      "people_counting",
      "crowd_monitoring",
      "fraud_detection",
      "visitor_management",
      "time_attendance_tracking",
      "threat_detection_response",
      "intrusion_detection",
      "vehicle_access_control_security",
      "anomaly_detection_security",
      "speed_monitoring_security",
      "vehicle_dwell_time",
      "authorized_employee_access_security",
      "visitor_management_security",
      "facial_recognition",
      "speech_to_text",
      "summary_generation_security",
    ],
  },
  {
    industry: "Healthcare",
    useCasesId: [
      "service_quality_experience",
      "vehicle_access_control_healthcare",
      "people_counting_healthcare",
      "crowd_monitoring_healthcare",
      "threat_detection_response_healthcare",
      "authorized_employee_access_healthcare",
      "facial_recognition",
      "document_pre_processing_healthcare",
      "invoice_processing_management_healthcare",
      "document_classification_healthcare",
      "automated_data_extraction_healthcare",
      "document_review_analysis_healthcare",
      "fraud_detection_healthcare",
      "financial_statement_analysis",
      "summary_generation",
      "smart_chatbot_healthcare",
    ],
  },
  {
    industry: "Hospitality",
    useCasesId: [
      "service_quality_experience_hospitality",
      "automatic_visual_inspection_hospitality",
      "store_security_hospitality",
      "entrance_exit_logs",
      "parking_management",
      "vehicle_dwell_time",
      "vehicle_access_control_hospitality",
      "anomaly_detection_hospitality",
      "human_identification",
      "people_counting",
      "crowd_monitoring_hospitality",
      "fraud_detection",
      "visitor_management_hospitality",
      "time_attendance_tracking",
      "threat_detection_response",
      "facial_recognition",
      "document_pre_processing_hospitality",
      "invoice_processing_management_hospitality",
      "document_classification_hospitality",
      "automated_data_extraction_hospitality",
      "document_review_analysis_hospitality",
      "financial_statement_analysis",
      "summary_generation",
      "authorized_employee_access_hospitality"
    ],
  },
  {
    industry: "Agriculture",
    useCasesId: ["intrusion_detection_agri", "anomaly_detection_agri"],
  },
  {
    industry: "Manufacturing",
    useCasesId: [
      "automatic_visual_inspection_manufacture",
      "entrance_exit_logs_manufacture",
      "vehicle_dwell_time",
      "anpr_fr_based_access_control",
      "anomaly_detection_manufacture",
      "threat_detection_response_manufacture",
      "ergonomic_risk_analysis_manufacture",
      "authorized_employee_access_manufacture",
      "facial_recognition",
      "intrusion_detection_manufacture",
      "human_identification",
      "people_counting_manufacture",
      "crowd_monitoring_manufacture",
      "Wake_word_recognition",
      "summary_generation",
    ],
  },
];

const useCasesData = [
  {
    useCaseId: "shopper_demographics",
    title: "Know Your Shoppers",
    subTitle: "Shopper Demographics",
    description1:
      "Understanding who walks into your store is imperative for delivering exceptional, personalized customer experiences. With real-time insights into the age, gender, and other key demographics of your shoppers, you are enabled to anticipate their needs and preferences. ",
    image: shopper_demographics,
    description2:
      "Retailsense, an AI-powered platform by Mialo empowers you to craft targeted strategies, ensuring every shopper entering your store receives a uniquely tailored experience. Boost engagement and improve loyalty by leveraging detailed data into your customer demographics and empower your business to make informed decisions that perfectly resonate with your shoppers.",
  },
  {
    useCaseId: "shopper_behavioral_analysis",
    title:
      "Turn 360-Degree Shopper Profiles into Granular, Actionable Insights",
    subTitle: "Shopper Behavioral Analytics",
    description1:
      "Go beyond surface-level data and dig deeper to analyze your shoppers’ behavior with Retailsense by Mialo. Track how shoppers navigate through your store, identify products they engage with the most, and gain detailed insights into how their actions lead to purchases.",
    image: shopper_behavior_analysis,
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
    image: footfall_intelligence,
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
    image: shopper_journey_pattern_analysis,
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
    image: customer_experience,
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
    subTitle: "Automatic Visual Inspection & Compliance",
    description1:
      "With our cutting-edge, next-generation platform, maintain strict adherence to safety and operating rules. Our platform monitors every aspect of your business, including temperature controls, staff uniforms, store opening hours, and cleanliness.",
    image: automatic_visual_inspection_compliance,
    items: [
      "Ensure Regulatory Compliance and SOPs are met",
      "Streamline processes to Improve Operational Efficiency",
      "Maintain Brand Standards with Real-Time Planogram & Inventory Audits",
    ],
  },
  {
    useCaseId: "store_security",
    title: "Enhance Security with Multimodal AI ",
    subTitle: "Store Security",
    description1:
      "Ensure security at your store with our advanced AI platform that can analyze video feeds in real time to detect suspicious activities. Get instant alerts in order to reduce incidents like shoplifting, theft, fraud, damage, wastage, and stockouts at your store while continuing to enhance customer experience. ",
    image: store_security,
    items: [
      "Address threats before they escalate into significant losses.",
      "Stay vigilant on suspicious activities or breaches in security protocols.",
      "Drive profitability with optimized inventory management.",
    ],
  },
  {
    useCaseId: "queue_analysis_management",
    title: "Eliminate Waiting, Boost Efficiency",
    subTitle: "Queue Management",
    description1:
      "Say goodbye to long queues, dissatisfied customers, and poor customer service with our intelligent Retailsense platform. Designed for retail stores, supermarkets, malls, and more, it enables businesses to precisely track queue traffic and data.",
    image: queue_management,
    description2:
      "Harness invaluable insights to optimize in-store operations, enhance the customer experience, boost sales, and drive unparalleled success.",
    items: [
      "Streamline Queue Flow",
      "Identify Peak Hours",
      "Reduce Queue Abandonment Rates",
    ],
  },
  {
    useCaseId: "entrance_exit_logs",
    title: "Entry-Exit Monitoring Made Easy",
    subTitle: "Entrance & Exit Logs",
    description1:
      "Enhance system reliability and security with automated and intelligent entry-exit monitoring. Utilizing Automated Number Plate Recognition (ANPR) technology, our platform enables your CCTV cameras or sensors to quickly and accurately capture license plate information. Our all-inclusive e solution with RFID/UHF or QR-based Entry/Exit systems minimizes the need for manual intervention and keeps track of vehicles' entry and exit times.",
    image: entry_exit_logs,
    items: [
      "Ensure only authorized vehicles enter your premises",
      "Keep track of all vehicle movements effortlessly",
      "Make vehicle access processes seamless and convenient",
    ],
  },
  {
    useCaseId: "parking_management",
    title:
      "Experience Next-Gen Parking Management with Our AI-Powered, Smart Parking Solution",
    subTitle: "Parking Management",
    description1:
      "Make parking hassle-free for your employees and visitors with our AI-backed, smart parking solution. Our intelligent parking management solution provides real-time insights into parking availability, ensures optimal space utilization, and automates pay-and-park processes.",
    image: Smart_Parking,
    items: [
      "AI-Powered Access Control System",
      "Designed for Corporate, Commercial, and Residential Settings",
      "Automates Vehicle Identification, Monitoring, and Authorization",
      "Seamlessly Integrates with Existing Systems like Boom Barriers, CCTVs, etc.",
    ],
  },
  {
    useCaseId: "vehicle_dwell_time",
    title: "Ensure a Secure and Efficient Parking Experience using AI",
    subTitle: "Vehicle Dwell Time",
    description1:
      "Enhance security and parking management within your establishment using Mialo.AI, an AI platform that leverages Automatic Number Plate Recognition (ANPR) technology to monitor vehicle dwell time. Our solution tracks vehicle dwell times in real-time, ensuring optimal use of parking spaces while maintaining safety.",
    image: vehicle_dwell_time,
    items: [
      "Real-Time Monitoring",
      "Enhanced Security",
      "Seamless Integration",
    ],
  },
  {
    useCaseId: "vehicle_access_control",
    title:
      "Simplified Access Management with ANPR-Based Vehicle Access Control System",
    subTitle: "ANPR-Based Vehicle Access Control",
    description1:
      "Manage and regulate the movement of vehicles in and out of designated areas with our ANPR-based parking solution. This advanced Access Control Solution captures and stores real-time data, enabling seamless automation at entry gates.",
    image: anpr_based,
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
    image: anomaly_detection,
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
    title:
      "Enhance Human Recognition and Security with Advanced Identification",
    subTitle: "Human Identification",
    description1:
      "Leverage cutting-edge facial recognition solutions with the Mialo.AI platform to intelligently identify individuals. This solution is highly relevant for businesses, legal entities, or security operations, ensuring accurate identification for compliance, access control, and enhanced security protocols, reducing the risk of unauthorized access or fraud.",
    image: Human_Identification,
    items: [
      "Facial Recognition",
      "Improved Security",
      "Data Privacy Compliant",
    ],
  },
  {
    useCaseId: "people_counting",
    title: "Enhance Operational Efficiency with Precise People Counting",
    subTitle: "People Counting",
    description1:
      "Integrate our next-gen, AI-backed platform with existing surveillance systems at your establishment to count people in real-time, providing accurate insights into foot traffic across key areas like entrances, elevators, lobbies, etc. Our advanced, contactless system delivers actionable data on peak hours and bottlenecks without the need for costly hardware or installation.",
    image: people_counting,
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
    image: crowd_monitoring,
    items: [
      "Real-Time Crowd Density Monitoring",
      "Optimize Crowd Flow Management",
      "Actionable Insights for Enhanced Safety",
    ],
  },
  {
    useCaseId: "visitor_management",
    title:
      "Unlock Seamless Visitor Management Experience for Visitors and Staff Alike",
    subTitle: "Visitor Management",
    description1:
      "Transform how you manage visitors with Mialo.AI’s smart security solution for advanced vehicle management. Using ANPR (Automatic Number Plate Recognition), FR (Facial Recognition), and QR-based Access Control, the platform simplifies the check-in and check-out process while giving you complete visibility into entry/exit logs and dwell times. If prolonged dwell times are detected, our system triggers real-time alerts, allowing you to take action to maintain a secure and organized environment.",
    image: visitor_management,
  },
  {
    useCaseId: "time_attendance_tracking",
    title: "Attendance with FR: Making It Easy to Keep Track",
    subTitle: "Attendance Tracking",
    description1:
      "Mialo.AI’s Face Recognition solution is suitable for businesses of all types and sizes - small or large to track employees’ attendance. Seamlessly integrated with existing HR, payroll, or access control systems, it offers a contactless solution that takes <5 minutes to set up. Monitoring the first and last recognition of the day, the system automatically tracks working hours, monitors late entries, and helps boost productivity.",
    image: attendance_tracking,
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
    useCaseId: "threat_detection_response",
    title:
      "Fortify Your Assets Against Fire & Smoke with Advanced AI Technology",
    subTitle: "Threat Detection & Response",
    description1:
      "Equip your facility with a robust fire and smoke detection system to enhance safety measures and protect both assets and personnel from potential threats. Ensure rapid detection and effective response on disastrous fire events by integrating advanced AI analytics using Mialo.AI platform. ",
    image: threat_detection,
    items: [
      "Get instant alerts on events like fire or smoke, ensuring swift threat identification.",
      "Integrate AI-powered detection alerts with alarms, ensuring minimal response times",
      "Enable your safety team to act quickly and efficiently to mitigate risks.",
    ],
  },
  {
    useCaseId: "intrusion_detection",
    title:
      "Enhance Endpoint Security with Mialo.AI’s Advanced Intrusion Detection Capabilities",
    subTitle: "Intrusion Detection",
    description1:
      "Harnessing computer vision and deep learning technologies, our cutting-edge platform, Mialo.AI, detects intrusions in real-time in predefined areas. By analyzing video feeds in real-time from the existing CCTV cameras, the platform pinpoints the exact date, time, and location of the intrusion.",
    image: intrusion_detection,
    description2:
      "Moreover, it automatically triggers alerts when unauthorized objects or people enter designated areas, ensuing security is upheld. Leveraging edge AI capabilities, Mialo.AI platform delivers scalable, robust, and privacy-preserving perimeter protection, even when the systems are offline.",
  },
  {
    useCaseId: "speed_monitoring",
    title: "Ensure Safer Driving Environments with ANPR Technology",
    subTitle: "Speed Monitoring",
    description1:
      "Utilize Mialo.AI platform that uses Automatic Number Plate Recognition (ANPR) technology to enhance speed monitoring and prevent incidents such as traffic violations and accidents. Our solution provides real-time analysis of vehicle speeds, ensuring safer roads and efficient traffic management.",
    image: speed_monitoring,
    items: [
      "Instantly identify speeding vehicles, enabling prompt enforcement actions.",
      "Analyze traffic patterns and trends for better road safety planning.",
      "Easily connect with existing traffic management systems or surveillance devices for enhanced functionality.",
    ],
  },
  {
    useCaseId: "dwell_time_monitoring",
    title: "Gain Precise Insights into Dwell Time",
    subTitle: "Dwell Time",
    description1:
      "Track and analyze the duration a person or product stays in one place using advanced AI. Leverage real-time monitoring to identify inefficiencies, reduce delays, and improve overall operational efficiency.",
    image: dwell_time_monitoring,
    items: [
      "Enhance Scheduling",
      "Boost Productivity",
      "Make Informed Operational Decisions",
    ],
  },
  {
    useCaseId: "ergonomic_risk_analysis",
    title:
      "Transform Workplace Safety with Edge-AI Based Ergonomic Risk Monitoring",
    subTitle: "Ergonomic Risk Analysis",
    description1:
      "Ensure the health and safety of your workforce with real-time ergonomic risk analysis using our platform’s smart security solutions that use advanced video analytics. Our platform seamlessly integrates with your facility’s existing surveillance systems and performs vision-based ergonomic risk analysis to monitor posture of your employees.",
    image: ergonomic_risk_analysis,
    description2:
      "Some of the common ergonomic risks that may pose health issues to your workforce include improper posture, repetitive movements, prolonged stationary positions, and more. Our modern, edge AI-based platform performs privacy-preserving image analysis, ensuring that no video is stored locally or sent to the cloud.",
  },
  {
    useCaseId: "anpr_fr_based_access_control",
    title: "Experience Next-Gen Access Control with ANPR and FR Technology",
    subTitle: "ANPR & FR Based Access Control",
    description1:
      "Enhance your facility’s security infrastructure with our ANPR and FR based access control systems. Seamlessly manage incoming and outgoing people as well as vehicles, ensuring only authorized personnel gain access.",
    image: access_control_FR_and_ANPR_based,
    items: [
      "Automatically recognize and verify vehicles, allowing for swift entry.",
      "Identify individuals against a database of authorized personnel.",
      "Instantly receive alerts in case of unauthorized access.",
    ],
  },
  {
    useCaseId: "authorized_employee_access",
    title: "Enhance Authentication & Authorization with AI",
    subTitle: "Authorized Employee Access",
    description1:
      "Ensure secure entry to a highly confidential office space with Mialo.AI’s FR-based Access Control Solution. Our platform allows you to grant access to only authorized personnel to restricted areas within your business, eliminating the risk of unauthorized entry.",
    image: authorized_employee_access,
    items: [
      "Tracks and logs entry/exit times of authorized personnel, providing detailed records for auditing and compliance.",
      "Easily integrates with existing security or HR systems for efficient management.",
      "Suitable for businesses of all sizes, from SMEs to large enterprises with multiple access points.",
    ],
  },
  {
    useCaseId: "facial_recognition",
    title: "Unlock Efficiency and Security with Intelligent Face Recognition",
    subTitle: "Facial Recognition",
    description1:
      "Detect and identify faces across multiple camera streams in real-time with Mialo.AI’s advanced technology. Our platform empowers businesses of all sizes to utilize facial recognition for various applications, including attendance tracking and VIP customer recognition. This not only ensures authorized access but also enhances safety and security while elevating the overall customer experience.",
    image: facial_recognition,
    items: [
      "Quickly recognize one or multiple people through automation.",
      "Streamline processes like attendance tracking, VIP recognition, etc.",
      "Protect your business against fraudulent activities and unauthorized access.",
      "Deliver convenient, personalized, and hassle-free experience to your customers.",
    ],
  },
  {
    useCaseId: "document_pre_processing",
    title: "Automate Document Pre-processing with a Low-Code Solution",
    subTitle: "Document Pre-processing",
    description1:
      "Effortlessly extract and process data from documents using our platform’s Large Language Models (LLM). Our platform using its advanced computer vision capabilities intelligently identifies and retrieves relevant information from both structured and unstructured documents, enabling seamless integration into your existing business software applications.",
    image: document_preprocessing,
    items: [
      "Capture essential details from documents automatically.",
      "Transform unstructured text into actionable data.",
      "Enhance data accuracy and reduce manual entry errors.",
      "Streamline workflows for faster decision-making.",
    ],
  },
  {
    useCaseId: "invoice_processing_management",
    title: "Experience faster, more efficient invoice management with Mialo.AI",
    subTitle: "Invoice Processing & Management",
    description1:
      "Streamline your invoice processing and management with Mialo.AI platform that leverages AI to capture, extract, recognize, validate, and process invoice data. This advanced platform routes the extracted data through the appropriate channels for efficient approval and payment, significantly reducing manual work and enhancing accuracy in processing invoices.",
    image: Invoice_processing_and_management,
    items: [
      "Leverage OCR (Optical Character Recognition) combined with AI for precise invoice data capturing.",
      "Analyze patterns in invoice data through Machine Learning, ensuring high processing accuracy.",
      "Ensure seamless integration through Mialo.AI’s NLP capabilities that interprets invoice text across various languages and formats.",
    ],
  },
  {
    useCaseId: "document_classification",
    title: "Classify and Sort All of Your Documents Using Mialo.AI",
    subTitle: "Document Classification",
    description1:
      "Streamline your invoice processing and management with Mialo.AI platform that leverages AI to capture, extract, recognize, validate, and process invoice data. This advanced platform routes the extracted data through the appropriate channels for efficient approval and payment, significantly reducing manual work and enhancing accuracy in processing invoices.",
    image: document_classification,
    items: [
      "Drive efficiency by automating large-scale document sorting across multiple formats, with zero manual intervention.",
      "Utilize plug-and-play APIs that require no training, enabling you to get started immediately.",
      "Improve workflow by ensuring that documents are categorized accurately and retrieved swiftly.",
    ],
  },
  {
    useCaseId: "automated_data_extraction",
    title: "Instantly and Accurately Extract Document Data with AI",
    subTitle: "Automated Data Extraction & Parsing",
    description1:
      "Efficiently managing large volumes of data is essential in today's fast-paced business landscape. Traditional manual methods can be labor-intensive and error-prone. Mialo.AI’s Automated Data Extraction & Parsing solutions revolutionize document management by utilizing advanced technologies like AI, machine learning, and OCR.",
    image: data_extraction,
    items: [
      "Expedite workflows with integrated API links for instant document approvals.",
      "Analyze data to uncover patterns, enabling informed decision-making.",
      "Provide data in any format for extraction.",
    ],
  },
  {
    useCaseId: "document_review_analysis",
    title:
      "Transform Document Management Processes with Mialo.AI’s Intelligent Solutions",
    subTitle: "Document Review & Analysis",
    description1:
      "Tired of correcting errors in data entry? Achieve optimal accuracy in data extraction with Mialo.AI’s document review and analysis solution. Our platform enables businesses to validate data entries against various databases and documents using intuitive Excel-like formulas, ensuring enhanced accuracy and reliability.",
    image: Document_Review_and_analysis,
    items: [
      "Facilitate instant document approvals through integrated API links, expediting workflows.",
      "Analyze document data to uncover patterns and trends, enabling quicker, informed decision-making.",
      "Extracted data can be provided in any format, allowing for immediate integration into your business systems.",
    ],
  },
  {
    useCaseId: "fraud_detection",
    title:
      "Safeguard Your Financial Operations with Mialo.AI's Intelligent Fraud Detection Solution",
    subTitle: "Fraud Detection",
    description1:
      "Combat fraud in invoices effectively with Mialo.AI's advanced detection capabilities. Our platform continuously and intelligently analyzes invoice data in order to identify any unusual patterns and anomalies, allowing businesses to catch fraudulent activities early and protect their financial assets.",
    image: Fraud_detection,
    items: [
      "Our AI platform flags invoices from unapproved vendors and detects duplicate submissions in no time.",
      "The platform comes with capabilities to continuously learn from historical data and instantly identify deviations that signal potential fraud.",
      "As the system processes more invoices, its fraud detection capabilities become increasingly refined, ensuring robust protection.",
    ],
  },
  {
    useCaseId: "financial_statement_analysis",
    title:
      "Unlock Smarter Financial Decisions with Mialo.AI’s Advanced Analysis",
    subTitle: "Financial Statement Analysis",
    description1:
      "Optimize your financial analysis processes with Mialo.AI’s advanced Financial Statement Analysis tools. Our platform automates the extraction and interpretation of key financial metrics, allowing businesses to gain insights swiftly and make informed decisions.",
    image: Financial_Statement_Analysis,
    items: [
      "Quickly capture and analyze critical financial data from various statements.",
      "Minimize errors through intelligent data validation and processing.",
      "Generate detailed reports that highlight trends and performance metrics for better financial oversight.",
    ],
  },
  {
    useCaseId: "wake_word_recognition",
    title: "Transform Users Interaction using Innovative Wake Word Technology",
    subTitle: "Wake Word Recognition",
    description1:
      "Enhance user engagement with Mialo.AI's Wake Word Recognition technology, designed to create a hands-free, interactive experience. This feature allows applications to respond to specific voice commands, making them more accessible and user-friendly.",
    image: Wake_word_recognition,
    items: [
      "Quickly trigger functions by simply saying the wake word, improving user accessibility and convenience.",
      "Continuously improves its recognition accuracy by learning from different accents and speech patterns.",
      "Easily integrates with your existing applications, ensuring a smooth and rapid implementation process.",
    ],
  },
  {
    useCaseId: "speech_to_text",
    title:
      "Harness Audio Insights Through Advanced Speech-to-Text Transcription",
    subTitle: "Speech-to-Text",
    description1:
      "Convert audio content into accurate text with Mialo.AI’s Intelligent Transcription capabilities. Our platform employs advanced AI algorithms to swiftly turn speech into text, enhancing documentation efficiency and accessibility.",
    image: Speech_to_text_,
    items: ["High Accuracy", "Multilingual Support", "Real-Time Processing"],
  },
  {
    useCaseId: "summary_generation",
    title: "Focus on What Matters: Intelligent Video Summarization Made Easy",
    subTitle: "Summary Generation",
    description1:
      "Streamline content consumption with Mialo.AI’s Summary Generation feature, which condenses extensive video footage—such as 24 hours of content—into concise, 15-minute summaries. Our AI intelligently identifies and highlights the most important events, ensuring you focus on what truly matters.",
    image: summary_generation,
    items: [
      "Save hours of viewing time by quickly accessing key moments from lengthy videos.",
      "Receive summaries that emphasize critical events needing attention, enhancing decision-making.",
      "Easily incorporate summaries into your workflows, improving productivity and accessibility.",
    ],
  },
  {
    useCaseId: "smart_chatbot",
    title:
      "Elevate Your Customer Service Strategy with Mialo.AI's Smart Assistance",
    subTitle: "Smart Assistance",
    description1:
      "Enhance customer interaction with Mialo.AI’s Smart Assistance Chatbot. This AI-powered solution provides instant responses and support, improving user experience and streamlining communication.",
    image: Smart_Assistance,
    items: [
      "Offer round-the-clock assistance, ensuring customers receive timely support whenever they need it.",
      "Leverage advanced NLP to comprehend user inquiries, providing relevant and accurate responses.",
      "Easily integrate with existing systems to enhance workflows and gather valuable user insights.",
    ],
  },
  ///////////////////////////////////////////////////////////////////////////////
  {
    useCaseId: "shopper_demographics_retail",
    title: "Know Your Shoppers",
    subTitle: "Shopper Demographics",
    description1:
      "Understanding who walks into your store is imperative for delivering exceptional, personalized customer experiences. With real-time insights into the age, gender, and other key demographics of your shoppers, you are enabled to anticipate their needs and preferences. ",
    image: shopper_demographics,
    description2:
      "RetailSense, an AI-powered platform by Mialo empowers you to craft targeted strategies, ensuring every shopper entering your store receives a uniquely tailored experience. Boost engagement and improve loyalty by leveraging detailed data into your customer demographics and empower your business to make informed decisions that perfectly resonate with your shoppers.",
  },
  {
    useCaseId: "footfall_intelligence_retail",
    title: "Boost Your Retail Performance with Intelligent Footfall Analysis",
    subTitle: "Footfall Intelligence",
    description1:
      "Track and analyze the flow of shoppers in real-time with our AI-powered footfall tracking solution. Utilizing CCTV cameras, RetailSense monitors visitor traffic, behavior, peak hours, dwell time, and movement patterns through intuitive heat maps.",
    image: footfall_intelligence,
    description2:
      "Gain actionable insights tailored to your business, helping you drive sales growth and optimize store performance.",
    items: [
      "Optimize store layout to enhance customer flow and product visibility",
      "Allocate staff efficiently based on peak traffic times",
      "Position products where they receive the most attention",
    ],
  },
  {
    useCaseId: "service_quality_experience_retail",
    title: "Utilize Multimodal Data & AI to Transform Customer Experience",
    subTitle: "Service Quality & Experience",
    description1:
      "Deliver exceptional service that goes beyond just knowing your customers. Utilize Mialo.AI’s data analytics capabilities to gain an in-depth understanding of your customers’ needs, streamline store operations, and make every customer interaction personalized.",
    image: customer_experience,
    description2:
      "Our platform comes packed with advanced capabilities that empower businesses to provide a seamless shopping experience, fostering customer satisfaction and loyalty.",
    items: [
      "Maximize efficiency and customer satisfaction with optimized store layout",
      "Enhance service response time to meet customer needs",
      "Add a touch of personalization in every customer interactions",
    ],
  },
  {
    useCaseId: "shopper_behavioral_analysis_retail",
    title:
      "Gain Actionable Insights into Shopper Behavior in Your Retail Store",
    subTitle: "Shopper Behavioral Analytics",
    description1:
      "Go beyond surface-level data and dig deeper to analyze your shoppers’ behavior with RetailSense by Mialo. Track how shoppers navigate through your store, identify products they engage with the most, and gain detailed insights into how their actions lead to purchases.",
    image: shopper_behavior_analysis,
    description2:
      "Uplift sales at your store by utilizing these insights to optimize the shopping environment for your customers to ensure it not just meets but exceeds their expectations.",
    items: [
      "Identify What Catches the Eyeballs",
      "Predict Buying Behavior",
      "Optimize Store Layout",
    ],
  },
  {
    useCaseId: "shopper_journey_analysis_retail",
    title: "Leverage Heatmaps to Track Shoppers’ In-Store Journeys",
    subTitle: "Shopper Journey Pattern Tracking & Analysis",
    description1:
      "Gain an in-depth understanding of foot traffic and product interaction at your store by tracking and analyzing in-store movements of customers in real-time. Our AI-powered RetailSense platform uses heatmaps to visualize your store’s captivating areas.",
    image: shopper_journey_pattern_analysis,
    description2:
      "Make data-driven decisions to enhance store layouts and uplift sales by improving the overall customer experience.",
    items: [
      "Discover hot spots and dead zones",
      "Strategically place products to maximize visibility and sales",
      "Ensure adequate staffing during peak hours",
    ],
  },
  {
    useCaseId: "queue_analysis_management_retail",
    title: "Eliminate Waiting, Boost Efficiency",
    subTitle: "Queue Management",
    description1:
      "SSay goodbye to long queues, dissatisfied customers, and poor customer service with our intelligent RetailSense platform. Designed for retail stores, supermarkets, malls, hospitals, and more, it enables businesses to precisely track queue traffic and manage it effectively to enhance service and experience.",
    image: queue_management,
    description2:
      "Harness invaluable insights to optimize in-store operations, enhance the customer experience, boost sales, and drive unparalleled success.",
    items: [
      "Streamline Queue Flow",
      "Identify Peak Hours",
      "Reduce Queue Abandonment Rates",
    ],
  },
  {
    useCaseId: "anomaly_detection_retail",
    title: "Prevent. Protect. Perform: Cutting-Edge Anomaly Detection for Retail",
    subTitle: "Anomaly Detection",
    description1:
      "Stay ahead of potential issues with our platform’s advanced computer vision capabilities to detect anomalies. Utilizing sophisticated AI algorithms, our platform continuously monitors a store’s operations to capture unusual patterns and behaviors and instantly trigger alerts.",
    image: anomaly_detection,
    description2:
      "Safeguard your business by proactively identifying and addressing suspicious activities, ensuring a safe and secure environment.",
    items: [
      "Real-Time Alerts",
      "Minimize Losses",
      "Customizable Detection Parameters",
      "Seamless Integration",
    ],
  },
  // ////////////////////////////////////////////////////////
  {
    useCaseId: "entrance_exit_logs_BFSI",
    title: "Entry-Exit Monitoring Made Easy",
    subTitle: "Entrance & Exit Logs",
    description1:
      "Enhance system reliability and security with automated and intelligent entry-exit monitoring of vehicles. Utilizing Automated Number Plate Recognition (ANPR) technology, our platform enables your CCTV cameras or sensors to quickly and accurately capture license plate information. Our all-inclusive solution with RfFID/UHF based Entry/Exit systems minimizes the need for manual intervention and keeps track of vehicles' entry and exit times.",
    image: entry_exit_logs,
    items: [
      "Ensure only authorized vehicles enter your premises",
      "Keep track of all vehicle movements effortlessly",
      "Make vehicle access processes seamless and convenient",
    ],
  },
  {
    useCaseId: "vehicle_dwell_time_BFSI",
    title: "Ensure a Secure and Efficient Parking Experience using AI",
    subTitle: "Vehicle Dwell Time",
    description1:
      "Enhance security and parking management within your establishment using Mialo.AI, an AI platform that leverages Automatic Number Plate Recognition (ANPR) technology to monitor how long vehicles remain parked. Our solution tracks vehicle dwell times in real-time, ensuring optimal use of parking spaces while maintaining safety.",
    image: vehicle_dwell_time,
    items: [
      "Detect and log vehicles stationary for extended periods.",
      "Identify unauthorized or suspicious vehicles based on prolonged dwell times.",
      "Integrate seamlessly with existing parking systems for efficient operations.",
    ],
  },
  {
    useCaseId: "human_identification_BFSI",
    title:
      "Enhance Human Recognition and Security with Advanced Identification",
    subTitle: "Human Identification",
    description1:
      "Leverage cutting-edge facial recognition solutions with the Mialo.AI platform to intelligently identify individuals. This solution is highly relevant for businesses, legal entities, or security operations, ensuring accurate identification for compliance, access control, and enhanced security protocols, reducing the risk of unauthorized access or fraud.",
    image: Human_Identification,
    items: [
      "Recognize individual customers by identifying their face.",
      "Enhance loss prevention through accurate identification.",
      "Ensure all identification processes adhere to privacy regulations.",
    ],
  },
  {
    useCaseId: "document_pre_processing_BFSI",
    title: "Automate Document Pre-processing with a Low-Code Solution",
    subTitle: "Document Pre-processing",
    description1:
      "Simplify document handling in the BFSI sector by automating data extraction and processing with our advanced platform. Leveraging Large Language Models (LLM) and cutting-edge computer vision, our platform intelligently identifies, extracts, and organizes key information from both structured and unstructured documents. Seamlessly integrate this processed data into your existing business applications to enhance operational efficiency.",
    image: document_preprocessing,
    items: [
      "Automated Data Extraction: Capture critical details from documents effortlessly.",
      "Actionable Insights: Convert unstructured text into meaningful, usable data.",
      "Enhanced Accuracy: Minimize errors and eliminate the need for manual data entry.",
      "Accelerated Workflows: Speed up decision-making with streamlined processes.",
    ],
    description2:
      "Transform your document management and unlock efficiency with a solution designed for BFSI industry needs.",
  },
  {
    useCaseId: "automated_data_extraction_BFSI",
    title: "Instantly and Accurately Extract Document Data with AI",
    subTitle: "Automated Data Extraction & Parsing",
    description1:
      "Efficiently managing large volumes of data is essential in today's fast-paced business landscape. Traditional manual methods can be labor-intensive and error-prone. Mialo.AI’s Automated Data Extraction & Parsing solutions revolutionize document management by utilizing advanced technologies like AI, Machine Learning, and Optical Character Recognition (OCR).",
    image: data_extraction,
    items: [
      "Expedite workflows with integrated API links for instant document approvals.",
      "Analyze data to uncover patterns, enabling informed decision-making.",
      "Provide data in any format for extraction.",
    ],
  },
  {
    useCaseId: "financial_statement_analysis_BFSI",
    title:
      "Unlock Smarter Financial Decisions with Mialo.AI’s Advanced Analysis",
    subTitle: "Financial Statement Analysis",
    description1:
      "Streamline your financial analysis with Mialo.AI's cutting-edge Financial Statement Analysis tools. Our platform automates the extraction and interpretation of essential financial metrics, empowering businesses to derive actionable insights and make well-informed decisions with ease.",
    image: Financial_Statement_Analysis,
    items: [
      "Effortlessly capture and analyze vital financial data from diverse statements",
      "Enhance accuracy with intelligent data validation and processing.",
      "Produce comprehensive reports that uncover trends and performance metrics, enabling improved financial oversight.",
    ],
    description2:
      "Redefine your financial workflows with precision and efficiency.",
  },

  {
    useCaseId: "summary_generation_BFSI",
    title: "Focus on What Matters: Intelligent Video Summarization Made Easy",
    subTitle: "Summary Generation",
    description1:
      "Streamline content consumption with Mialo.AI’s Summary Generation feature, which condenses extensive video footage—such as 24 hours of content—into concise, 15-minute summaries. Our AI intelligently identifies and highlights the most important events, ensuring you focus on what truly matters.",
    image: summary_generation,
    items: [
      "Time-Saving Insights: Quickly access essential details from large datasets or lengthy reports.",
      "REnhanced Decision-Making: Highlight critical information that demands attention.",
      "Seamless Integration: Incorporate summaries into your workflows to boost productivity and accessibility.",
    ],
  },


  ///////////////////////////////////////////////////////////////////////////////////

  {
    useCaseId: "entrance_exit_logs_infra",
    title: "Entry-Exit Monitoring Made Easy",
    subTitle: "Streamline Vehicle Entrance & Exit Logs for Infrastructure Businesses",
    description1:
      "Enhance security and efficiency in managing vehicle access with our automated Entrance and Exit Log solution. Powered by Automated Number Plate Recognition (ANPR) technology, our system accurately captures and records license plate information using existing CCTV cameras or sensors. Complemented by RFID/UHF-based systems, this solution ensures seamless tracking of vehicle movements with minimal manual intervention.",
    image: entry_exit_logs,
    items: [
      "Enhanced Security: Restrict access to authorized vehicles only.",
      "Comprehensive Tracking: Monitor all vehicle movements effortlessly",
      "Seamless Integration: Simplify vehicle access with a user-friendly, automated process.",
    ],
    description2:
      "Optimize access control and improve operational reliability with our intelligent vehicle monitoring solution.",
  },
  {
    useCaseId: "vehicle_dwell_time_infra",
    title: "Optimize Parking Management with AI-Powered Vehicle Dwell Time Tracking",
    subTitle: "Vehicle Dwell Time",
    description1:
      "Enhance the efficiency and security of your parking facilities with GateBot, built on Mialo.AI platform. Leveraging Automated Number Plate Recognition (ANPR) technology, our platform monitors and tracks how long vehicles remain parked, ensuring optimal space utilization and heightened safety measures.",
    image: vehicle_dwell_time,
    items: [
      "Real-Time Monitoring: Accurately detect and log vehicles parked for extended durations.",
      "Proactive Security: Identify unauthorized or suspicious vehicles based on prolonged dwell times.",
      "Seamless Integration: Effortlessly integrate with existing parking systems for smooth and efficient operations.",
    ],
    description2:
      "Create a secure, streamlined parking experience while maximizing operational efficiency with Mialo.AI.",
  },
  {
    useCaseId: "human_identification_infra",
    title:
      "Enhance Human Recognition and Security with Advanced Identification",
    subTitle: "Human Identification",
    description1:
      "Leverage cutting-edge facial recognition solutions with the Mialo.AI platform to intelligently identify individuals. This solution is highly relevant for businesses, legal entities, or security operations, ensuring accurate identification for compliance, access control, and enhanced security protocols, reducing the risk of unauthorized access or fraud.",
    image: Human_Identification,
    items: [
      "Recognize individual customers by identifying their face.",
      "Enhance loss prevention through accurate identification.",
      "Ensure all identification processes adhere to privacy regulations.",
    ],
  },
  {
    useCaseId: "visitor_management_infra",
    title:
      "Unlock Seamless Visitor Management Experience for Visitors and Staff Alike",
    subTitle: "Visitor Management",
    description1:
      "Transform how you manage visitors with the Mialo.AI platform. Using ANPR (Automatic Number Plate Recognition) and FR (Facial Recognition) based Access Control, the platform simplifies the check-in and check-out process while giving you complete visibility into entry/exit logs and dwell times. If prolonged dwell times are detected, our system triggers real-time alerts, allowing you to take action to maintain a secure and organized environment.",
    image: visitor_management,
  },
  {
    useCaseId: "intrusion_detection_infra",
    title:
      "Elevate Security with Advanced Intrusion Detection for Infrastructure Businesses",
    subTitle: "Intrusion Detection",
    description1:
      "Safeguard your premises with Mialo.AI’s intelligent Intrusion Detection solution. Powered by advanced computer vision and deep learning, our platform monitors predefined areas in real-time, analyzing video feeds from your existing CCTV cameras to detect unauthorized access with pinpoint accuracy.",
    image: intrusion_detection,
    items: [
      "Real-Time Alerts: Instantly identify and log intrusions, including the exact date, time, and location.",
      "Proactive Security: Receive automated alerts for unauthorized individuals or objects entering restricted zones.",
      "Offline Functionality: Leverage edge AI for robust, scalable, and privacy-preserving perimeter protection, even during system downtimes.",
    ],
    description2:
      "Ensure the highest level of security with a solution built to meet the dynamic needs of infrastructure businesses.",
  },
  {
    useCaseId: "vehicle_access_control_infra",
    title:
      "Streamline Access Control with FR and ANPR Technologies for Infrastructure Facilities",
    subTitle: "ANPR-Based Vehicle Access Control",
    description1:
      "Enhance security and efficiency in your infrastructure facility with our advanced Access Control solution, powered by Facial Recognition (FR) and Automated Number Plate Recognition (ANPR) technologies. This intelligent system ensures seamless, automated access for authorized personnel and vehicles while maintaining robust security protocols.",
    image: anpr_based,
    items: [
      "Authenticate employees and visitors with precision, enabling touchless, secure access through facial recognition.",
      "Leverage ANPR to identify and authorize vehicles entering and exiting the facility.",
      "Restrict access to designated areas for unauthorized individuals and vehicles.",
      "Compatible with existing security and surveillance systems, including boom barriers, turnstiles, and CCTV networks.",
    ],
    description2:
      "Transform access management with a solution that combines advanced technology and reliability for secure and efficient operations.",
  },
  {
    useCaseId: "authorized_employee_access_infra",
    title: "Secure Authorized Employee Access for Your Infrastructure Facility",
    subTitle: "Authorized Employee Access",
    description1:
      "Ensure restricted areas in your infrastructure facility are accessible only to authorized personnel with Mialo.AI’s Facial Recognition (FR)-based Access Control solution. Designed to eliminate the risk of unauthorized entry, our system enhances security while providing seamless, automated access.",
    image: authorized_employee_access,
    items: [
      "Accurate Tracking: Monitor and log entry/exit times of authorized employees, creating detailed records for audits and compliance.",
      "Effortless Integration: Easily connects with existing security or HR systems for streamlined access management.",
      "Scalable Solution: Ideal for businesses of all sizes, from SMEs to large enterprises with multiple access points.",
    ],
    description2:
      "Empower your facility with a reliable, AI-driven solution that ensures security and operational efficiency.",
  },
  {
    useCaseId: "facial_recognition_infra",
    title: "Enhance Security and Efficiency with Facial Recognition for Infrastructure Facilities",
    subTitle: "Facial Recognition",
    description1:
      "Utilize Mialo.AI’s advanced computer vision capabilities to detect and identify faces across multiple camera streams in real-time. Perfectly suited for infrastructure facilities, this intelligent solution ensures secure, authorized access while streamlining operational processes.",
    image: facial_recognition,
    items: [
      "Real-Time Identification: Quickly recognize individuals or groups through automated facial detection.",
      "Streamlined Operations: Simplify processes like attendance tracking and visitor management.",
      "Enhanced Security: Protect your facility against unauthorized access and fraudulent activities.",
      "Improved User Experience: Deliver a seamless, personalized, and hassle-free experience for employees and visitors.",
    ],
    description2:
      "Transform your infrastructure facility with an AI-powered solution that prioritizes security, efficiency, and convenience.",
  },
  {
    useCaseId: "document_pre_processing_infra",
    title: "Automate Document Pre-processing with a Low-Code Solution",
    subTitle: "Document Pre-processing",
    description1:
      "Streamline document management in your infrastructure facility with an advanced, low-code solution designed to automate data extraction and processing. Utilizing cutting-edge technologies like Large Language Models (LLM) and computer vision, our platform intelligently identifies, extracts, and organizes key information from both structured and unstructured documents.",
    image: document_preprocessing,
    items: [
      "Effortlessly capture essential details from various documents.",
      "Transform unstructured content into organized, usable data.",
      "Reduce errors and eliminate the need for manual data entry.",
      "Accelerate workflows to support faster decision-making.",
    ],
    description2:
      "Seamlessly integrate this solution with your existing systems to enhance operational efficiency and ensure effective document handling for your business.",

  },
  {
    useCaseId: "invoice_processing_management_infra",
    title: "Optimize Invoice Processing and Management for Infrastructure Facilities",
    subTitle: "Invoice Processing & Management",
    description1:
      "Revolutionize invoice management in your infrastructure facility with Mialo.AI’s intelligent platform. By leveraging advanced AI and OCR technologies, our solution automates the capture, extraction, validation, and processing of invoice data, ensuring accuracy while minimizing manual effort.",
    image: Invoice_processing_and_management,
    items: [
      "Utilize OCR combined with AI to accurately extract data from invoices.",
      "Analyze invoice patterns with Machine Learning for enhanced processing reliability.",
      "Employ NLP capabilities to interpret invoices in various languages & formats for smooth workflows.",
      "Automatically route extracted data for quicker approvals and payments."
    ],
  },
  {
    useCaseId: "automated_data_extraction_infra",
    title: "Instantly and Accurately Extract Document Data with AI",
    subTitle: "Automated Data Extraction & Parsing",
    description1:
      "Efficiently managing large volumes of data is essential in today's fast-paced business landscape. Traditional manual methods can be labor-intensive and error-prone. Mialo.AI’s Automated Data Extraction & Parsing solutions revolutionize document management by utilizing advanced technologies like AI, Machine Learning, and Optical Character Recognition (OCR).",
    image: data_extraction,
    items: [
      "Expedite workflows with integrated API links for instant document approvals.",
      "Analyze data to uncover patterns, enabling informed decision-making.",
      "Provide data in any format for extraction.",
    ],
  },
  ///////////////////////////////////////////////////////////////////////////////////

  {
    useCaseId: "parking_management_logi",
    title:
      "Transform Your Logistics Parking Operations with a Future-Ready Solution",
    subTitle: "Parking Management",
    description1:
      "Enhance operational efficiency and convenience in logistics with our AI-driven parking management solution. Designed specifically for the dynamic needs of logistics hubs, our system provides real-time insights into parking availability, ensures optimal space utilization, and streamlines parking processes for vehicles.",
    image: Smart_Parking,
    items: [
      "Seamlessly identify, monitor, and authorize vehicles for secure and efficient parking.",
      "Customized for high-traffic environments, ensuring smooth operations at loading docks, warehouses, and depots.",
      "Effortlessly integrates with existing systems like boom barriers, CCTVs, and vehicle tracking solutions.",
    ],
  },
  {
    useCaseId: "visitor_management_logi",
    title:
      "Seamless Visitor Management with Advanced AI for Logistics",
    subTitle: "Visitor Management",
    description1:
      "Make visitor management effortless and secure in logistics hubs with Mialo.AI's intelligent platform. Leveraging ANPR (Automatic Number Plate Recognition) and FR (Facial Recognition) based Access Control, our solution streamlines check-ins and check-outs while providing complete oversight of visitor activity.",
    image: visitor_management,
    items: [
      "Automate the entry and exit process for visitors with cutting-edge recognition technologies.",
      "Track entry/exit logs and visitor dwell times to maintain operational efficiency.",
      "Receive instant notifications for prolonged dwell times, ensuring a secure and organized facility.",
    ],
  },
  {
    useCaseId: "threat_detection_response_logi",
    title:
      "Safeguard Your Logistics Assets with Intelligent, Sensorless Fire Detection",
    subTitle: "Threat Detection & Response",
    description1:
      "Protect your logistics operations with an advanced AI-driven Threat Detection and Response system. Leveraging Mialo.AI, our platform ensures rapid identification and effective management of potential threats, safeguarding assets, personnel, and operational continuity.",
    image: threat_detection,
    items: [
      "Instantly detect and respond to events such as fire or smoke.",
      "IAI-powered alerts integrate with alarms to minimize response times.",
      "Empower safety teams to act swiftly and efficiently to address potential risks.",
    ],
  },
  {
    useCaseId: "intrusion_detection_logi",
    title:
      "Strengthen Security with Intrusion Detection for the Logistics Sector",
    subTitle: "Intrusion Detection",
    description1:
      "Safeguard your logistics facilities with Mialo.AI’s intelligent Intrusion Detection solution. Utilizing advanced computer vision and deep learning, our platform monitors critical areas in real-time through existing CCTV cameras, ensuring unauthorized access is detected with precision.",
    image: intrusion_detection,
    items: [
      "Instantly identify and log intrusions, capturing exact dates, times, and locations.",
      "Get automated notifications for unauthorized entries into restricted zones.",
      "Leverage edge AI for robust and scalable perimeter security, even during system downtimes.",
    ],
    description2:
      "Ensure comprehensive protection for your logistics operations with a cutting-edge solution tailored for security and efficiency.",
  },
  {
    useCaseId: "vehicle_access_control_logi",
    title:
      "Redefine Access Management with a Secure, Efficient, & Reliable AI Solution ",
    subTitle: "ANPR-Based Vehicle Access Control",
    description1:
      "Enhance security and streamline operations in logistics facilities with our advanced Access Control solution. Powered by Facial Recognition (FR) and Automated Number Plate Recognition (ANPR) technologies, this intelligent system ensures seamless and secure access for authorized personnel and vehicles.",
    image: anpr_based,
    items: [
      "Touchless Authentication: Enable secure, automated access with precise facial recognition for employees and visitors.",
      "Vehicle Access Management: Use ANPR to efficiently identify and authorize vehicles entering and exiting the facility.",
      "Restricted Access Control: Safeguard designated areas by restricting unauthorized individuals and vehicles.",
      "Seamless Integration: Compatible with existing security systems, including boom barriers, turnstiles, and CCTVs.",
    ],
  },
  {
    useCaseId: "ergonomic_risk_analysis_logi",
    title:
      "Promote a Healthier, Safer Working Environment with Innovative Ergonomic Risk Analysis",
    subTitle: "Ergonomic Risk Analysis",
    description1:
      "Protect your workforce in logistics operations with our Edge-AI based Ergonomic Risk Analysis solution. By leveraging advanced video analytics, the platform monitors employee posture and movements in real time, identifying potential ergonomic risks to minimize health issues and improve workplace safety.",
    image: ergonomic_risk_analysis,
    items: [
      "Detect improper posture, repetitive movements, and prolonged stationary positions.",
      "Works with existing surveillance systems to perform vision-based analysis.",
      "Ensures employee privacy with no video storage locally or in the cloud.",
    ],
  },
  {
    useCaseId: "authorized_employee_access_logi",
    title: "Empower Your Logistics Facility with AI-driven Access Control",
    subTitle: "Authorized Employee Access",
    description1:
      "Enhance security in your logistics operations with Mialo.AI’s Facial Recognition (FR)-based Authorized Employee Access solution. Designed to restrict access to authorized personnel, this advanced system ensures seamless, automated entry while safeguarding sensitive areas.",
    image: authorized_employee_access,
    items: [
      "Track and log entry/exit times, creating detailed records for audits and compliance.",
      "EEasily integrates with existing security or HR systems for streamlined management.",
      "Suitable for logistics businesses of all sizes, from single hubs to large-scale networks with multiple access points.",
    ],
  },
  {
    useCaseId: "invoice_processing_management_logi",
    title: "Accelerate Invoice Workflows and Boost Operational Performance",
    subTitle: "Invoice Processing & Management",
    description1:
      "Logistics companies can streamline their financial operations by leveraging Mialo.AI's advanced computer vision and NLP technologies. Our AI-driven platform is designed to automate invoice processing, ensuring precision, efficiency, and seamless management.",
    image: Invoice_processing_and_management,
    items: [
      "Extract critical details from invoices using Optical Character Recognition (OCR) enhanced with AI for unmatched accuracy.",
      "Verify and process data with NLP capabilities that understand and interpret invoices in diverse formats and languages.",
      "Route extracted data through approval and payment processes efficiently, minimizing manual effort.",
      "Use machine learning to analyze invoice patterns, improve financial oversight, and reduce errors."
    ],
  },
  {
    useCaseId: "automated_data_extraction_logi",
    title: "Instantly and Accurately Extract Document Data with AI",
    subTitle: "Automated Data Extraction & Parsing",
    description1:
      "Efficiently managing large volumes of data is essential in today's fast-paced business landscape. Traditional manual methods can be labor-intensive and error-prone. Mialo.AI’s Automated Data Extraction & Parsing solutions revolutionize document management by utilizing advanced technologies like AI, Machine Learning, and Optical Character Recognition (OCR).",
    image: data_extraction,
    items: [
      "Expedite workflows with integrated API links for instant document approvals.",
      "Analyze data to uncover patterns, enabling informed decision-making.",
      "Provide data in any format for extraction.",
    ],
  },
  {
    useCaseId: "summary_generation_logi",
    title: "Smart Summaries for Faster, Informed Decisions",
    subTitle: "Summary Generation",
    description1:
      "Streamline your content consumption and make every moment count with intelligent summarization. Mialo.AI’s advanced AI condenses extensive video footage—such as 24-hour recordings—into concise, focused summaries, highlighting the most critical events so you can prioritize what truly matters.",
    image: summary_generation,
    items: [
      "Access key insights quickly from lengthy datasets or reports.",
      "Focus on essential information that requires immediate attention.",
      "Seamlessly incorporate summaries into your workflows for enhanced productivity and accessibility.",
    ],
  },

  ///////////////////////////////////////////////////////////////////////////////////

  {
    useCaseId: "human_identification_security",
    title:
      "Enhance Human Recognition and Security with Advanced Identification",
    subTitle: "Human Identification",
    description1:
      "Leverage cutting-edge facial recognition solutions with the Mialo.AI platform to intelligently identify individuals. This solution is highly relevant for businesses, legal entities, or security operations, ensuring accurate identification for compliance, access control, and enhanced security protocols, reducing the risk of unauthorized access or fraud.",
    image: Human_Identification,
    items: [
      "Recognize individual customers by identifying their face.",
      "Enhance loss prevention through accurate identification.",
      "Ensure all identification processes adhere to privacy regulations.",
    ],
  },
  {
    useCaseId: "vehicle_access_control_security",
    title:
      "Transform Access Control with a Reliable, AI-driven Solution Built to Meet Unique Security Needs",
    subTitle: "ANPR-Based Vehicle Access Control",
    description1:
      "Enhance the security and efficiency of your business with an advanced Access Control system tailored for the security industry. Utilizing state-of-the-art technologies like Facial Recognition (FR) and Automated Number Plate Recognition (ANPR), this intelligent solution ensures secure, seamless access for authorized personnel and vehicles while maintaining operational excellence.",
    image: anpr_based,
    items: [
      "Enable secure and automated entry with precise facial recognition for employees and visitors.",
      "Use ANPR to quickly identify and authorize vehicles entering and exiting the premises.",
      "Restrict access to sensitive zones, ensuring only authorized individuals and vehicles are allowed.",
      "Easily integrates with existing security infrastructure, including boom barriers, turnstiles, and CCTV systems.",
    ],
  },
  {
    useCaseId: "anomaly_detection_security",
    title: "Identify Anomalies and Irregular Patterns in Real Time",
    subTitle: "Anomaly Detection",
    description1:
      "Elevate your security systems with our AI platform, Mialo.AI, designed to identify and respond to threats in real time using computer vision capabilities. The platform continuously monitors environments for irregular activities such as unauthorized entries, abandoned objects, unusual movements, or potentially dangerous behaviors. By integrating with existing surveillance systems, such as CCTV cameras and IoT devices, it creates a proactive defense mechanism that reduces risks and enhances safety. With customizable detection parameters, it caters to various industries and ensures a robust, reliable security framework.",
    image: anomaly_detection,
    items: [
      "Instant Threat Identification",
      "Behavior Pattern Analysis in Real Time ",
      "Predictive Risk Assessment",
      "Enhanced Incident Response",
    ],
  },
  {
    useCaseId: "speed_monitoring_security",
    title: "Ensure Safer Driving Environments with ANPR Technology",
    subTitle: "Speed Monitoring",
    description1:
      "Leverage the Mialo.AI platform that uses advanced Automatic Number Plate Recognition (ANPR) technology, to enhance speed monitoring and ensure road safety. Our solution delivers real-time insights into vehicle speeds, helping to prevent traffic violations and reduce accidents, while promoting efficient traffic management.",
    image: speed_monitoring,
    items: [
      "Instantly identify speeding vehicles, enabling prompt enforcement actions.",
      "Analyze traffic patterns and trends for better road safety planning.",
      "Effortlessly connect with existing traffic management systems and surveillance devices",
    ],
    description2:
      "Mialo.AI's speed monitoring solution creates safer, smarter roads by combining precision technology with actionable insights.",
  },
  {
    useCaseId: "authorized_employee_access_security",
    title: "Maintain the Highest Security Standards with AI",
    subTitle: "Authorized Employee Access",
    description1:
      "Strengthen the security of your facility with Mialo.AI’s advanced Access Control solution powered by Facial Recognition (FR) and Automated Number Plate Recognition (ANPR). This intelligent system ensures seamless, automated access for authorized personnel and vehicles while safeguarding restricted areas.",
    image: authorized_employee_access,
    items: [
      "Monitor and log entry/exit times for detailed audit and compliance records.",
      "Enable secure, automated access through precise facial recognition technology.",
      "Use ANPR to efficiently authorize vehicles entering and exiting the premises.",
      "Easily integrates with existing security and HR systems for streamlined operations.",
      "Ideal for facilities of all sizes, from single locations to large-scale networks with multiple access points."
    ],
  },
  {
    useCaseId: "visitor_management_security",
    title:
      "Ensure a Secure, Organized Environment with a Cutting-Edge AI Platform",
    subTitle: "Visitor Management",
    description1:
      "Elevate your security operations with Mialo.AI. Powered by Automated Number Plate Recognition (ANPR), and Facial Recognition (FR) based Access Control, the system simplifies check-in and check-out processes while providing complete visibility into entry/exit logs and dwell times.",
    image: visitor_management,
    items: [
      "Automate visitor authentication and tracking for a seamless experience.",
      "Gain real-time insights into visitor activity, including entry, exit, and dwell times.",
      "Detect prolonged dwell times & receive instant alerts to address potential security concerns.",
    ],
  },
  {
    useCaseId: "summary_generation_security",
    title: "Transform how you monitor and manage security footage with an AI Platform",
    subTitle: "Summary Generation",
    description1:
      "Enhance operational efficiency in security businesses with Mialo.AI’s Summary Generation feature. This advanced solution condenses hours of video surveillance footage into concise, actionable summaries, allowing you to focus on critical events without sifting through extensive recordings.",
    image: summary_generation,
    items: [
      "Quickly access key moments from lengthy surveillance videos, saving valuable time.",
      "Receive summaries that highlight critical events requiring immediate attention.",
      "Seamlessly incorporate video summaries into your processes to boost productivity and responsiveness.",
    ],
  },


  /////////////////////////////////////////////////////////////////////////////////////

  {
    useCaseId: "people_counting_healthcare",
    title: "Deliver Unparalleled Patient Care with AI-Powered People Counting for Healthcare Facilities",
    subTitle: "People Counting",
    description1:
      "Elevate care delivery and patient management with an AI platform designed to provide real-time people counting in healthcare facilities. Leveraging advanced computer vision technologies, this solution accurately tracks the total number of individuals within your facility, enabling efficient resource allocation and superior patient experiences.",
    image: people_counting,
    items: [
      "Monitor the number of people in key areas for effective crowd management.",
      "Ensure optimal staff-to-patient ratios for best-in-class care delivery.",
      "Improve facility management by allocating resources based on real-time data.",
      "Adapt to facilities of any size with precision and reliability."
    ]
  },
  {
    useCaseId: "crowd_monitoring_healthcare",
    title: "Redefine Crowd Management in Healthcare with Intelligent AI",
    subTitle: "Crowd Monitoring",
    description1:
      "Leverage the advanced computer vision capabilities of Mialo.AI to monitor and manage crowd density within your healthcare facility. By utilizing existing CCTV cameras, the platform provides real-time insights to ensure optimal patient flow, safety, and efficient resource allocation.",
    image: crowd_monitoring,
    items: [
      "Accurately track and assess crowd sizes and distribution across your facility.",
      "Adjust layouts and allocate staff to maintain smooth movement and prevent bottlenecks.",
      "Gain actionable intelligence to prevent overcrowding and maintain a safe, welcoming environment."
    ]
  },
  {
    useCaseId: "threat_detection_response_healthcare",
    title: "Proactive Threat Detection for Healthcare Facilities with AI-Driven Solutions",
    subTitle: "Threat Detection & Response",
    description1: "Ensure a secure and efficient environment in your healthcare facility with an AI platform that leverages advanced computer vision technologies. This intelligent system not only counts the total number of people within the facility but also detects potential threats in real time, enhancing safety and enabling better patient management.",
    description2: "Enhance safety, care delivery, and patient management at your healthcare facility with Mialo.AI, an advanced low-code AI platform.",
    image: threat_detection,
    items: [
      "Monitor activity across the facility to detect unusual or unauthorized behavior.",
      "Maintain a secure environment for patients, staff, and visitors by identifying potential risks early.",
      "Track the total number of individuals in the facility to prevent overcrowding and ensure optimal care delivery.",
      "Use data-driven alerts to respond swiftly to potential security concerns."
    ]
  }
  ,
  {
    useCaseId: "vehicle_access_control_healthcare",
    title:
      "Simplified Access Management with ANPR-Based Vehicle Access Control System",
    subTitle: "ANPR-Based Vehicle Access Control",
    description1:
      "Manage and regulate the movement of vehicles in and out of designated areas with our ANPR-based parking solution. This advanced Access Control Solution captures and stores real-time data, enabling seamless automation at entry gates.",
    image: anpr_based,
    items: [
      "Round-the-Clock Surveillance for Enhanced Security",
      "Unmatched Recognition of Number Plates with Accuracy",
      "Secure Evidence Storage for All Entries and Exits",
      "Efficient Visitor and Vehicle Management",
      "Powerful Analytics Dashboard to Visualize Comprehensive Data",
    ],
  },
  {
    useCaseId: "authorized_employee_access_healthcare",
    title: "Redefine Authorized Employee Access for Healthcare with AI Innovation",
    subTitle: "Authorized Employee Access",
    description1: "Protect restricted areas in your healthcare facility with a cutting-edge AI-powered platform utilizing computer vision to ensure only authorized personnel gain access. This advanced solution strengthens security, supports compliance, and optimizes operations, safeguarding sensitive spaces.",
    description2: "Elevate your healthcare operations with a reliable, AI-driven access control solution that prioritizes safety and efficiency.",
    image: authorized_employee_access,
    items: [
      "Facial recognition enables smooth and secure entry for authorized employees.",
      "Prevent unauthorized access to restricted zones with precision AI monitoring.",
      "Log entry and exit activities for comprehensive compliance and audit trails.",
      "Easily integrate with existing HR and security systems for unified management."
    ]
  }
  ,
  {
    useCaseId: "document_pre_processing_healthcare",
    title: "Maximize Productivity and Patient Care with an AI-driven Document Pre-processing",
    subTitle: "Document Pre-processing",
    description1: "Transform how your healthcare facility manages documents by leveraging an AI platform powered by Natural Language Processing (NLP) and computer vision. This intelligent solution automates the compilation, formatting, transmission, and storage of reports, ensuring a systematic and efficient approach to document management.",
    image: document_preprocessing,
    items: [
      "Accurately extract key information from medical records, forms, and reports.",
      "Standardize document layouts for consistent and professional reporting.",
      "Easily transmit compiled reports to the appropriate departments or systems.",
      "Systematically store reports for quick retrieval and compliance."
    ]
  },
  {
    useCaseId: "invoice_processing_management_healthcare",
    title: "Transform Invoice Management, Boost Operational Efficiency",
    subTitle: "Invoice Processing & Management",
    description1: "Automate invoice handling in your healthcare facility with an advanced AI platform that leverages Natural Language Processing (NLP) and computer vision. This intelligent solution streamlines the entire lifecycle of invoice management, from data extraction to validation and approval, ensuring efficiency and accuracy.",
    image: Invoice_processing_and_management,
    items: [
      "Extract essential information from invoices, including amounts, dates, and vendor details, with precision.",
      "Leverage NLP to verify invoice data against predefined rules, reducing errors and inconsistencies.",
      "Effortlessly connect the system with your existing accounting or ERP software for smooth workflows.",
      "Monitor the status of invoices at every stage to ensure timely approvals and payments.",
      "Systematically archive invoices for easy retrieval and compliance."
    ]
  },

  {
    useCaseId: "document_classification_healthcare",
    title: "Effortless Document Classification for Healthcare Facilities with AI",
    subTitle: "Document Classification",
    description1: "Redefine the way how your healthcare facility manages documents with an AI platform that uses Natural Language Processing (NLP) and computer vision technology. This intelligent platform automates the classification of diverse medical and administrative documents, ensuring efficient organization and streamlined workflows.",
    image: document_classification,
    items: [
      "Accurately classify documents such as patient records, invoices, and reports by type, department, or priority.",
      "Extract and analyze key information to categorize documents with precision.",
      "Identify and classify documents based on layouts and patterns through computer vision.",
      "Save time and reduce manual errors while maintaining systematic storage for easy retrieval."
    ]
  },
  {
    useCaseId: "automated_data_extraction_healthcare",
    title: "Automate Healthcare Document Data Extraction",
    subTitle: "Automated Data Extraction & Parsing",
    description1: "Boost efficiency and accuracy in handling critical information at your healthcare facility with an advanced AI-powered solution for automatic data extraction and parsing. Designed to seamlessly fetch and process data from diverse documents, this system simplifies access to medical records, patient histories, lab reports, treatment plans, invoices, and more.",
    image: data_extraction,
    items: [
      "Retrieve essential information from medical records, lab reports, prescriptions, and invoices effortlessly.",
      "Organize unstructured data into a structured format for easy analysis and accessibility.",
      "Enable quick access to patient medical history and treatment plans to support informed decisions.",
      "Minimize errors and manual input with intelligent AI-powered processing."
    ]
  }
  ,
  {
    useCaseId: "document_review_analysis_healthcare",
    title: "Efficient Medical Document Review and Analysis Using AI",
    subTitle: "Document Review & Analysis",
    description1: "Review and analyze your healthcare facility’s critical documentation better with an advanced AI platform, Mialo.AI. This platform enables precise and efficient analysis of medical records, patient histories, treatment plans, invoices, and more, supporting informed decision-making and streamlined healthcare operations.",
    image: Document_Review_and_analysis,
    items: [
      "Analyze detailed medical records, lab results, and patient histories for accurate insights.",
      "Evaluate and compare treatment plans to ensure optimal care for each patient.",
      "Verify and cross-check billing details for transparency and accuracy.",
      "Extract meaningful data from unstructured text through Natural Language Processing (NLP).",
      "Facilitate better clinical and administrative decisions with organized, actionable insights."
    ]
  }
  ,
  {
    useCaseId: "fraud_detection_healthcare",
    title: "Equip Healthcare Facility with a Robust AI Solution to Prevent Fraud",
    subTitle: "Fraud Detection",
    description1: "Safeguard your healthcare facility from fraudulent activities with an advanced AI-powered Fraud Detection system. By leveraging Natural Language Processing (NLP) and machine learning, this solution reviews medical records, patient histories, treatment plans, and invoices to identify discrepancies and potential fraud, ensuring operational integrity and compliance.",
    image: Fraud_detection,
    items: [
      "Detect inconsistencies or altered data in patient medical records and histories.",
      "Identify billing irregularities, duplicate claims, or overcharging in invoices.",
      "Use AI to identify unusual patterns or anomalies indicative of fraudulent behavior.",
      "Maintain adherence to healthcare regulations and insurance requirements."
    ]
  }
  ,
  {
    useCaseId: "smart_chatbot_healthcare",
    title: "Deliver Superior Patient Experiences with AI-Backed Smart Assistance",
    subTitle: "Smart Assistance",
    description1: "Improve patient support and communication in your healthcare facility with AI-powered smart assistance and chatbots. Designed to improve care delivery and streamline doctor-patient interactions, this solution provides instant, personalized support to patients while optimizing administrative tasks for medical staff.",
    image: Smart_Assistance,
    items: [
      "24/7 Patient Support",
      "Enhanced Doctor-Patient Communication",
      "Personalized Care Recommendations",
      "Streamlined Workflows",
      "Multilingual Support"
    ]
  },
  ///////////////////////////////////////////////////////////
  {
    useCaseId: "service_quality_experience_hospitality",
    title: "Leverage AI to Deliver Exceptional Experiences to Your Guests",
    subTitle: "Service Quality & Experience",
    description1:
      "At its core, the hospitality industry is about delivering exceptional service, and AI can help you exceed customer expectations. With Mialo.AI’s advanced capabilities, you can personalize the guest journey, improve operational efficiency, and create memorable experiences that foster customer loyalty and satisfaction.",
    image: customer_experience,
    items: [
      "Gain deep insights into customer preferences to tailor every interaction uniquely.",
      "Optimize response times to better meet guest needs and expectations.",
      "Streamline processes and improve facility layouts for a seamless guest experience.",
      "Build strong customer relationships through personalized, high-quality service."
    ],
  },
  {
    useCaseId: "automatic_visual_inspection_hospitality",
    title: "Ensure Adherence to Safety and Operating Standards",
    subTitle: "Automatic Visual Inspection & Compliance",
    description1:
      "Maintain the highest standards of safety, hygiene, and operational excellence in your hotel with AI-driven automatic visual inspection and compliance solutions. Our advanced platform monitors critical aspects of your facility in real-time to ensure strict adherence to industry regulations and brand standards.",
    image: automatic_visual_inspection_compliance,
    items: [
      "Ensure adherence to safety protocols and Standard Operating Procedures (SOPs), including cleanliness and hygiene.",
      "Streamline inspection processes to optimize resource management and enhance productivity.",
      "Monitor staff uniforms, room setups, and facility maintenance to uphold brand standards.",
      "Use AI-powered tools to track and address compliance issues proactively.",
    ],
  },
  {
    useCaseId: "store_security_hospitality",
    title: "Protect Your Hotel, Guests, and Staff with a Smart, AI-driven Security Solution",
    subTitle: "Store Security",
    description1:
      "Ensure a safe and secure environment in your hotel with our cutting-edge AI platform, designed to analyze real-time video feeds and detect suspicious activities. Proactively address security threats while maintaining a welcoming experience for your guests. ",
    image: store_security,
    items: [
      "Identify and address suspicious behavior or security breaches before they escalate.",
      "Receive real-time notifications to mitigate risks like theft, unauthorized access, or property damage.",
      "Maintain strict adherence to security measures without disrupting guest comfort.",
      "Incorporate AI-powered security with your existing surveillance and management systems."
    ],
  },
  {
    useCaseId: "anomaly_detection_hospitality",
    title: "Detect Anomalies in Real Time with AI and Protect Assets and Minimizes Operational Risks",
    subTitle: "Anomaly Detection",
    description1:
      "Improve safety and operational efficiency in your hotel with AI-powered anomaly detection. By leveraging advanced computer vision technology, our platform identifies unusual patterns or deviations in real time, allowing you to address potential issues before they escalate.",
    image: anomaly_detection,
    items: [
      "Instantly identify structural issues, equipment malfunctions, or system irregularities.",
      "Spot potential problems early to reduce downtime, repair costs, and service disruptions.",
      "Track abnormalities across building systems, utilities, and critical infrastructure to protect assets and guests.",
      "Maintain a safe, efficient environment while ensuring the comfort and security of your guests.",
    ],
  },
  {
    useCaseId: "people_counting_hospitality",
    title: "Enhance Operational Efficiency with Precise People Counting",
    subTitle: "People Counting",
    description1:
      "Leverage AI-powered people counting to enhance operational efficiency at your hotel. By integrating with your existing surveillance systems, our advanced platform provides real-time insights into foot traffic across key areas like lobbies, elevators, entrances, and dining spaces.",
    image: people_counting,
    items: [
      "Monitor guest movement to understand traffic patterns throughout your hotel.",
      "Use real-time data to plan staffing and services during high-traffic periods.",
      "Address congestion points to improve guest flow and comfort.",
      "Make data-driven decisions to allocate resources and maximize efficiency.",
    ],
  },
  {
    useCaseId: "crowd_monitoring_hospitality",
    title: "Smart Crowd Management for Hotels Through AI Innovation",
    subTitle: "Crowd Monitoring",
    description1:
      "Leverage the power of Mialo.AI’s computer vision technology to effectively manage crowd density in your hotel. By integrating with existing CCTV systems, this solution provides real-time monitoring and actionable insights, ensuring a safe and seamless guest experience.",
    image: crowd_monitoring,
    items: [
      "Continuously track crowd sizes and distribution across lobbies, event spaces, and common areas.",
      "Adjust layouts and staff deployment to maintain smooth crowd movement and reduce congestion.",
      "Use data-driven insights to prevent overcrowding and create a secure environment for guests and staff.",
    ],
  },
  {
    useCaseId: "visitor_management_hospitality",
    title:
      "Visitor Management Made Seamless for Hotels with AI-Powered ANPR Technology",
    subTitle: "Visitor Management",
    description1:
      "Streamline and secure visitor management in hotels with Mialo.AI’s intelligent platform. Using Automatic Number Plate Recognition (ANPR) technology, our solution automates entry and exit processes to make guest visits seamless while providing comprehensive oversight of visitor activity to enhance safety and efficiency.",
    image: visitor_management,
    items: [
      "Simplify check-ins and check-outs with advanced recognition technologies.",
      "Maintain detailed entry/exit logs and monitor visitor dwell times for better management.",
      "Get instant notifications for prolonged dwell times, ensuring a safe and organized environment."
    ]
  },
  {
    useCaseId: "vehicle_access_control_hospitality",
    title:
      "Unlock the Future of Hotel Security with AI-driven Systems",
    subTitle: "ANPR-Based Vehicle Access Control",
    description1:
      "Uncover the benefits of advanced video analytics to enhance the security and convenience of your hospitality facilities, including hotels and restaurants. Utilizing cutting-edge Facial Recognition (FR) and Automated Number Plate Recognition (ANPR) technologies, our intelligent platform, Mialo.AI, ensures seamless, automated access for guests, staff, and vehicles, while maintaining robust security protocols.",
    image: anpr_based,
    items: [
      "Enable secure and personalized access for hotel guests and restaurant patrons using facial recognition.",
      "Use ANPR to automatically identify and authorize guest and staff vehicles for parking and entry.",
      "Restrict access to private areas, ensuring only authorized personnel can enter sensitive zones.",
      "Easily integrates with existing hospitality management systems for a smooth and connected experience.",
      "Deliver a seamless, secure, and hassle-free journey for guests from check-in to departure.",
    ],
    description2:
      "Transform your hospitality operations with an AI-driven access control system designed to elevate safety, efficiency, and guest satisfaction."
  },
  {
    useCaseId: "authorized_employee_access_hospitality",
    title: "Ensure Secure Employee Access in Hotels with Advanced Video Analytics",
    subTitle: "Authorized Employee Access",
    description1:
      "Safeguard sensitive areas in your hotel with a cutting-edge AI platform that uses advanced computer vision to grant access exclusively to authorized personnel. This intelligent solution enhances security, supports compliance, and streamlines operations, ensuring seamless and secure management of restricted zones.",
    image: authorized_employee_access,
    items: [
      "Enable smooth and secure entry for authorized employees using touchless AI technology.",
      "Protect restricted areas with precision AI monitoring to ensure only authorized access.",
      "Track and log entry and exit activities for compliance and audit readiness.",
      "Seamlessly integrate with existing HR and security systems for unified access management.",
    ],
  },
  {
    useCaseId: "document_pre_processing_hospitality",
    title: "Streamline Operations  with AI-Powered Document Pre-Processing using Mialo.AI",
    subTitle: "Document Pre-processing",
    description1:
      "Transform the way your hotel manages documents with an AI-powered platform that utilizes Natural Language Processing (NLP) and computer vision. This intelligent solution automates the handling of guest records, booking details, invoices, and reports, ensuring a systematic and efficient approach to document management.",
    image: document_preprocessing,
    items: [
      "Effortlessly capture key information from guest forms, invoices, and operational reports.",
      "Standardize document layouts for professional and uniform record-keeping.",
      "Easily route compiled documents to the relevant departments for swift processing.",
      "Maintain systematic document storage for quick retrieval and regulatory compliance.",
    ],
  },
  {
    useCaseId: "invoice_processing_management_hospitality",
    title: "Streamline Invoice Processing and Management in Hotels with AI",
    subTitle: "Invoice Processing & Management",
    description1:
      "Optimize financial operations in your hotel with an AI-powered platform that leverages Natural Language Processing (NLP) and computer vision. This advanced solution automates every stage of invoice management, from data extraction to approval, ensuring accuracy, efficiency, and seamless integration.",
    image: Invoice_processing_and_management,
    items: [
      "Accurately capture key details from invoices, such as amounts, dates, and vendor information.",
      "Use NLP to verify invoice data against predefined rules, minimizing errors and discrepancies.",
      "Connect seamlessly with your existing accounting or ERP systems for streamlined workflows.",
      "Track invoice status at every stage to ensure timely approvals and payments.",
      "Store invoices systematically for quick access and compliance readiness.",
    ],
  },
  {
    useCaseId: "document_classification__hospitality",
    title: "Hassle-Free Document Classification for Hotels with AI",
    subTitle: "Document Classification",
    description1: "Revolutionize document management in your hotel with an AI-powered platform that utilizes Natural Language Processing (NLP) and computer vision technologies. This advanced solution automates the classification of various administrative and guest-related documents, ensuring organized workflows and efficient operations.",
    image: document_classification,
    items: [
      "Classify documents such as guest records, invoices, and bookings by type, department, or priority.",
      "Analyze and extract key details for precise document sorting.",
      "Leverage computer vision to identify and categorize documents based on their structure and patterns.",
      "Save time and reduce manual errors while maintaining systematic storage for easy retrieval."
    ]
  },
  {
    useCaseId: "automated_data_extraction_hospitality",
    title: "Intelligent Data Processing for Hotels with AI",
    subTitle: "Automated Data Extraction & Parsing",
    description1:
      "Streamline document handling and enhance operational efficiency in your hotel with an AI-powered solution for automated data extraction and parsing. This intelligent system effortlessly processes data from a wide range of documents, simplifying access to essential information and optimizing workflows.",
    image: data_extraction,
    items: [
      "Extract key details from guest records, bookings, invoices, and operational reports with precision.",
      "Convert unstructured information into a structured format for easy analysis and accessibility.",
      "Enable fast retrieval of critical data to support informed decision-making and efficient guest management.",
      "Reduce manual input and errors with intelligent AI-powered automation.",
    ],
  },
  {
    useCaseId: "document_review_analysis_hospitality",
    title:
      "Streamlined Document Review and Analysis for Hotels with AI",
    subTitle: "Document Review & Analysis",
    description1:
      "Optimize the review and analysis of critical hotel documentation with an advanced AI-powered platform. This intelligent solution enables precise examination of guest records, booking details, invoices, and operational reports, supporting informed decision-making and efficient hotel management.",
    image: Document_Review_and_analysis,
    items: [
      "Accurately review guest records, booking histories, and operational reports for actionable insights.",
      "Verify and cross-check invoices and financial statements for transparency and precision.",
      "Extract meaningful data from unstructured text for organized and efficient documentation.",
      "Utilize data-driven insights to support better operational and guest management strategies."
    ],
  },

  //////////////////////////////////////////////////////
  {
    useCaseId: "intrusion_detection_agri",
    title:
      "Detect Intrusions in Real Time with AI to Optimize Agricultural Security ",
    subTitle: "Intrusion Detection",
    description1:
      "The agriculture sector is increasingly vulnerable to unauthorized access and resource theft, necessitating AI-powered intrusion detection systems. Traditional security measures often fall short in detecting intrusions across expansive farmlands, livestock facilities, and storage areas. AI-driven solutions leverage computer vision and real-time monitoring to protect agricultural assets and ensure operational integrity. These systems identify unauthorized activities, detect suspicious movements, and provide timely alerts to prevent potential damage or theft.",
    image: intrusion_detection,
    items: [
      "Monitor farmlands, livestock enclosures, and storage facilities in real time to detect intrusions and unauthorized access.",
      "Receive instant notifications of suspicious activities to enable swift action and reduce losses.",
      "Adapt monitoring parameters to suit the unique needs of agricultural operations, including livestock protection and equipment safety.",
    ],
  },

  {
    useCaseId: "anomaly_detection_agri",
    title: "Detect and Address Anomalies in Real Time",
    subTitle: "Anomaly Detection",
    description1:
      "Ensure the security and efficiency of agricultural operations with AI-powered anomaly detection. Leveraging advanced computer vision and real-time monitoring, this intelligent solution identifies unusual patterns and unexpected events, helping protect farmland, livestock, and equipment.",
    image: anomaly_detection,
    items: [
      "Instantly detect and respond to anomalies such as unauthorized access, equipment malfunctions, or irregular activity.",
      "Identify threats like suspicious behavior, changes in livestock behavior, etc.",
      "Easily integrate with existing security systems, including CCTVs and sensors, for comprehensive coverage.",
      "Stay ahead of potential issues to minimize risks and ensure smooth agricultural processes.",
    ],
  },

  //////////////////////////////////////////////////////////////////////////////////

  {
    useCaseId: "crowd_monitoring_manufacture",
    title: "Real-Time Crowd Insights for Manufacturing Units with AI",
    subTitle: "Crowd Monitoring",
    description1:
      "Effectively manage crowd density in manufacturing facilities with Mialo.AI’s advanced computer vision technology. By integrating with existing CCTV systems, this solution provides real-time monitoring and actionable insights to maintain safety and operational efficiency.",
    image: crowd_monitoring,
    items: [
      "Continuously monitor crowd sizes and distribution across production floors, break areas, and entry points.",
      "Adjust layouts and staff deployment to maintain smooth operations and reduce congestion.",
      "Use data-driven insights to ensure compliance with safety standards and create a secure working environment.",
    ],
  },
  {
    useCaseId: "people_counting_manufacture",
    title: "AI-Powered People Counting for Manufacturing Units",
    subTitle: "People Counting",
    description1:
      "Enhance operational efficiency and workforce management in manufacturing facilities with an AI-driven people counting solution. Leveraging advanced computer vision technologies, this platform provides real-time tracking of individuals within the facility, ensuring better resource allocation and safety compliance.",
    image: people_counting,
    items: [
      "Accurately track the number of people in key areas such as production floors, break rooms, and entry points.",
      "Adjust staff allocation based on real-time data to improve workflow and productivity.",
      "Maintain adherence to safety regulations by monitoring occupancy levels in restricted or high-traffic zones.",
      "Use actionable data to streamline facility management and reduce downtime.",
    ],
  },
  {
    useCaseId: "intrusion_detection_manufacture",
    title:
      "Drive Safety, Efficiency, and Operational Excellence at Your Manufacturing Unit",
    subTitle: "Intrusion Detection",
    description1:
      "In manufacturing, efficiency and safety are paramount. Our Mialo.AI platform using its computer vision capabilities continuously monitors equipment, workflows, and personnel activities to identify deviations such as machinery malfunctions, process disruptions, or safety protocol violations. By detecting anomalies and providing real-time alerts, it minimizes costly downtime and prevents workplace accidents. Moreover, it not only enhances operational efficiency but also ensures compliance with industry safety standards.",
    image: intrusion_detection,
    items: [
      "Get instant predictive maintenance alerts ",
      "Ensure high-quality production at reduced costs",
      "Achieve higher productivity and a safer working environment",
    ],
  },
  {
    useCaseId: "authorized_employee_access_manufacture",
    title: "Strengthen Access Control in Manufacturing Units with AI",
    subTitle: "Authorized Employee Access",
    description1:
      "Protect sensitive areas in your manufacturing facility with an advanced AI platform utilizing computer vision technology. This intelligent system ensures that only authorized personnel gain access to restricted zones, enhancing security, compliance, and operational efficiency.",
    image: authorized_employee_access,
    items: [
      "Enable smooth and secure entry for authorized employees using AI-driven facial recognition.",
      "Safeguard critical areas with precision AI monitoring, allowing access only to verified personnel.",
      "Track and log entry and exit activities to ensure compliance and support audit readiness.",
      "Easily connect with existing HR and security systems for unified access management across the facility."
    ],
  },
  {
    useCaseId: "ergonomic_risk_analysis_manufacture",
    title:
      "Foster a Safer Work Environment with Ergonomic Risk Detection",
    subTitle: "Ergonomic Risk Analysis",
    description1:
      "Protect the health and well-being of your workforce in manufacturing facilities with an Edge-AI based Ergonomic Risk Analysis solution. Utilizing advanced video analytics, this platform monitors employee posture and movements in real time to identify ergonomic risks, ensuring a safer and more productive working environment.",
    image: ergonomic_risk_analysis,
    items: [
      "Identify improper posture, repetitive movements, and prolonged stationary positions that may lead to health issues.",
      "Utilize existing surveillance systems for vision-based ergonomic analysis without additional hardware.",
      "Ensure employee privacy with no video storage locally or in the cloud.",
      "Proactively address risks to reduce injuries and improve overall employee well-being."
    ],
  },
  {
    useCaseId: "threat_detection_response_manufacture",
    title:
      "Equip Your Manufacturing Unit with a Smart Threat Detection and Response Solution",
    subTitle: "Threat Detection & Response",
    description1:
      "Unlock safety and security in your manufacturing facility with an AI-powered platform designed to detect and respond to potential threats in real time. Leveraging advanced computer vision technologies, this intelligent solution monitors activity across the facility, enabling swift action to protect assets, equipment, and personnel.",
    image: threat_detection,
    items: [
      "Detect unusual or unauthorized behavior to mitigate risks promptly.",
      "Safeguard workers, equipment, and resources by identifying potential threats early.",
      "Track movements and activity across the unit to ensure safety and operational integrity.",
      "Receive actionable notifications to address security concerns before they escalate.",
    ],
  },
  {
    useCaseId: "anomaly_detection_manufacture",
    title: "Real-Time Anomaly Detection for Manufacturing Units with AI",
    subTitle: "Anomaly Detection",
    description1:
      "Ensure the safety, efficiency, and reliability of your manufacturing operations with AI-powered anomaly detection. Using advanced computer vision and real-time monitoring, this intelligent solution identifies unusual patterns and unexpected events to address potential issues before they escalate.",
    image: anomaly_detection,

    items: [
      "Detect irregularities such as unauthorized access, equipment malfunctions, or unusual activity in real time.",
      "Recognize threats like suspicious behavior or operational disruptions early to prevent downtime and losses.",
      "Seamlessly connect with existing security systems, including CCTVs and sensors, for comprehensive coverage.",
      "Stay ahead of potential risks to maintain smooth workflows and secure manufacturing processes.",
    ],
  },
  {
    useCaseId: "entrance_exit_logs_manufacture",
    title: "Manage Entrance & Exit Logs in Manufacturing Units Like Never Before with Mialo.AI",
    subTitle: "Entrance & Exit Logs",
    description1:
      "Improve security and vehicle management in your manufacturing facility with an AI-powered Entrance and Exit Log solution. Using Automated Number Plate Recognition (ANPR) technology, the system records vehicle movements accurately through existing CCTV cameras or sensors, reducing manual effort and ensuring seamless access control.",
    image: entry_exit_logs,
    items: [
      "Allow access only to authorized vehicles, ensuring facility safety.",
      "Keep a detailed log of all vehicle movements in real time.",
      "Utilize RFID or UHF-based systems for a simplified and automated vehicle access process.",
      "Manage access control processes effectively for greater operational consistency."
    ],
  },
  {
    useCaseId: "automatic_visual_inspection_manufacture",
    title: "Improve Production Efficiency, Minimize Errors, and Uphold the Quality and Safety of Manufacturing Operations",
    subTitle: "Automatic Visual Inspection & Compliance",
    description1:
      "Automate your quality assurance process with AI-driven visual inspection solutions tailored for the manufacturing sector. Designed to enhance efficiency and accuracy, this technology ensures consistent product quality and compliance by analyzing items on production lines and monitoring critical equipment in real time.",
    image: automatic_visual_inspection_compliance,
    items: [
      "Monitor defects and inconsistencies on production lines to maintain high-quality standards.",
      "Inspect storage tanks, pipelines, pressure vessels, and other manufacturing equipment both internally and externally.",
      "Eliminate the need for manual inspections, reducing time and resource consumption.",
      "Conduct scheduled inspections to identify concealed faults early, ensuring operational integrity."
    ],
  },
];

function UseCasesPageComponents(props) {
  const [useCases] = useState(useCasesData);
  let industry = props.industry;
  console.log(props);

  // Get the relevant use case IDs for the selected industry
  const selectedIndustry = industryBasedUseCases.find(
    (ind) => ind.industry === industry
  );
  const relevantUseCaseIds = selectedIndustry
    ? selectedIndustry.useCasesId
    : [];

  // Filter the use cases based on relevant IDs
  const filteredUseCases = useCases.filter((useCase) =>
    relevantUseCaseIds.includes(useCase.useCaseId)
  );
  const NavbarHeight = 90; // Adjust this value to match your navbar height

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - NavbarHeight, // Adjust for the navbar height
        behavior: "smooth",
      });
    }
  };


  useEffect(() => {
    const handleQueryParamChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const industry = urlParams.get("industry");

      if (industry) {
        setTimeout(() => {
          scrollToSection("industry"); // Scroll to the industry section
        }, 0);
      } else {
        setTimeout(() => {
          scrollToSection("industrytop"); // Scroll to the top section
        }, 0);
      }
    };

    // Trigger scroll on component mount
    handleQueryParamChange();
    // Select the element with a specific ID


    const targetElement = document.querySelector("#industry");

    // Check if the element exists to avoid errors
    if (targetElement) {
      const observer = new MutationObserver(() => {
        handleQueryParamChange(); // Your callback function for content change
      });

      // Observe changes to the element's content
      observer.observe(targetElement, {
        characterData: true,  // Observe changes to the text content of the element or its children
        subtree: true,        // Observe changes in all descendant nodes (if you want to watch nested elements as well)
        childList: true,      // Observe changes in the child nodes (added/removed elements)
        attributes: true      // Observe changes in attributes (like class, id, etc.)
      });

      // Cleanup when no longer needed
      return () => {
        observer.disconnect(); // Stop observing
      };
    }

  }, []);

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const section = document.getElementById(hash.substring(1));
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   }
  // }, []);

  return (
    <MKBox id="industrytop" component="section" py={12}>
      <Container >
        <Grid

          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={10}
          lg={7}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography id="industry" variant="h2" mt={3} color="black">
            {industry ? (
              <>
                Use Cases We Solve For <br />
                {industry}
              </>
            ) : (
              "Use Cases We Solve"
            )}
          </MKTypography>

        </Grid>

        {industry
          ? filteredUseCases.map((useCase, index) => (
            <MKBox
              key={index}
              sx={{
                backgroundColor: "white",
                px: { xs: 2, sm: 4, md: 6 }, // Padding for mobile and larger screens
                py: { xs: 1, sm: 1, md: 1 },
              }}
            >
              <Grid
                container
                spacing={3}
                alignItems="center"
                sx={{ mt: 2 }}
                id={useCase.useCaseId}
              >
                {index % 2 === 0 ? (
                  <>
                    <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
                      <MKBox p={{ xs: 2, lg: 6 }}>
                        <MKBox
                          component="img"
                          src={useCase.image}
                          width={{ xs: "100%", md: "130%" }}
                          height="auto"
                          borderRadius="md"
                          shadow="md"
                        />
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ mr: "auto", ml: { xs: 0, md: 6 }, px: { xs: 2 } }}>
                      <MKTypography className=" content-header solution-header" variant="body2" color="black" >
                        {useCase.subTitle}
                      </MKTypography>
                      <MKTypography className="content-sub-header" color="text" variant="h3" pb={2} py={2}>
                        {useCase.title}
                      </MKTypography>
                      <MKTypography style={{ textAlign: 'justify' }} className="content-body" variant="body2" color="black" opacity={0.8}>
                        {useCase.description1}
                      </MKTypography>
                      {!useCase.items && <br />}
                      {useCase.items && useCase.items.length > 0 && (
                        <ul style={{ paddingTop: "10px" }}>
                          {useCase.items.map((item, idx) => (
                            <li key={idx}>
                              <MKTypography sx={{textAlign:"justify"}}  className="content-body" variant="body2" color="black" opacity={0.8}>
                                {item}
                              </MKTypography>
                            </li>
                          ))}
                        </ul>
                      )}
                      {useCase.description2 && (
                        <MKTypography style={{ textAlign: 'justify' }} className="content-body" variant="body2" color="black" opacity={0.8}>
                          {useCase.description2}
                        </MKTypography>
                      )}
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} md={7} sx={{ ml: "auto", mr: { xs: 0, md: 6 }, px: { xs: 2 } }}>
                      <MKTypography className=" content-header solution-header" variant="body2" color="black" >
                        {useCase.subTitle}
                      </MKTypography>
                      <MKTypography className="content-sub-header" color="text" variant="h3" pb={2} py={2}>
                        {useCase.title}
                      </MKTypography>
                      <MKTypography style={{ textAlign: 'justify' }} className="content-body" variant="body2" color="black" opacity={0.8}>
                        {useCase.description1}
                      </MKTypography>
                      {useCase.items && useCase.items.length > 0 && (
                        <ul style={{ marginTop: "8px" }}>
                          {useCase.items.map((item, idx) => (
                            <li key={idx}>
                              <MKTypography sx={{textAlign:"justify"}}  className="content-body" variant="body2" color="black"
                              opacity={0.8}>
                                {item}
                              </MKTypography>
                            </li>
                          ))}
                        </ul>
                      )}
                      {useCase.description2 && (
                        <MKTypography style={{ textAlign: 'justify' }} className="content-body" variant="body2" color="black" opacity={0.8}>
                          {useCase.description2}
                        </MKTypography>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ mr: "auto" }}>
                      <MKBox p={{ xs: 2, lg: 6 }}>
                        <MKBox
                          component="img"
                          src={useCase.image}
                          width={{ xs: "100%", md: "130%" }}
                          height="auto"
                          borderRadius="md"
                          shadow="md"
                        />
                      </MKBox>
                    </Grid>
                  </>
                )}
              </Grid>

              {index < useCases.length - 1 && <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12, borderWidth: 2 }} />}
            </MKBox>
          ))
          : useCases.map((useCase, index) => (
            <MKBox
              key={index}
              sx={{
                backgroundColor: "white",
                px: { xs: 2, sm: 4, md: 6 }, // Padding for mobile and larger screens
                py: { xs: 1, sm: 1, md: 1 },
              }}
            >
              <Grid
                container
                spacing={3}
                alignItems="center"
                sx={{ mt: 2 }}
                id={useCase.useCaseId}
              >
                {index % 2 === 0 ? (
                  <>
                    <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
                      <MKBox p={{ xs: 2, lg: 6 }}>
                        <MKBox
                          component="img"
                          src={useCase.image}
                          width={{ xs: "100%", md: "130%" }}
                          height="auto"
                          borderRadius="md"
                          shadow="md"
                        />
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ mr: "auto", ml: { xs: 0, md: 6 }, px: { xs: 2 } }}>
                      <MKTypography className=" content-header solution-header" variant="body2" color="black" >
                        {useCase.subTitle}
                      </MKTypography>
                      <MKTypography className="content-sub-header" color="text" variant="h3" pb={2} py={2}>
                        {useCase.title}
                      </MKTypography>
                      <MKTypography style={{ textAlign: 'justify' }} className="content-body" variant="body2" color="black" opacity={0.8}>
                        {useCase.description1}
                      </MKTypography>
                      {!useCase.items && <br />}
                      {useCase.items && useCase.items.length > 0 && (
                        <ul style={{ paddingTop: "10px" }}>
                          {useCase.items.map((item, idx) => (
                            <li key={idx}>
                              <MKTypography sx={{textAlign:"justify"}}  className="content-body" variant="body2" color="black" opacity={0.8}>
                                {item}
                              </MKTypography>
                            </li>
                          ))}
                        </ul>
                      )}
                      {useCase.description2 && (
                        <MKTypography style={{ textAlign: 'justify' }} className="content-body" variant="body2" color="black" opacity={0.8}>
                          {useCase.description2}
                        </MKTypography>
                      )}
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} md={7} sx={{ ml: "auto", mr: { xs: 0, md: 6 }, px: { xs: 2 } }}>
                      <MKTypography className=" content-header solution-header" variant="body2" color="black" >
                        {useCase.subTitle}
                      </MKTypography>
                      <MKTypography className="content-sub-header" color="text" variant="h3" pb={2} py={2}>
                        {useCase.title}
                      </MKTypography>
                      <MKTypography style={{ textAlign: 'justify' }} className="content-body" variant="body2" color="black" opacity={0.8}>
                        {useCase.description1}
                      </MKTypography>
                      {useCase.items && useCase.items.length > 0 && (
                        <ul style={{ marginTop: "8px" }}>
                          {useCase.items.map((item, idx) => (
                            <li key={idx}>
                              <MKTypography sx={{textAlign:"justify"}}  className="content-body" variant="body2" color="black" opacity={0.8}>
                                {item}
                              </MKTypography>
                            </li>
                          ))}
                        </ul>
                      )}
                      {useCase.description2 && (
                        <MKTypography style={{ textAlign: 'justify' }} className="content-body" variant="body2" color="black" opacity={0.8}>
                          {useCase.description2}
                        </MKTypography>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ mr: "auto" }}>
                      <MKBox p={{ xs: 2, lg: 6 }}>
                        <MKBox
                          component="img"
                          src={useCase.image}
                          width={{ xs: "100%", md: "130%" }}
                          height="auto"
                          borderRadius="md"
                          shadow="md"
                        />
                      </MKBox>
                    </Grid>
                  </>
                )}
              </Grid>

              {index < useCases.length - 1 && <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12, borderWidth: 2 }} />}
            </MKBox>
          ))}
      </Container>
    </MKBox>
  );
}

UseCasesPageComponents.propTypes = {
  industry: PropTypes.string,
};

export default UseCasesPageComponents;
