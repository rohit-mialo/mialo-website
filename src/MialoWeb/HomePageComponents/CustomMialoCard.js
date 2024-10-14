import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  background-color: #ffe5e5;
  padding: 15px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #666;
`;

const CustomMialoCard = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

// Add prop types validation
CustomMialoCard.propTypes = {
  icon: PropTypes.node.isRequired, // node allows anything renderable, like strings, elements, etc.
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CustomMialoCard;
