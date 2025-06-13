import React from "react";
import "../styles/Features.css";
import { FaTruck, FaHeadset, FaUndo } from "react-icons/fa";

const Features = () => {
  return (
    <div className="features-section">
      <div className="section-container">
        <h2 className="features-heading">Why Choose Us</h2>
        <div className="features-grid">
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
            <h3 className="feature-title">24/7 Support</h3>
            <p className="feature-description">Always here to help</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaUndo />
            </div>
            <h3 className="feature-title">Easy Returns</h3>
            <p className="feature-description">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
