import React from "react";

const Slider = () => {
  const images = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  ];

  const duplicatedImages = [...images, ...images]; // To create seamless scrolling effect

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "20px",
    backgroundColor: "white",
  };

  // const textContainerStyle = {
  //   flex: "0 0 20%",
  //   textAlign: "center", // Centering text horizontally
  // };

  const sliderStyle = {
    height: "100px",
    overflow: "hidden",
    flex: "1",
    position: "relative",
    margin: "0 20px",
    borderRadius: "10px",
    maxWidth: "1440px", // Added 'px' for consistency
  };

  const slideTrackStyle = {
    display: "flex",
    animation: "scroll 40s linear infinite",
    width: "calc(250px * 14)", // Adjust the width based on the number of logos
  };

  const slideStyle = {
    height: "100px",
    width: "250px",
  };

  const slideImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  return (
    <div style={containerStyle}>
      {/* Text Section on the Left */}
      {/* <div style={textContainerStyle}>
        <h1 style={{ fontSize: "2.25rem", margin: "0" }}>Trusted By</h1>
      </div> */}

      {/* Scrolling Image Slider */}
      <div className="slider" style={sliderStyle}>
        <div className="slide-track" style={slideTrackStyle}>
          {duplicatedImages.map((src, index) => (
            <div className="slide" key={index} style={slideStyle}>
              <img src={src} alt={`Slide ${index + 1}`} style={slideImageStyle} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 7)); }
        }
      `}</style>
    </div>
  );
};

export default Slider;
