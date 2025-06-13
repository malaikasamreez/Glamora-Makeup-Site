import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "3rem 1.5rem",
  },
  headerContainer: {
    margin: "0 auto",
    width: "100%",
    maxWidth: "28rem",
  },
  title: {
    marginTop: "1.5rem",
    textAlign: "center",
    fontSize: "1.875rem",
    fontWeight: "800",
    color: "#111827",
  },
  subtitle: {
    marginTop: "0.5rem",
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#4b5563",
  },
  link: {
    color: "#2563eb",
    fontWeight: "500",
    textDecoration: "none",
  },
  linkHover: {
    color: "#3b82f6",
  },
  formContainer: {
    marginTop: "2rem",
    margin: "2rem auto",
    width: "100%",
    maxWidth: "28rem",
  },
  formWrapper: {
    backgroundColor: "white",
    padding: "2rem 1rem",
    borderRadius: "0.5rem",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "0.25rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem 0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  emailInput: {
    width: "100%",
    padding: "0.5rem 0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  inputFocus: {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  checkboxWrapper: {
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    height: "1rem",
    width: "1rem",
    color: "#2563eb",
    borderColor: "#d1d5db",
    borderRadius: "0.25rem",
  },
  checkboxLabel: {
    marginLeft: "0.5rem",
    fontSize: "0.875rem",
    color: "#111827",
  },
  button: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.375rem",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  buttonHover: {
    backgroundColor: "#1d4ed8",
  },
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // Store authentication state and user info
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
          })
        );

        // Add role-specific flags
        if (user.role === "user") {
          localStorage.setItem("isUser", "true");
          localStorage.removeItem("isAdmin");
          navigate("/", { replace: true });
        } else if (user.role === "admin") {
          localStorage.setItem("isAdmin", "true");
          localStorage.removeItem("isUser");
          if (
            localStorage.getItem("isAuthenticated") === "true" &&
            localStorage.getItem("isAdmin") === "true"
          ) {
            // Add 2 second delay before navigation
            await new Promise((resolve) => setTimeout(resolve, 2000));
            navigate("/admin", { replace: true });
          }
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h2 style={styles.title}>Sign in to your account</h2>
        <p style={styles.subtitle}>
          Or{" "}
          <Link to="/signup" style={styles.link}>
            create a new account
          </Link>
        </p>
      </div>

      <div style={styles.formContainer}>
        <div style={styles.formWrapper}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                style={styles.emailInput}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                style={styles.input}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div style={styles.checkboxContainer}>
              <div style={styles.checkboxWrapper}>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  style={styles.checkbox}
                />
                <label htmlFor="remember-me" style={styles.checkboxLabel}>
                  Remember me
                </label>
              </div>

              <div>
                <a href="#" style={styles.link}>
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              style={{
                ...styles.button,
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
