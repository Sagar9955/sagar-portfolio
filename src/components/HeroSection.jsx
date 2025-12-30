import "../styles/HeroSection.css"
import profilePic from "../assets/profile.jpg"

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

          <div className="hero-tags">
            <span className="hero-tag">AI Engineer</span>
            <span className="hero-tag">Developer</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Sagar Singh</span>
          </h1>

          <p className="hero-description">
            I specialize in Artificial Intelligence — transforming ideas into intelligent solutions using machine learning and data-driven systems. 
            I also build modern applications that bring those AI capabilities into the real world.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="button primary-button">
              Get in Touch
            </a>
            <a href="#projects" className="button secondary-button">
              View My Work
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src={profilePic} alt="Profile" className="hero-image" />
          </div>
        </div>
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
