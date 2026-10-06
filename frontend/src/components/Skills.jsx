import React from "react";

function Skills() {
  const skills = [
    { name: "HTML5", level: "90%" },
    { name: "CSS3", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "80%" },
    { name: "Java", level: "75%" },
    { name: "Python", level: "75%" },
    { name: "SQL / MySQL", level: "80%" },
    { name: "Git & GitHub", level: "75%" },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">

        <div className="section-title">
          <p>My Technical Skills</p>
          <h2>What I <span>Know</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;