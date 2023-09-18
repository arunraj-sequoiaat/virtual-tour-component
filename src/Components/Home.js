import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import slide1 from "../Assets/home.jpg";
import structure from "../Assets/company.jpeg";
import "../css/Home.css";





function Home() {
  window.scrollTo(0, 0);

  const pageDurationTwo = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "20px",
    },
  };
  const pageTransitionTwo = {
    duration: 1,
  };

  return (
    <div className="home">
      <motion.div
        className="slide-image"
        initial="out"
        animate="in"
        exit="out"
        variants={pageDurationTwo}
        transition={pageTransitionTwo}
      >
        <img src={slide1} />
      </motion.div>
      <div className="home-main">
        <div className="slogan">
          <h2 id="slogan">
            “Quality is never an accident; it is always the result of high
            intention, sincere effort, intelligent direction <br /> and skillful
            execution; it represents the wise choice of many alternatives.”
          </h2>
          <h3 id="author"> - William A. Foster</h3>
        </div>
        <div className="home-mid-content">
          <div className="mid-content-left">
            <img src={structure} />
          </div>
          <div>
            <div className="mid-content-right">
              <h3 id="welcome">Welcome to my app</h3>

              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
              <Link to="/about"id="about1" >About Us</Link>
              </p>
            </div>
            <div className="mid-content-right">
              <h3 id="company-profile">Company's Profile</h3>

              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
              
              </p>
            </div>
          </div>
        </div>
      </div>     
    </div>
  );
}
export default Home;
