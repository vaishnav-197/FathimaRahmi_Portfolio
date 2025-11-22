import { useEffect } from 'react'

export const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    }

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate', 'revealed')
          
          // Special handling for section titles with text reveal
          if (entry.target.classList.contains('section-title')) {
            const titleLines = entry.target.querySelectorAll('.title-line')
            titleLines.forEach((line, index) => {
              setTimeout(() => {
                line.classList.add('revealed')
              }, index * 100)
            })
          }
          
          // Stagger animation for grid items
          if (entry.target.parentElement.classList.contains('testimonials-grid') ||
              entry.target.parentElement.classList.contains('portfolio-grid') ||
              entry.target.parentElement.classList.contains('pricing-tiers') ||
              entry.target.parentElement.classList.contains('awards-grid')) {
            const siblings = Array.from(entry.target.parentElement.children)
            const index = siblings.indexOf(entry.target)
            entry.target.style.transitionDelay = `${index * 0.1}s`
          }
        }
      })
    }, observerOptions)

    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title')
    sectionTitles.forEach(title => {
      scrollObserver.observe(title)
    })
    
    // About text
    const aboutText = document.querySelector('.about-text')
    if (aboutText) {
      scrollObserver.observe(aboutText)
    }
    
    // Testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card')
    testimonialCards.forEach(card => {
      scrollObserver.observe(card)
    })
    
    // Portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item')
    portfolioItems.forEach(item => {
      scrollObserver.observe(item)
    })
    
    // Pricing tiers
    const pricingTiers = document.querySelectorAll('.pricing-tier')
    pricingTiers.forEach(tier => {
      scrollObserver.observe(tier)
    })
    
    // Award items
    const awardItems = document.querySelectorAll('.award-item')
    awardItems.forEach(item => {
      scrollObserver.observe(item)
    })
    
    // FAQ items
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.05}s`
      scrollObserver.observe(item)
    })
    
    // Contact section
    const contactSection = document.querySelector('.contact')
    if (contactSection) {
      scrollObserver.observe(contactSection)
    }

    return () => {
      scrollObserver.disconnect()
    }
  }, [])
}

