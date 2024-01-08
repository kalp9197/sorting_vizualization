import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
import Home from "./Routing/Home";

function Header() {
  return (
    <>
      <div className="main-route">
        <Router>
          <Navbar expand="lg" className="main_nav sticky-top">
            <Navbar.Brand as={Link} to="/">Sorting Visualization</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/About">About</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contact US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="main-route">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default Header;
