import React from "react";
import { Link } from "react-router-dom";
import "./MembershipPage.css"; // Import the CSS file

// Updated images for better visual appeal
const membershipHero =
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
const membershipBenefitsImg =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const exclusiveAccessImg =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const globalNetworkImg =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const discretionImg =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

const MembershipPage = () => {
  const benefits = [
    {
      image: membershipBenefitsImg,
      title: "Dedicated Lifestyle Manager",
      description:
        "A single point of contact available to anticipate and fulfill your every need, 24/7 worldwide support.",
      icon: "👨‍💼",
    },
    {
      image: exclusiveAccessImg,
      title: "Exclusive Access",
      description:
        "Gain privileged entry to sold-out events, private clubs, and bespoke opportunities worldwide.",
      icon: "🔐",
    },
    {
      image: globalNetworkImg,
      title: "Global Network",
      description:
        "Leverage our extensive network of luxury partners, from private jet charters to Michelin-starred chefs.",
      icon: "🌍",
    },
    {
      image: discretionImg,
      title: "Unrivaled Discretion",
      description:
        "All services are delivered with the utmost confidentiality and professionalism.",
      icon: "🤝",
    },
  ];

  const membershipTiers = [
    {
      name: "Essentiel",
      subtitle: "Convenience and Class",
      price: "$5,000",
      period: "/year",
      popular: false,
      features: [
        { name: "Dedicated Concierge Support", included: true },
        { name: "Priority Reservations", included: true },
        { name: "Access to Core Services", included: true },
        { name: "Business Hours Support", included: true },
        { name: "24/7 Global Support", included: false },
        { name: "VIP Event Invitations", included: false },
        { name: "Personal Shopping Services", included: false },
      ],
      buttonText: "Get Started",
      description:
        "Perfect for those seeking essential luxury services with professional concierge support.",
    },
    {
      name: "Signature",
      subtitle: "Elevated, 24/7 VIP Support",
      price: "$15,000",
      period: "/year",
      popular: true,
      features: [
        { name: "Dedicated Concierge Support", included: true },
        { name: "Priority Reservations", included: true },
        { name: "Access to All Core Services", included: true },
        { name: "24/7 Global Support", included: true },
        { name: "VIP Event Invitations", included: true },
        { name: "Curated Travel Planning", included: true },
        { name: "Personal Shopping Services", included: true },
      ],
      buttonText: "Most Popular",
      description:
        "Our most comprehensive package with full access to luxury lifestyle management.",
    },
    {
      name: "Privée",
      subtitle: "Discreet, Ultra-Luxury Access",
      price: "By Invitation",
      period: "",
      popular: false,
      features: [
        { name: "Bespoke Concierge & Management", included: true },
        { name: "Unrestricted Global Access", included: true },
        { name: "Off-Market Opportunities", included: true },
        { name: "Dedicated Elite Team", included: true },
        { name: "Crisis Management & Security", included: true },
        { name: "Exclusive Partnership Benefits", included: true },
        { name: "Ultra-Luxury Experiences", included: true },
      ],
      buttonText: "Request Invitation",
      description:
        "The pinnacle of luxury lifestyle management for discerning individuals.",
    },
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section
        className="membership-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20, 47, 46, 0.8), rgba(20, 47, 46, 0.6)), url(${membershipHero})`,
        }}
      >
        <div className="membership-container">
          <div className="max-width-800 margin-auto">
            <div className="membership-hero-badge">
              <span className="membership-hero-badge-text">
                EXCLUSIVE MEMBERSHIP
              </span>
            </div>
            <h1 className="membership-hero-title">
              Become a <span className="membership-highlight">S'CLUSIVE</span>{" "}
              Member
            </h1>
            <p className="membership-hero-description">
              Unlock a world of unparalleled luxury and personalized service.
              Experience the ultimate in convenience, access, and discretion.
            </p>
            <div className="membership-hero-buttons">
              <a
                href="#tiers"
                className="membership-btn membership-btn-primary membership-btn-large"
              >
                View Membership Tiers
              </a>
              <Link
                to={"/contact"}
                className="membership-btn membership-btn-glass membership-btn-large"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="membership-section membership-section-light"
      >
        <div className="membership-container">
          <div className="text-center mb-4">
            <h2 className="membership-section-title">
              Why Choose <span className="membership-highlight">S'CLUSIVE</span>
              ?
            </h2>
            <p className="membership-section-description">
              S'Clusive membership opens the door to a universe of tailored
              experiences, global connections, and dedicated support that
              transforms how you live.
            </p>
          </div>

          <div className="membership-row">
            {benefits.map((benefit, index) => (
              <div key={index} className="membership-col-6">
                <div className="membership-benefit-card">
                  <div className="membership-benefit-image">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="membership-benefit-img"
                    />
                    <div className="membership-benefit-icon">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="membership-benefit-content">
                    <h4 className="membership-benefit-title">
                      {benefit.title}
                    </h4>
                    <p className="membership-benefit-description">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section
        id="tiers"
        className="membership-section membership-section-white"
      >
        <div className="membership-container">
          <div className="text-center mb-4">
            <h2 className="membership-section-title">
              Choose Your{" "}
              <span className="membership-highlight">Experience</span>
            </h2>
            <p className="membership-section-description-medium">
              Select the membership tier that perfectly aligns with your
              lifestyle and aspirations.
            </p>
          </div>

          <div className="membership-tiers-grid">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`membership-tier-card ${
                  tier.popular ? "membership-tier-card-popular" : ""
                }`}
              >
                {tier.popular && (
                  <div className="membership-popular-badge">MOST POPULAR</div>
                )}

                <div className="membership-tier-header">
                  <h3 className="membership-tier-name">{tier.name}</h3>
                  <p className="membership-tier-subtitle">{tier.subtitle}</p>
                  <div className="membership-tier-price">
                    <span
                      className="membership-tier-price-amount"
                      style={{
                        fontSize:
                          tier.price === "By Invitation" ? "2rem" : "3rem",
                      }}
                    >
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="membership-tier-price-period">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="membership-tier-description">
                    {tier.description}
                  </p>
                </div>

                <ul className="membership-feature-list">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="membership-feature-item">
                      <div
                        className={
                          feature.included
                            ? "membership-check-icon"
                            : "membership-cross-icon"
                        }
                      >
                        {feature.included ? "✓" : "✗"}
                      </div>
                      <span
                        className={
                          feature.included
                            ? "membership-feature-text"
                            : "membership-feature-text-disabled"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`membership-btn membership-btn-full ${
                    tier.popular
                      ? "membership-btn-primary"
                      : "membership-btn-outline"
                  }`}
                >
                  {tier.buttonText}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <p className="membership-section-description-medium">
              Need help choosing the right membership tier?
            </p>
            <a
              href="#contact"
              className="membership-btn membership-btn-outline membership-btn-medium mt-4"
            >
              Compare All Tiers
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="membership-section membership-section-dark">
        <div className="membership-container">
          <div className="text-center max-width-800 margin-auto">
            <h2 className="membership-testimonial-title">
              Trusted by Discerning Individuals Worldwide
            </h2>
            <blockquote className="membership-testimonial-quote">
              "S'CLUSIVE has transformed how I experience luxury. Their
              attention to detail and ability to anticipate my needs before I
              even express them is simply extraordinary. It's not just a
              service—it's a partnership in living life to the fullest."
            </blockquote>
            <div className="membership-testimonial-author">
              — Distinguished S'CLUSIVE Member
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="membership-section membership-section-light">
        <div className="membership-container">
          <div className="text-center max-width-700 margin-auto">
            <h2 className="membership-cta-title">
              Ready to <span className="membership-highlight">Elevate</span>{" "}
              Your Lifestyle?
            </h2>
            <p className="membership-cta-description">
              Join the exclusive circle of S'CLUSIVE members and discover what
              it means to live without limits. Your extraordinary journey begins
              with a single step.
            </p>
            <div className="membership-cta-buttons">
              <a
                href="#contact"
                className="membership-btn membership-btn-primary membership-btn-large"
              >
                Start Your Application
              </a>
              <a
                href="tel:+22461354724"
                className="membership-btn membership-btn-outline membership-btn-large"
              >
                Speak with an Advisor
              </a>
            </div>
            <p className="membership-cta-note">
              Membership applications are reviewed within 48 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
