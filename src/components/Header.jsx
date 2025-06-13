import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "../styles/Header.css";
import logo from "../assets/glamoraLogo.png";

export default function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("isUser");
    setIsAuthenticated(false);
    setIsSettingsOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="E-Shop Logo" className="logo-image" />
              {/* E-Shop */}
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/categories" className="nav-link">
              Categories
            </Link>
            <Link to="/cart" className="cart-icon">
              <ShoppingCartIcon className="icon" />
              {cartItems.length > 0 && (
                <span className="cart-notification"></span>
              )}
            </Link>
            <div className="settings-dropdown">
              <button
                className="settings-button"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              >
                <Cog6ToothIcon className="icon" />
              </button>
              {isSettingsOpen && (
                <div className="dropdown-menu">
                  <>
                    <Link to="/login" className="dropdown-item">
                      Sign In
                    </Link>
                    <Link to="/signup" className="dropdown-item">
                      Sign Up
                    </Link>
                    <Link
                      to="/login"
                      onClick={handleLogout}
                      className="dropdown-item"
                    >
                      Logout
                    </Link>
                  </>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
