import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container">
      <h2 className="rounded bg-dark text-white text-center mt-3 p-3">
        All of our specialized courses
      </h2>
      <div className="row">
        {courses.map((course) => (
          <Service key={course.course_id} course={course}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
