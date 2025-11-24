import React from 'react'

const Newsletter = () => {
  return (
    <section id="newsletter" className="section newsletter-section">
      <div className="newsletter-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s grow your business in the UAE</h2>
          <p>
            Send over your goals, and I’ll reply with ideas for performance marketing, SEO, and content systems that can
            scale.
          </p>
        </div>
        <form
          className="newsletter-form"
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <input type="email" placeholder="name@studio.com" aria-label="Email" required />
          <button type="submit" className="btn primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter

