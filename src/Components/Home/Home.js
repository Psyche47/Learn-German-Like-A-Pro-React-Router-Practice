import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import header_img from "../../Images/header.jpg";
import Service from "../Service/Service";
const Home = () => {
  const details = {
    border: "2px solid black",
    borderRadius: "10px",
  };
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <section>
        <div className="container d-flex">
          <div>
            <img src={header_img} alt="" />
          </div>
          <div className="ms-3 p-2 mt-2" style={details}>
            <h4>Learn From Our Expert Teachers.</h4>
            <h4>Ace your German Exam.</h4>
            <p>Take lessons from instructors with 10+ years of experience.</p>
            <p>Guaranteed Success!</p>
          </div>
        </div>
      </section>
      <section>
        <Container>
          <h3 className="text-center bg-dark text-white p-3 mt-2">
            Some of our most popular courses
          </h3>
        </Container>
        <Container>
          <div className="row">
            {courses.slice(0, 5).map((course) => (
              <Service key={course.course_id} course={course}></Service>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
