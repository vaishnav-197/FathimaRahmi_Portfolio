import React from 'react'

const testimonials = [
  {
    quote: 'ROI-focused approach that balances numbers with meaningful brand growth.',
    author: 'Focus areas',
    role: 'ROAS · CTR · CPC · CPA · SEO ranking'
  },
  {
    quote: 'Creative storytelling that still delivers hard metrics and weekly learnings.',
    author: 'Mindset',
    role: 'Minimal, data-driven, performance-forward'
  },
  {
    quote: 'Let’s grow your business in the UAE with clean, measurable marketing.',
    author: 'Contact',
    role: 'Email: rahmimanama22@gmail.com · LinkedIn: linkedin.com/in/fathima-rahmi-a859a7212'
  }
]

const SocialProof = () => {
  return (
    <section id="testimonials" className="section social-section">
      <div className="section-heading">
        <p className="eyebrow">What drives me</p>
        <h2>Data + creativity = meaningful growth</h2>
      </div>

      <div className="testimonial-row">
        {testimonials.map((testimonial) => (
          <article key={testimonial.author} className="testimonial-card">
            <p>{testimonial.quote}</p>
            <div className="testimonial-meta">
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SocialProof

