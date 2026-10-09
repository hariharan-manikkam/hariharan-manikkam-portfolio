import React from "react";
import "./About.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "PHP",
  "MySQL",
  "Node.js",
  "Express.js",
  "REST APIs",
];

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* Decorative Background */}
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">

        {/* Section Header */}
        <div className="about-header reveal">
          <span className="about-index">01</span>

          <div className="about-label">
            <span className="about-line"></span>
            <span>ABOUT ME</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-main">

          {/* Left Side */}
          <div className="about-intro reveal">

            <p className="about-eyebrow">
              Full Stack Developer
            </p>

            <h2>
              Turning ideas into
              <span> useful experiences.</span>
            </h2>

            <p className="about-description">
              I’m a <strong>Full Stack Developer</strong> passionate about
              building practical, reliable, and user-focused web applications
              that solve real-world problems. I enjoy understanding how
              different parts of an application work together — from the
              interface to the backend and database.
            </p>

            <p className="about-description">
              My technical foundation includes{" "}
              <strong>
                HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, Node.js,
                Express.js, and REST APIs
              </strong>
              , with a focus on responsive development, backend workflows,
              authentication, and structured data management.
            </p>

          </div>

          {/* Right Side */}
          <div className="about-visual reveal">

            {/* Experience Card */}
            <div className="experience-card">

              <div className="experience-top">
                <span className="experience-number">06</span>

                <span className="experience-plus">+</span>
              </div>

              <div className="experience-divider"></div>

              <p className="experience-title">
                MONTHS
              </p>

              <p className="experience-subtitle">
                Full Stack Development
              </p>

              <div className="experience-company">
                <span className="company-dot"></span>
                Techvolt Software
              </div>

            </div>

            {/* Floating Orbit */}
            <div className="about-orbit orbit-one"></div>
            <div className="about-orbit orbit-two"></div>

            <div className="orbit-dot"></div>

          </div>
        </div>

        {/* Internship + Direction */}
        <div className="about-bottom">

          <div className="about-story reveal">
            <span className="story-number">02</span>

            <div>
              <h3>
                Experience that
                <span> shaped my direction.</span>
              </h3>

              <p>
                During my <strong>6-month Full Stack Developer internship
                at Techvolt Software</strong>, I worked on a job-matching web
                application involving role-based authentication, job
                management, dashboards, database systems, and secure session
                handling.
              </p>
            </div>
          </div>

          <div className="about-story reveal">
            <span className="story-number">03</span>

            <div>
              <h3>
                Currently
                <span> evolving.</span>
              </h3>

              <p>
                I’m continuing to strengthen my skills in{" "}
                <strong>modern full-stack development</strong>, while
                continuing to improve the way I design, build, and solve
                problems.
              </p>
            </div>
          </div>

        </div>

        {/* Tech Stack */}
        <div className="about-stack reveal">

          <div className="stack-heading">
            <span>TECHNOLOGIES I WORK WITH</span>
          </div>

          <div className="stack-list">
            {skills.map((skill, index) => (
              <span
                className="stack-item"
                key={skill}
                style={{ "--item-index": index }}
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

        {/* Closing Statement */}
        <div className="about-closing reveal">

          <div className="closing-line"></div>

          <p>
            Think. Build. Solve.
          </p>

          <span>
            Improve.
          </span>

        </div>

      </div>
    </section>
  );
};

export default About;
