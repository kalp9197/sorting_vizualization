import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import Contact from "./Routing/Contact"
import Home from "./Routing/Home"
import "../App.css"

function Header() {
  return (
    <>
      <div className="main-route">
        <Router>
          <Navbar expand="lg" className="main_nav">
            <Navbar.Brand as={Link} to="/">Sorting Visualization</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contact US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="main-route">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default Header;
