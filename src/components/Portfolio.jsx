import React, { useState } from 'react'

const portfolioItems = [
  {
    tags: ['Visual Identity'],
    title: 'Eleifend et quis',
    description: 'Visual Identity project showcasing brand design and identity'
  },
  {
    tags: ['Visual effect'],
    title: 'Pulvinar libero risus',
    description: 'Visual effect project with creative design elements'
  },
  {
    tags: ['Visual Identity'],
    title: 'Vitae in elit',
    description: 'Visual Identity design for brand recognition'
  },
  {
    tags: ['Newsprint'],
    title: 'Pellentesque ridiculus',
    description: 'Newsprint design project'
  },
  {
    tags: ['Campaign'],
    title: 'Sed fusce',
    description: 'Marketing campaign design and execution'
  }
]

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const handleMouseMove = (e, index) => {
    if (!e.currentTarget.classList.contains('animate')) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20
    
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = ''
    setHoveredItem(null)
  }

  return (
    <section id="work" className="portfolio">
      <div className="container">
        <h2 className="section-title">Recent projects</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="portfolio-tags">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-description">{item.description}</p>
              <a href="#" className="portfolio-link">Explore <span>→</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

