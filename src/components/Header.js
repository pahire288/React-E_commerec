import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Header({ onCartClick }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">The Generics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
             <Nav.Link href="#">Store</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>

            {/* Add more links here in future if needed */}
          </Nav>
          <Button variant="outline-light" onClick={onCartClick}>
            Cart
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
