
import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div>
        <div className="footer-container mt-4">
          <div className="container">
            <div className="row">
    
              <div className="col-md-5">
                <div className="">
                  <h3>Send Your Feedback</h3>
                  <input
                    className="footer-input-btn"
                    type="text"
                    placeholder="Enter Your Text"
                  />
                  <button className="footer-input-btn">send</button>
                  <div className=" mt-4">
                    <div className="foter-phone-icon">
                    </div>
                    <div>
                      <h5>+1 8 897 876 35 35</h5>
                    </div>
                  </div>
                  <div className="map">
                    <div className="foter-phone-icon">
                    </div>
                    <div>
                      <p>
                        210 California, New York, NY 10038,
                        <br />102 1st Avenue, New York, NY 100
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">Services</li>
                    <li className="footer-menu">Sports</li>
                    <li className="footer-menu">Contact us</li>
                    <li className="footer-menu"> About us</li>
                  </ul>
                </div>
              </div>
              
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1>Stive's Cars Knowing Site</h1>
                  <div className="icons-container d-flex text-center ">
                    <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                    <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                    </div>
                    <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                  </div>
                  <p className="mt-4 ">
                    <small>
                     Thank you guys for visting our site.
                    </small>
                  </p>
  
                  <p className="mt-5">
                    <small>Steve © . All rights reserved.</small>
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;