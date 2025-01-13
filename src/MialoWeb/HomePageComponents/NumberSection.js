import React, { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function NumberSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Use a ref to track the section

  useEffect(() => {
    // Create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // When section is in view, start count animation
          observer.disconnect(); // Disconnect observer after detection (optional)
        }
      },
      { threshold: 0.9 } // Trigger when 70% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div style={{ paddingBottom: "30px", maxWidth: "1440px", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Stack elements vertically
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
          textAlign: "center", // Center text within the container
          width: "100%", // Ensure full width for centering
        }}
      >
        <h2 style={{ fontSize: "2.25rem" }} className="content-header">
          Numbers that Speak Volumes
        </h2>
      </div>
      <MKBox ref={sectionRef} component="section">
        <Container>
          <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
            <Grid item xs={12} md={4}>
              {/* Conditionally render counters only when visible */}
              {isVisible && (
                <DefaultCounterCard
                  count={80}
                  suffix="%"
                  title="Faster Time-to-Value"
                  // description="Of “high-performing” level are led by a certified project manager"
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {isVisible && (
                <DefaultCounterCard
                  count={130}
                  suffix="%"
                  title="Return on Investment"
                  // description="That meets quality standards required by our users"
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {isVisible && (
                <DefaultCounterCard
                  count={250}
                  suffix="+"
                  title="Use Cases Solved"
                  // description="Actively engage team members that finishes on time"
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default NumberSection;
