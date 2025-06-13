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
            <h3 className="shopzone-title">Glamora</h3>
            <p className="shopzone-description">
              Your premier destination for premium beauty products. Discover
              cruelty-free makeup, skincare, and fragrances that enhance your
              natural beauty.
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
                <a href="#">Beauty Blog</a>
              </li>
              <li>
                <a href="#">Makeup Tips</a>
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
                <a href="#">Face Makeup</a>
              </li>
              <li>
                <a href="#">Eye Makeup</a>
              </li>
              <li>
                <a href="#">Lip Products</a>
              </li>
              <li>
                <a href="#">Skincare</a>
              </li>
              <li>
                <a href="#">Fragrances</a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="section-titles">Contact Us</h3>
            <ul>
              <li className="contact-item">
                <MdEmail size={20} className="contact-icon" />
                <span>beauty@glamora.com</span>
              </li>
              <li className="contact-item">
                <MdPhone size={20} className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="contact-item">
                <MdLocationOn size={20} className="contact-icon" />
                <span>123 Beauty Street, City, State</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright-section">
          <p>
            © 2024 Glamora Beauty. All rights reserved. Made with{" "}
            <span className="heart-icon">❤️</span> for beauty enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;
