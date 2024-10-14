import React from "react";
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
      <Title>{title}</Title>
      <Description>{description}</Description>
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
const CardList = () => {
  const cardsData = [
    {
      icon: <FaCog />,
      title: (
        <>
          Pre-built
          <br /> AI Blocks
        </>
      ),
      description:
        "Our pretrained AI blocks cater to a broad range of applications, from text analytics and speech analytics to computer vision and natural language processing.",
    },
    {
      icon: <FaPlug />,
      title: (
        <>
          Seamless
          <br /> Integration and Development
        </>
      ),
      description:
        "Integrate and customize effortlessly with APIs and connectors to match your unique business needs for enhanced performance and relevance.",
    },
    {
      icon: <FaCloud />,
      title: (
        <>
          Flexible <br />
          Deployment
        </>
      ),
      description:
        "Our platform offers the flexibility in deployment, allowing you to choose between edge, cloud, or on-premise environments.",
    },
    {
      icon: <FaDollarSign />,
      title: (
        <>
          Flexible <br />
          Buying
        </>
      ),
      description:
        "Choose between SaaS subscription models or a one-time purchase, based on your unique business needs, budget, and objectives.",
    },
    {
      icon: <FaShieldAlt />,
      title: (
        <>
          Privacy
          <br />
          Preserving AI
        </>
      ),
      description:
        "Leverage powerful AI capabilities while protecting sensitive data and maintaining compliance with data privacy regulations.",
    },
    {
      icon: <FaRocket />,
      title: (
        <>
          Rapid <br />
          Frontend
        </>
      ),
      description:
        "Accelerate your projects with fast frontend development, delivering user-friendly interfaces that increase productivity.",
    },
  ];

  return (
    <>
      <div style={{ paddingTop: "50px", paddingBottom: "50px", backgroundColor: "#2d87ec" }}>
        <div style={{ maxWidth: "1440px", margin: "auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <MKTypography variant="h2" fontWeight="bold" color={"light"}>
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

export default CardList;
