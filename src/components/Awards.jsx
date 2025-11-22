import React from 'react'

const awards = [
  { badge: 'Digital Marketing', title: 'Expertise', project: 'SEO & Social Media' },
  { badge: 'Content Creation', title: 'Specialization', project: 'Engaging Campaigns' },
  { badge: 'Website Design', title: 'Skills', project: 'WordPress + Elementor' },
  { badge: 'Location', title: 'Based in', project: 'Ajman, UAE' }
]

const Awards = () => {
  return (
    <section className="awards">
      <div className="container">
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-item">
              <div className="award-badge">{award.badge}</div>
              {award.title && <div className="award-title">{award.title}</div>}
              <div className="award-project">{award.project}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards

