import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <footer className="navbar-footer">
      <div className="navbar-container">
        <div className="navbar-grid">
          {/* ShopZone Section */}
          <div>
            <h3 className="shopzone-title">ShopZone</h3>
            <p className="shopzone-description">
              Your premier destination for quality products and exceptional
              shopping experiences. We bring you the best from around the world.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="social-link">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="social-link">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="section-titles">Quick Links</h3>
            <ul className="link-list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="section-titles">Categories</h3>
            <ul className="link-list">
              <li>
                <a href="#">Electronics</a>
              </li>
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Home & Garden</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Beauty</a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="section-titles">Contact Us</h3>
            <ul>
              <li className="contact-item">
                <MdEmail size={20} className="contact-icon" />
                <span>hello@shopzone.com</span>
              </li>
              <li className="contact-item">
                <MdPhone size={20} className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="contact-item">
                <MdLocationOn size={20} className="contact-icon" />
                <span>123 Commerce St, City, State</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright-section">
          <p>
            © 2024 ShopZone. All rights reserved. Made with{" "}
            <span className="heart-icon">❤️</span> for amazing customers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;
