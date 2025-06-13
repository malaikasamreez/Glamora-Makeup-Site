import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      // Create new user object
      const newUser = {
        username: formData.name,
        email: formData.email,
        password: formData.password,
        role: "user",
      };

      // Make POST request to create user
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to create account");
      }

      // Store authentication state
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(newUser));

      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
      setError(error.message || "Failed to create account. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2>Create your account</h2>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="signin-link">
            Sign in
          </Link>
        </p>
      </div>

      <div className="signup-form-container">
        <div className="signup-form-wrapper">
          {error && <div className="error-message">{error}</div>}
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <div className="input-wrapper">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="input-wrapper">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="submit-button">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .signup-container {
          min-height: 100vh;
          background-color: #f9fafb;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 1rem;
        }

        .signup-header {
          margin: 0 auto;
          width: 100%;
          max-width: 28rem;
          text-align: center;
        }

        .signup-header h2 {
          margin-top: 1.5rem;
          font-size: 1.875rem;
          font-weight: 800;
          color: #111827;
        }

        .signup-header p {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #4b5563;
        }

        .signin-link {
          color: #2563eb;
          font-weight: 500;
          text-decoration: none;
        }

        .signin-link:hover {
          color: #1d4ed8;
        }

        .signup-form-container {
          margin-top: 2rem;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          max-width: 28rem;
        }

        .signup-form-wrapper {
          background-color: white;
          padding: 2rem 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.25rem;
        }

        .input-wrapper {
          margin-top: 0.25rem;
        }

        .input-wrapper input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }

        .submit-button {
          width: 100%;
          padding: 0.5rem 1rem;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .submit-button:hover {
          background-color: #1d4ed8;
        }

        .submit-button:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }

        .error-message {
          background-color: #fee2e2;
          color: #dc2626;
          padding: 0.75rem;
          border-radius: 0.375rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          text-align: center;
        }

        @media (min-width: 640px) {
          .signup-form-wrapper {
            padding: 2rem 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}
