import React from 'react';
import './Card.css';

const Card = ({ title, description, linkUrl }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-link-container">
          <a 
            href={linkUrl} 
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;