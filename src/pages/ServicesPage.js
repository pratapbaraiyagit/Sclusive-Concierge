import React, { useState } from "react";
import "./ServicesPage.css"; // Import the CSS file
import { Link } from "react-router-dom";

// Updated premium images
const servicesHero =
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
const lifestyleManagementImg =
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const luxuryTravelImg =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const eventPlanningImg =
  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const corporateConciergeImg =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

const ServicesPage = () => {
  // State to track which services are expanded
  const [expandedServices, setExpandedServices] = useState({});

  // Function to toggle service expansion
  const toggleServiceExpansion = (serviceTitle) => {
    setExpandedServices((prev) => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle],
    }));
  };

  const servicesContent = [
    {
      image: lifestyleManagementImg,
      title: "Lifestyle Management",
      description:
        "From daily essentials to rare requests, we make the impossible feel effortless with our comprehensive lifestyle management services.",
      subPoints: [
        "Personal Shopping (gifting, sourcing rare items)",
        "Reservations (restaurants, events, rides)",
        "Real Estate (buying, selling, & managing properties)",
        "Private Staffing (Trainer, Nanny, Private Chef)",
        "Interior Design & Home Management",
      ],
      icon: "🏠",
    },
    {
      image: luxuryTravelImg,
      title: "Luxury Travel & Stay",
      description:
        "Exclusive Villas & Hotels, Private Jet Charter, curated journeys — we handle every detail of your travel experience.",
      subPoints: [
        "Reservations (flights, hotel, transportation)",
        "Tailored Trip Planning (work or personal)",
        "Michelin-Starred Restaurant Reservations",
        "Seasonal & Long-Term Rentals",
        "Private Jet & Yacht Charter Services",
      ],
      icon: "✈️",
    },
    {
      image: eventPlanningImg,
      title: "Event Planning",
      description:
        "Whether it's a private dinner or a corporate gala, we orchestrate moments to remember with flawless execution.",
      subPoints: [],
      icon: "🎉",
    },
    {
      image: corporateConciergeImg,
      title: "Corporate Concierge",
      description:
        "Elevate executive life with seamless support, from business travel to luxury gifting and corporate event management.",
      subPoints: [],
      icon: "💼",
    },
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section
        className="services-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20, 47, 46, 0.8), rgba(20, 47, 46, 0.6)), url(${servicesHero})`,
        }}
      >
        <div className="services-container">
          <div className="max-width-900 margin-auto">
            <h1 className="services-hero-title">
              Our <span className="services-highlight">Bespoke</span> Services
            </h1>
            <p className="services-hero-description">
              We take pride in offering bespoke services tailored to your unique
              needs. Whether you require a restaurant reservation, a ticket to
              an exclusive event, a VIP transfer by car or private jet, or even
              full vacation planning, we are here to assist you.
            </p>
            <p className="services-hero-tagline">
              Discover the art of exclusive living with S'CLUSIVE.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Home Page Style Cards */}
      <section className="services-section services-section-light">
        <div className="services-container">
          <div className="text-center mb-4">
            <h2 className="services-section-title">
              A World of Possibilities at Your{" "}
              <span className="services-highlight">Fingertips</span>
            </h2>
            <p className="services-section-description">
              Our comprehensive suite of services is designed to anticipate your
              every need and transform your desires into extraordinary
              experiences.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {servicesContent.map((service, index) => (
              <div key={index} className="services-card-wrapper">
                <div className="services-card">
                  {/* Image Section */}
                  <div className="services-card-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="services-card-img"
                    />
                    {/* Icon Overlay */}
                    <div className="services-card-icon">{service.icon}</div>
                  </div>

                  {/* Content Section */}
                  <div className="services-card-content">
                    <h3 className="services-card-title">{service.title}</h3>
                    <p className="services-card-description">
                      {service.description}
                    </p>

                    {/* Features List */}
                    {(service.title === "Lifestyle Management" ||
                      service.title === "Luxury Travel & Stay") &&
                      service.subPoints.length > 0 && (
                        <div className="services-features">
                          <h4 className="services-features-title">
                            What's Included:
                          </h4>
                          <ul className="services-features-list">
                            {/* Always show first 3 items */}
                            {service.subPoints.slice(0, 3).map((point, i) => (
                              <li key={i} className="services-features-item">
                                {point}
                              </li>
                            ))}

                            {/* Show remaining items if expanded */}
                            {expandedServices[service.title] &&
                              service.subPoints.slice(3).map((point, i) => (
                                <li
                                  key={i + 3}
                                  className="services-features-item"
                                >
                                  {point}
                                </li>
                              ))}

                            {/* Show/Hide toggle button */}
                            {service.subPoints.length > 3 && (
                              <li
                                className="services-features-more"
                                onClick={() =>
                                  toggleServiceExpansion(service.title)
                                }
                                style={{
                                  cursor: "pointer",
                                  color: "#2d5a5a",
                                  fontWeight: "500",
                                  textDecoration: "underline",
                                }}
                              >
                                {expandedServices[service.title]
                                  ? "- Show less"
                                  : `+ ${
                                      service.subPoints.length - 3
                                    } more services`}
                              </li>
                            )}
                          </ul>
                        </div>
                      )}

                    {/* Spacer for cards without features */}
                    {(service.title === "Event Planning" ||
                      service.title === "Corporate Concierge") && (
                      <div className="services-card-spacer">
                        {/* Empty spacer to maintain consistent button positioning */}
                      </div>
                    )}

                    {/* CTA Button - Fixed at bottom */}
                    <div className="services-card-cta">
                      <a href="#contact" className="services-card-btn">
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Showcase */}
      <section className="services-section services-section-white">
        <div className="services-container">
          <div className="text-center max-width-800 margin-auto">
            <h2 className="services-section-title-medium">
              Beyond <span className="services-highlight">Expectations</span>
            </h2>
            <p className="services-section-description">
              Our services extend far beyond the ordinary. From arranging
              private museum viewings to securing last-minute reservations at
              the world's most exclusive restaurants, we turn the impossible
              into reality.
            </p>
            <div className="services-stats">
              {[
                { number: "24/7", text: "Global Support" },
                { number: "10+", text: "Countries Served" },
                { number: "99.8%", text: "Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="services-stat">
                  <div className="services-stat-number">{stat.number}</div>
                  <div className="services-stat-text">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="services-section services-section-dark text-center">
        <div className="services-container">
          <div className="max-width-700 margin-auto">
            <h2 className="services-cta-title">
              Ready to Experience{" "}
              <span className="services-highlight">Unparalleled</span> Luxury?
            </h2>
            <p className="services-cta-description">
              Our team is ready to curate your next extraordinary moment. Let us
              transform your vision into an unforgettable reality.
            </p>
            <div className="services-cta-buttons">
              <Link to="/contact" className="services-btn">
                Start Your Request
              </Link>
              <a href="tel:+224613543724" className="services-btn-outline">
                Speak to an Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
