import React from 'react'

const projects = [
  {
    title: 'Performance Marketing',
    description:
      'Google Ads • Meta Ads • Retargeting • Budget Optimization. I build campaigns that drive traffic, convert better, and maximize ROAS.',
    meta: 'What I Do',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'SEO',
    description:
      'On-page, off-page, and keyword research to help websites rank higher with clean, smart optimization.',
    meta: 'What I Do',
    image:
      'https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Social Media',
    description: 'Content ideas, Canva designs, engagement strategy, and community management that performs.',
    meta: 'What I Do',
    image:
      'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Analytics',
    description: 'GA4, Search Console, Meta Insights—weekly reports packed with actionable learnings.',
    meta: 'What I Do',
    image:
      'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
              <div
                className="project-card__media"
                aria-hidden="true"
                style={
                  project.image
                    ? {
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.6)), url(${project.image})`
                      }
                    : undefined
                }
              />
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

