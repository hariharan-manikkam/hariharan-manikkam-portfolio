import {
  FaBriefcase,
  FaMicrophoneAlt,
  FaBrain,
  FaFlask,
  FaMapMarkerAlt,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";

import "./Recognition.css";

const records = [
  {
    id: "01",
    type: "INTERNSHIP",
    year: "DEC 2024 — MAY 2025",
    title: "Full Stack Developer Intern",
    organization: "Techvolt Software · Coimbatore",
    icon: <FaBriefcase />,
    description:
      "Developed Nexus (Nexvia), a full-stack job-matching application using PHP, MySQL, JavaScript, HTML, CSS, and Bootstrap.",
    location: "Coimbatore, Tamil Nadu",
    project: "Nexus (Nexvia)",
    contributions: [
      "Implemented role-based authentication and job management workflows.",
      "Created responsive dashboards for clients and workers.",
      "Designed MySQL tables for users, jobs, payments, ratings, and reports.",
      "Implemented secure session handling.",
    ],
    skills: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    id: "02",
    type: "PAPER PRESENTATION",
    year: "2024",
    title: "Impact of Social Media on Digital Communication",
    organization: "National-Level Symposium",
    icon: <FaMicrophoneAlt />,
    description:
      "Presented a paper exploring the impact of social media on digital communication at a national-level symposium.",
    contributions: [],
    skills: ["Research", "Presentation", "Communication"],
  },
  {
    id: "03",
    type: "NATIONAL SEMINAR",
    year: "2024",
    title: "Recent Trends in Technology",
    organization: "National-Level Seminar",
    icon: <FaBrain />,
    description:
      "Attended a seminar exploring emerging technologies and recent developments in the technology field.",
    contributions: [],
    skills: ["Technology", "Knowledge Sharing"],
  },
  {
    id: "04",
    type: "SEMINAR & WORKSHOP",
    year: "2024",
    title: "AI & Human Interaction",
    organization: "AI Technology Workshop",
    icon: <FaBrain />,
    description:
      "Participated in a seminar and workshop focused on AI technology and human interaction.",
    contributions: [],
    skills: ["Artificial Intelligence", "Human Interaction"],
  },
  {
    id: "05",
    type: "ACADEMIC SEMINAR",
    year: "2023",
    title: "Advancements in Medical Science",
    organization: "Theoretical Seminar",
    icon: <FaFlask />,
    description:
      "Attended a theoretical seminar covering advancements in medical science.",
    contributions: [],
    skills: ["Academic Learning"],
  },
];

function Recognition() {
  return (
    <section className="mk-recognition" id="recognition">
      <div className="mk-recognition-inner">
        {/* HEADER */}
        
<header className="mk-recognition-header">
  <div className="mk-recognition-section-meta">
    <span className="mk-recognition-number">07</span>

    <span className="mk-recognition-label">
      <i />
      CERTFICATIONS & ACHIEVEMENTS
    </span>
  </div>
</header>
<header className="mk-recognition-header">
          <div className="mk-recognition-kicker">
            {/* <span className="mk-recognition-kicker-line" /> */}
            {/* <span>06 / MY JOURNEY</span> */}
          </div>

          <div className="mk-recognition-intro">
            <h2>
              Certifications &
              <span> Achievements</span>
            </h2>

            <p>
              Professional experience, achievements, and
              milestones that continue to shape my journey.
            </p>
          </div>

        </header>

        {/* COMPACT CARDS */}
        <div className="mk-recognition-list">
          {records.map((item) => (
            <article
              className="mk-recognition-item"
              key={item.id}
            >
              {/* CARD HEADER */}
              <button
                type="button"
                className="mk-recognition-trigger"
                aria-label={`View details for ${item.title}`}
              >
                <span className="mk-recognition-index">
                  {item.id}
                </span>

                <span className="mk-recognition-icon">
                  {item.icon}
                </span>

                <span className="mk-recognition-title-block">
                  <span className="mk-recognition-type">
                    {item.type}
                  </span>

                  <span className="mk-recognition-title">
                    {item.title}
                  </span>

                  <span className="mk-recognition-organization">
                    {item.organization}
                  </span>
                </span>

                <span className="mk-recognition-year">
                  {item.year}
                </span>

                <span className="mk-recognition-toggle">
                  <FaPlus />
                </span>
              </button>

              {/* HOVER DETAILS */}
              <div className="mk-recognition-details">
                <div className="mk-recognition-detail-copy">
                  <span className="mk-recognition-detail-label">
                    OVERVIEW
                  </span>

                  <p>{item.description}</p>

                  {item.location && (
                    <div className="mk-recognition-location">
                      <FaMapMarkerAlt />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {item.project && (
                    <div className="mk-recognition-project">
                      <span>PROJECT</span>
                      <strong>{item.project}</strong>
                    </div>
                  )}
                </div>

                <div className="mk-recognition-detail-info">
                  {item.contributions.length > 0 && (
                    <>
                      <span className="mk-recognition-detail-label">
                        KEY CONTRIBUTIONS
                      </span>

                      <ul className="mk-recognition-contributions">
                        {item.contributions.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <span className="mk-recognition-detail-label">
                    SKILLS & KNOWLEDGE
                  </span>

                  <div className="mk-recognition-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mk-recognition-bottom">
          <span>LEARN</span>
          <span className="mk-recognition-bottom-line" />
          <span>BUILD</span>
          <span className="mk-recognition-bottom-line" />
          <span>GROW</span>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
}

export default Recognition;

