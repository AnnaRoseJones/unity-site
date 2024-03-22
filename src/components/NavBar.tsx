import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ backgroundColor: "transparent" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.instagram.com/unityfashionshow/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/UNITYCharityFashionShow">
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <form action="https://artsoflife.org/">
              <button className="vvd">
                <span>DONATE</span>
              </button>
            </form>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
