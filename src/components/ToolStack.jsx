import React from 'react'

const tools = [
  { name: 'GA4', url: '#', description: 'Performance dashboards, funnels, and audience insights.' },
  { name: 'Google Ads', url: '#', description: 'Search, display, performance max, and ROAS optimization.' },
  { name: 'Meta Ads', url: '#', description: 'Paid social, retargeting, and creative testing.' },
  { name: 'Search Console', url: '#', description: 'SEO health, keyword monitoring, and technical fixes.' },
  { name: 'Canva', url: '#', description: 'Quick-turn creatives and social-ready designs.' },
  { name: 'HubSpot + Sheets', url: '#', description: 'Campaign planning, reporting, and automation support.' }
]

const ToolStack = () => {
  return (
    <section id="tools" className="section tool-section">
      <div className="section-heading">
        <p className="eyebrow">Toolkit</p>
        <h2>Analytics-driven marketing stack</h2>
      </div>

      <div className="tool-grid">
        {tools.map((tool) => (
          <a key={tool.name} href={tool.url} className="tool-card">
            <div className="tool-logo" aria-hidden="true">
              {tool.name
                .split(' ')
                .map((word) => word[0])
                .join('')
                .slice(0, 2)}
            </div>
            <div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
            <span className="chevron">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ToolStack

