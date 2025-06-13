import React from "react";
import "../styles/CustomerTestinomials.css";

const CustomerTestimonials = () => {
  return (
    <section className="customer-testimonials-section">
      <h2>What Our Customers Say</h2>
      <p className="subtitle">
        Join thousands of satisfied customers who trust us for their shopping
        needs
      </p>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="testimonial-text">
            "Amazing quality and fast shipping! I've been shopping here for over
            a year and they never disappoint."
          </p>
          <div className="customer-info">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah Johnson"
              className="customer-avatar"
            />
            <div className="customer-details">
              <strong>Sarah Johnson</strong>
              <span>Fashion Blogger</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="testimonial-text">
            "The electronics section has everything I need. Great prices and
            authentic products every time."
          </p>
          <div className="customer-info">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Mike Chen"
              className="customer-avatar"
            />
            <div className="customer-details">
              <strong>Mike Chen</strong>
              <span>Tech Enthusiast</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="testimonial-text">
            "Their home decor collection is absolutely stunning. I've furnished
            my entire office with items from here."
          </p>
          <div className="customer-info">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Emily Davis"
              className="customer-avatar"
            />
            <div className="customer-details">
              <strong>Emily Davis</strong>
              <span>Interior Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
