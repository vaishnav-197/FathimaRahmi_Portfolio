import React, { useState } from 'react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I specialize in Social Media Marketing, Search Engine Optimization (SEO), Content Creation, and Website Design using WordPress and Elementor. I help businesses build their online presence through strategic digital marketing campaigns.'
  },
  {
    question: 'Where are you based?',
    answer: 'I\'m based in Ajman, UAE, and work with clients both locally and internationally. I can manage digital campaigns remotely and provide consultations online.'
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Yes! I work with businesses of all sizes. Whether you\'re a startup or an established company, I can help you build and optimize your online presence to reach your target audience effectively.'
  },
  {
    question: 'What platforms do you manage?',
    answer: 'I manage and optimize social media platforms including Instagram and Facebook, create targeted ad campaigns, and design user-friendly websites using WordPress and Elementor.'
  },
  {
    question: 'How do you measure results?',
    answer: 'I track key performance indicators (KPIs) such as engagement rates, website traffic, conversion rates, and ROI. I provide regular reports and analytics to show the impact of our digital marketing efforts.'
  },
  {
    question: 'Can you help with SEO?',
    answer: 'Absolutely! I provide on-page and off-page optimization, keyword research, and performance tracking to boost your visibility on Google and other search engines.'
  },
  {
    question: 'How can I get started?',
    answer: 'Feel free to reach out via email at rahmimanama22@gmail.com. We can discuss your goals, current online presence, and how I can help you achieve measurable results through digital marketing.'
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <a href="#contact" className="btn-primary">Book a free consultation</a>
        </div>
      </div>
    </section>
  )
}

export default FAQ

