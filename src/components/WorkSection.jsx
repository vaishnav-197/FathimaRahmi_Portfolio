import React from 'react'

const experiences = [
  {
    company: 'Almanama Typing & Business Consultancy',
    role: 'Digital Marketing Strategist',
    period: '2024 — Present · Ajman, UAE',
    summary:
      'Managing Google & Meta ads, planning SEO strategies, partnering with influencers, and reporting on CTR, CPC, ROAS, and conversions to unlock consistent growth.',
    highlights: ['Performance marketing', 'Lead generation', 'Data-backed reporting']
  }
]

const WorkSection = () => {
  return (
    <section id="work" className="section work-section">
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h2>Minimal, data-driven, performance-focused.</h2>
        <p className="section-subtitle">
          Digital marketer with 2+ years of experience in performance marketing, social media, SEO, and analytics.
          Every campaign blends creativity with insights to deliver measurable results.
        </p>
      </div>

      <div className="work-grid">
        {experiences.map((experience, index) => (
          <article key={experience.company} className="work-card">
            <div className="work-card__header">
              <div>
                <p className="badge light">{experience.period}</p>
                <h3>{experience.company}</h3>
              </div>
              <span className="chevron">↗</span>
            </div>
            <div className="work-card__body">
              <p className="work-role">{experience.role}</p>
              <p className="work-summary">{experience.summary}</p>
            </div>
            <div className="work-tags">
              {experience.highlights.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkSection

