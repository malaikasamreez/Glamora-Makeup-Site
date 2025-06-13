import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePurchase = () => {
    // Here you would typically send the order to your backend
    console.log("Order details:", {
      items: cartItems,
      total: getCartTotal(),
      customerInfo: formData,
    });
    clearCart();
    setShowModal(false);
    navigate("/");
    setFormData({
      name: "",
      phone: "",
      address: "",
      paymentMethod: "cash",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-section">
        <div className="section-container">
          <h2 className="section-title">Your Cart</h2>
          <div className="cart-container">
            <p className="cart-empty-message">Your cart is empty</p>
            <div className="cart-button-container">
              <Link to="/products" className="view-all-button">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-section">
      <div className="section-container">
        <h2 className="section-title">Your Cart</h2>
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.name}</h3>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="cart-buttons">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button
                className="checkout-btn"
                onClick={() => setShowModal(true)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Checkout</h2>
            <div className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Payment Method:</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option value="cash">Cash on Delivery</option>
                </select>
              </div>
              <div className="order-total">
                <h3>Order Total: ${getCartTotal().toFixed(2)}</h3>
              </div>
              <div className="modal-buttons">
                <button
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="purchase-btn"
                  onClick={handlePurchase}
                  disabled={
                    !formData.name || !formData.phone || !formData.address
                  }
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
