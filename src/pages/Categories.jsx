import React, { useEffect, useState, useRef } from "react";
import "../styles/Categories.css";
import ProductCard from "../components/ProductCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const productsSectionRef = useRef(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/products?categoryId=${categoryId}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProductsByCategory(category.id);
    setTimeout(() => {
      productsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="categories-container">
      <h1 className="categories-title">Shop by Category</h1>
      <p className="categories-subtitle">
        Find exactly what you're looking for in our organized collections
      </p>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card category-card-bg"
            style={{ backgroundImage: `url(${category.image})` }}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="category-overlay">
              <h2 className="category-name">{category.name}</h2>
              {/* <div className="category-item-count">
                {category.itemCount}+ it
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="products-section" ref={productsSectionRef}>
          <h2 className="section-title">{selectedCategory.name} Products</h2>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
