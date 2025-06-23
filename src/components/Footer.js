// src/components/Footer.js
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import logoIconWhite from "../assets/images/sclusive_logo_icon_white.png";

const Footer = () => {
  return (
    <footer className="bg-dark-section text-white py-5">
      <Container>
        <Row>
          {/* Enhanced Logo Section */}
          <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
            <div className="logo-container">
              <Link
                to="/"
                className="footer-logo-link d-inline-block"
                style={{
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div className="logo-wrapper d-flex align-items-center justify-content-center justify-content-md-start">
                  <img
                    src={logoIconWhite}
                    alt="S'CLUSIVE Logo Icon"
                    className="footer-logo"
                    style={{
                      height: "60px",
                      width: "auto",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                      transition: "all 0.3s ease",
                    }}
                  />
                  <div className="brand-text ms-3 d-none d-sm-block">
                    <h4
                      className="mb-0 fw-bold"
                      style={{
                        color: "#D4AF37", // Gold color
                        fontSize: "1.5rem",
                        letterSpacing: "1px",
                      }}
                    >
                      S'CLUSIVE
                    </h4>
                    <p
                      className="mb-0 text-light-text-color"
                      style={{
                        fontSize: "0.85rem",
                        fontStyle: "italic",
                        opacity: 0.8,
                      }}
                    >
                      Private Concierge
                    </p>
                  </div>
                </div>
              </Link>

              {/* Brand description for mobile */}
              <div className="brand-description mt-3 d-block d-sm-none">
                <h5
                  className="mb-2 fw-bold text-center"
                  style={{
                    color: "#D4AF37",
                    fontSize: "1.25rem",
                    letterSpacing: "1px",
                  }}
                >
                  S'CLUSIVE
                </h5>
                <p
                  className="mb-0 text-light-text-color text-center"
                  style={{
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    opacity: 0.8,
                  }}
                >
                  Luxury Concierge Services
                </p>
              </div>
            </div>
          </Col>

          {/* Quick Links Section */}
          <Col md={3} className="mb-4 mb-md-0 text-center text-md-start">
            <h5 className="mb-3 text-primary-custom fw-bold">Quick Links</h5>
            <Nav className="flex-column justify-content-center justify-content-md-start">
              <Link
                to="/"
                className="nav-link text-light-text-color p-0 mb-2 footer-nav-link"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link text-light-text-color p-0 mb-2 footer-nav-link"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="nav-link text-light-text-color p-0 mb-2 footer-nav-link"
              >
                Services
              </Link>
              <Link
                to="/membership"
                className="nav-link text-light-text-color p-0 mb-2 footer-nav-link"
              >
                Membership
              </Link>
              <Link
                to="/contact"
                className="nav-link text-light-text-color p-0 mb-2 footer-nav-link"
              >
                Contact
              </Link>
              <Link
                to="/portal"
                className="nav-link text-light-text-color p-0 mb-2 footer-nav-link"
              >
                Client Portal
              </Link>
            </Nav>
          </Col>

          {/* Contact Section */}
          <Col md={3} className="mb-4 mb-md-0 text-center text-md-start">
            <h5 className="mb-3 text-primary-custom fw-bold">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="text-light-text-color d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <FaEnvelope className="me-2 text-primary-custom" size={16} />
                <a
                  href="mailto:sclusive.conciergerie@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text-color footer-contact-link"
                  style={{ fontSize: "0.9rem" }}
                >
                  sclusive.conciergerie@gmail.com
                </a>
              </li>
              <li className="text-light-text-color d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <FaWhatsapp className="me-2 text-primary-custom" size={16} />
                <a
                  href="https://wa.me/224613543724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text-color footer-contact-link"
                  style={{ fontSize: "0.9rem", color: "#d4af37" }}
                >
                  +224 613 54 37 24
                </a>
              </li>
              <li className="text-light-text-color d-flex align-items-center justify-content-center justify-content-md-start">
                <FaPhone className="me-2 text-primary-custom" size={16} />
                <span style={{ fontSize: "0.9rem" }}>+224 613 54 37 24</span>
              </li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col md={2} className="text-center">
            <h5 className="mb-3 text-primary-custom fw-bold">Follow Us</h5>
            <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://instagram.com/your_sclusive_instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#E4405F";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "#E4405F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                }}
              >
                <FaInstagram size={18} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/company/your_sclusive_linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0077B5";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "#0077B5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                }}
              >
                <FaLinkedinIn size={18} className="text-white" />
              </a>
              <a
                href="https://tiktok.com/@your_sclusive_tiktok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="social-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#000000";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "#000000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                }}
              >
                <FaTiktok size={18} className="text-white" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr
          className="my-4"
          style={{
            borderColor: "rgba(212, 175, 55, 0.3)", // Gold divider
            borderWidth: "1px",
          }}
        />

        {/* Copyright */}
        <Row>
          <Col className="text-center text-light-text-color">
            <p className="mb-0" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              &copy; {new Date().getFullYear()} S'CLUSIVE. All rights reserved.
              |
              <span style={{ color: "#D4AF37", fontStyle: "italic" }}>
                {" "}
                Elevating Luxury Experiences
              </span>
            </p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .footer-nav-link {
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-nav-link:hover {
          color: #d4af37 !important;
          padding-left: 0.5rem !important;
        }

        .footer-contact-link {
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .footer-contact-link:hover {
          color: #d4af37 !important;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .logo-wrapper {
            flex-direction: column;
          }

          .social-icons {
            margin-top: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
