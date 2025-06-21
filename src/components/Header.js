// src/components/Header.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // REMOVED useLocation
import { useAuth } from "../contexts/AuthContext";
import logoFull from "../assets/images/sclusive_logo_icon_yellow.png";

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // REMOVED the condition that hides header - now always shows

  return (
    <Navbar
      className="bg-dark-section py-2"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logoFull}
            alt="S'CLUSIVE Conciergerie Privée Logo"
            height="60"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/membership">
              Membership
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            {/* Authentication-aware button */}
            {currentUser ? (
              <Nav.Link
                onClick={() => navigate("/dashboard")}
                className="btn btn-primary-custom hover-effect d-block w-auto mx-0 text-start ms-lg-3"
                style={{ cursor: "pointer" }}
              >
                Dashboard
              </Nav.Link>
            ) : (
              <Nav.Link
                as={Link}
                to="/portal"
                className="btn btn-primary-custom hover-effect d-block w-auto mx-0 text-start ms-lg-3"
              >
                Client Portal
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
