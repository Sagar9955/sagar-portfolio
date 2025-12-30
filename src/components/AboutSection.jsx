import "../styles/AboutSection.css"

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Hi, I'm <strong>Sagar Singh</strong>, a final-year Engineering student specializing in 
          <strong> Artificial Intelligence</strong>. I am passionate about applying AI to 
          <strong> geospatial intelligence, 3D visualization,</strong> and 
          <strong> real-world automation</strong>. My work focuses on developing intelligent web 
          applications and data-driven solutions that create a positive impact.
        </p>
      </div>

      <div className="about-container">
        <div className="about-story">
          <h3>My Journey</h3>
          <p>
            My journey in technology began with a deep interest in maps and spatial data. 
            Over time, I expanded my skills into AI, combining 
            <strong> machine learning, geospatial data processing, and web technologies</strong> 
            to build smarter applications and interactive visualizations.
          </p>
          <p>
            I have developed solutions like a Building Integrated Photovoltaic (BIPV) 
            assessment system using 3D buildings, Deck.gl, and solar irradiation data — 
            enabling rooftop solar potential mapping at city scale. I also worked on 
            Lunar Crater Detection using Chandrayaan-2 TMC and LRO data to extract crater 
            locations and generate simulated moon surface visuals.
          </p>
          <p>
            Beyond geospatial AI, I have built applications including a ChatPDF-like AI 
            tool for understanding PDF content using embeddings and LLMs, and an 
            AI-integrated LIMS (ATLAS) to automate laboratory testing workflows with 
            smart analytics and NLP-based reporting.
          </p>
          <p>
            I actively participate in hackathons like Smart India Hackathon and Code With Google Maps, always exploring innovative ways to use technology for real-world problem solving.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card" data-color="cyan">
            <div className="about-card-icon">
              {/* Graduation Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h4>Education</h4>
            <p>Bachelor of Engineering — Final Year</p>
            <span>Ajeenkya DY Patil School Of Engineering, 2026</span>
          </div>

          <div className="about-card" data-color="pink">
            <div className="about-card-icon">
              {/* Monitor Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="12" x="3" y="4" rx="2" />
                <line x1="2" x2="22" y1="20" y2="20" />
              </svg>
            </div>
            <h4>Experience</h4>
            <p>Research Projects & Hackathons</p>
            <span>AI • GIS • Automation</span>
          </div>

          <div className="about-card" data-color="purple">
            <div className="about-card-icon">
              {/* Website Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h20" />
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                <path d="m7 21 5-5 5 5" />
              </svg>
            </div>
            <h4>Projects</h4>
            <p>15+ Completed</p>
            <span>AI + Web + 3D GIS</span>
          </div>

          <div className="about-card" data-color="green">
            <div className="about-card-icon">
              {/* Globe Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h4>Location</h4>
            <p>Pune, Maharashtra</p>
            <span>Available Remotely</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
