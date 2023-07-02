import React from "react";
import { FaTwitterSquare , FaFacebookSquare , FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";



const Footer = () => {
  return (
    <div className="background2" id="Rooms">
      <div className="container2cake">
        <div className="main">
        <footer className="footer">
          <div className="footer1">
            <img src="./images/images.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolorum!</p>
          </div>

          <div>
            <ul>
              <h1>Tastebite</h1><br />
              <li>About us</li>
              <li>Carrer</li>
              <li>Contact us</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div>
            <ul>
            <h1>Legal</h1><br />
              <li>Terms</li>
              <li>Conditions</li>
              <li>Cookies</li>
              <li>Copyright</li>
            </ul>
          </div>
          <div>
            <ul>
            <h1>Follow</h1><br />
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </footer>
        <hr style={{backgroundColor: 'red'}}/>
        <div className="footer_last">
          <p>@Copyright - TasteBite</p>
          <div className="socialmedia">
            <ul>
              <li><FaFacebookSquare/></li>
              <li><FiInstagram/></li>
              <li><FaYoutube/></li>
              <li><FaTwitterSquare/></li>
            </ul>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
