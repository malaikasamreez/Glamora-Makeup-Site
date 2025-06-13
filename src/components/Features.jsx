import React from "react";
import "../styles/Features.css";
import { FaTruck, FaHeadset, FaUndo, FaLeaf, FaGift } from "react-icons/fa";

const Features = () => {
  return (
    <div className="features-section">
      <div className="section-container">
        <h2 className="features-heading">Why Choose Glamora</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaLeaf />
            </div>
            <h3 className="feature-title">Cruelty-Free</h3>
            <p className="feature-description">
              100% Vegan & Animal-Friendly Products
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaTruck />
            </div>
            <h3 className="feature-title">Free Shipping</h3>
            <p className="feature-description">On orders over $50</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaHeadset />
            </div>
            <h3 className="feature-title">Beauty Experts</h3>
            <p className="feature-description">Professional makeup advice</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaGift />
            </div>
            <h3 className="feature-title">Loyalty Rewards</h3>
            <p className="feature-description">
              Earn points with every purchase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
