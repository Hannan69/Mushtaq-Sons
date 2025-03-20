import React from 'react';
import './Services.css'; // Import your styles
import service1 from '../../assets/jc.jpg';
import service2 from '../../assets/offsetpring1.avif';
import service3 from '../../assets/flexo1.avif';
import service4 from '../../assets/label.avif'; // New machine image

const Services = () => {
  const machines = [
    {
      image: service1,
      title: "Jacob Muller Woven Label Machine",
      description:
        "A high-precision weaving machine that produces exceptional woven fabrics and labels."
    },
    {
      image: service2,
      title: "Heidelberg Offset Printing Machine",
      description:
        "Used for high-quality, large-scale printing projects, ensuring vibrant colors and sharp details."
    },
    {
      image: service3,
      title: "Flexo Printing Machine",
      description:
        "Versatile press for flexible packaging materials, ideal for food packaging and labels."
    },
    {
      image: service4,
      title: "Label Cutting Machine",
      description:
        "A precise machine designed to cut labels efficiently with clean edges and consistent accuracy."
    }
  ];

  return (
    <div className="services-grid">
      {machines.map((machine, index) => (
        <div className="service-card" key={index}>
          <div className="service-card-inner">
            {/* Front Side */}
            <div className="service-card-front">
              <img src={machine.image} alt={machine.title} />
            </div>
            {/* Back Side */}
            <div className="service-card-back">
              <h3>{machine.title}</h3>
              <p>{machine.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
