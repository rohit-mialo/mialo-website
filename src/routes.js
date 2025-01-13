/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import AboutUs from "MialoWeb/AboutUs";
import ContactUs from "MialoWeb/ContactUs";
import Platform from "MialoWeb/Platform";

/** 
  All of the routes for the Material Kit 2 PRO React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
// import Icon from "@mui/material/Icon";

// Pages
// import CoworkingPage from "layouts/pages/landing-pages/coworking";
// import Rental from "layouts/pages/landing-pages/rental";
// import AboutUs from "layouts/pages/company/about-us";
// import Pricing from "layouts/pages/company/pricing";
// import HelpCenter from "layouts/pages/support/help-center";
// import ContactUs from "layouts/pages/support/contact-us";
// import Faq from "layouts/pages/support/faq";
// import Privacy from "layouts/pages/support/privacy";
// import DesktopApp from "layouts/pages/apps/desktop-app";
// import SingleArticle from "layouts/pages/blogs/single-article";
// import Author from "layouts/pages/blogs/author";
// import VirtualRealityPage from "layouts/pages/extra/virtual-reality";

// Account
// import SignInBasicPage from "layouts/authentication/sign-in/basic";
// import SignInCoverPage from "layouts/authentication/sign-in/cover";
// import SignInIllustration from "layouts/authentication/sign-in/illustration";
// import SignInSimplePage from "layouts/authentication/sign-in/simple";
// import SignUpCoverPage from "layouts/authentication/sign-up/cover";
// import ResetPasswordPage from "layouts/authentication/reset-password/cover";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import PricingSection from "layouts/sections/page-sections/pricing";
// import FaqSection from "layouts/sections/page-sections/faq";
// import BlogPosts from "layouts/sections/page-sections/blog-posts";
// import Testimonials from "layouts/sections/page-sections/testimonials";
// import Teams from "layouts/sections/page-sections/teams";
// import Stats from "layouts/sections/page-sections/stats";
// import Cta from "layouts/sections/page-sections/cta";
// import Applications from "layouts/sections/page-sections/applications";
// import LogoAreas from "layouts/sections/page-sections/logo-areas";
// import Footers from "layouts/sections/page-sections/footers";
// import GeneralCards from "layouts/sections/page-sections/general-cards";
// import ContentSections from "layouts/sections/page-sections/content-sections";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Newsletters from "layouts/sections/input-areas/newsletters";
// import ContactSections from "layouts/sections/input-areas/contact-sections";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Notifications from "layouts/sections/attention-catchers/notifications";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import SocialButtons from "layouts/sections/elements/social-buttons";
// import Tables from "layouts/sections/elements/tables";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "Platform",
    collapse: [
      {
        name: "Mialo.AI",
        route: "/platform",
        component: <Platform />,
      },
    ],
  },
  {
    name: "Solutions",
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Shopper Analytics",
        collapse: [
          {
            name: "Shopper Demographics",
            route: "/usecases#shopper_demographics",
          },
          {
            name: "Shopper Behavioral Analysis",
            route: "/usecases#shopper_behavioral_analysis",
          },
          {
            name: "Footfall Intelligence",
            route: "/usecases#footfall_intelligence",
          },
          {
            name: "Shopper Journey Analysis",
            route: "/usecases#shopper_journey_analysis",
          },
          {
            name: "Service Quality & Experience",
            route: "/usecases#service_quality_experience",
          },
          {
            name: "Automatic Visual Inspection & Compliance",
            route: "/usecases#automatic_visual_inspection",
          },
          {
            name: "Store Security",
            route: "/usecases#store_security",
          },
          {
            name: "Queue Analysis & Management",
            route: "/usecases#queue_analysis_management",
          },
        ],
      },
      {
        name: "Smart Parking",
        collapse: [
          {
            name: "Entrance & Exit Logs",
            route: "/usecases#entrance_exit_logs",
          },
          {
            name: "Parking Management",
            route: "/usecases#parking_management",
          },
          {
            name: "Vehicle Dwell Time",
            route: "/usecases#vehicle_dwell_time",
          },
          {
            name: "Vehicle Access Control",
            route: "/usecases#vehicle_access_control",
          },
          {
            name: "Anomaly Detection",
            route: "/usecases#anomaly_detection",
          },
          {
            name: "Speed Monitoring",
            route: "/usecases#speed_monitoring",
          },
        ],
      },
      {
        name: "Smart Security",
        collapse: [
          {
            name: "Human Identification",
            route: "/usecases#human_identification",
          },
          {
            name: "People Counting",
            route: "/usecases#people_counting",
          },
          {
            name: "Crowd Monitoring",
            route: "/usecases#crowd_monitoring",
          },
          {
            name: "Theft & Fraud Detection",
            route: "/usecases#theft_fraud_detection",
          },
          {
            name: "Visitor Management",
            route: "/usecases#visitor_management",
          },
          {
            name: "Time & Attendance Tracking",
            route: "/usecases#time_attendance_tracking",
          },
          {
            name: "Threat Detection & Response",
            route: "/usecases#threat_detection_response",
          },
          {
            name: "Intrusion Detection",
            route: "/usecases#intrusion_detection",
          },
          {
            name: "Access Control",
            route: "/usecases#access_control",
          },
          {
            name: "Anomaly Detection",
            route: "/usecases#anomaly_detection",
          },
          {
            name: "Speed Monitoring",
            route: "/usecases#speed_monitoring",
          },
          {
            name: "Dwell Time Monitoring",
            route: "/usecases#dwell_time_monitoring",
          },
          {
            name: "Ergonomic Risk Analysis",
            route: "/usecases#ergonomic_risk_analysis",
          },
        ],
      },
      {
        name: "Access Control",
        collapse: [
          {
            name: "ANPR & FR Based Access Control",
            route: "/usecases#anpr_fr_based_access_control",
          },
          {
            name: "Authorized Employee Access",
            route: "/usecases#authorized_employee_access",
          },
          {
            name: "Time & Attendance Tracking",
            route: "/usecases#time_attendance_tracking",
          },
          {
            name: "Visitor Management",
            route: "/usecases#visitor_management",
          },
          {
            name: "Facial Recognition",
            route: "/usecases#facial_recognition",
          },
        ],
      },
      {
        name: "AI-Powered Document Processing",
        collapse: [
          {
            name: "Document Pre-processing",
            route: "/usecases#document_pre_processing",
          },
          {
            name: "Invoice Processing & Management",
            route: "/usecases#invoice_processing_management",
          },
          {
            name: "Document Classification",
            route: "/usecases#document_classification",
          },
          {
            name: "Automated Data Extraction & Parsing",
            route: "/usecases#automated_data_extraction",
          },
          {
            name: "Document Review & Analysis",
            route: "/usecases#document_review_analysis",
          },
          {
            name: "Fraud Detection",
            route: "/usecases#fraud_detection",
          },
          {
            name: "Financial Statement Analysis",
            route: "/usecases#financial_statement_analysis",
          },
        ],
      },
      {
        name: "Generative & Conversational AI",
        collapse: [
          {
            name: "Wake-Word Recognition",
            route: "/usecases#wake_word_recognition",
          },
          {
            name: "Speech-to-Text",
            route: "/usecases#speech_to_text",
          },
          {
            name: "Summary Generation",
            route: "/usecases#summary_generation",
          },
          {
            name: "Smart Chatbot",
            route: "/usecases#smart_chatbot",
          },
        ],
      },
    ],
  },
  {
    name: "Industries",
    collapse: [
      // {
      //   name: "sign in",
      //   dropdown: true,
      // collapse: [
      {
        name: "Retail",
        route: "/IndustriesUseCase?industry=Retail",
      },
      {
        name: "BFSI",
        route: "/IndustriesUseCase?industry=BFSI",
      },
      {
        name: "Infrastructure",
        route: "/IndustriesUseCase?industry=Infrastructure",
      },
      {
        name: "Logistics",
        route: "/IndustriesUseCase?industry=Logistics",
      },
      {
        name: "Security",
        route: "/IndustriesUseCase?industry=Security",
      },
      {
        name: "Healthcare",
        route: "/IndustriesUseCase?industry=Healthcare",
      },
      {
        name: "Hospitality",
        route: "/IndustriesUseCase?industry=Hospitality",
      },
      {
        name: "Agriculture",
        route: "/IndustriesUseCase?industry=Agriculture",
      },
      {
        name: "Manufacturing",
        route: "/IndustriesUseCase?industry=Manufacturing",
      },
      // ],
      // },
    ],
  },
  {
    name: "About us",
    route: "/aboutus",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    route: "/contactUs",
    component: <ContactUs />,
  },
];

export default routes;
