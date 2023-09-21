import React from "react";
import "../css/Contact.css";


function Contact() {
  window.scrollTo(0, 0);

  return (
    <div className="contact">
      <div className="contact-left-flex">
        <div className="enquiry-form">
          <div className="enquiry">
            <h3 id="enquiry">For Enquiry</h3>
            <div className="input-div">
              <label>Full Name</label>
              <br />
              <input type="text" placeholder="Your Name"></input>
            </div>
            <div className="input-div">
              <label id="mail">Mail Address</label>
              <br />
              <input type="mail" placeholder="Your Mail"></input>
            </div>
            <div className="input-div">
              <label>Enquiry</label>
              <br />
              <input
                className="enquiry-desc"
                type="text"
                placeholder="Your Enquiry"
              ></input>
            </div>
            <div className="submit-btn">
              <button  id="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Contact;
