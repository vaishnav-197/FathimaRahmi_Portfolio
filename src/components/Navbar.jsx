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
        <a
          className="side-nav__social"
          href="https://www.linkedin.com/in/fathima-rahmi-a859a7212"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          in
        </a>
      </div>
    </aside>
  )
}

export default Navbar

