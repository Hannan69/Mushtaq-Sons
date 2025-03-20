import React from "react";
import "./Grid.css";

const MissionGrid = () => {
  const missionPoints = [
    {
      id: 1,
      title: "Quality Craftsmanship",
      description:
        "We are committed to delivering premium products crafted with precision and care, ensuring the highest standards for our customers.",
    },
    {
      id: 2,
      title: "Sustainability",
      description:
        "Our mission is to minimize environmental impact by using eco-friendly materials and sustainable practices in all aspects of our business.",
    },
    {
      id: 3,
      title: "Innovation",
      description:
        "We strive to innovate, providing unique and creative solutions to meet the evolving needs of our customers and the market.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. We aim to build lasting relationships through exceptional service and personalized support. We continuously strive to exceed expectations, fostering trust and loyalty with every interaction.",
    },
  ];

  return (
    <div className="mission-grid">
      {missionPoints.map((point) => (
        <div key={point.id} className="mission-card">
          <h3>{point.title}</h3>
          <p>{point.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MissionGrid;
