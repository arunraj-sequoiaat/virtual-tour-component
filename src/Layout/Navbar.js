import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className="nav-top-flex">
        <div>
          <Link to="/home">
            
          </Link>
        </div>
        <h3 className="nav-title" id="title">Sample App</h3>
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home" id="home" >Home</Link>
        <Link to="/about"id="about" >About Us</Link>
        <Link to="/process" id="process" >Process</Link>
        <Link to="/products" id="products" >Products</Link>
        <Link to="/contact" id="contact">Contact Us</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default Navbar;
