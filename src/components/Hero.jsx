import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="line">Hi,</span>
            <span className="line">I'm Fathima Rahmi</span>
          </h1>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-badge">Digital Marketer</div>
            </div>
            <div className="stat-item">
              <div className="stat-badge">Based in UAE</div>
            </div>
            <div className="stat-item">
              <div className="stat-badge">SEO Specialist</div>
            </div>
            <div className="stat-item">
              <div className="stat-badge">Content Creator</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

