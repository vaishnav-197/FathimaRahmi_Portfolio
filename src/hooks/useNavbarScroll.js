import { useEffect } from 'react'

export const useNavbarScroll = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar')
    if (!navbar) return

    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      const scrollProgress = Math.min(currentScroll / 200, 1)
      
      if (currentScroll > 50) {
        navbar.style.background = `rgba(255, 255, 255, ${0.15 + scrollProgress * 0.1})`
        navbar.style.backdropFilter = 'blur(40px) saturate(180%)'
        navbar.style.webkitBackdropFilter = 'blur(40px) saturate(180%)'
        navbar.style.boxShadow = `0 4px 24px 0 rgba(62, 37, 34, ${0.05 + scrollProgress * 0.03})`
        navbar.style.borderBottomColor = `rgba(140, 110, 99, ${0.2 + scrollProgress * 0.15})`
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)'
        navbar.style.backdropFilter = 'blur(40px) saturate(180%)'
        navbar.style.webkitBackdropFilter = 'blur(40px) saturate(180%)'
        navbar.style.boxShadow = '0 4px 24px 0 rgba(62, 37, 34, 0.05)'
        navbar.style.borderBottomColor = 'rgba(140, 110, 99, 0.2)'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

