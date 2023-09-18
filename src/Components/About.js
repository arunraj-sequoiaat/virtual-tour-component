import React from "react";
import "../css/About.css";
import { TbTruckDelivery } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import { IoMdPricetags } from "react-icons/io";
import { MdHighQuality } from "react-icons/md";
import image1 from "../Assets/Slide/slide4.jpg";



function About() {
  window.scrollTo(0, 0);

  return (
    <div className="about">
      <div className="about-head">
        <div className="container">
          <h3 id="highlights">This is about page</h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="container">
          <h3 id="certificates">Certificates</h3>
          <ul>
            <li>dummy text </li>
            <li>dummy text </li>
            <li>dummy text </li>
            <li>dummy text </li>
          </ul>
        </div>
        <div className="container">
          <h3  id="why">Why Choose Us</h3>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
          </p>
        </div>
      </div>
      <div className="home-service-card">
        <div className="card-one">
          <TbTruckDelivery className="app-logo" />
          <h4 className="service-card-title">Dummy text</h4>
          <p className="service-card-content">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
          </p>
        </div>
        <div className="card-two">
          <HiUserGroup className="app-logo" />
          <h4 className="service-card-title" id="customer">Dummy test</h4>
          <p className="service-card-content">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
          </p>
        </div>
        <div className="card-three">
          <IoMdPricetags className="app-logo" />
          <h4 className="service-card-title">simply random text.</h4>
          <p className="service-card-content">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="card-four">
          <MdHighQuality className="app-logo" />
          <h4 className="service-card-title">simply random text.</h4>
          <p className="service-card-content">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
      </div>
      <div className="quality-team">
        <div className="quality-left">
          <img src={image1}></img>
        </div>
        <div className="quality-content">
          <h3>simply random text</h3>
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration <br /> supervisions of our Q.A. Team. Hopefully
            the same can be noticed on the pictures
          </p>
        </div>
        
      </div>
      {/* <VirtualTour customSteps={tourSteps['about']}/> */}
    </div>
  );
}
export default About;




