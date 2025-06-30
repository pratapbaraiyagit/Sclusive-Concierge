// src/pages/ClientPortal/ClientLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext";

// Import icons from react-icons (specifically from the Font Awesome set)
import { FaEye, FaEyeSlash } from "react-icons/fa"; // FaEye for show, FaEyeSlash for hide

// Login Page Component
const ClientLogin = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRequestAccess, setShowRequestAccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError(t("Please enter both email and password"));
      return;
    }

    try {
      setError("");
      setLoading(true);
      await login(formData.email, formData.password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setError(t("Failed to log in. Please check your credentials."));
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "0 auto",
      padding: "0 20px",
    },
    card: {
      backgroundColor: "#8EABA9",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      padding: "3rem",
      textAlign: "center",
      border: "1px solid rgba(248, 205, 77, 0.2)",
    },
    formGroup: {
      marginBottom: "1.5rem",
      textAlign: "left",
      position: "relative", // Crucial for positioning the icon
    },
    formLabel: {
      display: "block",
      marginBottom: "0.5rem",
      color: "#142F2E",
      fontWeight: "600",
      fontSize: "14px",
    },
    formControl: {
      width: "100%",
      padding: "14px 18px",
      border: "2px solid rgba(255,255,255,0.3)",
      borderRadius: "10px",
      fontSize: "16px",
      fontFamily: "Poppins, sans-serif",
      transition: "all 0.3s ease",
      backgroundColor: "rgba(255,255,255,0.9)",
      color: "#142F2E",
      boxSizing: "border-box",
    },
    btn: {
      display: "inline-block",
      padding: "14px 30px",
      borderRadius: "50px",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "16px",
      textAlign: "center",
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
    },
    btnPrimary: {
      backgroundColor: "#F8CD4D",
      color: "#142F2E",
    },
    link: {
      color: "#142F2E",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    error: {
      color: "#dc3545",
      fontSize: "14px",
      marginBottom: "1rem",
      padding: "8px",
      backgroundColor: "rgba(220, 53, 69, 0.1)",
      borderRadius: "4px",
      border: "1px solid rgba(220, 53, 69, 0.2)",
    },
    // Style for the password toggle icon button
    passwordToggle: {
      position: "absolute",
      right: "15px",
      // top: "50%", // This can sometimes be tricky with labels, adjust if needed
      top: "calc(60% + 5px)", // Adjust this if the label pushes it down, e.g., 5px below center
      transform: "translateY(-50%)", // Center vertically based on its own height
      cursor: "pointer",
      color: "#142F2E",
      fontSize: "18px", // Adjust icon size
      background: "none",
      border: "none",
      padding: 0,
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 1,
      zIndex: 10,
    },
  };

  // Show Forgot Password if clicked
  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
  }

  // Show Request Access if clicked
  if (showRequestAccess) {
    return <RequestAccess onBack={() => setShowRequestAccess(false)} />;
  }

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        backgroundColor: "#142F2E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                color: "#142F2E",
                fontFamily: "serif",
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              {t("Client Portal Login")}
            </h2>
            <p
              style={{
                color: "#142F2E",
                marginBottom: 0,
                fontSize: "16px",
              }}
            >
              {t("Access your exclusive lifestyle management dashboard.")}
            </p>
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <form onSubmit={handleLogin}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>{t("Email address")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t("Enter email")}
                required
                style={styles.formControl}
                onFocus={(e) => {
                  e.target.style.borderColor = "#F8CD4D";
                  e.target.style.backgroundColor = "#FFFFFF";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.3)";
                  e.target.style.backgroundColor = "rgba(255,255,255,0.9)";
                }}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>{t("Password")}</label>
              <input
                type={showPassword ? "text" : "password"} // Dynamic type
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder={t("Password")}
                required
                style={styles.formControl}
                onFocus={(e) => {
                  e.target.style.borderColor = "#F8CD4D";
                  e.target.style.backgroundColor = "#FFFFFF";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.3)";
                  e.target.style.backgroundColor = "rgba(255,255,255,0.9)";
                }}
              />
              <button
                type="button"
                style={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? t("Hide password") : t("Show password")
                }
              >
                {/* Use FaEye or FaEyeSlash based on showPassword state */}
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
                width: "100%",
                marginBottom: "2rem",
                opacity: loading ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.backgroundColor = "#e0b43e";
                  e.target.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.backgroundColor = "#F8CD4D";
                  e.target.style.transform = "translateY(0)";
                }
              }}
            >
              {loading ? t("Logging in...") : t("Login")}
            </button>
          </form>

          <div style={{ textAlign: "center" }}>
            <span
              onClick={() => setShowForgotPassword(true)}
              style={{
                ...styles.link,
                display: "block",
                marginBottom: "1rem",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#F8CD4D")}
              onMouseLeave={(e) => (e.target.style.color = "#142F2E")}
            >
              {t("Forgot Password?")}
            </span>
            <span
              onClick={() => setShowRequestAccess(true)}
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.color = "#F8CD4D")}
              onMouseLeave={(e) => (e.target.style.color = "#142F2E")}
            >
              {t("Request Access")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Forgot Password Component
const ForgotPassword = ({ onBack }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(email);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Password reset error:", error);
      setError(
        t(
          "Failed to send password reset email. Please check your email address."
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "0 auto",
      padding: "0 20px",
    },
    card: {
      backgroundColor: "#8EABA9",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      padding: "3rem",
      textAlign: "center",
    },
    formGroup: {
      marginBottom: "1.5rem",
      textAlign: "left",
    },
    formControl: {
      width: "100%",
      padding: "14px 18px",
      border: "2px solid rgba(255,255,255,0.3)",
      borderRadius: "10px",
      fontSize: "16px",
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "rgba(255,255,255,0.9)",
      color: "#142F2E",
      boxSizing: "border-box",
    },
    btn: {
      padding: "14px 30px",
      borderRadius: "50px",
      fontWeight: "600",
      fontSize: "16px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    error: {
      color: "#dc3545",
      fontSize: "14px",
      marginBottom: "1rem",
      padding: "8px",
      backgroundColor: "rgba(220, 53, 69, 0.1)",
      borderRadius: "4px",
      border: "1px solid rgba(220, 53, 69, 0.2)",
    },
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        backgroundColor: "#142F2E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      <div style={styles.container}>
        <div style={styles.card}>
          <h2
            style={{
              color: "#142F2E",
              fontFamily: "serif",
              fontSize: "2.2rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            {t("Forgot Password?")}
          </h2>

          {!isSubmitted ? (
            <>
              <p style={{ color: "#142F2E", marginBottom: "2rem" }}>
                {t(
                  "Enter your email address and we'll send you a link to reset your password."
                )}
              </p>

              {error && <div style={styles.error}>{error}</div>}

              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("Enter your email address")}
                    required
                    style={styles.formControl}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    ...styles.btn,
                    backgroundColor: "#F8CD4D",
                    color: "#142F2E",
                    width: "100%",
                    marginBottom: "1rem",
                    opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.backgroundColor = "#e0b43e";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.backgroundColor = "#F8CD4D";
                    }
                  }}
                >
                  {loading ? t("Sending...") : t("Send Reset Link")}
                </button>
              </form>
            </>
          ) : (
            <div>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
              <p style={{ color: "#142F2E", marginBottom: "2rem" }}>
                {t(
                  "Reset link sent! Please check your email for further instructions."
                )}
              </p>
            </div>
          )}

          <button
            onClick={onBack}
            style={{
              ...styles.btn,
              backgroundColor: "transparent",
              color: "#142F2E",
              border: "2px solid #142F2E",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#142F2E";
              e.target.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#142F2E";
            }}
          >
            {t("Back to Login")}
          </button>
        </div>
      </div>
    </div>
  );
};

// Request Access Component
const RequestAccess = ({ onBack }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPasswordRA, setShowPasswordRA] = useState(false); // State for Request Access password visibility
  const [showConfirmPasswordRA, setShowConfirmPasswordRA] = useState(false); // State for Request Access confirm password visibility

  const { signup } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError(t("Passwords do not match"));
      return;
    }

    if (formData.password.length < 6) {
      setError(t("Password must be at least 6 characters long"));
      return;
    }

    try {
      setError("");
      setLoading(true);
      await signup(formData.email, formData.password, formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Signup error:", error);
      if (error.code === "auth/email-already-in-use") {
        setError(t("An account with this email already exists"));
      } else {
        setError(t("Failed to create account. Please try again."));
      }
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "0 20px",
    },
    card: {
      backgroundColor: "#8EABA9",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      padding: "3rem",
    },
    formGroup: {
      marginBottom: "1.5rem",
      position: "relative", // Crucial for positioning the icon
    },
    formControl: {
      width: "100%",
      padding: "14px 18px",
      border: "2px solid rgba(255,255,255,0.3)",
      borderRadius: "10px",
      fontSize: "16px",
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "rgba(255,255,255,0.9)",
      color: "#142F2E",
      boxSizing: "border-box",
    },
    btn: {
      padding: "14px 30px",
      borderRadius: "50px",
      fontWeight: "600",
      fontSize: "16px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    error: {
      color: "#dc3545",
      fontSize: "14px",
      marginBottom: "1rem",
      padding: "8px",
      backgroundColor: "rgba(220, 53, 69, 0.1)",
      borderRadius: "4px",
      border: "1px solid rgba(220, 53, 69, 0.2)",
    },
    // Style for the password toggle icon button
    passwordToggle: {
      position: "absolute",
      right: "15px",
      // top: "50%", // This can sometimes be tricky with labels, adjust if needed
      top: "calc(50% + 5px)", // Adjusted to align better with input field
      transform: "translateY(-50%)", // Center vertically based on its own height
      cursor: "pointer",
      color: "#142F2E",
      fontSize: "18px", // Adjust icon size
      background: "none",
      border: "none",
      padding: 0,
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 1,
      zIndex: 10,
    },
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        backgroundColor: "#142F2E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      <div style={styles.container}>
        <div style={styles.card}>
          <h2
            style={{
              color: "#142F2E",
              fontFamily: "serif",
              fontSize: "2.2rem",
              fontWeight: "700",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            {t("Request Access")}
          </h2>

          {!isSubmitted ? (
            <>
              <p
                style={{
                  color: "#142F2E",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                {t(
                  "Complete the form below to request access to our exclusive client portal."
                )}
              </p>

              {error && <div style={styles.error}>{error}</div>}

              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={t("Full Name *")}
                    required
                    style={styles.formControl}
                  />
                </div>

                <div style={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("Email Address *")}
                    required
                    style={styles.formControl}
                  />
                </div>

                <div style={styles.formGroup}>
                  <input
                    type={showPasswordRA ? "text" : "password"} // Dynamic type
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder={t("Password *")}
                    required
                    style={styles.formControl}
                  />
                  <button
                    type="button"
                    style={styles.passwordToggle}
                    onClick={() => setShowPasswordRA(!showPasswordRA)}
                    aria-label={
                      showPasswordRA ? t("Hide password") : t("Show password")
                    }
                  >
                    {/* Use FaEye or FaEyeSlash based on showPasswordRA state */}
                    {showPasswordRA ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div style={styles.formGroup}>
                  <input
                    type={showConfirmPasswordRA ? "text" : "password"} // Dynamic type
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder={t("Confirm Password *")}
                    required
                    style={styles.formControl}
                  />
                  <button
                    type="button"
                    style={styles.passwordToggle}
                    onClick={() =>
                      setShowConfirmPasswordRA(!showConfirmPasswordRA)
                    }
                    aria-label={
                      showConfirmPasswordRA
                        ? t("Hide confirm password")
                        : t("Show confirm password")
                    }
                  >
                    {/* Use FaEye or FaEyeSlash based on showConfirmPasswordRA state */}
                    {showConfirmPasswordRA ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div style={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t("Phone Number")}
                    style={styles.formControl}
                  />
                </div>

                <div style={styles.formGroup}>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t("Company (Optional)")}
                    style={styles.formControl}
                  />
                </div>

                <div style={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("Tell us about your concierge needs...")}
                    rows={4}
                    style={{
                      ...styles.formControl,
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    ...styles.btn,
                    backgroundColor: "#F8CD4D",
                    color: "#142F2E",
                    width: "100%",
                    marginBottom: "1rem",
                    opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.backgroundColor = "#e0b43e";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.backgroundColor = "#F8CD4D";
                    }
                  }}
                >
                  {loading ? t("Creating Account...") : t("Submit Request")}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
              <p style={{ color: "#142F2E", marginBottom: "2rem" }}>
                {t(
                  "Your account has been created successfully! You can now log in to access your dashboard."
                )}
              </p>
            </div>
          )}

          <button
            onClick={onBack}
            style={{
              ...styles.btn,
              backgroundColor: "transparent",
              color: "#142F2E",
              border: "2px solid #142F2E",
              display: "block",
              margin: "0 auto",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#142F2E";
              e.target.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#142F2E";
            }}
          >
            {t("Back to Login")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
