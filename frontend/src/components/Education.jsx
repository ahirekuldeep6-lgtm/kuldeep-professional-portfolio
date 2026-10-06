import React from "react";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "SSVPS Science College, Dhule",
      year: "2025 - Present",
      result: "CGPA: 9.38/10",
    },
    {
      degree: "Bachelor of Computer Science(BSC CS)",
      college: "SSVPS Science College, Dhule",
      year: "2022 - 2025",
      result: "CGPA: 8.84 / 10",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      college: "C.S.Bafna High School, Fagne",
      year: "2022",
      result: "Percentage: 73.33%",
    },
  ];

  return (
    <section className="education section" id="education">
      <div className="container">

        <div className="section-title">
          <p>My Academic Journey</p>
          <h2>My <span>Education</span></h2>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <div className="education-card" key={index}>

              <div className="education-year">
                {item.year}
              </div>

              <div className="education-content">
                <h3>{item.degree}</h3>
                <h4>{item.college}</h4>
                <p>{item.result}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;