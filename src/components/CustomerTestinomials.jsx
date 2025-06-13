import React from "react";
import "../styles/CustomerTestinomials.css";

const CustomerTestimonials = () => {
  return (
    <section className="customer-testimonials-section">
      <h2>What Our Beauty Enthusiasts Say</h2>
      <p className="subtitle">
        Join thousands of satisfied customers who trust Glamora for their beauty
        needs
      </p>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="testimonial-text">
            "The foundation range is incredible! Finally found my perfect match
            after years of searching. The quality is outstanding and it lasts
            all day."
          </p>
          <div className="customer-info">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah Johnson"
              className="customer-avatar"
            />
            <div className="customer-details">
              <strong>Sarah Johnson</strong>
              <span>Makeup Artist</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="testimonial-text">
            "Their eyeshadow palettes are pigmented and blend beautifully. The
            customer service is exceptional - they helped me choose the perfect
            shades for my skin tone."
          </p>
          <div className="customer-info">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Emma Chen"
              className="customer-avatar"
            />
            <div className="customer-details">
              <strong>Emma Chen</strong>
              <span>Beauty Blogger</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="testimonial-text">
            "As someone with sensitive skin, I love that all their products are
            cruelty-free and gentle. The skincare range has transformed my
            complexion!"
          </p>
          <div className="customer-info">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Sophia Davis"
              className="customer-avatar"
            />
            <div className="customer-details">
              <strong>Sophia Davis</strong>
              <span>Skincare Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
