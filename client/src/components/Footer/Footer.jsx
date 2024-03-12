import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="tittle">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis at quasi architecto
            beatae viae dicta sunt exploicabo eaqe ipsa quae ab illo.
          </div>
        </div>
        <div className="col">
          <div className="tittle">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Mohammodpu, Bj Rd, Dhaka-1216</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +88 017990044</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: tonmoyinfo@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="tittle">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="tittle">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            TONMOY 2024 CREATED BY TONMOY. PREMIUM E-COMMERCE SOLUTIONS.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
