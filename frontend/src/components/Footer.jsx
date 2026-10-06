
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-logo">
          Kuldeep<span>.</span>
        </div>

        <p>
          © 2026 Kuldeep Ahire. All Rights Reserved.
        </p>

        <div className="social-links">

          <a
            href="https://github.com/ahirekuldeep6-lgtm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kuldeep-ahire-9211b2355/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

