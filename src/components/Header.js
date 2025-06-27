import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import logoFull from "../assets/images/sclusive_logo_icon_yellow.png";

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false); // Track navbar state

  // Function to close menu
  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      className="bg-dark-section py-2"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
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
            <Nav.Link as={Link} to="/" onClick={closeMenu}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeMenu}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={closeMenu}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/membership" onClick={closeMenu}>
              Membership
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
              Contact
            </Nav.Link>

            {/* Authentication-aware button */}
            {currentUser ? (
              <Nav.Link
                onClick={() => {
                  closeMenu();
                  navigate("/dashboard");
                }}
                className="btn btn-primary-custom hover-effect d-block w-auto mx-0 text-start ms-lg-3"
                style={{ cursor: "pointer" }}
              >
                Dashboard
              </Nav.Link>
            ) : (
              <Nav.Link
                as={Link}
                to="/portal"
                onClick={closeMenu}
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
