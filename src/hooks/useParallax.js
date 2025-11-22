import { useEffect } from 'react'

export const useParallax = () => {
  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroContent = hero.querySelector('.hero-content')
      if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

