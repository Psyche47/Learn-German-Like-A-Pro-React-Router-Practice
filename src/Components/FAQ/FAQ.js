import React from "react";
import { ListGroup } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="container">
      <h2 className="bg-dark text-white text-center p-2 mt-2 ">
        Frequently asked questions!
      </h2>
      <ListGroup>
        <ListGroup.Item>1. Who can take these courses?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Our courses are online at the moment and everyone can enroll.
        </ListGroup.Item>
        <ListGroup.Item>2. How to pay fees?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: A lot of gateways are available. Preferred is Paypal.
        </ListGroup.Item>
        <ListGroup.Item>3. How many lessons are in the courses?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Total of 32 lessons in Intensive and 72 in Extensive.
        </ListGroup.Item>
        <ListGroup.Item>4. Are the classes live or recorded?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Classes are a mixture of live and recorded.
        </ListGroup.Item>
        <ListGroup.Item>5. Will books be provided?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: 2 Ebooks and a lot of exercise PDF's will be given.
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default FAQ;
