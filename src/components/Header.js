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
          <Navbar.Brand as={Link} to="/">Sorting Vizualization</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="main-route">
          <Routes>
            <Route path="Home" element={<Home/>} />
            <Route path="About" element={<About/>} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
    </>
    

    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container fluid>
    //     <Navbar.Brand href="/">Sorting Vizualization</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0 me-auto ms-auto"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="#action2">About Us</Nav.Link>
    //         <Nav.Link href="#Contact.js">Contact Us</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Header
