import "../styles/AboutSection.css"

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Hi, I'm Sagar Singh, a Final-year engineering student passionate about geospatial technology, 3D visualization, and renewable energy solutions. I specialize in integrating GIS, web development, and data analysis to create innovative applications. My primary interests lie in 3D city modeling, solar energy assessment, and interactive geospatial web applications.

I thrive on solving real-world challenges through technology and am always eager to learn and experiment with new tools.</p>
      </div>

      <div className="about-container">
        <div className="about-story">
          <h3>My Journey</h3>
          <p>
          My journey in engineering started with a deep curiosity for mapping and visualization technologies. Over time, I honed my skills in 3D graphics, geospatial data processing, and web-based visualization, applying them to impactful projects.
          </p>
          <p>
          I have worked on Building Integrated Photovoltaic (BIPV) potential assessment, where I developed an interactive web application to analyze solar energy potential using OSM 3D buildings, Deck.gl, and GeoTIFF files. 
          </p>
          <p>Beyond my academic work, I actively participate in hackathons like Smart India Hackathon and Code with Google Maps, where I’ve worked on projects related to 3D modeling, solar analysis, and interactive mapping.</p>
        </div>

        <div className="about-cards">
          <div className="about-card" data-color="cyan">
            <div className="about-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h4>Education</h4>
            <p>Bachelor of Engineering (Ongoing) – Fourth Year</p>
            <span>Ajeenkya DY Patil School Of Engineering, 2026</span>
          </div>

          <div className="about-card" data-color="pink">
            <div className="about-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="12" x="3" y="4" rx="2" />
                <line x1="2" x2="22" y1="20" y2="20" />
              </svg>
            </div>
            <h4>Experience</h4>
            <p>Hackathons & Research Projects</p>
            {/* <ul>
              <li>Smart India Hackathon (Participant)</li>
            </ul> */}
          </div>

          <div className="about-card" data-color="purple">
            <div className="about-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h20" />
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                <path d="m7 21 5-5 5 5" />
              </svg>
            </div>
            <h4>Projects</h4>
            <p>10+ Completed</p>
            {/* <span>For Various Clients</span> */}
          </div>

          <div className="about-card" data-color="green">
            <div className="about-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h4>Location</h4>
            <p>Pune,Maharastra</p>
            <span>Available Remotely</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

