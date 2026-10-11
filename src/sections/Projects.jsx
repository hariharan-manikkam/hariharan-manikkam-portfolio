
import { useState } from "react";
import "./Projects.css";

import nexus from "../assets/images/nexus.jpeg";
import nexus1 from "../assets/images/nexus-1.jpeg";
import nexus2 from "../assets/images/nexus-2.jpeg";
import nexus4 from "../assets/images/nexus-4.jpeg";
import nexus5 from "../assets/images/nexus-5.jpeg";

const screenshots = [
  {
    image: nexus,
    title: "Project Overview",
    alt: "Nexvia project overview",
  },
  {
    image: nexus1,
    title: "Admin Dashboard",
    alt: "Nexvia admin dashboard",
  },
  {
    image: nexus2,
    title: "Contractor / User Registration",
    alt: "Nexvia registration form",
  },
  {
    image: nexus4,
    title: "Search and Select Workers",
    alt: "Worker search interface",
  },
  {
    image: nexus5,
    title: "Job Posting Form",
    alt: "Job posting form",
  },
];

const features = [
  "Role-based authentication",
  "Client–Worker Interaction",
  "Job Management",
  "Responsive Dashboards",
  "Secure Session Handling",
  "Feedback & Reporting",
  "Issue Reporting",
  "Relational Database",
];

const technologies = [
  "PHP",
  "MySQL",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "XAMPP",
];

function Projects() {
  const [activeImage, setActiveImage] = useState(0);

  const showPrevious = () => {
    setActiveImage((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-section-meta">
            <span className="projects-index">04</span>

            <div className="projects-label">
              <span className="projects-line" />
              <span>PROJECTS</span>
            </div>
          </div>

          <h2>
            Projects<span>.</span>
          </h2>
        </div>

        <article className="project-showcase">
          {/* LEFT — IMAGE GALLERY */}
          <div className="project-gallery">
            <div className="project-gallery-main">
              <div className="project-image-topbar">
                <span className="project-window-dots">
                  <i />
                  <i />
                  <i />
                </span>

                <span className="project-image-counter">
                  {String(activeImage + 1).padStart(2, "0")}
                  <span>
                    {" "}
                    / {String(screenshots.length).padStart(2, "0")}
                  </span>
                </span>
              </div>

              <div className="project-image-stage">
                <img
                  key={screenshots[activeImage].image}
                  src={screenshots[activeImage].image}
                  alt={screenshots[activeImage].alt}
                  className="project-main-image"
                />

                <button
                  type="button"
                  className="project-gallery-arrow project-gallery-prev"
                  onClick={showPrevious}
                  aria-label="View previous screenshot"
                >
                  ←
                </button>

                <button
                  type="button"
                  className="project-gallery-arrow project-gallery-next"
                  onClick={showNext}
                  aria-label="View next screenshot"
                >
                  →
                </button>
              </div>

              <div className="project-image-caption">
                <span>{screenshots[activeImage].title}</span>
                <span>NEXVIA / UI</span>
              </div>
            </div>

            <div
              className="project-thumbnails"
              aria-label="Project screenshots"
            >
              {screenshots.map((screenshot, index) => (
                <button
                  type="button"
                  key={screenshot.title}
                  className={`project-thumbnail ${
                    activeImage === index ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show screenshot ${index + 1}: ${screenshot.title}`}
                  aria-pressed={activeImage === index}
                >
                  <img src={screenshot.image} alt="" />

                  <span className="project-thumbnail-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>

            <p className="project-gallery-hint">
              SELECT A VIEW <span>—</span> EXPLORE THE PROJECT
            </p>
          </div>

          {/* RIGHT — PROJECT INFORMATION */}
          <div className="project-right-content">
            <div className="project-intro">
              <span className="project-eyebrow">
                01 — FEATURED PROJECT
              </span>

              <h3 className="project-title">
                NEX<span>VIA.</span>
              </h3>

              <p className="project-subtitle">NEXUS</p>

              <p className="project-description">
                A full-stack job-matching platform designed to connect
                clients and workers for task-based employment, providing
                structured workflows for job management.
              </p>

              <div className="project-meta">
                <span>
                  <span className="project-meta-symbol">◷</span>
                  Dec 2024 — May 2025
                </span>

                <span>
                  <span className="project-meta-symbol">✳</span>
                  Full Stack Development
                </span>
              </div>
            </div>

            <div className="project-features">
              <span className="project-section-label">
                KEY FEATURES <span></span>
              </span>

              <div className="project-feature-list">
                {features.map((feature, index) => (
                  <div className="project-feature" key={feature}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-technologies">
              <span className="project-section-label">BUILT WITH</span>

              <div className="project-tech-list">
                {technologies.map((technology) => (
                  <span className="project-tech" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-repository">
              <span className="project-section-label">
                EXPLORE THE CODE
              </span>

              <a
                href="https://github.com/hariharan-manikkam/Nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-link"
              >
                <span className="project-github-icon">GH</span>

                <span className="project-github-copy">
                  <span>GitHub Repository</span>
                  <small>Explore the source code</small>
                </span>

                <span className="project-github-arrow">↗</span>
              </a>
            </div>
          </div>
        </article>

        <div className="projects-footer-line">
          <span>BUILD</span>
          <span className="projects-footer-slash">/</span>
          <span>LEARN</span>
          <span className="projects-footer-slash">/</span>
          <span>GROW</span>
          <span className="projects-footer-rule" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
