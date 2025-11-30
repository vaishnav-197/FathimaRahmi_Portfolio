import React from 'react'

const toolIcons = {
  GA4: (
    <svg viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ga4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbc05" />
          <stop offset="100%" stopColor="#ea4335" />
        </linearGradient>
      </defs>
      <rect x="6" y="20" width="6" height="22" rx="3" fill="#f29900" />
      <rect x="18" y="12" width="6" height="30" rx="3" fill="#fbbc05" />
      <rect x="30" y="6" width="6" height="36" rx="3" fill="url(#ga4)" />
      <circle cx="36" cy="36" r="6" fill="#34a853" />
    </svg>
  ),
  'Google Ads': (
    <svg viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
      <path
        d="M16 8 8 32a6 6 0 0 0 11.4 4.2L28 16.5"
        fill="none"
        stroke="#0f9d58"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M32 8 16 40"
        fill="none"
        stroke="#4285f4"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="6" fill="#fbbc05" />
    </svg>
  ),
  'Meta Ads': (
    <svg viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
      <path
        d="M9 30c2.5-9 7-15 11-15s7 6 10 15 7 15 11 15"
        fill="none"
        stroke="#1fa2ff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M39 30c-2.5-9-7-15-11-15s-7 6-10 15-7 15-11 15"
        fill="none"
        stroke="#4facfe"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  ),
  'Search Console': (
    <svg viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
      <rect x="8" y="10" width="24" height="20" rx="4" fill="#1a73e8" />
      <rect x="12" y="14" width="16" height="12" rx="2" fill="#8ab4f8" />
      <circle cx="36" cy="34" r="8" fill="none" stroke="#34a853" strokeWidth="4" />
      <line x1="41" y1="40" x2="46" y2="45" stroke="#34a853" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="canva" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#a1ffff" />
          <stop offset="100%" stopColor="#3675ff" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="18" fill="url(#canva)" />
      <path
        d="M30 32c-6.5 2.5-12-2.5-10.5-9S28 14 32 20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  ),
  'HubSpot + Sheets': (
    <svg viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
      <circle cx="16" cy="18" r="6" fill="#ff7a59" />
      <line x1="16" y1="24" x2="16" y2="36" stroke="#ff7a59" strokeWidth="4" strokeLinecap="round" />
      <circle cx="16" cy="38.5" r="3.5" fill="#ff7a59" />
      <rect x="24" y="12" width="16" height="24" rx="3" fill="#0f9d58" />
      <line x1="24" y1="20" x2="40" y2="20" stroke="#85e0a3" strokeWidth="2" />
      <line x1="24" y1="26" x2="40" y2="26" stroke="#85e0a3" strokeWidth="2" />
      <line x1="24" y1="32" x2="34" y2="32" stroke="#85e0a3" strokeWidth="2" />
    </svg>
  ),
}

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
              {toolIcons[tool.name] ?? (
                <span className="tool-logo__fallback">
                  {tool.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .slice(0, 2)}
                </span>
              )}
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

