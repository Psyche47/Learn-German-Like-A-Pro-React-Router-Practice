import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
    </div>
  );
};

export default Header;
