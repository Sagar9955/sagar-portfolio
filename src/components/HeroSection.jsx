import "../styles/HeroSection.css"

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* <div className="hero-tags">
            <span className="hero-tag">Web Developer</span>
            <span className="hero-tag">Designer</span>
          </div> */}

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Sagar Singh</span>
          </h1>

          <p className="hero-description">
            I create beautiful, functional websites and applications with a focus on user experience and modern design.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="button primary-button">
              Get in touch
            </a>
            <a href="#projects" className="button secondary-button">
              View my work
            </a>
          </div>
        </div>

        {/* <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src="/placeholder.svg?height=400&width=400" alt="Profile" className="hero-image" />
          </div>
        </div> */}
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </a>
    </section>
  )
}

export default HeroSection

