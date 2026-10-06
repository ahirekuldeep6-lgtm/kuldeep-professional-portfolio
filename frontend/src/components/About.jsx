import React from "react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-title">
          <p>Get To Know Me</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>I'm Kuldeep Ahire</h3>

            <p>
              I am an MCA student and aspiring software developer with a
              strong interest in frontend and full-stack web development.
            </p>

            <p>
              I enjoy creating modern, responsive and user-friendly
              applications using technologies like HTML, CSS, JavaScript,
              React, Node.js and databases.
            </p>

            <p>
              My goal is to continuously improve my technical skills and
              build real-world projects that solve practical problems.
            </p>

            <a href="#contact" className="primary-btn">
              Let's Connect
            </a>
          </div>

          <div className="about-info">

            <div className="info-card">
              <h4>Education</h4>
              <p>Master of Computer Applications</p>
            </div>

            <div className="info-card">
              <h4>Role</h4>
              <p>Software Developer</p>
            </div>

            <div className="info-card">
              <h4>Focus</h4>
              <p>Frontend & Full-Stack Development</p>
            </div>

            <div className="info-card">
              <h4>Location</h4>
              <p>Maharashtra, India</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;