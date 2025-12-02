import React from 'react'

const FooterCTA = () => {
  return (
    <section id="contact" className="section footer-cta-section">
      <div className="footer-cta-card">
        <div>
        <p className="eyebrow">Say hi</p>
        <h2>Minimal. Data-driven. Performance-focused.</h2>
        <p>Ready to partner on campaigns that are simple, measurable, and powerful enough to scale.</p>
        </div>
        <div className="footer-cta-actions">
          <a className="btn primary" href="mailto:rahmimanama22@gmail.com">
            Email me
          </a>
          <a
            className="btn ghost"
            href="https://www.linkedin.com/in/fathima-rahmi-a859a7212"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default FooterCTA

