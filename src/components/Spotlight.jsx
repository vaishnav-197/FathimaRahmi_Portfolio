import React from 'react'

const spotlightItems = [
  {
    label: 'Google Digital Marketing',
    description: 'Certification covering search, display, video, analytics, and measurement fundamentals.',
    date: 'Credential'
  },
  {
    label: 'HubSpot Social Media Marketing',
    description: 'Strategy, publishing, listening, and reporting across modern social platforms.',
    date: 'Credential'
  },
  {
    label: 'My Approach',
    description:
      'Minimal, data-driven, performance-focused. Marketing that stays simple but powerful enough to scale.',
    date: 'Philosophy'
  }
]

const Spotlight = () => {
  return (
    <section id="spotlight" className="section spotlight-section">
      <div className="section-heading">
        <p className="eyebrow">Certifications & Approach</p>
        <h2>Always learning, always optimizing.</h2>
      </div>

      <div className="spotlight-list">
        {spotlightItems.map((item) => (
          <article key={item.label} className="spotlight-card">
            <div>
              <p className="badge ghost">{item.date}</p>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </div>
            <span className="chevron">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Spotlight

