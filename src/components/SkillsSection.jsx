import "../styles/SkillsSection.css"

function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <line x1="3" x2="21" y1="9" y2="9" />
          <line x1="9" x2="9" y1="21" y2="9" />
        </svg>
      ),
      items: ["HTML/CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
      color: "cyan",
    },
    {
      category: "Backend",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      ),
      items: ["Node.js", "Express", "Python", "Django", "PHP", "Ruby on Rails"],
      color: "pink",
    },
    {
      category: "Database",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      color: "purple",
    },
    // {
    //   category: "Design",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <circle cx="12" cy="12" r="10" />
    //       <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    //       <line x1="9" x2="9.01" y1="9" y2="9" />
    //       <line x1="15" x2="15.01" y1="9" y2="9" />
    //     </svg>
    //   ),
    //   items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX", "Wireframing"],
    //   color: "blue",
    // },
    {
      category: "DevOps",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      items: ["Git", "Docker", , "AWS", "Vercel", ],
      color: "green",
    },
    // {
    //   category: "Mobile",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    //       <line x1="12" x2="12.01" y1="18" y2="18" />
    //     </svg>
    //   ),
    //   items: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "PWA"],
    //   color: "red",
    // },
    // {
    //   category: "Other",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    //     </svg>
    //   ),
    //   items: ["GraphQL", "REST API", "WebSockets", "Testing", "SEO", "Performance"],
    //   color: "yellow",
    // },
    // {
    //   category: "Languages",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <polyline points="16 18 22 12 16 6" />
    //       <polyline points="8 6 2 12 8 18" />
    //     </svg>
    //   ),
    //   items: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C#"],
    //   color: "orange",
    // },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with to bring ideas to life.</p>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-card ${skill.color}`}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.category}</h3>
            <ul className="skill-list">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection

