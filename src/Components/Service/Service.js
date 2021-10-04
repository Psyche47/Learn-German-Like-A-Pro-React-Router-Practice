import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Service.css";

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
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{type}</ListGroupItem>
          <ListGroupItem>{total_duration}</ListGroupItem>
          <ListGroupItem>{schedule}</ListGroupItem>
          <ListGroupItem>{fee}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Service;
