import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="./germany.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Learn German Like A Pro
          </Navbar.Brand>
          <Nav variant="dark">
            <Nav.Link>
              <NavLink style={activeStyle} to="/home">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink style={activeStyle} to="/services">
                Services
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink style={activeStyle} to="/about">
                About Us
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink style={activeStyle} to="/faq">
                FAQ
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
