import React from 'react'

const pricingCategories = [
  {
    title: 'Social Media Marketing',
    subtitle: 'Creating engaging content, managing platforms like Instagram and Facebook, and running targeted ad campaigns.',
    tiers: [
      { status: 'Available', price: 'Contact', name: 'Custom Package', button: 'Get Started', available: true }
    ]
  },
  {
    title: 'Search Engine Optimization',
    subtitle: 'On-page and off-page optimization, keyword research, and performance tracking to boost visibility on Google.',
    tiers: [
      { status: 'Available', price: 'Contact', name: 'Custom Package', button: 'Get Started', available: true }
    ]
  },
  {
    title: 'Content Creation',
    subtitle: 'Developing content strategies, writing compelling captions, and designing aesthetic posts that convert.',
    tiers: [
      { status: 'Available', price: 'Contact', name: 'Custom Package', button: 'Get Started', available: true }
    ]
  },
  {
    title: 'Website Design',
    subtitle: 'Designing user-friendly websites that are mobile-responsive and optimized for performance (WordPress + Elementor).',
    tiers: [
      { status: 'Available', price: 'Contact', name: 'Custom Package', button: 'Get Started', available: true }
    ]
  }
]

const Pricing = () => {
  return (
    <section id="services" className="pricing">
      <div className="container">
        <h2 className="section-title">
          <span className="title-line"><span>What I Do</span></span>
        </h2>
        
        <div className="pricing-categories">
          {pricingCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="pricing-category">
              <h3 className="category-title">{category.title}</h3>
              <p className="category-subtitle">{category.subtitle}</p>
              <div className="pricing-tiers">
                {category.tiers.map((tier, tierIndex) => (
                  <div key={tierIndex} className="pricing-tier">
                    <div className="tier-header">
                      <div className={`tier-status ${tier.available ? 'available' : ''}`}>
                        {tier.status}
                      </div>
                      <div className="tier-price">{tier.price}</div>
                      <div className="tier-name">{tier.name}</div>
                    </div>
                    <a href="#" className="tier-button">{tier.button}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

