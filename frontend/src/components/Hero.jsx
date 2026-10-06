import React from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/kuldeep.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        <div className="hero-content">
          <p className="hero-subtitle">Hello, I'm</p>

          <h1>
            Kuldeep <span>Ahire </span>
          </h1>

          <h2>MCA Student | Software Developer</h2>

          <p className="hero-description">
            I am a passionate software developer and MCA student who loves
            building modern, responsive and user-friendly web applications.
            I enjoy learning new technologies and solving real-world problems
            through code.
          </p>

          <div className="hero-buttons">

            <Link to="/projects" className="primary-btn">
              View My Work
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Me
            </Link>

          </div>
        </div>

        <div className="hero-image">
          <div className="profile-circle">
            <img src={profilePhoto} alt="Kuldeep Ahire" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;