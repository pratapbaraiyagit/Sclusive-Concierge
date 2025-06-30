import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Homepage.css"; // Import the CSS file

// Mock images - replace with your actual asset paths
const heroBg =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
const corporateMembershipImg =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const brandEventsImg =
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const privateEventsImg =
  "https://images.unsplash.com/photo-1519167758481-83f29ba5fe83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const appScreenshot =
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const travelService =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const restaurantService =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const exclusiveAccessService =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

const Homepage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    membershipType: "",
    message: "",
    attachment: null,
  });

  const testimonials = [
    {
      quote: t(
        "The team at S'Clusive anticipated our every need before we even had to ask."
      ),
      author: t("— Distinguished Member"),
    },
    {
      quote: t("A seamless, first-class experience from start to finish."),
      author: t("— Executive Client"),
    },
    {
      quote: t(
        "S'Clusive couldn't have planned our trip better. Everything was perfect!"
      ),
      author: t("— Private Member"),
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      attachment: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section
        className="hero-section section-padding"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 47, 46, 0.7), rgba(20, 47, 46, 0.7)), url(${heroBg})`,
        }}
      >
        <div className="responsive-container">
          <div className="max-width-800 margin-auto">
            <h1
              className="hero-title"
              style={{
                color: "#f8cd4d",
              }}
            >
              {t("Experience bespoke concierge")}
              <br />
              {/* <em className="hero-highlight">
                {t("services tailored to your lifestyle")}
              </em> */}
            </h1>
            <p className="hero-description">
              {t(
                "S'Clusive offers ultra-personalized, discreet, and world-class lifestyle management to those who demand the extraordinary. Our services provide privileged access to a life of seamless elegance."
              )}
            </p>
            <div className="hero-buttons">
              <Link
                to="/contact"
                className="responsive-btn btn-primary"
                style={{
                  fontSize: "18px",
                  padding: "16px 40px",
                }}
              >
                {t("Contact Us")}
              </Link>
              <Link
                to="/services"
                className="responsive-btn btn-outline"
                style={{
                  fontSize: "18px",
                  padding: "16px 40px",
                }}
              >
                {t("Our Services")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="section-dark section-padding">
        <div className="responsive-container">
          <h2 className="section-title text-white">{t("About Us")}</h2>
          <p className="section-description text-accent">
            {t(
              "Discover the story behind S'Clusive — a world where discretion, personalization, and excellence are our standards."
            )}
          </p>
          <Link
            to="/about"
            className="responsive-btn btn-primary"
            style={{
              fontSize: "16px",
              padding: "12px 30px",
            }}
          >
            {t("Learn More")} →
          </Link>
        </div>
      </section>

      {/* Signature Services */}
      <section className="section-accent section-padding">
        <div className="responsive-container">
          <h2 className="section-title-large text-black">
            {t("Signature Services")}{" "}
          </h2>
          <div className="services-grid_home">
            {[
              t("Personal Shopping"),
              t("Event Planning & VIP Event Access"),
              t("Luxury Travel & Stay"),
              t("Corporate Concierge"),
              t("Wellness & Lifestyle Management"),
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-inner">
                  <div className="service-icon">{index + 1}</div>
                  <h3 className="service-title">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark section-padding">
        <div className="responsive-container">
          <h2 className="section-title-large text-gold">{t("Testimonials")}</h2>
          <div className="responsive-row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="responsive-col-4">
                <div className="testimonial-card">
                  <blockquote className="testimonial-quote">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="testimonial-author">
                    {testimonial.author}
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Application Form */}
      <section className="section-light section-padding">
        <div className="responsive-container">
          <div className="max-width-800 margin-auto">
            <div className="text-center form-header">
              <h2
                className="section-title text-black"
                style={{ fontWeight: "700" }}
              >
                {t("Want to enquire about our services?")}
              </h2>
              <h3
                className="text-black"
                style={{
                  fontFamily: "serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: "400",
                  marginBottom: "1rem",
                }}
              >
                {t("Fill out the form below.")}
              </h3>
              <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
                {t("We will get back to you within 24 hours.")}
              </p>
            </div>

            <div className="form-container form-container-desktop">
              <div className="form-header">
                <h2 className="form-title">
                  {t("Send Us a")}{" "}
                  <span className="text-gold">{t("Message")}</span>
                </h2>
                <p className="form-description">
                  {t(
                    "Please use the form below for general inquiries or partnership opportunities. We aim to respond within 24 hours."
                  )}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">{t("Full Name *")}</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={t("Enter your full name")}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t("Email Address *")}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("Enter your email address")}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t("Phone Number")}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t("Enter your phone number (optional)")}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t("Your Message *")}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t(
                      "Tell us about your needs and how we can assist you..."
                    )}
                    required
                    className="form-control textarea"
                  />
                </div>

                {/* UPDATED FILE INPUT SECTION - i18n COMPATIBLE */}
                <div className="form-group">
                  <label className="form-label">
                    {t("Attach File (Optional)")}
                  </label>

                  {/* Hidden file input */}
                  <input
                    type="file"
                    id="fileAttachment"
                    name="attachment"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    style={{ display: "none" }}
                  />

                  {/* Custom translatable button and text */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      flexWrap: "wrap",
                      marginBottom: "8px",
                    }}
                  >
                    <label
                      htmlFor="fileAttachment"
                      style={{
                        backgroundColor: "#f8cd4d",
                        color: "#142f2e",
                        border: "2px solid #f8cd4d",
                        borderRadius: "25px",
                        padding: "12px 24px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        display: "inline-block",
                        fontSize: "14px",
                        userSelect: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#e0b43e";
                        e.target.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f8cd4d";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      {t("Choose File")}
                    </label>

                    <span
                      style={{
                        color: "#6c757d",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      {formData.attachment
                        ? formData.attachment.name
                        : t("No file chosen")}
                    </span>
                  </div>

                  <small className="file-help-text">
                    {t("Max file size 5MB (PDF, JPG, PNG, DOC)")}
                  </small>
                </div>

                <button
                  type="submit"
                  className="responsive-btn btn-primary form-submit-btn"
                >
                  {t("Send Message")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section-dark section-padding text-center">
        <div className="responsive-container">
          <div className="max-width-600 margin-auto">
            <h2 className="section-title text-white">
              {t("Experience the Extraordinary")}
            </h2>
            <Link
              to="/contact"
              className="responsive-btn btn-primary"
              style={{
                fontSize: "18px",
                padding: "16px 40px",
                display: "inline-block",
                minWidth: "200px",
              }}
            >
              {t("Enquire Now")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
