import React from "react";
import "../index.css";
import GitHubImage from "../assets/Github Icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-p">&copy; MERN Recipe Application</p>
        <div className="footer-links">
          <a
            href="https://github.com/Foxshane997/MERN-Recipe-Project/tree/navbar"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img src={GitHubImage} alt="GitHub" className="footer-icon" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
