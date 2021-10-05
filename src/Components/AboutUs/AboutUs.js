import React from "react";
import headerImg from "../../Images/header2.jpg";
import { Row, Col } from "react-bootstrap";

const AboutUs = () => {
  const details = {
    border: "2px solid black",
    borderRadius: "10px",
  };
  return (
    <div className="d-flex container">
      <Row>
        <Col className="text-center">
          <img src={headerImg} alt="" />
        </Col>
        <Col style={details} className="mt-2">
          <h3>Welcome!</h3>
          <p>
            My name is Luzi and I'm the creator of this site and one of the
            instructors. I am a German language teacher. I've been teaching this
            beautiful language online and offline, group classes and 1o1 classes
            for over 7 years now. I have been working with different textbooks
            but mainly with "Menschen" which I think is also the best on the
            market. So in case you are using the same textbook... perfect match!
            Hope to get to know you soon.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
