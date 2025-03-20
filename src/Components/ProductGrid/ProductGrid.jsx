import React from "react";
import "./ProductGrid.css";
import hangtags from "../../assets/hangssss.jpg";
import carelabel from "../../assets/carelab.jpg";
import wovenlabel from "../../assets/wovenlabs2.jpg";
import roundsticker from "../../assets/roundstick.jpg";
import sticker from "../../assets/shippingstickers.jpg";
import bellyband from "../../assets/bellybands.jpg"
const TrimcoNewGrid = () => {
  const products = [
    {
      id: 1,
      title: "Hangtags",
      description:
        "Our premium hangtags are crafted from high-quality materials, including durable cardstock, kraft paper, and eco-friendly options. Available in various shapes, sizes, and finishes, they are perfect for showcasing your brand, pricing, and product details. Enhance your product’s appeal with hangtags that combine style and functionality.",
      image: hangtags,
    },
    {
      id: 2,
      title: "Woven Labels",
      description:
        "Our woven labels are crafted with precision using high-quality threads, offering a soft, durable, and professional finish. Ideal for garments, accessories, and textiles, these labels are customizable in size, color, and design to perfectly represent your brand. Made to withstand washing and wear, our woven labels provide a long-lasting, premium look that enhances your product’s identity.",
      image: wovenlabel,
    },
    {
      id: 3,
      title: "Care Labels",
      description:
        "Our care labels are made from high-quality materials, including satin, cotton, and polyester, ensuring durability and comfort against the skin. Designed to provide clear washing, drying, and care instructions, they help customers maintain the quality of your products. Fully customizable in size, design, and print, our care labels are resistant to wear and tear, making them ideal for garments, textiles, and accessories.",
      image: carelabel,
    },
    {
      id: 4,
      title: "Bands",
      description:
        "Our product bands are made from strong, customizable materials such as kraft paper, recycled paper, and laminated finishes, ensuring durability and a sleek look. Ideal for neatly bundling products, these bands offer a clean, professional presentation while reinforcing your brand identity.",
      image: bellyband,
    },
    {
      id: 5,
      title: "Round Stickers",
      description:
        "Round stickers are a versatile and creative solution for branding, packaging, or personal use. Their smooth, circular design offers a sleek and professional appearance, making them ideal for logos, product labels, promotional materials, or decorative purposes. Durable and customizable, these stickers ensure a lasting impression on any surface.",
      image: roundsticker,
    },
    {
      id: 6,
      title: "Carton Stickers",
      description:
        "Our stickers, including carton stickers, round stickers and shipping labels, are crafted from durable materials like vinyl and waterproof paper to suit various applications. Carton stickers are ideal for labeling packages and shipments, offering strong adhesion and clear visibility. Round stickers, perfect for branding and promotions, are customizable in size, color, and finish, making them a versatile and eye-catching option for your products.",
      image: sticker,
    },
  ];

  return (
    <div className="new-product-grid">
      {products.map((product) => (
        <div key={product.id} className="new-product-card">
          <img
            className="new-product-image"
            src={product.image}
            alt={product.title}
          />
          <div className="new-product-content">
            <h3 className="new-product-title">{product.title}</h3>
            <p className="new-product-description">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrimcoNewGrid;
