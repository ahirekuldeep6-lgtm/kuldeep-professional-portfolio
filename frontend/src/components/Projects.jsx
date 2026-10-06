import React from "react";

function Projects() {
  const projects = [
    {
      title: "News E-Paper Platform",
      description:
        "A full-stack digital news e-paper platform that converts PDF newspaper content into structured news using OCR and AI, with news management, editing, publishing and e-paper generation features.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OCR",
        "AI",
        "REST API",
      ],
      github: "#",
      demo: "#",
    },

    {
      title: "Online Car Washing Management System",
      description:
        "A web-based system designed to manage car washing services, customer bookings, service details and overall washing management efficiently.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      github: "#",
      demo: "#",
    },

    {
      title: "Professional Portfolio",
      description:
        "A responsive personal portfolio website showcasing my skills, education, projects and professional profile.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "#",
      demo: "#",
    },
  ];



  return (
    <section className="projects section" id="projects">
      <div className="container">

        <div className="section-title">
          <p>My Recent Work</p>
          <h2>Featured <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.github} className="project-btn">
                  GitHub
                </a>

                <a href={project.demo} className="project-btn">
                  Live Demo
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;