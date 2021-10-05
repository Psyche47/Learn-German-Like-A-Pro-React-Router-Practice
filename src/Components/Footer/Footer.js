import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import flagImg from "../../Images/germany.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="bg-dark">
        <Container>
          <Row className="bg-success text-white p-3 mt-2">
            <Col className="d-flex align-items-center">
              <img src={flagImg} alt="" className="flag-img" />
              <h5 className="brand ms-2">Learn German Like A Pro</h5>
            </Col>
            <Col>
              <h5 className="link-heading">Useful Links</h5>
              <div className="link-container">
                <NavLink to="/services" className="active">
                  Our Offered Courses
                </NavLink>
                <NavLink to="/faq" className="active">
                  Frequently Asked Questions
                </NavLink>
                <NavLink to="/about" className="active">
                  About Us
                </NavLink>
              </div>
            </Col>
            <Col>
              <h5 className="link-heading">Contact Us</h5>
              <i class="bi bi-facebook text-white">FB</i>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
