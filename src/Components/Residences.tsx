import React from "react";
import Houses from "./Houses";
import Title from "./Title";

const Residences = () => {
  return (
    <div className="grid-container py-16" id="residences">
      <div className="container" data-aos="fade-right">
        <Title title="Best Choices" subtitle="Popular Residences" />
        <Houses />
      </div>
    </div>
  );
};

export default Residences;
