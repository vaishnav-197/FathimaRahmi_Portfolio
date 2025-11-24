import React from 'react'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Digital Marketing by Fathima Rahmi.</p>
        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#spotlight">Spotlight</a>
          <a href="#newsletter">Newsletter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

