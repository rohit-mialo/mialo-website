import React, { useState } from "react";
import "./CustomDropdown.css"; // import your CSS file
import PropTypes from "prop-types";

const CustomDropdown = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState(0);

  const menuItems = [
    {
      title: "Shopper Analytics",
      options: [
        { label: "Shopper Demographics", id: "shopper_demographics" },
        { label: "Shopper Behavioral Analysis", id: "shopper_behavioral_analysis" },
        { label: "Footfall Intelligence", id: "footfall_intelligence" },
        { label: "Shopper Journey Analysis", id: "shopper_journey_analysis" },
        { label: "Service Quality & Experience", id: "service_quality_experience" },
        { label: "Automatic Visual Inspection & Compliance", id: "automatic_visual_inspection" },
        { label: "Store Security", id: "store_security" }, // Corrected typo from 'store_secrity'
        { label: "Queue Analysis & Management", id: "queue_analysis_management" },
      ],
    },
    {
      title: "Smart Parking",
      options: [
        { label: "Entrance & Exit Logs", id: "entrance_exit_logs" },
        { label: "Parking Management", id: "parking_management" },
        { label: "Vehicle Dwell Time", id: "vehicle_dwell_time" },
        { label: "Vehicle Access Control", id: "vehicle_access_control" },
        { label: "Anomaly Detection", id: "anomaly_detection" },
        { label: "Speed Monitoring", id: "speed_monitoring" },
      ],
    },
    {
      title: "Smart Security",
      options: [
        { label: "Human Identification", id: "human_identification" },
        { label: "People Counting", id: "people_counting" },
        { label: "Crowd Monitoring", id: "crowd_monitoring" },
        { label: "Theft & Fraud Detection", id: "fraud_detection" },
        { label: "Visitor Management", id: "visitor_management" },
        { label: "Time & Attendance Tracking", id: "time_attendance_tracking" },
        { label: "Threat Detection & Response", id: "threat_detection_response" },
        { label: "Intrusion Detection", id: "intrusion_detection" },
        { label: "Access Control", id: "vehicle_access_control" },
        { label: "Anomaly Detection", id: "anomaly_detection" },
        { label: "Speed Monitoring", id: "speed_monitoring" },
        { label: "Dwell Time Monitoring", id: "dwell_time_monitoring" },
        { label: "Ergonomic Risk Analysis", id: "ergonomic_risk_analysis" },
      ],
    },
    {
      title: "Access Control",
      options: [
        { label: "ANPR & FR Based Access Control", id: "anpr_fr_based_access_control" },
        { label: "Authorized Employee Access", id: "authorized_employee_access" },
        { label: "Time & Attendance Tracking", id: "time_attendance_tracking" },
        { label: "Visitor Management", id: "visitor_management" },
        { label: "Facial Recognition", id: "facial_recognition" },
      ],
    },
    {
      title: "AI-Powered Document Processing",
      options: [
        { label: "Document Pre-processing", id: "document_pre_processing" },
        { label: "Invoice Processing & Management", id: "invoice_processing_management" },
        { label: "Document Classification", id: "document_classification" },
        { label: "Automated Data Extraction & Parsing", id: "automated_data_extraction" },
        { label: "Document Review & Analysis", id: "document_review_analysis" },
        { label: "Fraud Detection", id: "fraud_detection" },
        { label: "Financial Statement Analysis", id: "financial_statement_analysis" },
      ],
    },
    {
      title: "Generative & Conversational AI",
      options: [
        { label: "Wake-Word Recognition", id: "wake_word_recognition" },
        { label: "Speech-to-Text", id: "speech_to_text" },
        { label: "Summary Generation", id: "summary_generation" },
        { label: "Smart Chatbot", id: "smart_chatbot" },
      ],
    },
  ];

  return (
    <div className="custom-dropdown">
      <div className="menu-section">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${activeSection === index ? "active" : ""}`}
            onClick={() => setActiveSection(index === activeSection ? null : index)}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="dropdown-content">
        {activeSection !== null && (
          <div className="dropdown-box navbar-dropdown">
            {menuItems[activeSection].options.map((option, index) => (
              <div key={index} className="dropdown-option" onClick={() => onNavigate(option.id)}>
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

CustomDropdown.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default CustomDropdown;
