import React from 'react'

const projects = [
  {
    title: 'Performance Marketing',
    description:
      'Google Ads • Meta Ads • Retargeting • Budget Optimization. I build campaigns that drive traffic, convert better, and maximize ROAS.',
    meta: 'What I Do'
  },
  {
    title: 'SEO',
    description:
      'On-page, off-page, and keyword research to help websites rank higher with clean, smart optimization.',
    meta: 'What I Do'
  },
  {
    title: 'Social Media',
    description: 'Content ideas, Canva designs, engagement strategy, and community management that performs.',
    meta: 'What I Do'
  },
  {
    title: 'Analytics',
    description: 'GA4, Search Console, Meta Insights—weekly reports packed with actionable learnings.',
    meta: 'What I Do'
  }
]

const SideProjects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p className="eyebrow">What I Do</p>
        <h2>Performance marketing, SEO, social, analytics.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card__media" aria-hidden="true" />
            <div className="project-card__content">
              <p className="badge ghost">{project.meta}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SideProjects

