import React from "react";
import "./Machines.css";

const MachinesInfo = () => {
  const machines = [
    {
      name: "Jacob Muller Woven Machine",
      description: "The Jacob Muller Woven Machine is a high-precision weaving machine known for producing high-quality woven fabrics. It is ideal for manufacturing labels, tapes, and other woven products with exceptional durability and clarity."
    },
    {
      name: "Offset Printing Machine Heidelberg",
      description: "The Heidelberg Offset Printing Machine is a state-of-the-art printer used for high-quality and large-scale printing projects. It ensures vibrant colors, sharp details, and consistent performance for brochures, packaging, and other printed materials."
    },
    {
      name: "Flexo Printing Machine",
      description: "The Flexo Printing Machine is a versatile press designed for flexible packaging materials. It provides superior print quality on various substrates such as paper, plastic, and metal foils, making it ideal for food packaging, labels, and more."
    }
  ];

  return (
    <div className="machines-container">
      {machines.map((machine, index) => (
        <div key={index} className="machine-card">
          <h2 className="machine-name">{machine.name}</h2>
          <p className="machine-description">{machine.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MachinesInfo;
