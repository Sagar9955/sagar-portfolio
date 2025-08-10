"use client"

import { useState } from "react"
import "../styles/ProjectsSection.css"
import imagePath from "../assets/b3-CrJAdjaQ.webp";
import imagePath1 from "../assets/image.png";

function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: "Solar-Vortex",
      description: "Leverage state-of-the-art 3D visualizations and real-time accurate solar metrics to empower your energy decisions and boost sustainability.",
      image: imagePath,
      tags: ["React", "DeckGL","OpenGL"],
      liveLink: "https://solar-vortex.github.io/",
      githubLink: "https://github.com/solar-vortex",
      color: "pink",
    },
    {
      title: "Image Captioning",
      description: "An interactive Streamlit-based image captioning tool that lets users upload any photo and instantly generates a clear, natural-language description of its content.",
      image: imagePath1,
      tags: ["Pytorch", "Streamlit", "Transformers"],
      liveLink: "https://image-captioning-t-mv8xgag4dxxyrbsefjyuzu.streamlit.app/",
      githubLink: "https://github.com/sagar9955/image-captioning-t/blob/main/image_captioning_.py",
      color: "purple",
    },
    // {
    //   title: "Project Three",
    //   description: "A social media dashboard for content creators to manage their online presence.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["Vue.js", "Firebase", "Chart.js"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   color: "cyan",
    // },
    // {
    //   title: "Project Four",
    //   description: "A mobile-first weather application with real-time updates and forecasts.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["React", "Weather API", "Geolocation"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   color: "green",
    // },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Check out some of my recent work and personal projects.</p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.color}`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-image-container">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
              <div className={`project-overlay ${hoveredProject === index ? "active" : ""}`}>
                <div className="project-links">
                  <a href={project.githubLink} className="project-link github">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Code
                  </a>
                  <a href={project.liveLink} className="project-link demo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="projects-more">
        <a href="#" className="button view-all-button">
          <span>View All Projects</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" x2="19" y1="12" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div> */}
    </section>
  )
}

export default ProjectsSection

