import React, { useEffect } from "react";
import styled from "styled-components";
import { FaCog, FaPlug, FaCloud, FaDollarSign, FaShieldAlt, FaRocket } from "react-icons/fa";
import PropTypes from "prop-types";
import MKTypography from "components/MKTypography";

// Styled components for Card
const CardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  background-color: #fff;
  padding: 15px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 1.7em;
  color: #2d87ec;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #666;
`;

// Card Component
const Card = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <IconWrapper>{icon}</IconWrapper>
      <Title className="content-sub-header">{title}</Title>
      <Description className="content-body">{description}</Description>
    </CardContainer>
  );
};

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Styled components for Card Grid
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Main Component to Display the Cards
const CardListPlatform = () => {
  const navbarHeight = 90;

  const scrollToSection = (id) => {
    // Check if 'usecases' is part of the id and extract only the part after it
    const sectionId = id.includes("Home#") ? id.split("Home#")[1] : id;

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

  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed
  const cardsData = [
    {
      icon: <FaCog />,
      title: (
        <>
          Pre-built AI Blocks
          <br /> for High-Performance Analytics
        </>
      ),
      description:
        "Leverage AI-driven video analytics, cybersecurity, and deep learning for security, smart cities, retail, and automation with reliable algorithms ensuring accuracy across domains.",
    },
    {
      icon: <FaPlug />,
      title: (
        <>
          Seamless
          <br />Integration & Open Standards
        </>
      ),
      description:
        "Seamlessly integrate Mialo.AI with VMS, security platforms, and IT ecosystems using open standards for interoperability and future-proof adaptability.",
    },
    {
      icon: <FaCloud />,
      title: (
        <>
          Scalable & Flexible <br />
          Deployment
        </>
      ),
      description:
        "Deploy Mialo.AI on-premise, or edge with seamless GPU management to handle large-scale video processing and analytics workloads efficiently.  ",
    },
    {
      icon: <FaRocket />,
      title: (
        <>
          Ease of Use &  <br />
          Rapid Implementation
        </>
      ),
      description:
        "Designed with user-friendly AI tools, low-code interfaces, and quick deployment options, Mialo.AI minimizes implementation time while ensuring maximum productivity.",
    },
    {
      icon: <FaShieldAlt />,
      title: (
        <>
          Cybersecurity & Responsible
          <br />
          AI Compliance
        </>
      ),
      description:
        "Mialo.AI ensures cybersecurity, compliance, and ethical AI, safeguarding data privacy across finance, healthcare, and government sectors.",
    },
    {
      icon: <FaDollarSign />,
      title: (
        <>
          Scalability & <br />
          Future Roadmap 
        </>
      ),
      description:
        "Mialo.AI's AI roadmap drives continuous innovation with deep learning, real-time analytics, and industry-specific AI solutions.",
    },
  ];

  return (
    <>
      <div
        style={{ paddingTop: "50px", paddingBottom: "50px", backgroundColor: "#2d87ec" }}
        id="why-mialo-ai"
      >
        <div style={{ maxWidth: "1440px", margin: "auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <MKTypography variant="h2" fontWeight="bold" color={"light"} className="content-header">
              Why Mialo.AI
            </MKTypography>
          </div>
          <CardGrid>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </CardGrid>
        </div>
      </div>
    </>
  );
};

export default CardListPlatform;
