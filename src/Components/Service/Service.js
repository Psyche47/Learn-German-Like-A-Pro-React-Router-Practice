import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Service = (props) => {
  const { title, type, schedule, total_duration, fee, img } = props.course;
  const cardImg = {
    height: "143px",
    width: "286px",
  };
  return (
    <div className="col-lg-3 col-md-3">
      <Card style={{ width: "18rem" }} className="mt-3">
        <Card.Img variant="top" src={img} style={cardImg} />
        <Card.Body>
          <Card.Title>Course Name: {title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Course Type: {type}</ListGroupItem>
          <ListGroupItem>Total Duration: {total_duration}</ListGroupItem>
          <ListGroupItem>Schedule: {schedule}</ListGroupItem>
          <ListGroupItem>Fee: ${fee}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Service;
