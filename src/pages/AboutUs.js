import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AboutUs.css"; // Import the CSS file

// Updated premium images
const aboutHero =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
const founderImg =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const teamWorkImg =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const luxuryServiceImg =
  "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

const AboutUs = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: "🔒",
      title: t("Total Discretion"),
      description: t(
        "Your privacy is our utmost priority, handled with the highest level of confidentiality and professional discretion."
      ),
    },
    {
      icon: "⚡",
      title: t("Personalized Services"),
      description: t(
        "Every request is unique, and our solutions are meticulously tailored to your exact needs and preferences."
      ),
    },
    {
      icon: "💎",
      title: t("Impeccable Taste"),
      description: t(
        "From exclusive experiences to luxury acquisitions, our standards reflect the pinnacle of refinement and sophistication."
      ),
    },
    {
      icon: "🌍",
      title: t("Global Reach, Local Refinement"),
      description: t(
        "Our worldwide network combined with localized expertise ensures seamless service, anywhere in the world."
      ),
    },
  ];

  const milestones = [
    { year: "1999", achievement: "S'CLUSIVE Founded" },
    { year: "2005", achievement: "International Expansion" },
    { year: "2010", achievement: "1000+ Global Partners" },
    { year: "2020", achievement: "Digital Transformation" },
    { year: "2025", achievement: "25 Years of Excellence" },
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section
        className="hero-about"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20, 47, 46, 0.8), rgba(20, 47, 46, 0.6)), url(${aboutHero})`,
        }}
      >
        <div className="about-container">
          <div className="max-width-800 margin-auto">
            <h1 className="hero-title-about">
              {t("About")} <span className="hero-highlight">S'CLUSIVE</span>
            </h1>
            <p className="hero-subtitle-about">
              {t("Your privileged access to a life without limits.")}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-about section-bg-light">
        <div className="about-container">
          <div className="about-row">
            <div className="about-col-6 pr-3">
              <h2 className="section-title-about">
                {t("Our Brand")}{" "}
                <span className="hero-highlight">{t("Story")}</span>
              </h2>
              <p className="section-subtitle">
                {t(
                  "Founded on the belief that premium services should be seamless, S'Clusive brings decades of elite expertise to its clients."
                )}
              </p>
              <p className="section-text">
                {t(
                  "As dedicated lifestyle partners, we're more than just a concierge service—we're your gateway to a life without limits."
                )}
              </p>
              <p className="section-text">
                {t(
                  "Our team is committed to anticipating your needs, ensuring discretion, and transforming every request into an exceptional experience."
                )}
              </p>
            </div>

            <div className="about-col-6">
              <img
                src={luxuryServiceImg}
                alt="S'CLUSIVE luxury service"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="section-about section-bg-white">
        <div className="about-container">
          <div className="about-row">
            <div className="about-col-full">
              <h2 className="section-title-medium">
                {t("Our")} <span className="hero-highlight">{t("Vision")}</span>
              </h2>
              <div className="mb-4">
                <img
                  src={founderImg}
                  alt="Founder of S'Clusive"
                  className="founder-image"
                />
              </div>
              <blockquote className="founder-quote">
                "
                {t(
                  "At S’Clusive, we don’t just plan, we anticipate your every desire. Our mission is to simplify the extraordinary!"
                )}
                "
              </blockquote>
              <footer className="quote-author">
                — {t("The Co-Founders of S'clusive")}
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-about section-bg-accent">
        <div className="about-container">
          <div className="text-center mb-4">
            <h2 className="section-title-about">
              {t("Our Values")}{" "}
              {/* <span className="hero-highlight">{t("Values")}</span> */}
            </h2>
            <p className="section-description-about">
              {t(
                "These principles guide every interaction and decision we make, ensuring excellence in all aspects of our service."
              )}
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div>
                  <h4 className="value-title">{value.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section-bg-dark cta-section">
        <div className="about-container">
          <div className="max-width-700 margin-auto">
            <h2 className="cta-title">
              {t("Ready to Experience Unparalleled Luxury?")}
            </h2>
            <p className="cta-description">
              {t(
                "Discover how S'CLUSIVE can simplify the extraordinary for you. Your journey to a life without limits starts here."
              )}
            </p>
            <div className="cta-buttons">
              <Link to={"/contact"} className="about-btn">
                {t("Contact Us Today")}
              </Link>
              <Link to={"/services"} className="about-btn-outline">
                {t("Explore Our Services")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
