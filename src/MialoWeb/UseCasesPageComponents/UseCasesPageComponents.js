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
      "shopper_demographics",
      "shopper_behavioral_analysis",
      "footfall_intelligence",
      "shopper_journey_analysis",
      "service_quality_experience",
      "automatic_visual_inspection",
      "store_security",
      "queue_analysis_management",
      "entrance_exit_logs",
      "parking_management",
      "anomaly_detection",
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
      "entrance_exit_logs",
      "vehicle_dwell_time",
      "vehicle_access_control",
      "human_identification",
      "fraud_detection",
      "time_attendance_tracking",
      "threat_detection_response",
      "vehicle_access_control",
      "vehicle_dwell_time",
      "authorized_employee_access",
      "facial_recognition",
      "document_pre_processing",
      "invoice_processing_management",
      "document_classification",
      "automated_data_extraction",
      "document_review_analysis",
      "fraud_detection",
      "financial_statement_analysis",
      "summary_generation",
      "smart_chatbot",
    ],
  },
  {
    industry: "Infrastucture",
    useCasesId: [
      "entrance_exit_logs",
      "parking_management",
      "vehicle_dwell_time",
      "anpr_fr_based_access_control",
      "anomaly_detection",
      "human_identification",
      "people_counting",
      "crowd_monitoring",
      "fraud_detection",
      "visitor_management",
      "time_attendance_tracking",
      "threat_detection_response",
      "intrusion_detection",
      "authorized_employee_access",
      "visitor_management",
      "facial_recognition",
      "document_pre_processing",
      "invoice_processing_management",
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
      "parking_management",
      "vehicle_dwell_time",
      "anpr_fr_based_access_control",
      "human_identification",
      "people_counting",
      "fraud_detection",
      "visitor_management",
      "time_attendance_tracking",
      "threat_detection_response",
      "intrusion_detection",
      "speed_monitoring",
      "vehicle_dwell_time",
      "ergonomic_risk_analysis",
      "authorized_employee_access",
      "visitor_management",
      "facial_recognition",
      "invoice_processing_management",
      "document_classification",
      "automated_data_extraction",
      "document_review_analysis",
      "fraud_detection",
      "financial_statement_analysis",
      "summary_generation",
    ],
  },
  {
    industry: "Security",
    useCasesId: [
      "human_identification",
      "people_counting",
      "crowd_monitoring",
      "fraud_detection",
      "visitor_management",
      "time_attendance_tracking",
      "threat_detection_response",
      "intrusion_detection",
      "anpr_fr_based_access_control",
      "anomaly_detection",
      "speed_monitoring",
      "vehicle_dwell_time",
      "authorized_employee_access",
      "visitor_management",
      "facial_recognition",
      "speech_to_text",
      "summary_generation",
    ],
  },
  {
    industry: "Healthcare",
    useCasesId: [
      "service_quality_experience",
      "anpr_fr_based_access_control",
      "people_counting",
      "crowd_monitoring",
      "threat_detection_response",
      "authorized_employee_access",
      "facial_recognition",
      "document_pre_processing",
      "invoice_processing_management",
      "document_classification",
      "automated_data_extraction",
      "document_review_analysis",
      "fraud_detection",
      "financial_statement_analysis",
      "summary_generation",
      "smart_chatbot",
    ],
  },
  {
    industry: "Hospitality",
    useCasesId: [
      "service_quality_experience",
      "automatic_visual_inspection",
      "store_security",
      "entrance_exit_logs",
      "parking_management",
      "vehicle_dwell_time",
      "anpr_fr_based_access_control",
      "anomaly_detection",
      "human_identification",
      "people_counting",
      "crowd_monitoring",
      "fraud_detection",
      "visitor_management",
      "time_attendance_tracking",
      "threat_detection_response",
      "facial_recognition",
      "document_pre_processing",
      "invoice_processing_management",
      "document_classification",
      "automated_data_extraction",
      "document_review_analysis",
      "financial_statement_analysis",
      "summary_generation",
    ],
  },
  {
    industry: "Agriculture",
    useCasesId: ["intrusion_detection", "anomaly_detection"],
  },
  {
    industry: "Manufacturing",
    useCasesId: [
      "automatic_visual_inspection",
      "entrance_exit_logs",
      "vehicle_dwell_time",
      "anpr_fr_based_access_control",
      "anomaly_detection",
      "fraud_detection",
      "ergonomic_risk_analysis",
      "authorized_employee_access",
      "facial_recognition",
      "intrusion_detection",
      "human_identification",
      "people_counting",
      "crowd_monitoring",
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
    title: "Turn 360-Degree Shopper Profiles into Granular, Actionable Insights",
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
    items: ["Streamline Queue Flow", "Identify Peak Hours", "Reduce Queue Abandonment Rates"],
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
    title: "Experience Next-Gen Parking Management with Our AI-Powered, Smart Parking Solution",
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
    items: ["Real-Time Monitoring", "Enhanced Security", "Seamless Integration"],
  },
  {
    useCaseId: "vehicle_access_control",
    title: "Simplified Access Management with ANPR-Based Vehicle Access Control System",
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
    title: "Prevent. Protect. Perform: Cutting-Edge Anomaly Detection",
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
    title: "Enhance Human Recognition and Security with Advanced Identification",
    subTitle: "Human Identification",
    description1:
      "Leverage cutting-edge facial recognition solutions with the Mialo.AI platform to intelligently identify individuals. This solution is highly relevant for businesses, legal entities, or security operations, ensuring accurate identification for compliance, access control, and enhanced security protocols, reducing the risk of unauthorized access or fraud.",
    image: Human_Identification,
    items: ["Facial Recognition", "Improved Security", "Data Privacy Compliant"],
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
    title: "Unlock Seamless Visitor Management Experience for Visitors and Staff Alike",
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
    title: "Fortify Your Assets Against Fire & Smoke with Advanced AI Technology",
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
    title: "Enhance Endpoint Security with Mialo.AI’s Advanced Intrusion Detection Capabilities",
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
    items: ["Enhance Scheduling", "Boost Productivity", "Make Informed Operational Decisions"],
  },
  {
    useCaseId: "ergonomic_risk_analysis",
    title: "Transform Workplace Safety with Edge-AI Based Ergonomic Risk Monitoring",
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
    title: "Transform Document Management Processes with Mialo.AI’s Intelligent Solutions",
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
    title: "Unlock Smarter Financial Decisions with Mialo.AI’s Advanced Analysis",
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
    title: "Harness Audio Insights Through Advanced Speech-to-Text Transcription",
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
    title: "Elevate Your Customer Service Strategy with Mialo.AI's Smart Assistance",
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
];

function UseCasesPageComponents(props) {
  const [useCases] = useState(useCasesData);
  let industry = props.industry;

  console.log(industry);

  // Get the relevant use case IDs for the selected industry
  const selectedIndustry = industryBasedUseCases.find((ind) => ind.industry === industry);
  const relevantUseCaseIds = selectedIndustry ? selectedIndustry.useCasesId : [];

  // Filter the use cases based on relevant IDs
  const filteredUseCases = useCases.filter((useCase) =>
    relevantUseCaseIds.includes(useCase.useCaseId)
  );

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <MKTypography variant="h2" mt={3} color="black">
            {industry ? `Use Cases We Solve For ${industry}` : "Use Cases We Solve"}
          </MKTypography>
        </Grid>

        {industry
          ? filteredUseCases.map((useCase, index) => (
              <div key={index} style={{ backgroundColor: "white" }}>
                <Grid
                  container
                  spacing={3}
                  alignItems="center"
                  sx={{ mt: 6 }}
                  id={useCase.useCaseId}
                >
                  {index % 2 === 0 ? (
                    <>
                      <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
                        <MKBox p={{ xs: 0, lg: 6 }}>
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
                      <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
                        <MKTypography variant="body2" color="text">
                          {useCase.subTitle}
                        </MKTypography>
                        <MKTypography variant="h3" color="black" pb={2} py={2}>
                          {useCase.title}
                        </MKTypography>
                        <MKTypography style={{ textAlign: 'justify' }} variant="body2" color="black" opacity={0.8}>
                          {useCase.description1}
                        </MKTypography>
                        {useCase.items && (
                          <ul style={{ paddingTop: "10px" }}>
                            {useCase.items.map((item, idx) => (
                              <li key={idx}>
                                <MKTypography sx={{textAlign:"justify"}}  variant="body2" color="black" opacity={0.8}>
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
                        <MKTypography variant="h3" color="black" pb={2} py={2}>
                          {useCase.title}
                        </MKTypography>
                        <MKTypography variant="body2" color="black" opacity={0.8}>
                          {useCase.description1}
                        </MKTypography>
                        {useCase.items && (
                          <ul style={{ marginTop: "8px" }}>
                            {useCase.items.map((item, idx) => (
                              <li key={idx}>
                                <MKTypography sx={{textAlign:"justify"}}  variant="body2" color="black">
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

                {index < filteredUseCases.length - 1 && (
                  <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />
                )}
              </div>
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
                  <MKTypography className=" content-header solution-header"  variant="body2" color="black" >
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
                    <MKTypography className=" content-header solution-header"  variant="body2" color="black" >
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
