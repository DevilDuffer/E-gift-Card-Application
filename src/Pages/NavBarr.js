import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <div>
      <Navbar className="" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">E-Gift Card</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/Home.js">Home</Nav.Link>
                <Nav.Link href="#link">GiftCard</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to='/Signup' > Login/Signup</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar
