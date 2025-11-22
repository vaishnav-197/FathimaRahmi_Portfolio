import { useEffect } from 'react'

const smoothScrollTo = (target, duration = 1000) => {
  const targetElement = document.querySelector(target)
  if (!targetElement) return
  
  const targetPosition = targetElement.offsetTop - 80
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null
  
  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    
    // Easing function (ease-in-out-cubic)
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2
    
    window.scrollTo(0, startPosition + distance * ease)
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }
  
  requestAnimationFrame(animation)
}

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      
      const href = anchor.getAttribute('href')
      if (href === '#' || !href) return
      
      e.preventDefault()
      smoothScrollTo(href, 1000)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}

