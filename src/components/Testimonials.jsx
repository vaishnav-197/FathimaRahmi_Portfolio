import React from 'react'

const testimonials = [
  {
    text: "It's been a pleasure to work with way ultricies et eu vestibulum sagittis, laoreet massa risus fermentum, netus sed arcu vitae viverra rhoncus dignissim. Velit ornare maecenas diam vel ac aliquet morbi.",
    name: "Johnnie Ledner",
    location: "CEO at Litfox"
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What clients say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

