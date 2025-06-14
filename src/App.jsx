import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import "./App.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPanel from "./components/AdminPanel";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow pt-16 pb-20">
            <Routes>
              {/* Public Routes */}
              <Route
                path="/login"
                element={
                  isAuthenticated ? (
                    isAdmin ? (
                      <Navigate to="/admin" replace />
                    ) : (
                      <Navigate to="/" replace />
                    )
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/signup"
                element={
                  isAuthenticated ? (
                    isAdmin ? (
                      <Navigate to="/admin" replace />
                    ) : (
                      <Navigate to="/" replace />
                    )
                  ) : (
                    <Signup />
                  )
                }
              />

              {/* Admin Route */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin={true}>
                    <AdminPanel />
                  </ProtectedRoute>
                }
              />

              {/* Protected Routes (accessible by both users and admins) */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <ProtectedRoute>
                    <Products />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/categories"
                element={
                  <ProtectedRoute>
                    <Categories />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />

              {/* Catch all route - redirect to home if authenticated, login if not */}
              <Route
                path="*"
                element={
                  isAuthenticated ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
            </Routes>
          </main>
          <Navbar />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
