import React from 'react'

const tickerItems = [
  'Performance marketing',
  'SEO experiments',
  'Social media playbooks',
  'Analytics deep dives'
]

const Hero = () => {
  const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())

  return (
    <header id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-intro-row">
            <p className="hero-intro">I’m Fathima Rahmi</p>
            <span className="hero-chip">Digital Marketer</span>
          </div>
          <h1>
            Let&apos;s make your
            <span className="hero-day">{day}</span>
            more profitable.
          </h1>
          <p>
            I&apos;m Fathima Rahmi, a performance-driven marketer based in the UAE with 2+ years of experience across
            paid media, SEO, social, and analytics. I marry data with creative storytelling to build campaigns that look
            great and deliver measurable ROI.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">
              Book a call
            </a>
            <button className="btn ghost" type="button">
              Download CV
            </button>
          </div>
          <div className="hero-metrics">
            <div>
              <span>ROI</span>
              <p>Obsessed with boosting ROAS, CTR, CPC, and CPA.</p>
            </div>
            <div>
              <span>Creativity</span>
              <p>Storytelling that feels human while staying on-brand.</p>
            </div>
            <div>
              <span>Growth</span>
              <p>Focused on lead gen, conversions, and meaningful brand lift.</p>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <p>Currently optimizing</p>
          <div className="hero-panel__card">
            <span className="badge ghost">UAE market</span>
            <h3>Full-funnel campaign improvements</h3>
            <p>
              Combining GA4 + Meta Insights to fine-tune budgets, retargeting, and SEO-backed content for local service
              businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="hero-ticker" aria-label="Ticker">
        <div className="ticker-track">
          {tickerItems.concat(tickerItems).map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Hero

