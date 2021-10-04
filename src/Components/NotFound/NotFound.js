import React from "react";
import error from "../../Images/404.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="text-center">
        <img className="image-404" src={error} alt="" />
        <h2>Oops! The Page you requested was not found.</h2>
      </div>
    </div>
  );
};

export default NotFound;
