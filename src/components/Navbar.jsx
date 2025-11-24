import React from 'react'

const navLinks = [
  { href: '#home', icon: '🏠', label: 'Home' },
  { href: '#work', icon: '🗂️', label: 'Work' },
  { href: '#projects', icon: '🎨', label: 'Projects' },
  { href: '#spotlight', icon: '🌟', label: 'Spotlight' },
  { href: '#tools', icon: '🧰', label: 'Tools' },
  { href: '#testimonials', icon: '💬', label: 'Notes' }
]

const Navbar = () => {
  return (
    <aside className="side-nav">
      <div className="side-nav__inner">
        <div className="avatar" aria-hidden="true">
          <span role="img" aria-label="avatar">
            🙂
          </span>
        </div>
        <nav aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} aria-label={link.label}>
                  <span aria-hidden="true">{link.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="side-nav__social" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Social">
          ♫
        </a>
      </div>
    </aside>
  )
}

export default Navbar

