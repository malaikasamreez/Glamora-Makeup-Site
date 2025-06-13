import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/HomePage.css";
import CustomerTestimonials from "../components/CustomerTestinomials";
import Features from "../components/Features";

function HomePage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Unveil Your <br />
              <span className="hero-highlight">Natural Beauty</span>
            </h1>
            <p className="hero-subtitle">
              Discover our premium collection of cruelty-free, vegan makeup
              products that enhance your natural beauty while caring for your
              skin. From flawless foundations to vibrant lipsticks, we've got
              you covered.
            </p>
            <div className="hero-buttons">
              <a href="/products" className="hero-button hero-button-primary">
                Shop Collection <span className="arrow">→</span>
              </a>
            </div>
            <div className="hero-testimonial">
              <span className="stars">★★★★★</span>
              <span className="testimonial-text">
                Loved by 50,000+ beauty enthusiasts
              </span>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1534143826428-81fc61582afd?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Premium makeup collection with pink and gold tones"
                className="main-image"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-section">
        <div className="section-container">
          <h2 className="section-title">Bestselling Products</h2>
          <div className="products-grid">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <a
              href="/products"
              className="view-all-button"
              style={{ textDecoration: "none" }}
            >
              Explore All Products
            </a>
          </div>
        </div>
      </div>

      <div>
        <CustomerTestimonials />
      </div>
      <Features />
    </div>
  );
}

export default HomePage;
