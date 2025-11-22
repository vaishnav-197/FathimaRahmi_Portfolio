import { useEffect } from 'react'

export const useScrollProgress = () => {
  useEffect(() => {
    const scrollProgress = document.createElement('div')
    scrollProgress.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: #000000;
      z-index: 9999;
      transform-origin: left;
      width: 0%;
      transition: width 0.1s ease-out;
    `
    document.body.appendChild(scrollProgress)

    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.pageYOffset
      const progress = (scrolled / windowHeight) * 100
      scrollProgress.style.width = `${progress}%`
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollProgress.parentNode) {
        scrollProgress.parentNode.removeChild(scrollProgress)
      }
    }
  }, [])
}

