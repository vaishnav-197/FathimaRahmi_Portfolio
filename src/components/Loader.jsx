import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import '../styles/loader.css'

const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [animationData, setAnimationData] = useState(null)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    // Load the Lottie animation JSON
    fetch(`${import.meta.env.BASE_URL}assets/cosmos.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load animation')
        }
        return response.json()
      })
      .then(data => setAnimationData(data))
      .catch(error => {
        console.error('Error loading animation:', error)
        // If loading fails, hide loader after a short delay
        setTimeout(() => {
          setIsVisible(false)
          if (onComplete) onComplete()
        }, 1000)
      })
  }, [onComplete])

  useEffect(() => {
    if (animationData) {
      const hideLoader = () => {
        setIsVisible(false)
        setTimeout(() => {
          if (onComplete) onComplete()
        }, 500) // Wait for fade out animation
      }

      // Wait for page to be fully loaded
      const checkPageLoad = () => {
        const elapsed = Date.now() - startTime
        const minDisplayTime = 1500 // Minimum 1.5 seconds
        const remainingTime = Math.max(0, minDisplayTime - elapsed)

        setTimeout(hideLoader, remainingTime)
      }

      // Check if page is already loaded
      if (document.readyState === 'complete') {
        checkPageLoad()
      } else {
        window.addEventListener('load', checkPageLoad)
        return () => window.removeEventListener('load', checkPageLoad)
      }
    }
  }, [animationData, onComplete, startTime])

  if (!isVisible || !animationData) {
    if (!isVisible) return null
    // Show placeholder while loading animation
    return (
      <div className="loader-container">
        <div className="loader-content">
          <div className="loader-spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`loader-container ${!isVisible ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 200, height: 200 }}
        />
      </div>
    </div>
  )
}

export default Loader

