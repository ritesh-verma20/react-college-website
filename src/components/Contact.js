import React from "react";
import "../styles/style.css";

const Contact = () => {
  return (
    <div className="background2" id="contact">
      <div className="container2cake">
        <h1 className="heading">Contact Us</h1>
        <div className="contact1">
          <div className="contactus1">
            <h1>
              Deliciousness <br />
              to your inbox
            </h1>
            <p>
              Enjoy weekly hand picked recipes and <br />
              recommendations
            </p>
            <div className="contactus2">
              <input type="text" placeholder="Email Address" />
              <button>Join</button>
            </div>
            <p className="contactus3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, quis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
