import React from "react";
import "../index.css";
import GitHubImage from "../assets/Github Icon.svg";
import ApiIcon from "../assets/APIimage.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-p">&copy; MERN Recipe Application</p>
        <div className="footer-links">
          <a
            href="https://github.com/tjsiv/react-express-connection"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img src={GitHubImage} alt="GitHub" className="footer-icon" />
            GitHub
          </a>
          <a
            href="https://www.themealdb.com/api.php"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src={ApiIcon}
              alt="MealDealDB"
              className="footer-icon"
            />
            MealDealDB API
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
