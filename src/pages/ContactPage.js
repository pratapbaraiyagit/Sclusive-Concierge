import React, { useState } from "react";
import contactGirlImg from "../assets/images/contact_girl.png";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./ContactPage.css"; // Import the CSS file

// Hero image
const contactHero =
  "https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    attachment: null,
  });

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
    console.log("Contact form submitted:", formData);
    alert(
      "Thank you for your message! We will get back to you within 24 hours."
    );
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20, 47, 46, 0.8), rgba(20, 47, 46, 0.6)), url(${contactHero})`,
        }}
      >
        <div className="contact-container">
          <div className="max-width-800 margin-auto">
            <h1 className="contact-hero-title">
              We'd Love to <span className="contact-highlight">Hear</span> From
              You
            </h1>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Left Form, Right Image */}
      <section className="contact-section contact-section-light">
        <div className="contact-container">
          <div className="contact-row">
            {/* Left Side - Contact Form */}
            <div className="contact-col-6 pr-3">
              <div className="contact-form-container">
                <div className="contact-form-header">
                  <h2 className="contact-form-title">
                    Send Us a <span className="contact-highlight">Message</span>
                  </h2>
                  <p className="contact-form-description">
                    Please use the form below for general inquiries or
                    partnership opportunities. We aim to respond within 24
                    hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="contact-form-group">
                    <label className="contact-form-label">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="contact-form-control"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="contact-form-control"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number (optional)"
                      className="contact-form-control"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your needs and how we can assist you..."
                      required
                      className="contact-form-control contact-textarea"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      Attach File (Optional)
                    </label>
                    <input
                      type="file"
                      name="attachment"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="contact-form-control contact-file-input"
                    />
                    <small className="contact-file-help">
                      Max file size 5MB (PDF, JPG, PNG, DOC)
                    </small>
                  </div>

                  <button
                    type="submit"
                    className="contact-btn contact-btn-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side - Contact Image */}
            <div className="contact-col-6 pl-3">
              <div className="contact-image-container">
                <img
                  src={contactGirlImg}
                  alt="S'CLUSIVE Customer Service Representative"
                  className="contact-image"
                />

                {/* Overlay Contact Info */}
                <div className="contact-image-overlay">
                  <h3 className="contact-overlay-title">
                    Ready to <span className="contact-highlight">Connect</span>?
                  </h3>

                  <div style={{ marginBottom: "1rem" }}>
                    <div className="contact-info-item">
                      <FaEnvelope size={16} />
                      <a
                        href="mailto:sclusive.conciergerie@gmail.com"
                        className="contact-info-link"
                      >
                        sclusive.conciergerie@gmail.com
                      </a>
                    </div>
                    <div className="contact-info-item">
                      <FaWhatsapp size={16} />
                      <a
                        href="https://wa.me/+224613543724"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-info-link"
                      >
                        +224 613 54 37 24
                      </a>
                    </div>
                    <div className="contact-info-item">
                      <FaPhone size={16} />
                      <a href="tel:+224613543724" className="contact-info-link">
                        +224 613 54 37 24
                      </a>
                    </div>
                  </div>

                  <p className="contact-availability">
                    Available 24/7 for your convenience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options - 2 Cards */}
      <section className="contact-section contact-section-white">
        <div className="contact-container">
          <div className="text-center mb-3">
            <h2 className="contact-section-title">
              Do you want to get quick{" "}
              <span className="contact-highlight">assistance</span>?
            </h2>
            <p className="contact-section-description">
              Choose your preferred method of communication for immediate
              assistance.
            </p>
          </div>

          <div className="contact-row">
            <div className="contact-col-6">
              <div className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <h4 className="contact-card-title">Email Support</h4>
                <p className="contact-card-description">
                  Send us detailed inquiries via email. Ideal for complex
                  requests and formal communications.
                </p>
                <a
                  href="mailto:sclusive.conciergerie@gmail.com"
                  className="contact-card-button"
                >
                  Send Email
                </a>
              </div>
            </div>

            <div className="contact-col-6">
              <div className="contact-card">
                <div className="contact-card-icon">📞</div>
                <h4 className="contact-card-title">Phone Consultation</h4>
                <p className="contact-card-description">
                  Speak directly with our concierge team. Schedule a call to
                  discuss your specific requirements.
                </p>
                <a href="tel:+224613543724" className="contact-card-button">
                  Speak to an Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="contact-section contact-section-dark text-center">
        <div className="contact-container">
          <div className="max-width-700 margin-auto">
            <h2 className="contact-cta-title">
              Ready to start your adventure with{" "}
              <span className="contact-highlight">S'CLUSIVE?</span>
            </h2>
            <p className="contact-cta-description">
              We look forward to assisting you and creating extraordinary
              experiences
            </p>
            <div className="contact-cta-buttons">
              <Link to={"/services"} className="contact-btn-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
