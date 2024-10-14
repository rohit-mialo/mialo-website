import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CircleContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const MainCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const SubCircle = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #2db7f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 0.8rem;
`;

const circlesData = [
  { label: "Unmatched Accuracy", x: "50%", y: "-110%" },
  { label: "Superior Performance", x: "110%", y: "-50%" },
  { label: "Next-Gen Multimodal AI", x: "110%", y: "50%" },
  { label: "Real-Time Edge Computing", x: "50%", y: "110%" },
  { label: "Low Code", x: "-10%", y: "50%" },
  { label: "Responsible AI", x: "-10%", y: "-50%" },
  { label: "Privacy Preserving AI", x: "-50%", y: "-110%" },
  { label: "Agile & Extensible", x: "50%", y: "-110%" },
];

const CirclesAnimation = () => {
  return (
    <Container>
      <CircleContainer>
        <MainCircle>MIALO.AI</MainCircle>
        {circlesData.map((circle, index) => (
          <SubCircle
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
            style={{ top: circle.y, left: circle.x }}
          >
            {circle.label}
          </SubCircle>
        ))}
      </CircleContainer>
    </Container>
  );
};

export default CirclesAnimation;
