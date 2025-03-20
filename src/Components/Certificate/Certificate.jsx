import React from 'react';
import './Certificate.css'; // Import CSS file
import oekoTexImage from '../../assets/certificate.jpg'; // Adjust the path accordingly

const OekoTexSection = () => {
  return (
    <div className="oeko-tex-section">
      <h2 className="oeko-tex-title">OEKO-TEX® Certified</h2>
      <div className="oeko-tex-content">
        <img
          src={oekoTexImage}
          alt="OEKO-TEX Certification"
          className="oeko-tex-image"
        />
        <p className="oeko-tex-description">
          Our products are OEKO-TEX® Standard 100 certified, ensuring high safety
          and environmental standards.
        </p>
      </div>
    </div>
  );
};

export default OekoTexSection;
