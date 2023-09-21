import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import "../css/Footer.css";
function Footer() {
  return (
    <div className="container-fluid">
      <div className="Footer">
        <div className="footer-left-one">
          <h4 className="footer-title">Sample app</h4>
          <div>
            <p className="footer-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
        <div className="footer-left">
          <h4 className="footer-title" id="address">
            Address
          </h4>
          <div className="footer-right-one">
            <p className="footer-para">XYZ</p>
            <p className="footer-para">Chennai</p>
            <p className="footer-para">Tamil Nadu, India</p>
          </div>
        </div>
        <div className="footer-middle">
          <h4 className="footer-title">Company</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about ">About Us</Link>
            </li>
            <li>
              <Link to="/process">Process</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="horizontal-line" />
        <div className="social-links">
          <div>
            <AiFillFacebook className="social-icons" />
            <AiFillTwitterCircle className="social-icons" />
            <AiFillInstagram className="social-icons" />
            <AiFillLinkedin className="social-icons" />
            <AiFillGoogleCircle className="social-icons" />
          </div>
        </div>
        <p className="copyright" id="copyright">
          copyright@SequoiaAT
        </p>
      </div>
    </div>
  );
}
export default Footer;
